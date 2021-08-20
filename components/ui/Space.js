import React from 'react';
import { View } from 'react-native';
export default function Separator({ size }) {
  return (
    <View
      style={{
        marginTop: size || 10
      }}
    />
  );
}
