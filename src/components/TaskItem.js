import React from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, setModalVisible, setIdSelected, updateTaskCompletion }) => {
  return (
    <View style={styles.taskCard}>
      <View>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Text>{'\n'}</Text>
        <Text style={styles.taskDate}>{task.createAt}</Text>
      </View>
      <View>
      <Switch
        value={task.completed}
        onValueChange={(value) => updateTaskCompletion(task.id, value)}
      />
      </View>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          setModalVisible(true);
          setIdSelected(task.id);
        }}
      >
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
    color: '#555555',
  },
  taskDate: {
    fontSize: 12,
    color: '#999999',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    height: 45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default TaskItem;
