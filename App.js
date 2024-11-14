import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/components/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Teste/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
