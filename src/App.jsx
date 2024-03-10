/**
 * My To Do List App
 *
 * @format
 */

import {SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] === taskText) {
        return;
      }
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
