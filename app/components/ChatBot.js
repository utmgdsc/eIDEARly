import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, Pressable, SafeAreaView, FlatList, Alert, TextInput} from 'react-native';

export default function Home() {
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState("result");
  
  async function onSubmitE() {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + process.env.TOKEN
     }
     
     let bodyContent = JSON.stringify({
       "model": "text-davinci-003",
       "prompt": questionInput,
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
<SafeAreaView>

<Text style={{fontWeight:'bold', alignContent:'center', marginLeft:130, marginTop:40}}>As me a question</Text>

<TextInput
  // style={styles.input}
  onChangeText={newText => setquestionInput(newText)}
  placeholder="how do i click a selfie..."
  keyboardType="default"
/>

<Text onPress={() => {onSubmitE()}}>Submit</Text>
<Text>{result}</Text>

</SafeAreaView>
  );
}
