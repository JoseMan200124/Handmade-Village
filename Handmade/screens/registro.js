import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import axios from 'axios';

export default function RegistroScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleRegistro = async () => {
    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
        firstName,
        lastName,
        age,
        email,
        username,
        password,
        gender,
      });
      const userId = response.data.id;
      console.log('Usuario creado con el ID:', userId);
      // Aquí se puede redirigir a otra pantalla o hacer lo que sea necesario con el ID
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      <Text style={styles.label}>Apellido:</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Correo electrónico:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Nombre de usuario:</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
      <Text style={styles.label}>Género:</Text>
      <TextInput style={styles.input} value={gender} onChangeText={setGender} />
      <View style={styles.buttonContainer}>
        <Button style={styles.buttonStyle} title="Registrar" onPress={handleRegistro} color="white"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A363B',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    
    marginTop: 20,
    backgroundColor: '#99B898',
    borderRadius: 5,
  },
  buttonStyle:{
    color:'white', 
  }
});
