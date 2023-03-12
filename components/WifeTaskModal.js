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
                  addWifeTaskHandler(newTask);
                }}
              >
                <Text style={styles.buttonText}>YES</Text>
              </Pressable>
            </View>
            <View style={styles.buttonNo}>
              <Pressable
                onPress={() => {
                  toggleModal(false);
                  addRegTaskHandler(newTask);
                }}
              >
                <Text style={styles.buttonText}>NO</Text>
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
    backgroundColor: "#BED0F7",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#35469C",
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
    backgroundColor: "#51ca58",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNo: {
    backgroundColor: "#E12D39",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    fontWeight: "700",
  },
});
