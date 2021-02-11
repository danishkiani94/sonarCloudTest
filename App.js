import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let test1 = 123;

  const test = (test) => {

    if (test) {

      console.log('Inside if');

    } else {
      console.log('Inside else');
    }
  }

  const test2 = (test3) => {

    if (test3) {

      console.log('Inside if');

    } else {
      console.log('Inside else');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Test application sonar test</Text>
      wqweqweqe
      <StatusBar style="auto" />
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
