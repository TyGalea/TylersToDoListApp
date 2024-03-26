import React from 'react';
import {Text} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <>
      {children}

      <Text Style={{marginTop: 15, fontSize: 20, textAlign: 'center'}}>
        Tyler's To Do List App
      </Text>
    </>
  );
};

export default MainLayout;
