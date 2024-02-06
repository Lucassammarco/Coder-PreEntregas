import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, setModalVisible, setIdSelected, updateTaskCompletion}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem item={item}
                  setModalVisible={setModalVisible}
                  setIdSelected={setIdSelected}
                  updateTaskCompletion={updateTaskCompletion} />
      )}
    />
  );
};

export default TaskList;
