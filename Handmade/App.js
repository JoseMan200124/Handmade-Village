import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import ButtonGradient  from './ButtonGradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore } from 'redux';
import RegistroScreen from './screens/registro';
import { TouchableWithoutFeedback } from 'react-native';

const Stack = createStackNavigator();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Definir el estado inicial
const initialState = {
  token: null,
};

// Definir el reducer para manejar los cambios en el estado
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

// Crear el store utilizando redux persist
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);
export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Registro" component={RegistroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>

  );
}

function InicioScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log(username, password); // Agregar esta línea

      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      console.log(response.data); // Agregar esta línea

      const token = response.data.token;
      console.log(token); 
      // Guardar el token en el almacenamiento local utilizando redux persist
      store.dispatch({ type: 'SET_TOKEN', payload: token });
      // Redirigir a la página de inicio después de iniciar sesión
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logoEmpresa.png')} style={styles.logo} />
      <Text style={styles.titulo}>Hola.</Text>
      <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>
      <TextInput placeholder='usuarios' style={styles.textInput} value={username} onChangeText={setUsername}></TextInput>
      <TextInput placeholder='contraseña' style={styles.textInput} secureTextEntry={true} value={password} onChangeText={setPassword}></TextInput>
      <Text style={styles.texto}>¿Haz olvidado tu contraseña?</Text>
      <ButtonGradient onPress={handleLogin}/>
      <Button title='¿No estás registrado?' onPress={() => navigation.navigate('Registro')} />
      <StatusBar style="auto" />
    </View>
  );
}


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
