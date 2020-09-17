import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBox}>
        <Text>Here are some boxes: </Text>
      </View>
      <View style={[styles.container, styles.teal]}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
      <View style={[styles.container, styles.green]}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.text}>Hello world!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBox: {
    paddingTop: 30,
  },
  teal: {
    backgroundColor: 'teal',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  orange: {
    backgroundColor: 'orange',
  },
  container: {
    width: 350,
    height: 30,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
