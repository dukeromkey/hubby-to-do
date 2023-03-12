import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

function AddTask() {
  return (
    <View style={styles.taskInput}>
      <TextInput placeholder="Enter Task" placeholderTextColor="grey" />
      <View style={styles.addTaskButton}>
        <Pressable>
          <Text style={styles.buttonText}>Add Task</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  taskInput: {
    position: "relative",
    padding: 10,
    paddingRight: 35,
    marginRight: 50,
    width: "60%",
    color: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  addTaskButton: {
    position: "absolute",
    right: -70,
    top: -10,
    backgroundColor: "grey",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
  },
});
