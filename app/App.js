import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import PhoneScreen from './components/PhoneScreen';
import InternetScreen from './components/InternetScreen';
import AppScreen from './components/AppScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
        <Stack.Screen name="Internet" component={InternetScreen}/>
        <Stack.Screen name="Apps" component={AppScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}