import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import WifeTaskModal from "./components/WifeTaskModal";

export default function App() {
  const [wifeTasks, setWifeTasks] = useState([]);
  const [regTasks, setRegTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState("");

  function newTaskHandler(task) {
    setNewTask(task);
  }

  function toggleModal(visible) {
    console.log(visible);
    setModalVisible(visible);
  }

  function addRegTaskHandler(newRegTask) {
    const randomKey = Math.random().toString() + newRegTask;
    setRegTasks((prevRegTasks) => [
      ...prevRegTasks,
      { task: newRegTask, key: randomKey },
    ]);
  }

  function addWifeTaskHandler(newWifeTask) {
    const randomKey = Math.random().toString() + newWifeTask;
    setWifeTasks((prevWifeTasks) => [
      ...prevWifeTasks,
      { task: newWifeTask, key: randomKey },
    ]);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Hubby To Do List</Text>
        {/* ADD TASK INPUT */}
        <View style={styles.addTaskContainer}>
          <AddTask
            newTask={newTask}
            toggleModal={toggleModal}
            newTaskHandler={newTaskHandler}
          />
        </View>
        {/* TASK LIST DISPLAY */}
        <View style={styles.taskListContainer}>
          <TaskList wifeTasks={wifeTasks} regTasks={regTasks} />
        </View>
        <WifeTaskModal
          isVisible={modalVisible}
          toggleModal={toggleModal}
          addRegTaskHandler={addRegTaskHandler}
          addWifeTaskHandler={addWifeTaskHandler}
          newTask={newTask}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    padding: 16,
    color: "#35469C",
  },

  addTaskContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    paddingTop: 30,
    width: "100%",
  },
  taskListContainer: {
    flex: 5,
    width: "100%",
  },
});
