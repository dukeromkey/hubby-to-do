import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Task from "./Task";
import WifeTask from "./WifeTask";

function TaskList({ wifeTasks, regTasks }) {
  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={wifeTasks}
        renderItem={({ item, index }) => (
          <WifeTask text={item.task} index={index} />
        )}
      />
      <FlatList
        data={regTasks}
        renderItem={({ item, index }) => (
          <Task text={item.task} index={index} />
        )}
      />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  taskListContainer: {
    flex: 1,
    padding: 20,
  },
});
