import { StyleSheet, View, Text, Pressable } from "react-native";

function WifeTask({ text, index }) {
  return (
    <View
      style={{
        backgroundColor: index % 2 === 0 ? "#FF9B9B" : "#FFBDBD",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Text style={styles.task}>{text}</Text>
      <Text style={styles.priority}>High Priority</Text>
    </View>
  );
}

export default WifeTask;

const styles = StyleSheet.create({
  priority: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: "#AB091E",
    backgroundColor: "#FFE3E3",
    borderRadius: 10,
    overflow: "hidden",
  },
});
