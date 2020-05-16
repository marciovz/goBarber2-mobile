import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },
  text: {
    color: '#c53030',
    fontSize: 30,
  }
});