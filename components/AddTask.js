import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

function AddTask({ toggleModal, newTask, newTaskHandler }) {
  return (
    <View style={styles.addTaskOuterContainer}>
      <View style={styles.addTaskInnerContainer}>
        <TextInput
          placeholder="Enter Task..."
          placeholderTextColor="#DE911D"
          value={newTask}
          onChangeText={newTaskHandler}
          style={{ color: "#DE911D" }}
        />
        <View style={styles.addTaskButton}>
          <Pressable
            onPress={() => {
              toggleModal(true);
            }}
          >
            <Text style={styles.buttonText}>Add Task</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default AddTask;

const styles = StyleSheet.create({
  addTaskOuterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "80%",
    paddingVertical: 9,
    paddingRight: 18,
  },
  addTaskInnerContainer: {
    position: "relative",
    padding: 10,
    paddingRight: 35,
    backgroundColor: "#FFF",
    width: "80%",
    borderWidth: 2,
    borderColor: "#F7C948",
    borderRadius: 20,
  },
  addTaskButton: {
    position: "absolute",
    right: -70,
    top: -10,
    backgroundColor: "#F7C948",
    borderRadius: 50,
  },
  buttonText: {
    padding: 20,
    color: "#B44D12",
  },
});
