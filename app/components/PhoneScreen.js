import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
//import PhoneScreenWelcome from "./phoneScreenWelcome.mdx";

function PhoneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{paddingBottom: 20}}>Welcome to our hub for learning how to use your phone in today's society!
        Use the search bar below to ask your question, or click on any of our most
        frequently asked questions below!
      </Text>

      <Text style={{fontWeight: "bold", fontSize: 20}}>
      Frequently Answered Questions
      </Text>

      <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10}}>
        <Button
        color = "red"
        title = "FAQ1"
        onPress={() => alert("Currently not implemented")}
        />
        <View style={{flex: 0.3}}/>
        <Button
        color = "red"
        title = "FAQ2"
        onPress={() => alert("Currently not implemented")}
        />
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-evenly", padding: 10}}>
        <Button
        color = "red"
        title = "FAQ3"
        onPress={() => alert("Currently not implemented")}
        />
        <View style={{flex: 0.3}}/>
        <Button
        color = "red"
        title = "FAQ4"
        onPress={() => alert("Currently not implemented")}
        />
      </View>
    </View>
  );
}

export default PhoneScreen;