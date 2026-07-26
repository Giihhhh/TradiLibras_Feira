import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useRef, useState } from "react";
import { ActivityIndicator, Alert, Pressable, StyleSheet } from "react-native";

// ⚠️ Troque pelo IP local do seu computador na mesma rede Wi-Fi do celular.
// Descubra com `ipconfig` (Windows) ou `ifconfig`/`ip a` (Linux/Mac).
// Quando for hospedar a API de verdade (Render/Railway), troque por essa URL.
const API_URL = "http://192.168.3.108:5000";

const INTERVALO_MS = 150; // intervalo entre cada foto
const MAX_FRAMES = 30; // mesmo N_FRAMES do seu modelo

export default function TradutorPage() {
  const cameraRef = useRef<CameraView>(null);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resultado, setResultado] = useState<{
    letra: string;
    confianca: number;
  } | null>(null);

  const framesRef = useRef<string[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const ensurePermissions = async () => {
    if (!cameraPermission?.granted) {
      const permission = await requestCameraPermission();
      if (!permission.granted) {
        Alert.alert(
          "Permissão necessária",
          "É preciso liberar a câmera para continuar.",
        );
        return false;
      }
    }
    return true;
  };

  const capturarFrame = async () => {
    if (!cameraRef.current) return;
    try {
      const foto = await cameraRef.current.takePictureAsync({
        quality: 0.5,
        skipProcessing: true,
      });
      if (foto?.uri) {
        framesRef.current.push(foto.uri);
        // mantém só os últimos MAX_FRAMES, igual seu script faz
        if (framesRef.current.length > MAX_FRAMES) {
          framesRef.current.shift();
        }
      }
    } catch (error) {
      console.warn("Erro ao capturar frame:", error);
    }
  };

  const iniciarGravacao = async () => {
    const hasPermission = await ensurePermissions();
    if (!hasPermission) return;

    framesRef.current = [];
    setResultado(null);
    setIsRecording(true);

    intervalRef.current = setInterval(capturarFrame, INTERVALO_MS);
  };

  const pararGravacaoEEnviar = async () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRecording(false);

    if (framesRef.current.length === 0) {
      Alert.alert("Nada capturado", "Nenhum frame foi gravado.");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      framesRef.current.forEach((uri, index) => {
        formData.append("frames", {
          uri,
          name: `frame_${index}.jpg`,
          type: "image/jpeg",
        } as any);
      });

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();

      if (data.erro) {
        Alert.alert("Aviso", data.erro);
      } else {
        setResultado({ letra: data.letra, confianca: data.confianca });
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Erro de conexão",
        "Não foi possível conectar à API de tradução. Verifique se ela está rodando e se o IP está correto.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartStopRecording = () => {
    if (isRecording) {
      pararGravacaoEEnviar();
    } else {
      iniciarGravacao();
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Tradutor de Libras</ThemedText>
      <ThemedText style={styles.subtitle}>
        Segure o sinal em frente à câmera e toque para gravar.
      </ThemedText>

      <ThemedView style={styles.cameraContainer}>
        <CameraView ref={cameraRef} style={styles.camera} facing="back" />

        {resultado && (
          <ThemedView style={styles.resultadoBox}>
            <ThemedText style={styles.resultadoTexto}>
              Letra: {resultado.letra} ({resultado.confianca}%)
            </ThemedText>
          </ThemedView>
        )}

        <Pressable
          style={[styles.button, isRecording && styles.buttonRecording]}
          onPress={handleStartStopRecording}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ThemedText style={styles.buttonText}>
              {isRecording ? "Parar e traduzir" : "Iniciar gravação"}
            </ThemedText>
          )}
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  subtitle: {
    opacity: 0.8,
  },
  cameraContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  camera: {
    flex: 1,
  },
  resultadoBox: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  resultadoTexto: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
  button: {
    alignSelf: "center",
    marginBottom: 24,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#2563eb",
    minWidth: 180,
    alignItems: "center",
  },
  buttonRecording: {
    backgroundColor: "#dc2626",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
