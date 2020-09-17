import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColourBox from './components/ColourBox';
export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBox}>
        <Text>Here are some boxes: </Text>
      </View>
      <ColourBox colourHex="#268bd2" colourName="Blue" />
      <ColourBox colourHex="#d33682" colourName="Magenta" />
      <ColourBox colourHex="#cb4b16" colourName="Orange" />
      <ColourBox colourHex="#2aa198" colourName="Cyan" />
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
