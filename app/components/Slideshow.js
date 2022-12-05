import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, useState} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import image1 from '../assets/1.png';
import Slideshow from 'react-native-image-slider-show';


function Imageslider({navigation}) {

  
  return (
    <View  style={{ backgroundColor:"#F6F3E4"}}>
       {/* <ImageBackground
     style={styles.backgroundImage}
     source={require('../assets/3.png')}> 
      <View style={styles.boxbutton}>
            <AppButton title="Learn more" onPress={() => navigation.navigate('Slideshow')}/>
      </View> 
     </ImageBackground> */}
            {/* <AppButton style={styles.button} title="explore eldearly" onPress={() => navigation.navigate('Home')}/> */}
       <ImageBackground>
       <AppButton style={styles.button} title="explore eldearly" onPress={() => navigation.navigate('Home')}/>
       
       <Slideshow 
         containerStyle={styles.containerStyle}
         height={680} 
         indicatorColor={'black'}
         indicatorSize={20}
         indicatorSelectedColor={'red'}
      dataSource={[
        {url:require('C:/Users/DELL/Desktop/Dev/eIDEARly/app/assets/3.png') },
        { url:require('C:/Users/DELL/Desktop/Dev/eIDEARly/app/assets/4.png') },
        { url:require('C:/Users/DELL/Desktop/Dev/eIDEARly/app/assets/5.png') },
    ]}/>
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
  containerStyle: {
    width:'100%',
    height:'100%',
    marginTop:0
  },
  height:{
    height:'100%'
  },
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
    paddingVertical: 8,
    paddingHorizontal: 3,
    elevation: -1,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: "white",
    borderRadius:40,
    width:"50%",
    marginLeft:100,
    marginTop:70
  },
  buttontext:{
    color:'white', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },

  boxbutton:{
    marginTop:'145%',
    marginHorizontal:'28%',
    width:'45%',
    borderRadius: 20,
  },
//   people:{
//     width: 275, 
//     height:210,
//     position:'absolute', 
//     bottom:-40, 
//     left:100,
//   }
});

export default Imageslider;