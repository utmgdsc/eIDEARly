import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import image1 from '../assets/1.png';



function LandingPage({navigation}) {
  return (
    <View>
       <ImageBackground
     style={styles.backgroundImage}
     source={require('../assets/1.png')}> 
      <View style={styles.boxbutton}>
            <AppButton title="press me to continue" onPress={() => navigation.navigate('Feedback')}/>
      </View> 
     </ImageBackground>
    </View>
  );
}


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
  <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  );
  
  



const styles = StyleSheet.create({
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch'
        width:'100%',
        height:'100%'
      },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo:{
//     width: 400, 
//     height: 250, 
//     position:'absolute', 
//     top:40

//   },
//   text: {
//     fontSize:20,
//     color:'white',
//     fontFamily: 'KohinoorDevanagari-Semibold',
//     position:'absolute',
//     top:250
//   },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
    fontWeight:'bold',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: "red",
  },
  buttontext:{
    color:'black', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold',
    fontSize: 16,
    lineHeight: 31,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  
  boxbutton:{
    marginTop:'174%',
    marginHorizontal:'28%',
    width:'45%',
    borderRadius: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  
  
  },
//   people:{
//     width: 275, 
//     height:210,
//     position:'absolute', 
//     bottom:-40, 
//     left:100,
//   }
});

export default LandingPage;