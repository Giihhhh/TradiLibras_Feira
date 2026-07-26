import { useState } from "react";

import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  // Estados do app
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [contador, setContador] = useState(0);

  // Função para adicionar tarefa
  const adicionarTarefa = () => {
    if (tarefa.trim() === "") {
      Alert.alert("Atenção", "Digite uma tarefa!");
      return;
    }

    const novaTarefa = {
      id: contador,
      texto: tarefa,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setContador(contador + 1);
    setTarefa(""); // Limpa o campo
  };

  // Função para marcar como concluída
  const toggleTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t,
    );
    setTarefas(tarefasAtualizadas);
  };

  // Função para excluir tarefa
  const excluirTarefa = (id) => {
    Alert.alert("Confirmar", "Deseja excluir esta tarefa?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        onPress: () => {
          const tarefasFiltradas = tarefas.filter((t) => t.id !== id);
          setTarefas(tarefasFiltradas);
        },
      },
    ]);
  };

  // Renderizar cada item da lista
  const renderTarefa = ({ item }) => (
    <View style={styles.tarefaContainer}>
      <TouchableOpacity
        style={styles.tarefaTextoContainer}
        onPress={() => toggleTarefa(item.id)}
      >
        <View
          style={[styles.checkbox, item.concluida && styles.checkboxMarcado]}
        >
          {item.concluida && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text
          style={[styles.tarefaTexto, item.concluida && styles.tarefaConcluida]}
        >
          {item.texto}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => excluirTarefa(item.id)}
        style={styles.botaoExcluir}
      >
        <Text style={styles.textoExcluir}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Minhas Tarefas</Text>
        <Text style={styles.contador}>
          {tarefas.filter((t) => !t.concluida).length} pendentes
        </Text>
      </View>

      {/* Campo de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          value={tarefa}
          onChangeText={setTarefa}
          onSubmitEditing={adicionarTarefa}
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de tarefas */}
      {tarefas.length === 0 ? (
        <View style={styles.mensagemVazia}>
          <Text style={styles.textoVazio}>
            Nenhuma tarefa ainda.{"\n"}Adicione sua primeira!
          </Text>
        </View>
      ) : (
        <FlatList
          data={tarefas}
          renderItem={renderTarefa}
          keyExtractor={(item) => item.id.toString()}
          style={styles.lista}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#6200ee",
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  contador: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
    opacity: 0.8,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  botaoAdicionar: {
    width: 50,
    height: 50,
    backgroundColor: "#6200ee",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  lista: {
    flex: 1,
  },
  tarefaContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tarefaTextoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#6200ee",
    borderRadius: 4,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxMarcado: {
    backgroundColor: "#6200ee",
  },
  checkmark: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  tarefaTexto: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  tarefaConcluida: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  botaoExcluir: {
    padding: 5,
  },
  textoExcluir: {
    fontSize: 20,
  },
  mensagemVazia: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textoVazio: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
  },
});
