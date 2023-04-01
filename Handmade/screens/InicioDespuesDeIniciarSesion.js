import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';

import axios from 'axios';
function InicioDespuesDeIniciarSesionScreen() {
    return (
      <View>
        <Text>¡Bienvenido!</Text>
      </View>
    );
  }
  
  export default function App() {
    return (
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Inicio" component={InicioScreen} />
            <Stack.Screen name="Registro" component={RegistroScreen} />
            <Stack.Screen name="InicioDespuesDeIniciarSesion" component={InicioDespuesDeIniciarSesionScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    );
  }