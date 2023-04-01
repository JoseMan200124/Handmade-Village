import React from "react"; 
import { StyleSheet, Text, View, TextInput, Button,Dimensions, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 

export default function ButtonGradient ({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <LinearGradient colors={['#FFA500','#D6A893']} start={{x: 0, y:0}} end={{x:1, y:1}} style={styles.gradient}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </LinearGradient>  
    </TouchableOpacity> 

    ); 
}

const styles = StyleSheet.create({
    container:{
flex: 1, 
alignItems: 'center',
width: 200,
    },

    text: {
        fontSize:14,
        color:'#fff',
        fontWeight: 'bold',
    },
button: {
width: '80%', 
height: 50,
borderRadius: 25,
padding: 10, 
alignItems: 'center', 
justifyContent: 'center', 
}, 

})