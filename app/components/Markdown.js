import { StyleSheet, Text, View, Linking, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from "expo-status-bar";
import MDX from "@mdx-js/runtime";
import { useState } from 'react';
const components = {

  h1: props => <View><Text style={[styles.textbox, styles.weights.w900, styles.h1fontsize, styles.fontcollection.TNR]} {...props} /></View>,
  h2: props => <View><Text style ={[styles.textbox1, styles.weights.bold]} {...props} /></View>,
  h3: props => <View><Text style ={[styles.c, styles.weights.bold, styles.h3fontsize]} {...props} /></View>,
  h4: props => <View><Text style ={[styles.c, styles.weights.bold, styles.h4fontsize]} {...props} /></View>,
  h5: props => <View><Text style = {[styles.c, styles.para_align, styles.weights.bold, styles.h5fontsize]} {...props} /></View>,
  p: props => <View><Text style = {[styles.textbox2, styles.weights.w500, styles.regularfontsize, styles.fontcollection.arial]} {...props} /></View>,
  strong: props => <View><Text style ={[styles.fontColor, styles.weights.bold, styles.h5fontsize]} {...props}/></View>,
  br: props => <View><Text>{'\n'}</Text></View>,
  u: props => <View><Text style = {[styles.c, styles.underline]} {...props}></Text></View>,
  blockquote: props => <View><Text><blockquote style = {styles.c} {...props} /></Text></View>,
  em: props => <View><Text style = {[styles.c, styles.italic]} {...props} /></View>,
  i: props => <View><Text style = {[styles.c, styles.italic]} {...props} /></View>,
  sub: props => <View><Text style =  {{lineHeight: 18}}  {...props}/></View>,
  sup: props => <View><Text style = {{lineHeight: 30}} {...props}/></View>,
  image: props => <View><Image style={styles.pic} source={{uri: props.children}}/></View>,
  option: props => <View><QuizMaker entirequiz={props.children}/></View>
  //a: props => <View><TouchableOpacity><Text style = {{color: 'blue'}} onPress= {() => Linking.openURL(props.href)}> {props.title} {props.children}</Text></TouchableOpacity></View>
  // img prop can accept any string, have to implement RegEx here in order to only accept valid image input
}
// Provide variables that might be referenced by JSX
function QuizMaker({entirequiz}) {

  const [on, setOn] = useState(false);

  function f(){
    setOn(true);
  }
  var arr = entirequiz.split(',');

  return arr.map((data) => {
    // console.log(data);
    if (JSON.stringify(data).indexOf('[Y]') == -1){
      return (
        <View>
          <TouchableOpacity style={{marginLeft:50, marginTop:20}}>
            <Text style = {styles.c}>{data}</Text>
          </TouchableOpacity>
        </View>
      )
      }
      // should turn red on press
    else{
      var x = JSON.stringify(data).lastIndexOf("[Y]")
      data = JSON.stringify(data).substring(1,x)
      return (
        <View style={{marginLeft:50,marginTop:20}}>
          <TouchableOpacity onPress={() => setOn(true)} style = {{backgroundColor: !on ? '#F7B9A1' : '#77D650'}}>
            <Text style = {styles.c1}>{data}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    // should turn green on press.
  })
}
const scope = {
    some: 'value'
}
export default function Markdown({mdx}) {
  return (
    <View style={{backgroundColor:'#61A6AB'}}>
      <MDX components={components} scope={scope}>{mdx}</MDX>
    </View>
  );
}


const styles = StyleSheet.create({

  fontColor:{
    color:'#237A83',
    textAlign:"center",
    
  },

  textbox:{
    backgroundColor:'#FF5757',
    borderWidth:4,
    borderColor:'white'
,   borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    margin:20,
    color:'white'
  },

  textbox1:{
    backgroundColor:'#FF5757',
    borderWidth:1,
    borderColor:'white'
,   borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    margin:10,
    color:'white',
    fontSize:18,
    textAlign:"center"
  },

  textbox2:{
    backgroundColor:'white',
    borderWidth:0,
    borderColor:'#FF9F9F'
,   borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    margin:10,
    color:'#237A83',
    fontSize:18,
    textAlign:"center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  para_align: {
    textAlign: "center"

  },
  c: {
    backgroundColor:'#F7B9A1',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 6,
    color:'black',
    fontSize:18,
    fontWeight:'bold'

  },
  c1: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    color:'black',
    fontSize:18,
    fontWeight:'bold'

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
    fontSize: 2
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
    fontSize: 17
  },
  pic:{
    width: 370,
    height: 400,
    resizeMode: 'contain'
  },
  fontcollection: {
    arial: {
      fontFamily: 'Helvetica-Bold'
    },
    TNR: {
      fontFamily: 'KohinoorDevanagari-Semibold'
    }

  },
 

});
