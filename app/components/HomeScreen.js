import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo.png';
import people from '../assets/oldpeople.png';

TouchableOpacity.defaultProps = { activeOpacity: 0.5 };

function HomeScreen({ navigation }) {
  return (
    // <LinearGradient
    //   colors={['#FAEBEC', '#E6B1B1', '#FF5454']}
    //   style={styles.container}
    // >
     
    <View style={styles.container}>
      <ImageBackground
     style={styles.backgroundImage}
     source={require('../assets/8_1.png')}> 
      {/* <Image source={logo} style={styles.logo}></Image> */}
      <Text style={styles.text}>Press to select</Text> 
      <View style={styles.boxbutton}>
            <AppButton title="Phone" onPress={() => navigation.navigate('Phone')}/>
            <AppButton title="Internet" onPress={() => navigation.navigate('Internet')}/>
            <AppButton title="Apps" onPress={() => navigation.navigate('Apps')}/>
            <AppButton title="Ask us anything!" onPress={() => navigation.navigate('chatbot')}/>
      </View> 
      </ImageBackground>
    </View>  
    // <Image source={people} style={styles.people}></Image>   

  // </LinearGradient>
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
    top:250,
    marginLeft: 120
  },
  button:{
    backgroundColor:'#F6F3E4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginBottom: 20,
  },
  buttontext:{
    color:'black', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold',
    fontWeight:'bold',
    fontSize:22
  },

  boxbutton:{
    marginTop:300,
    marginLeft:65,
    width:'65%',
    borderRadius: 20,
    padding:20,
    backgroundColor:'#E23B53',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    zIndex:1,
    borderWidth:1,
    borderColor:'white'

  },
  people:{
    width: 275, 
    height:210,
    position:'absolute', 
    bottom:-40, 
    left:100,
  },
  backgroundImage: {
    resizeMode: 'cover', // or 'stretch'
    width:'100%',
    height:'100%'
  },
});

export default HomeScreen;