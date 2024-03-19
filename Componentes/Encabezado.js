import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Encabezado = ({ navigation }) => {
  // Funciones para manejar la navegación a diferentes secciones
  const handleVerCarrito = () => {
    // Navegar a la pantalla del carrito de compras
    navigation.navigate('Carrito');
  };

  const handleVerPerfil = () => {
    // Navegar a la pantalla de perfil
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.header}>
      {/* Logo o título de la marca */}
      <Image source={require('./GALINA.jpg')} style={styles.logo} />

      {/* Botones de navegación */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleVerCarrito} style={styles.button}>
          <Text style={styles.buttonText}>Carrito</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleVerPerfil} style={styles.button}>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E2AA87',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Encabezado;
