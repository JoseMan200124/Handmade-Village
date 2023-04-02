// screens/CrearProductoScreen.js

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';

export default function CrearProductoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');

  const handleCrearProducto = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/auth/products', {
        title,
        description,
        price,
        discountPercent,
        age: 0,
        stock: 1,
        category: 'handcraft',
      });
      const productId = response.data.id;
      alert(`Producto creado con el ID: ${productId}`);

      // Navegar al detalle del producto
      navigation.navigate('DetalleProducto', { productId });
    } catch (error) {
      console.error('Error al crear el producto:', error);
      alert('Ha ocurrido un error al crear el producto. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Aquí se deben agregar los campos para ingresar los datos del producto (title, description, price, discountPercent) */}
      <Button title="Crear Producto" onPress={handleCrearProducto} />
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
