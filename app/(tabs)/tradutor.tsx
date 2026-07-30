import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useFocusEffect } from "@react-navigation/native";
import { CameraView, useCameraPermissions } from "expo-camera";
import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Alert, Pressable, StyleSheet } from "react-native";

// ⚠️ Troque pelo IP local do seu computador na mesma rede Wi-Fi do celular.
// Descubra com `ipconfig` (Windows) ou `ifconfig`/`ip a` (Linux/Mac).
// Quando for hospedar a API de verdade (Render/Railway), troque por essa URL.
const API_URL = "https://tradilibras-api.onrender.com/traduzir";

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

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        Alert.alert(
          "Aviso",
          "O tradutor ainda não está finalizado, este módulo tem como objetivo imediato testar a ferramenta. Futuramente, ele será utilizado como um meio de feedback, visando a aprendizagem dos usuários. Obs.: qualquer sugestão ou observação podem ser feitas através do nosso instagram: @tradilibras. Lembro novamente, que o tradutor ainda está em desenvolvimento e não possui uma base de dados suficiente, portanto ele está sujeito a erros.",
          [{ text: "OK" }],
        );
      }, 500);

      return () => clearTimeout(timer);
    }, []),
  );

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
        quality: 0.8,
        skipProcessing: true,
        shutterSound: false,
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
      <ThemedText type="title" style={{ marginTop: 40 }}>
        Tradutor de Libras
      </ThemedText>
      <ThemedText style={styles.subtitle}>Instruções:</ThemedText>

      <ThemedText style={styles.subtitle}>
        1. Antes e depois de realizar o sinal mantenha a posição por um tempo.
      </ThemedText>

      <ThemedText style={styles.subtitle}>
        2. A gravação deverá ter pelo menos 4 segundos.
      </ThemedText>

      <ThemedView style={styles.cameraWrapper}>
        <ThemedView style={styles.cameraContainer}>
          <CameraView
            ref={cameraRef}
            style={styles.camera}
            facing="front"
            flash="off"
            animateShutter={false}
          />

          {resultado && (
            <ThemedView style={styles.resultadoBox}>
              <ThemedText style={styles.resultadoTexto}>
                Letra: {resultado.letra} ({resultado.confianca}%)
              </ThemedText>
            </ThemedView>
          )}
        </ThemedView>

        {/* Botão agora é irmão do cameraContainer, não filho.
            Fica posicionado por cima, na mesma posição visual de antes. */}
        <Pressable
          style={[styles.button, isRecording && styles.buttonRecording]}
          onPress={handleStartStopRecording}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#6184b1" />
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
  // Novo wrapper: ocupa o espaço que o cameraContainer ocupava antes,
  // e serve de "chão" pro botão flutuar por cima via position absolute.
  cameraWrapper: {
    flex: 1,
    position: "relative",
  },
  cameraContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  camera: {
    // força a câmera a preencher 100% do container, sem sobrar preto
    ...StyleSheet.absoluteFillObject,
  },
  resultadoBox: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    backgroundColor: "rgba(252, 245, 245, 0.6)",
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
    position: "absolute",
    bottom: 24, // mesma distância que tinha com marginBottom: 24 antes
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: "#fg185999",
    minWidth: 180,
    alignItems: "center",
  },
  buttonRecording: {
    backgroundColor: "#b64040",
  },
  buttonText: {
    color: "#ece5e5",
    fontWeight: "700",
  },
});
