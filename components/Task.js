import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function Task({ text, index, id, removeTask }) {
  return (
    <View
      style={{
        backgroundColor: index % 2 === 0 ? "#98aeeb" : "#bed0f7",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <View style={styles.task}>
        <Pressable
          onPress={() => {
            removeTask("regTasks", id);
          }}
        >
          <Icon name="closecircle" size="24" color="#E0E8F9" />
        </Pressable>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  taskText: {
    color: "#2d3a8c",
  },
});
