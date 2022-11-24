import { StyleSheet, Text, View, Linking, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";
// Provide custom components for markdown elements
const components = {

  h1: props => <View><Text style={[styles.c, styles.weights.w900, styles.h1fontsize, styles.fontcollection.TNR]} {...props} /></View>,
  h2: props => <View><Text style ={[styles.c, styles.weights.bold, styles.h2fontsize]} {...props} /></View>,
  h3: props => <View><Text style ={[styles.c, styles.weights.bold, styles.h3fontsize]} {...props} /></View>,
  h4: props => <View><Text style ={[styles.c, styles.weights.bold, styles.h4fontsize]} {...props} /></View>,
  h5: props => <View><Text style = {[styles.c, styles.para_align, styles.weights.bold, styles.h5fontsize]} {...props} /></View>,
  p: props => <View><Text style = {[styles.c, styles.weights.w500, styles.regularfontsize, styles.fontcollection.arial]} {...props} /></View>,
  strong: props => <View><Text style ={[styles.weights.bold, styles.c]} {...props}/></View>,
  br: props => <View><Text>{'\n'}</Text></View>,
  u: props => <View><Text style = {[styles.c, styles.underline]} {...props}></Text></View>,
  blockquote: props => <View><Text><blockquote style = {styles.c} {...props} /></Text></View>,
  em: props => <View><Text style = {[styles.c, styles.italic]} {...props} /></View>,
  i: props => <View><Text style = {[styles.c, styles.italic]} {...props} /></View>,
  sub: props => <View><Text style =  {{lineHeight: 18}}  {...props}/></View>,
  sup: props => <View><Text style = {{lineHeight: 30}} {...props}/></View>,
  a: props => <View><TouchableOpacity><Text style = {{color: 'blue'}} onPress= {() => Linking.openURL(props.href)}> {props.title} {props.children}</Text></TouchableOpacity></View>,
  option: props => <QuizMaker entirequiz={props.children}/>
}

function QuizMaker({entirequiz}) {
  var arr = entirequiz.split(',');

  return arr.map((data) => {
    return (
      <View><TouchableOpacity style = {styles.option_style}><Text style = {styles.c}>{data}</Text></TouchableOpacity></View>
    )
  })
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
  para_align: {
    textAlign: "center"

  },
  c: {
    color: "black"
  },
  logo: {
    height: 80,
    width: 50
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
    fontSize: 34,
  },
  h2fontsize: {
    fontSize: 28
  },

  h3fontsize: {
    fontSize: 24
  },
  h4fontsize: {
    fontSize: 20
  },
  h5fontsize: {
    fontSize: 18
  },
  regularfontsize: {
    fontSize: 14
  }
  fontcollection: {
    arial: {
      fontFamily: 'Arial'
    },
    TNR: {
      fontFamily: 'Times New Roman'
    }

  }

});
