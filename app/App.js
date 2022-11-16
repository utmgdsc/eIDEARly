import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import PhoneScreen from './components/PhoneScreen';
import InternetScreen from './components/InternetScreen';
import AppScreen from './components/AppScreen';
import FacebookAccountCreationMaterial from './components/Internet-LM/FacebookAccountCreation';
import InternetConnectionMaterial from './components/Internet-LM/InternetConnection';
import SearchEnginesMaterial from './components/Internet-LM/SearchEngines';
import MaterialDisplay from './components/Internet-LM/LMDisplayer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [material, setMaterial] = React.useState("");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Phone" component={PhoneScreen} />
        <Stack.Screen name="Internet" component={(props) => <InternetScreen setMaterial={setMaterial} {...props}/>}/>
        <Stack.Screen name="Apps" component={AppScreen}/>
        <Stack.Screen name="FacebookAccountCreation" component={FacebookAccountCreationMaterial}/>
        <Stack.Screen name="InternetConnection" component={InternetConnectionMaterial}/>
        <Stack.Screen name="SearchEngines" component={SearchEnginesMaterial}/>
        <Stack.Screen name="MD" component={(props)=> <MaterialDisplay material={material} {...props}/>}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}