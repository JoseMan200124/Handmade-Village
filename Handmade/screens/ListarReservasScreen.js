// screens/ListarReservasScreen.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import axios from 'axios';

export default function ListarReservasScreen({ navigation }) {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/todos/');
      setReservas(response.data);
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
      alert('Ha ocurrido un error al obtener las reservas. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  const handleMarcarReserva = (id, completed) => {
    navigation.navigate('MarcarReserva', { id, completed });
  };
  const handleEliminarReserva = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/auth/todos/${id}`);
      alert('La reserva ha sido eliminada.');
  
      // Actualizar la lista de reservas
      fetchReservas();
    } catch (error) {
      console.error('Error al eliminar la reserva:', error);
      alert('Ha ocurrido un error al eliminar la reserva. Por favor, inténtelo de nuevo más tarde.');
    }
  };
  // Dentro del componente ListarReservasScreen

return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={reservas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.reservaContainer}>
              <TouchableOpacity onPress={() => handleMarcarReserva(item.id, item.completed)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
              <Button title="Eliminar" onPress={() => handleEliminarReserva(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    reservaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
  });
