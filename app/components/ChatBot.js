import { useState } from "react";
// import { Configuration, OpenAIApi } from "openai";
import {ScrollView, ImageBackground, Image, StyleSheet, Text, View, TouchableOpacity, Button, Pressable, SafeAreaView, FlatList, Alert, TextInput} from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";


export default function ChatBot() {
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState("result");
  
  async function onSubmitE() {
    console.log(questionInput)
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + "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"

     }
     
     let bodyContent = JSON.stringify({
       "model": "text-davinci-003",
       "prompt": questionInput,
       "max_tokens": 500,
       "temperature": 0
     });

     let response = await fetch("https://api.openai.com/v1/completions", { 
      method: "POST",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.json();
    setResult(data.choices[0].text);
  }

  return (  
    <View style={styles.container}>
    <ImageBackground
   style={styles.backgroundImage}
   source={require('../assets/pic.png')}> 
<SafeAreaView>
<ScrollView>


<TextInput style={styles.textbox}
  onChangeText={newText => setquestionInput(newText)}
  placeholder="how do i click a selfie..."
  keyboardType="default"
></TextInput>

<Text style={styles.textbox1} onPress={() => {onSubmitE()}}>Submit</Text>
<ScrollView>
<Text style={styles.textbox2}>{result}</Text>
</ScrollView>


</ScrollView>
</SafeAreaView>
</ImageBackground>
</View>

  );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage:{
        height:'100%',
        width:'100%'
    },
    textbox:{
        backgroundColor:'#F6F3E4',
        borderWidth:3,
        borderColor:'#E9583E',
        paddingVertical: 30,
        paddingHorizontal: 5,
        marginTop:420,
        margin:10,
        color:'black',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
      },
      textbox1:{
        backgroundColor:'#E9583E',
        borderWidth:0,
        borderColor:'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin:10,
        marginHorizontal:100,
        color:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.6,
    shadowRadius: 10,
      },

      textbox2:{
        backgroundColor:'#FFFFFF',
        borderWidth:2,
        borderColor:'black',
        paddingVertical: 10,
        paddingHorizontal: 5,
        margin:10,
        color:'black',
        fontSize:18,
        textAlign:'center',
        fontWeight:'bold',
      },
  
  });