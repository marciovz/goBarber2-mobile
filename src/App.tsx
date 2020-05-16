import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
  );
};

export default App;
