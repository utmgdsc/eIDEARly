import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from './Markdown'
function InternetScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><Markdown mdx = {`## Internet Screen`}/></Text>
    </View>
  );
}

export default InternetScreen;