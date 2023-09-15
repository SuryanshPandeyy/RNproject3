/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';

const Button = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    elevation: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowRadius: 0.6,
    backgroundColor: '#32CBFF',
    marginVertical: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
  },

  text: {
    fontSize: 18,
    lineHeight: 29,
    color: '#fff'
  },
});
