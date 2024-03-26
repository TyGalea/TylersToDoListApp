import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AboutScreen = ({}) => {
  return (
    <>
      <Text style={styles.header}>Tyler's Awesome To Do List App</Text>
      <Text style={styles.text}>Written by: Tyler Galea</Text>
      <Text style={styles.text}>Date: March 17, 2024</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
  },
  text: {
    fontSize: 24,
  },
});

export default AboutScreen;
