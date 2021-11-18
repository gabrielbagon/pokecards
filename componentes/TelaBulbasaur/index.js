import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

import Bulba from '../../assets/HomePage/bulbasaurpic.png';

export default function TelaBulbasaur(props) {
  return (
    
    <View style={estilos.container}>
      <View style={estilos.viewtexto}>
      <Text style={estilos.texto}>Bulbasaur</Text> 
        </View> 
       
    <Image style={estilos.img} source={Bulba} /> 
      <Text style={estilos.texto1}>Type: Grass / Poison</Text>
      <Text style={estilos.texto1}>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</Text>
    
    <Pressable style={estilos.btn} title="Charmander" onPress = { () => props.navigation.navigate("Charmander") }>
    <Text style={estilos.textobtn}>Next </Text>
    </Pressable>
    
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
texto: {
  fontSize: 35,
  color: '#ffff',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 5,
  },
  viewtexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    marginBottom: 50,
    backgroundColor: '#3F61A6',
    borderColor: '#3F61A6',
    width: 250,
  },
  img: {
  width: 350,
  height: 300,
  marginBottom: 20,
},

texto1: {
  fontSize: 16,
  color: '#ffff',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 10,
  padding: 20,
   
},
  btn: {
    
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 35,
    padding: 1,
    backgroundColor: '#3F61A6',
    borderColor: '#3F61A6',
},

  textobtn: {
    fontSize: 16,
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    padding: 5,
    width: 100, 
    height: 35,
    
  }}); 