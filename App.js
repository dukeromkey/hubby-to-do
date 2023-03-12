import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import AddGoal from "./components/AddGoal";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Hubby To Do List</Text>
        {/* ADD GOAL INPUT */}
        <View style={styles.addGoalContainer}>
          <AddGoal />
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
});
