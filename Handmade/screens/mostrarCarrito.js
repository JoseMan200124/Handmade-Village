import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import axios from 'axios';

function CartScreen({ route, navigation }) {
  const [cartItems, setCartItems] = useState([]);

  const userId = route.params?.userId;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/auth/carts/user/${userId}`);
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error al cargar los productos del carrito. Por favor, inténtalo de nuevo más tarde.");
      }
    };

    fetchCartItems();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Volver al inicio" onPress={() => navigation.navigate('Inicio')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
  },
});

export default CartScreen;
