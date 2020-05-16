import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#312e38',
        }}
      >
        <Text
          style={{
            color: '#c53030',
            fontSize: 30,
          }}
        >
          Hello World
        </Text>
      </View>
    </>
  );
};

export default App;
