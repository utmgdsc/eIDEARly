import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Markdown from './Markdown'
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><Markdown mdx = {`# Welcome to elDEARly`}/></Text>
      <Button
        title="Phone"
        onPress={() => navigation.navigate('Phone')}
      />
      <Button
        title="Internet"
        onPress={() => navigation.navigate('Internet')}
      />
      <Button
        title="Apps"
        onPress={() => navigation.navigate('Apps')}
      />
    </View>
  );
}

export default HomeScreen;