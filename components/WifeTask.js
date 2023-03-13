import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function WifeTask({ text, index, id, removeTask }) {
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
      <View style={styles.task}>
        <Pressable
          onPress={() => {
            removeTask("wifeTasks", id);
          }}
        >
          <Icon name="closecircle" size={24} color="#FFE3E3" />
        </Pressable>
        <Text style={styles.taskText}>{text}</Text>
      </View>
      <Text style={styles.priority}>High Priority</Text>
    </View>
  );
}

export default WifeTask;

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  taskText: {
    color: "#8A041A",
  },
  priority: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    color: "#AB091E",
    backgroundColor: "#FFE3E3",
    borderRadius: 10,
    overflow: "hidden",
  },
});
