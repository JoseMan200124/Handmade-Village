import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg"; 
const {width, height} = Dimensions.get('window')
export default function App() {


  function SvgTop(){
    return (
      
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola.</Text>
      <Text style={styles.subTitle}>Inicia sesión con tu cuenta</Text>
  <TextInput placeholder='jmancaste@gmail.com' style={styles.textInput}></TextInput>
  <TextInput placeholder='contraseña' style={styles.textInput}></TextInput>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color:'#34434D',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color:'gray',
  },
  textInput: {
    borderWidth:1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 30, 
    width:'80%',
    marginTop: 20,
    height:50,
    borderRadius: 30,
    backgroundColor: '#fff',

  }
});
