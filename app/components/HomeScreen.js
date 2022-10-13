import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to elDEARly</Text>
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