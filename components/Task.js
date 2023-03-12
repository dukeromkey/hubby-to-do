import { StyleSheet, View, Text, Pressable } from "react-native";

function Task({ text, index }) {
  return (
    <View style={styles.taskContainer}>
      <Text
        style={{
          backgroundColor: index % 2 === 0 ? "#BED0F7" : "#E0E8F9",
          padding: 10,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
});
