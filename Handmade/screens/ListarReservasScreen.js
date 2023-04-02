import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function ListarReservasScreen({ navigation }) {
  const [reservas, setReservas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    navigation.addListener('focus', fetchReservas);
  }, [navigation]);

  const fetchReservas = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://dummyjson.com/auth/todos/');
      console.log(response);
      const reservasNoCompletadas = response.data.todos.filter((reserva) => !reserva.completed);
      setReservas(reservasNoCompletadas);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
      alert('Ha ocurrido un error al obtener las reservas. Por favor, inténtelo de nuevo más tarde.');
      setIsLoading(false);
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

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={reservas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.reservaCard}>
              <Text style={styles.reservaTitle}>{item.todo}</Text>
              <Text style={styles.reservaStatus}>Estado: {item.completed ? 'Completado' : 'Pendiente'}</Text>
              <View style={styles.reservaActions}>
                <TouchableOpacity
                  style={styles.marcarButton}
                  onPress={() => handleMarcarReserva(item.id, item.completed)}
                >
                  <Text style={styles.marcarButtonText}>Marcar</Text>
                </TouchableOpacity>
                <Button title="Eliminar" onPress={() => handleEliminarReserva(item.id)} />
              </View>
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
  reservaCard: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  reservaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reservaStatus: {
    fontSize: 14,
    marginBottom: 10,
  },
  reservaActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  marcarButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    paddingVertical: 10
},
marcarButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
});