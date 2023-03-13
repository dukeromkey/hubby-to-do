import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import WifeTaskModal from "./components/WifeTaskModal";

export default function App() {
  const [wifeTasks, setWifeTasks] = useState([]);
  const [regTasks, setRegTasks] = useState([]);
  const [allTasks, setAllTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const newAllTasks = wifeTasks.concat(regTasks);
    setAllTasks(newAllTasks);
  }, [wifeTasks, regTasks]);

  function newTaskHandler(task) {
    setNewTask(task);
  }

  function toggleModal(visible) {
    setModalVisible(visible);
  }

  function addRegTaskHandler(newRegTask, isWife) {
    const randomKey = Math.random().toString() + newRegTask;
    setRegTasks((prevRegTasks) => [
      ...prevRegTasks,
      { task: newRegTask, key: randomKey, wife: isWife },
    ]);
    setNewTask("");
  }

  function addWifeTaskHandler(newWifeTask, isWife) {
    const randomKey = Math.random().toString() + newWifeTask;
    setWifeTasks((prevWifeTasks) => [
      ...prevWifeTasks,
      { task: newWifeTask, key: randomKey, wife: isWife },
    ]);
    setNewTask("");
  }

  function removeTask(list, id) {
    if (list === "regTasks") {
      setRegTasks((prevRegTasks) =>
        prevRegTasks.filter((task) => task.key !== id)
      );
    } else {
      setWifeTasks((prevWifeTasks) =>
        prevWifeTasks.filter((task) => task.key !== id)
      );
    }
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
          <TaskList removeTask={removeTask} allTasks={allTasks} />
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
    paddingTop: 70,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    padding: 16,
    color: "#35469C",
  },

  addTaskContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    paddingTop: 20,
    width: "100%",
  },
  taskListContainer: {
    flex: 5,
    width: "100%",
    marginTop: 20,
  },
});
