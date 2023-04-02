import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import axios from 'axios';
import { FloatingAction } from 'react-native-floating-action';

function UserProfileScreen({ route,navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = route.params?.userId;
        if (!userId) {
          throw new Error("UserId is undefined.");
        }
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
        alert("Ocurrió un error al cargar los datos del usuario. Por favor, inténtalo de nuevo más tarde.");
      }
    };

    fetchData();
  }, [route.params]);

  const actions = [
    {
      text: 'Crear Producto',
      icon: require('../assets/icon.png'),
      name: 'CrearProducto',
      position: 1,
    },
    {
      text: 'Listar Reservas',
      icon: require('../assets/icon.png'),
      name: 'ListarReserva',
      position: 2,
    },
    {
      text: 'Marcar Reserva',
      icon: require('../assets/icon.png'),
      name: 'MarcarReserva',
      position: 3,
    },
    {
      text: 'Productos',
      icon: require('../assets/icon.png'),
      name: 'ProductosScreen',
      position: 4,
    },
  ];

  const handleActionPress = (name) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      {userData ? (
        <>
        <Text style={styles.title}>Mi perfil</Text>
          <Image source={{ uri: userData.image }} style={styles.profileImage} />
          <Text style={styles.name}>
            {userData.firstName} {userData.lastName} ({userData.maidenName})
          </Text>
          <Text style={styles.email}>{userData.email}</Text>
          <Text style={styles.phone}>{userData.phone}</Text>
          <Text style={styles.ageGender}>
            {userData.age} years old, {userData.gender}
          </Text>
          <Text style={styles.heightWeight}>
            Height: {userData.height} cm, Weight: {userData.weight} kg
          </Text>
          <Text style={styles.eyeHairColor}>
            Eye Color: {userData.eyeColor}, Hair Color: {userData.hair.color}
          </Text>
          <Text style={styles.address}>
            {userData.address.address}, {userData.address.city}, {userData.address.state}, {userData.address.postalCode}
          </Text>
          <Text style={styles.university}>University: {userData.university}</Text>
          <Text style={styles.company}>
            Company: {userData.company.name}, Department: {userData.company.department}, Title: {userData.company.title}
          </Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
      <FloatingAction
        actions={actions}
        onPressItem={(name) => handleActionPress(name)}
        animated={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        color:'#fff',
        fontSize:50, 
        fontWeight: 800,
    },
  container: {
    flex: 1,
    backgroundColor: '#BA3B46',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  },
  profileImage: {
    
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    color:'#fff',
    marginBottom:20,

    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    marginBottom:20,

    color:'#fff',

    fontStyle: 'italic',
  },
  phone: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  ageGender: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  heightWeight: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  eyeHairColor: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  address: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  university: {
    fontSize: 16,
    marginBottom:20,

    color:'#fff',

  },
  company: {
    fontSize: 16,
        marginBottom:20,

    color:'#fff',

  },
});

export default UserProfileScreen;
