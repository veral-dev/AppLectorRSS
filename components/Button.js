import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
export default function Separator({ text, onPress, bgColor, color, uppercase }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor || '#000000' }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: color || '#ffffff' }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    minWidth: 50
  },
  buttonText: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700'
  }
});
