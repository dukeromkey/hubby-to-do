import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Hubby To Do List</Text>
        {/* INPUT AREA */}
        <View style={styles.addGoalContainer}>
          <View style={styles.goalInput}>
            <TextInput placeholder="Add Goal" placeholderTextColor="white" />
            <View style={styles.addGoalButton}>
              <Pressable>
                <Text style={styles.buttonText}>Add Goal</Text>
              </Pressable>
            </View>
          </View>
        </View>
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
  },
  goalInput: {
    position: "relative",
    padding: 10,
    width: "80%",
    color: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    paddingTop: 30,
    width: "100%",
    backgroundColor: "white",
    color: "white",
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
