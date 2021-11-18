import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import Capa from '../../assets/HomePage/logotipo1.png';

export default function TelaInicial(props) {
  return (
    
    <View style={estilos.container}>
        
        <Image style={estilos.img} source={Capa} /> 
        <Pressable style={estilos.btn} title="Bulbasaur" onPress = { () => props.navigation.navigate("Bulbasaur") }>
        <Text style={estilos.texto}>Bulbasaur</Text>
        </Pressable>
        <Pressable style={estilos.btn} title="Charmander" onPress = { () => props.navigation.navigate("Charmander") }>
        <Text style={estilos.texto}>Charmander</Text>
        </Pressable>
        <Pressable style={estilos.btn} title="Pikachu" onPress = { () => props.navigation.navigate("Pikachu") }>
        <Text style={estilos.texto}>Pikachu</Text>
        </Pressable>
        <Text style={estilos.texto1}>by Gabriel Bagon</Text>
    </View>
      
      
    
  );
}



const estilos = StyleSheet.create({
    container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FF8C00',
},
    img: {
    width: 300,
    height: 110,
    marginBottom: 20,
},
    btn: {
    width: 250,
    height: 60,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 35,
      padding: 20,
      backgroundColor: '#3F61A6',
      borderColor: '#3F61A6',
},
    texto: {
    fontSize: 18,
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
    },
    texto1: {
      fontSize: 16,
      color: '#FFCC03',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 100,
      shadowColor: '#000',  
    },}); 