import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColourBox(props) {
  const { colourHex, colourName } = props;

  const boxColor = {
    backgroundColor: colourHex,
  };
  return (
    <View style={[styles.container, boxColor]}>
      <Text style={styles.text}>
        {colourName}: {colourHex}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 30,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
