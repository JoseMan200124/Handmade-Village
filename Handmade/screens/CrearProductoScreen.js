import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';

export default function CrearProductoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState('');

  const handleCrearProducto = async () => {
    try {
      // Reemplaza 'your-token-here' con tu token de autenticación
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY4MDM3MTYwOSwiZXhwIjoxNjgwMzc1MjA5fQ.Tq-EpiDGP-Wh_yHG7jQ53zjcyCJUvQdySO3OEqpPH2M';

      const response = await axios.post(
        'https://dummyjson.com/products/add',
        {
          title,
          description,
          price,
          discountPercent,
          age: 0,
          stock: 1,
          category: 'handcraft',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
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
      <Text style={styles.label}>Título:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
      />

      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        multiline
      />

      <Text style={styles.label}>Precio:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrice}
        value={price}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Descuento (%):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setDiscountPercent}
        value={discountPercent}
        keyboardType="numeric"
      />

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
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 5,
  },
});
