import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export default function ProductoScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/auth/products/category/handcraft');
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
              <Text>Los productos son:</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : products.length === 0 ? (
        <Text>No hay productos disponibles.</Text>
      ) : (
        
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Image source={{ uri: item.image }} style={{ width: 200, height: 200 }} />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
