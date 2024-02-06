import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, FlatList } from 'react-native';
import TaskInput from './src/components/TaskInput';
import TaskItem from './src/components/TaskItem';
import DeleteTaskModal from './src/components/DeleteTaskModal';
import uuid from 'react-native-uuid';

const App = () => {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    id: '',
    createAt: new Date().toLocaleString(),
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, newTask]);

    setNewTask({
      title: '',
      description: '',
      id: '',
      createAt: new Date().toLocaleString(),
    });
  };

  const onHandlerTitle = (t) => {
    const id = uuid.v4();
    setNewTask({ ...newTask, title: t, id });
  };

  const onHandlerDescription = (t) => {
    setNewTask({ ...newTask, description: t });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTaskCompletion = (id, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  return (
    <View style={styles.container}>
      <TaskInput
        newTask={newTask}
        onHandlerTitle={onHandlerTitle}
        onHandlerDescription={onHandlerDescription}
        addTask={addTask}
      />
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              setModalVisible={setModalVisible}
              setIdSelected={setIdSelected}
              deleteTask={deleteTask}
              updateTaskCompletion={updateTaskCompletion}
            />
          )}
        />
      </View>
      <DeleteTaskModal
        modalVisible={modalVisible}
        deleteTask={deleteTask}
        setModalVisible={setModalVisible}
        idSelected={idSelected}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 50,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default App;
