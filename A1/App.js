//App View Text

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground() {
  return (
    <LinearGradient
      colors={['#FF5733', '#FFC300']} 
      style={styles.container}
    >
      <Text style={styles.text}>¡Aplicacion Con View-Text!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600', 
    color: 'green',
  },
});
