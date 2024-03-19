// Importa los módulos necesarios
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define el componente Login
export const Login = () => {
  const nav = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Realiza la llamada a la API para autenticar al usuario
    fetch('https://apiequipo.vercel.app/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          // El inicio de sesión es exitoso, navega a la pantalla de inicio
          nav.navigate('Home');
        }
      })
      .catch(error => {
        console.error('Error al iniciar sesión:', error);
        alert('Se produjo un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Corralito</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Usuario:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu usuario"
          value={username}
          onChangeText={setUsername}
          autoCompleteType="username"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButton}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Registro')}>
          <Text style={styles.registerLink}>¿No tienes cuenta? Presiona aquí para registrarte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF7E1',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666666',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333333',
  },
  loginButton: {
    backgroundColor: '#E2AA87',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  registerLink: {
    color: '#E2AA87',
    textAlign: 'center',
    fontSize: 16,
  },
});
