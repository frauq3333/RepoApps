// APP TODO INCORPORADO
import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function GradientScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#FF5733', '#FFC300']}
      style={styles.container}
    >
      {/* Imagen local (Municipalidad) */}
      <Image 
        source={require('./assets/LogoMun.png')}  // Asegúrate de tener la imagen local
        style={styles.logoMun}
        resizeMode="contain"
      />

      <Text style={styles.title}>Municipalidad de Quinchao</Text>


      <Image 
        source={{ uri: 'https://www.sistema.logisticaadaptable.com/imagenes/iniciarsesion.png' }} // Reemplaza con tu URL real
        style={styles.logoMun}
        resizeMode="contain"
      />

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

    
      <Pressable 
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#cce7cc' : '#19CC98' },
        ]}
      >
        <Text style={styles.buttonText}>Ir a Home</Text>
      </Pressable>
    </LinearGradient>
  );
}


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>¡Bienvenido/a al Home!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GradientScreen" component={GradientScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
    marginBottom: 30,
  },
  logoMun: {
    width: 100,
    height: 100,
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
