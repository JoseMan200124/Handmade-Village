import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import ButtonGradient  from './ButtonGradient';
import RegistroScreen from './screens/registro'; // Importar la pantalla de registro

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Registro" component={RegistroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logoEmpresa.png')} style={styles.logo} />
      <Text style={styles.titulo}>Hola.</Text>
      <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>
      <TextInput placeholder='jmancaste@gmail.com' style={styles.textInput}></TextInput>
      <TextInput placeholder='contraseña' style={styles.textInput} secureTextEntry={true}></TextInput>
      <Text style={styles.texto}>¿Haz olvidado tu contraseña?</Text>
      <ButtonGradient/>
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
    width: 100,
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
