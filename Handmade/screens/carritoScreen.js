import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

function CarritoScreen({ route, navigation }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = route.params?.userId;

        if (!userId) {
          throw new Error("UserId is undefined.");
        }

        const response = await axios.get(`https://dummyjson.com/auth/carts/user/${userId}`);
        setCarrito(response.data.products);
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error al cargar el carrito. Por favor, inténtalo de nuevo más tarde.");
      }
    };

    fetchData();
  }, [route.params]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrito</Text>
      <FlatList
        data={carrito}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.homeButtonText}>Volver al inicio</Text>
      </TouchableOpacity>
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
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default CarritoScreen;
