import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.title}>Hubby To Do List</Text>
        {/* ADD TASK INPUT */}
        <View style={styles.addTaskContainer}>
          <AddTask />
        </View>
        {/* TASK LIST DISPLAY */}
        <View></View>
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

  addTaskContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
    paddingTop: 30,
    width: "100%",
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: "white",
    color: "white",
  },
});
