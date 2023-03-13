import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Task from "./Task";
import WifeTask from "./WifeTask";

function TaskList({ allTasks, removeTask }) {
  console.log("task list ALL TASKS", allTasks);
  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={allTasks}
        renderItem={({ item, index }) => {
          if (item.wife) {
            return (
              <WifeTask
                removeTask={removeTask}
                text={item.task}
                index={index}
                id={item.key}
              />
            );
          } else {
            return (
              <Task
                removeTask={removeTask}
                text={item.task}
                index={index}
                id={item.key}
              />
            );
          }
        }}
        alwaysBounceVertical={false}
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
