import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Define el componente de registro
export const Registro = () => {
  const nav = useNavigation();
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefono, setTelefono] = useState('');

  // Función para manejar el registro de usuario
  const handleRegistro = () => {
    // Realiza la llamada a la API para registrar al usuario
    fetch('https://catandoando.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellidop: apellidoPaterno,
        apellidom: apellidoMaterno,
        email,
        password,
        telefono,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data._id) {
          alert('Usuario registrado correctamente');
          // Redirige al usuario a la pantalla de inicio de sesión
          nav.navigate('Login');
        } else {
          alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
        }
      })
      .catch(error => {
        console.error('Error al registrar el usuario:', error);
        alert('Se produjo un error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registro de usuario</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>Apellido Paterno:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu apellido paterno"
          value={apellidoPaterno}
          onChangeText={setApellidoPaterno}
        />
        <Text style={styles.label}>Apellido Materno:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu apellido materno"
          value={apellidoMaterno}
          onChangeText={setApellidoMaterno}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
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
        <Text style={styles.label}>Teléfono:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <TouchableOpacity onPress={handleRegistro}>
          <Text style={styles.loginButton}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => nav.navigate('Login')}>
          <Text style={styles.registerLink}>¿Ya tienes cuenta? Presiona aquí para iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF7E1',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#E2AA87',
    color: '#FFF',
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

export default Registro;
