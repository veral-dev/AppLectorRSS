import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#4630EB" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default App;
