// APP DE REPRODUCCIÓN DE ÁLBUM
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

export default function AlbumInterface() {
  return (
    <LinearGradient
      colors={['#87CEEB', '#98FB98', '#D2B48C']} // azul cielo, verde claro, marrón cálido
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        {/* Imagen de la portada del álbum */}
        <Image
          source={{ uri: 'https://i.scdn.co/image/ab67616d00001e0247acc4bf1e6215edb81d17d0' }} // Sustituye por la URL de la imagen o usa una imagen local
          style={styles.albumCover}
        />
        
        {/* Texto del título de la canción y artista */}
        <Text style={styles.songTitle}>Nagano 98</Text>
        <Text style={styles.artistName}>LIL TEXAS</Text>

        {/* Ícono de Me gusta */}
        <TouchableOpacity style={styles.likeIcon}>
          <FontAwesome name="heart-o" size={30} color="gray" />
        </TouchableOpacity>

        {/* Controles de reproducción */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <FontAwesome name="backward" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="play" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="forward" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  albumCover: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artistName: {
    fontSize: 16,
    color: 'gray',
  },
  likeIcon: {
    marginVertical: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
