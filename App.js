import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/routers';
import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Sobre' component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
