import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './logo.png';
import people from './oldpeople.png';
import Markdown from "./Markdown";

TouchableOpacity.defaultProps = { activeOpacity: 0.5 };

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#FAEBEC', '#E6B1B1', '#FF5454']}
      style={styles.container}
    >
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>Press to select</Text> 
      <View style={styles.boxbutton}>
            <AppButton title="Phone" onPress={() => navigation.navigate('Phone')}/>
            <AppButton title="Internet" onPress={() => navigation.navigate('Internet')}/>
            <AppButton title="Apps" onPress={() => navigation.navigate('Apps')}/>
      </View> 
    </View>  
    <Image source={people} style={styles.people}></Image>   

  </LinearGradient>
  );
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
<Text style={styles.buttontext}>{title}</Text>
  </TouchableOpacity>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 400, 
    height: 250, 
    position:'absolute', 
    top:40

  },
  text: {
    fontSize:20,
    color:'white',
    fontFamily: 'KohinoorDevanagari-Semibold',
    position:'absolute',
    top:250
  },
  button:{
    backgroundColor:'#FF5454',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginBottom: 20,
  },
  buttontext:{
    color:'white', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold'
  },

  boxbutton:{
    marginTop:100,
    width:'85%',
    borderRadius: 20,
    padding:34,
    backgroundColor:'#FFF4F4',
    opacity:0.7,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    zIndex:1

  },
  people:{
    width: 275, 
    height:210,
    position:'absolute', 
    bottom:-40, 
    left:100,
  }
});

export default HomeScreen;