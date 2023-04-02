import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import InicioScreen from './screens/InicioScreen';
import RegistroScreen from './screens/registro';
import ProductoScreen from './screens/productos';
import UserProfileScreen from './screens/perfil';
import CrearProductoScreen from './screens/CrearProductoScreen';
import ListarReservasScreen from './screens/ListarReservasScreen';
import MarcarReservaScreen from './screens/MarcarReservaScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={InicioScreen} />
          <Stack.Screen name="Registro" component={RegistroScreen} />
          <Stack.Screen name="Productos" component={ProductoScreen} />
          <Stack.Screen name="Perfil" component={UserProfileScreen} />
          <Stack.Screen name="CrearProducto" component={CrearProductoScreen} />
          <Stack.Screen name="ListarReserva" component={ListarReservasScreen} />
          <Stack.Screen name="MarcarReserva" component={MarcarReservaScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
  );
}
