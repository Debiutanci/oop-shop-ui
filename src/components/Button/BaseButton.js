import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function BaseButton({ text, onPress }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: '#c9b7ff',
    padding: 10,
    width: 140,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default BaseButton;
