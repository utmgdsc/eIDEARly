import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";
// Provide custom components for markdown elements
const components = {

  h1: props => <View><Text style={[styles.weights.w900, styles.h1fontsize, styles.fontcollection.TNR]} {...props} /></View>,
  h2: props => <View><Text style ={[styles.weights.bold, styles.h2fontsize]} {...props} /></View>,
  h3: props => <View><Text style ={[styles.weights.bold, styles.h3fontsize]} {...props} /></View>,
  h4: props => <View><Text style ={[styles.weights.bold, styles.h4fontsize]} {...props} /></View>,
  h5: props => <View><Text style = {[styles.weights.bold, styles.h5fontsize]} {...props} /></View>,
  p: props => <View><Text {...props} /></View>,
  strong: props => <View><Text style ={styles.weights.bold} {...props}/></View>,
  br: props => <View><Text>{'\n'}</Text></View>,
  u: props => <View><Text style = {styles.underline} {...props}></Text></View>,
  blockquote: props => <View><Text><blockquote {...props} /></Text></View>,
  em: props => <View><Text style = {styles.italic} {...props} /></View>,
  i: props => <View><Text style = {styles.italic} {...props} /></View>,
  sub: props => <View><Text style = {{lineHeight: 18}} {...props}/></View>,
  sup: props => <View><Text style = {{lineHeight: 30}} {...props}/></View>,
  a: props => <View><TouchableOpacity><Text style = {{color: 'blue'}} onPress= {() => Linking.openURL({...props})}> {...props}</Text></TouchableOpacity></View>,
  img: props => <View><Image source = {{...props}} resizeMode="contain" style = {styles.logo} /></View>
  // img prop can accept any string, have to implement RegEx here in order to only accept valid image input
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
  logo: {
    height: 80
  },
  italic: {
    fontStyle: 'italic'
  },
  underline: {
    textDecorationLine: 'underline'
  },

  weights: {
    bold: {fontWeight: 'bold'},
    regular: {fontWeight: 'normal'},

    w100: {fontWeight: '100'},
    w200: {fontWeight: '200'},
    w300: {fontWeight: '300'},
    w400: {fontWeight: '400'},
    w500: {fontWeight: '500'},
    w600: {fontWeight: '600'},
    w700: {fontWeight: '700'},
    w800: {fontWeight: '800'},
    w900: {fontWeight: '900'}
  },
  h1fontsize: {
    fontSize: 60,
  },
  h2fontsize: {
    fontSize: 52
  },

  h3fontsize: {
    fontSize: 46
  },
  h4fontsize: {
    fontSize: 38
  },
  h5fontsize: {
    fontSize: 30
  },
  fontcollection: {
    arial: {
      fontFamily: 'Arial'
    },
    TNR: {
      fontFamily: 'Times New Roman'
    }

  }

});


