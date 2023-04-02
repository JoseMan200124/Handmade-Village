import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import ButtonGradient from '../ButtonGradient';
import { store } from '../redux/store';

function InicioScreen({ navigation }) {
  const ARTESANO_USERNAME = 'artesano';
  const ARTESANO_PASSWORD = 'artesano123';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === ARTESANO_USERNAME && password === ARTESANO_PASSWORD) {
      console.log('Usuario artesano ha iniciado sesión');
      navigation.navigate('Productos');
    } else {
      try {
        console.log(username, password);

        const response = await axios.post('https://dummyjson.com/auth/login', {
          username,
          password,
        });
        console.log(response.data);

        const token = response.data.token;
        console.log(token);
        store.dispatch({ type: 'SET_TOKEN', payload: token });
        navigation.navigate('Productos');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          alert("Usuario o contraseña incorrectos, porfavor ingresa credenciales correctas ");
        } else {
          console.log(error);
          alert("Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.");
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoEmpresa.png')} style={styles.logo} />
      <Text style={styles.titulo}>Hola.</Text>
      <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>
      <TextInput
        placeholder='usuarios'
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='contraseña'
        style={styles.textInput}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.texto}>¿Haz olvidado tu contraseña?</Text>
      <ButtonGradient onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.registroText}>¿No estás registrado?</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
// ... (Los estilos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D9C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color:'#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color:'black',
  },
  textInput: {
    borderWidth:1,
    padding: 10,
    paddingStart: 30, 
    width:'80%',
    marginTop: 20,
    height:50,
    borderRadius: 30,
    backgroundColor: '#fff',

  },
  texto: {
    marginTop: 20, 
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },button: {
    borderColor: 'black',
    borderRadius: 30,
    marginTop: 20,
    width: 100,
    height: 50,
  }
});
export default InicioScreen;
