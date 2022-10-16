import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function InternetScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Internet Screen</Text>

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

export default InternetScreen;