import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import axios from 'axios';

export default function ProductoScreen() {
  const [products, setProducts] = useState([]);

  const handleGetProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/products/category/handcraft');
      console.log(response.data); // Agregar esta línea para verificar que los productos se han recibido correctamente
      setProducts(response.data); // Guardar los productos en el estado
    } catch (error) {
      console.error(error);
      
    }
  };
  return (
      <View style={styles.container}>
        <Text onPress={handleGetProducts}>Obtener productos de artesanos</Text>
        {products.map((product) => (
          <View key={product.id}>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
            <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
          </View>
        ))}
      </View>
    );
}

// ... (Los estilos)
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});