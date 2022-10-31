import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from './Markdown'
function AppScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><Markdown mdx = {`## App Screen`}/></Text>
    </View>
  );
}

export default AppScreen;