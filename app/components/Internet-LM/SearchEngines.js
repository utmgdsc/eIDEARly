import React, { useState, UseState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, Pressable, SafeAreaView, FlatList, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Markdown from '../Markdown';
import * as FileSystem from 'expo-file-system';


function SearchEnginesMaterial()
{
  //const content = FileSystem.readAsStringAsync()
    return(
    <LinearGradient colors={['#8FA5A8', '#8FA5A8', '#E6B1B1']} style={styles.container}>
        <Markdown mdx = "# Hi" />
        
    </LinearGradient>
    );
    
}

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
      backgroundColor:'#FF9F9F',
      borderWidth:3,
      borderColor:'white'
  ,   borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginBottom: 20,
      margin:20,
      color:'white'
    },
    buttontext:{
      color:'white', 
      textAlign:'center',
      fontFamily: 'KohinoorDevanagari-Semibold'
    },
    searchstyle: {
      width: 300,
    }
});

export default SearchEnginesMaterial;