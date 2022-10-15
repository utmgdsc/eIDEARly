import { StyleSheet, Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";
// Provide custom components for markdown elements
const components = {

  h1: props => <View><Text style={[styles.weights.w900, styles.h1fontsize, styles.fontcollection.TNR]} {...props} /></View>,
  h2: props => <View><Text style ={[styles.weights.bold, styles.h2fontsize]} {...props} /></View>,
  h3: props => <View><Text style ={[styles.bold, styles.h3fontsize]} {...props} /></View>,
  h4: props => <View><Text style ={[styles.bold, styles.h4fontsize]} {...props} /></View>,
  h5: props => <View><Text style = {[styles.bold, styles.h5fontsize]} {...props} /></View>,
  p: props => <View><Text {...props} /></View>,
  strong: props => <View><Text style ={styles.weights.bold} {...props}/></View>,
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
