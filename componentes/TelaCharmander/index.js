import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Pressable } from 'react-native';

import Charmander from '../../assets/HomePage/charmanderpic.png';

export default function TelaCharmander(props) {
  return (
    
    <View style={estilos.container}>
      <View style={estilos.viewtexto}>
      <Text style={estilos.texto}>Charmander</Text> 
        </View> 
       
    <ImageBackground style={estilos.img} resizeMode="cover" source={Charmander} /> 
      <Text style={estilos.texto1}>Type: Fire</Text>
      
      <Text style={estilos.texto1}>It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</Text>
    
    <Pressable style={estilos.btn} title="Pikachu" onPress = { () => props.navigation.navigate("Pikachu") }>
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
    width: 242,
    height: 348,
  marginBottom: 20,
  padding: 5,
},

texto1: {
  fontSize: 16,
  color: '#ffff',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 1,
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