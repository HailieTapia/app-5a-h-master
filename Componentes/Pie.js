import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Componente de Pie de Página
const Pie = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nuestra Empresa</Text>
        <TouchableOpacity onPress={() => console.log('Términos y Condiciones')}>
          <Text style={styles.link}>Términos y Condiciones</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Política de Privacidad')}>
          <Text style={styles.link}>Política de Privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Contactanos')}>
          <Text style={styles.link}>Contáctanos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Síguenos en Redes Sociales</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => console.log('Facebook')}>
            <Image source={require('./incono.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Twitter')}>
            <Image source={require('./incono.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Instagram')}>
            <Image source={require('./incono.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
  },
  section: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  socialIcons: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});

export default Pie;
