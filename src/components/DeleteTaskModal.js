import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DeleteTaskModal = ({ modalVisible, deleteTask, setModalVisible, idSelected }) => {
  return (
    <Modal visible={modalVisible} transparent animationType='fade'>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¿Está segur@ que desea eliminar la tarea?</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#841584' }]}
              onPress={() => {
                deleteTask(idSelected);
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Sí</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: '#CCCCCC' }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    width: '40%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default DeleteTaskModal;
