import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function QuienesSomosScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logoEmpresa.png')} style={styles.logo} />
      <Text style={styles.title}>¿Quiénes somos?</Text>
      <Text style={styles.description}>
        Bienvenidos a nuestra aplicación HandMade Village. Somos una empresa dedicada a conectar artesanos y turistas a través de experiencias únicas y auténticas. Nuestra misión es promover el turismo sostenible y apoyar a los artistas locales, ofreciendo una plataforma donde puedan compartir sus habilidades y conocimientos con personas interesadas en aprender y descubrir nuevas culturas.
      </Text>
      <Text style={styles.title}>Objetivos</Text>
      <View style={styles.goalsContainer}>
        <View style={styles.goalBox}>
          <Ionicons name="cash-outline" size={50} color="white" />
          <Text style={styles.goalTitle}>Fin de la pobreza</Text>
          <Text style={styles.goalDescription}>Apoyar a los artesanos locales para reducir la pobreza y aumentar sus ingresos mediante la promoción de sus productos y la creación de empleo.</Text>
        </View>
        <View style={styles.goalBox}>
          <Ionicons name="briefcase-outline" size={50} color="white" />
          <Text style={styles.goalTitle}>Trabajo decente y crecimiento económico</Text>
          <Text style={styles.goalDescription}>Conectar artesanos con turistas y brindar herramientas para la gestión de negocios, fomentando el trabajo decente y el crecimiento económico.</Text>
        </View>
        <View style={styles.goalBox}>
          <Ionicons name="globe-outline" size={50} color="white" />
          <Text style={styles.goalTitle}>Ciudades y comunidades sostenibles</Text>
          <Text style={styles.goalDescription}>Promover comunidades sostenibles y culturales mediante el turismo sostenible y el apoyo a artesanos locales que utilizan técnicas y materiales sostenibles.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D9C4',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    marginTop:20, 
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginTop: 20,
  }, goalsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, goalBox: {
    width: '30%',
    backgroundColor: '#F3A680',
    borderRadius: 10, alignItems: 'center',
    padding: 10,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  goalDescription: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default QuienesSomosScreen;
