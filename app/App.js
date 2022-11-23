import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import PhoneScreen from './components/PhoneScreen';
import InternetScreen from './components/InternetScreen';
import AppScreen from './components/AppScreen';
import MaterialDisplay from './components/LMDisplayer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [material, setMaterial] = React.useState(``);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phone" component={(props) => <PhoneScreen setMaterial={setMaterial} {...props}/>} />
        <Stack.Screen name="Internet" component={(props) => <InternetScreen setMaterial={setMaterial} {...props}/>}/>
        <Stack.Screen name="Apps" component={AppScreen}/>
        <Stack.Screen name="MD" component={(props)=> <MaterialDisplay material={material} {...props}/>}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}