import React, {useEffect} from 'react';
import {TextInput, StyleSheet, Button, View} from 'react-native';
import randomTasks from '../data/tasks';

function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);

  const handlePress = taskText => {
    addTask(taskText);
    setTaskText('');
  };

  const handleGenerateRandomTask = () => {
    const randomTask =
      tasks.tasks[Math.floor(Math.random() * tasks.tasks.length)];
    setTaskText(randomTask);
  };

  useEffect(() => {
    setTasks(randomTasks);
  }, []);

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add Task" onPress={() => handlePress(taskText)} />
      </View>
      <View style={styles.random}>
        <Button
          title="Generate Random Task"
          onPress={() => handleGenerateRandomTask()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  random: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ToDoForm;
