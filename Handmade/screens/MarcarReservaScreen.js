// screens/MarcarReservaScreen.js

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

export default function MarcarReservaScreen({ route, navigation }) {
  const { id, completed } = route.params;

  const handleMarcarReserva = async () => {
    try {
      await axios.put(`https://dummyjson.com/auth/todos/${id}`, {
        completed: !completed,
      });
      alert('La reserva ha sido marcada como lista.');

      // Regresar a la pantalla de Listar Reservas y refrescar la lista
      navigation.navigate('ListarReservas', { refresh: true });
    } catch (error) {
      console.error('Error al marcar la reserva:', error);
      alert('Ha ocurrido un error al marcar la reserva. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>¿Desea marcar la reserva como lista?</Text>
      <Button title="Marcar como lista" onPress={handleMarcarReserva} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
