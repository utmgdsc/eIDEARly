import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationAction } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import PhoneScreen from './components/PhoneScreen';
import InternetScreen from './components/InternetScreen';
import AppScreen from './components/AppScreen';
import MaterialDisplay from './components/LMDisplayer';
import LandingPage from './components/LandingPage'
import Feedback from './components/Feedback';
import Slideshow from './components/Slideshow';
import { LogBox } from 'react-native';
import ChatBot from './components/ChatBot';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


const Stack = createNativeStackNavigator();

export default function App() {
  const [material, setMaterial] = React.useState(``);
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name="Feedback" component={Feedback} options={{headerShown:false}}/>
        <Stack.Screen name="Slideshow" component={Slideshow}options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen}options={{headerShown:false}} />
        <Stack.Screen name="Phone" component={(props) => <PhoneScreen setMaterial={setMaterial} {...props}/>}/>
        <Stack.Screen name="Internet" component={(props) => <InternetScreen setMaterial={setMaterial} {...props}/>}/>
        <Stack.Screen name="Apps" component={(props) => <AppScreen setMaterial={setMaterial} {...props}/>} />
        <Stack.Screen name="chatbot" component={ChatBot}/>
        <Stack.Screen name="MD" component={(props)=> <MaterialDisplay material={material} {...props}/>}/> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}