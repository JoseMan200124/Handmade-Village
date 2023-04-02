import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

function ProductosScreenTuristas({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/auth/products/category/handcraft');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        alert('Ocurrió un error al obtener los productos. Por favor, inténtalo de nuevo más tarde.');
      }
    };
    fetchProducts();
  }, []);

  const renderProductItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => navigation.navigate('Producto', { productId: item.id })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => navigation.navigate('Reservar', { productId: item.id })}
        >
          <Text style={styles.reserveButtonText}>Reservar</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.productsList}
      />
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
  productsList: {
    paddingHorizontal: 10,
  },
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  reserveButton: {
    backgroundColor: '#FF8300',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  reserveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductosScreenTuristas;
