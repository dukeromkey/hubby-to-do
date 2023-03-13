import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import Task from "./Task";
import WifeTask from "./WifeTask";

function TaskList({ wifeTasks, regTasks }) {
  const combinedTasks = wifeTasks.concat(regTasks);
  return (
    <View style={styles.taskListContainer}>
      <FlatList
        data={combinedTasks}
        renderItem={({ item, index }) => {
          if (item.wife) {
            return <WifeTask text={item.task} index={index} />;
          } else {
            return <Task text={item.task} index={index} />;
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
