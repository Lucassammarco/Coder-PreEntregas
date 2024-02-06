import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TaskInput = ({ newTask, onHandlerTitle, onHandlerDescription, addTask }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={newTask.title}
        onChangeText={onHandlerTitle}
        placeholder='Ingrese tarea'
        style={styles.input}
      />
      <TextInput
        value={newTask.description}
        onChangeText={onHandlerDescription}
        placeholder='Ingresar descripción'
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    color: '#555555',
  },
  addButton: {
    backgroundColor: '#841584',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default TaskInput;
