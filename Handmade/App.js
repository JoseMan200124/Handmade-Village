import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import InicioScreen from './screens/InicioScreen';
import RegistroScreen from './screens/registro';
import ProductoScreen from './screens/productos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Registro" component={RegistroScreen} />
          <Stack.Screen name="Productos" component={ProductoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  );
}
