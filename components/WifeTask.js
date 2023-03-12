import { StyleSheet, View, Text, Pressable } from "react-native";

function WifeTask({ text, index }) {
  return (
    <View style={styles.taskContainer}>
      <Text
        style={{
          backgroundColor: index % 2 === 0 ? "#FFBDBD" : "#FFE3E3",
          padding: 10,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

export default WifeTask;

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
});
