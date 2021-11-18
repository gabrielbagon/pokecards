import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TelaInicial from './componentes/TelaInicial';

import TelaBulbasaur from './componentes/TelaBulbasaur';
import TelaCharmander from './componentes/TelaCharmander';
import TelaPikachu from './componentes/TelaPikachu';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Bulbasaur" component={TelaBulbasaur} />
        <Stack.Screen name="Charmander" component={TelaCharmander} />
        <Stack.Screen name="Pikachu" component={TelaPikachu} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


