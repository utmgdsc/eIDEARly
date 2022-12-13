import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, Pressable, SafeAreaView, FlatList, Alert, TextInput} from 'react-native';

export default function Home() {
  const [questionInput, setquestionInput] = useState("");
  const [result, setResult] = useState("result");
  
  async function onSubmitE() {
    console.log(questionInput)
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
     }
     
     let bodyContent = JSON.stringify({
       "model": "text-davinci-003",
       "prompt": questionInput,
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

    // <div>
    //   <main className={styles.main}>
    //     <h3>Ask me</h3>
    //     <form onSubmit={onSubmit}>
    //       <input
    //         type="text"
    //         name="question"
    //         placeholder="Question here"
    //         value={questionInput}
    //         onChange={(e) => setquestionInput(e.target.value)}
    //       />
    //       <input type="submit" value="Get answer" />
    //     </form>
    //     <div className={styles.result}>{result}</div>
    //   </main>
    // </div>
  );
}
