import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

function WifeTaskModal({
  isVisible,
  toggleModal,
  newTask,
  addRegTaskHandler,
  addWifeTaskHandler,
}) {
  return (
    <Modal animation="fade" transparent={false} visible={isVisible}>
      <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.text}>Did Your Wife</Text>
          <Text style={styles.text}>Assign This Task?</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonYes}>
              <Pressable
                onPress={() => {
                  toggleModal(false);
                  addWifeTaskHandler(newTask, true);
                }}
              >
                <Text style={styles.buttonTextYes}>YES</Text>
              </Pressable>
            </View>
            <View style={styles.buttonNo}>
              <Pressable
                onPress={() => {
                  toggleModal(false);
                  addRegTaskHandler(newTask, false);
                }}
              >
                <Text style={styles.buttonTextNo}>NO</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default WifeTaskModal;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#4055A8",
    fontSize: 30,
    fontWeight: "500",
  },
  buttonContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 50,
  },
  buttonYes: {
    backgroundColor: "#FFBDBD",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNo: {
    backgroundColor: "#BED0F7",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextYes: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    fontWeight: "700",
    color: "#8A041A",
  },
  buttonTextNo: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    fontWeight: "700",
    color: "#2d3a8c",
  },
});
