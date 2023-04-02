import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';

function ProductDetailScreen({ route, navigation }) {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productId = route.params?.productId;

        if (!productId) {
          throw new Error("ProductId is undefined.");
        }
        const response = await axios.get(`https://dummyjson.com/auth/products/${productId}`);
        setProductData(response.data);
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error al cargar los datos del producto. Por favor, inténtalo de nuevo más tarde.");
      }
    };

    fetchProductData();
  }, [route.params]);

  const handleReserve = () => {
    navigation.navigate('AgregarAlCarrito', { productId: productData.id });
  };

  return (
    <View style={styles.container}>
      {productData ? (
        <>
          <Text style={styles.title}>{productData.name}</Text>
          <Text style={styles.description}>{productData.description}</Text>
          <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
            <Text style={styles.reserveButtonText}>Reservar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
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
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  reserveButton: {
    backgroundColor: '#BA3B46',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  reserveButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ProductDetailScreen;
