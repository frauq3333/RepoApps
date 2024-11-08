// APP BUTTONS
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableHighlight, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Ionicons } from '@expo/vector-icons'; 

export default function App() {
  return (
    <LinearGradient
      colors={['#FF5733', '#FFC300']} 
      style={styles.container}
    >
      
      <Image 
        source={require('./assets/LogoMun.png')}
        style={styles.logoMun}
        resizeMode="contain"
      />

   
      <Text style={styles.title}>Municipalidad de Quinchao</Text>

     
      <TouchableHighlight 
        onPress={() => Alert.alert('Alerta', 'Este es el botón PULSA AQUÍ')}
        underlayColor="#cce7cc"
        style={styles.button}
      >
        <Text style={styles.buttonText}>PULSA AQUÍ</Text>
      </TouchableHighlight>

      
      <TouchableHighlight 
        onPress={() => Alert.alert('Hola', 'Este es el botón Presiona Aquí')}
        underlayColor="#cce7cc"
        style={styles.button}
      >
        <Text style={styles.buttonText}>Presiona Aquí</Text>
      </TouchableHighlight>

      
      <Pressable 
        onPress={() => Alert.alert('Alerta', 'Este es el botón Enviar')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#cce7cc' : '#19CC98' },
        ]}
      >
        <Ionicons name="mail" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoMun: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#19CC98',
    borderRadius: 8,
    marginVertical: 10,
    width: 150,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
});

