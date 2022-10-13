import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";

// Provide custom components for markdown elements
const components = {
  h1: props => <Text style={{color: 'tomato'}} {...props} />,
  p: props => <Text {...props} />,
  b: props => <Text style ={styles.bold} {...props}/>,
  br: props => <Text>{'\n'}</Text>,
  img: props => <Image source = {...props}></Image>,
  em: props => <Text style = {styles.italic} {...props}></Text>,
  u: props => <Text style = {styles.underline} {...props}></Text>
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
