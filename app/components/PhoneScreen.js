import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from './Markdown'
function PhoneScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text><Markdown mdx = {`## Phone Screen - Daksh`}/></Text>
    </View>
  );
}

export default PhoneScreen;