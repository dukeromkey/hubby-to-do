import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

function AddGoal() {
  return (
    <View style={styles.goalInput}>
      <TextInput placeholder="Add Goal" placeholderTextColor="white" />
      <View style={styles.addGoalButton}>
        <Pressable>
          <Text style={styles.buttonText}>Add Goal</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddGoal;

const styles = StyleSheet.create({
  goalInput: {
    position: "relative",
    padding: 10,
    width: "80%",
    color: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  addGoalButton: {
    position: "absolute",
    right: -5,
    top: -10,
    backgroundColor: "grey",
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
  },
});
