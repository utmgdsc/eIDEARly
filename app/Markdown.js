import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";

// Provide custom components for markdown elements
const components = {
  h1: props => <View><Text style={{color: 'tomato'}} {...props} /></View>,
  p: props => <View><Text {...props} /></View>,
  strong: props => <View><Text style ={styles.bold} {...props}/></View>,
  br: props => <View><Text>{'\n'}</Text></View>,
  em: props => <View><Text style = {styles.italic} {...props}></Text></View>,
  u: props => <View><Text style = {styles.underline} {...props}></Text></View>
}
// Provide variables that might be referenced by JSX
const scope = {
    some: 'value'
}

export default function Markdown({mdx}) {
  return (
    <View>
      <MDX components={components} scope={scope}>{mdx}</MDX>
    </View>
  );
}


const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  }
  

});
