import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import imagen1 from './GALINA.jpg';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imagen1} style={styles.imageBackground}>
        <View style={styles.overlay}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>EL CORRAL DE LAS GALLINAS FELICES</Text>
          <Text style={styles.subtitle}>¡Donde la felicidad de tus plumíferos es nuestra prioridad!</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  imageBackground: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
