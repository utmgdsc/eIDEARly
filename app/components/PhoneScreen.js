
import React, { useState, UseState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Button, Pressable, SafeAreaView, FlatList, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "react-native-dynamic-search-bar";
//import PhoneScreenWelcome from "./phoneScreenWelcome.mdx";


function PhoneScreen({ navigation, setMaterial }) {

  const [Search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  useEffect(() => {
    async function fetchdata() {
      let headersList = {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": "EkwedxOG4B1jYHpBLrjYeGWM9nBxZPFFTMu1tDwazlhKbtNOfHMhxv64GnP6lXg4"
       }
       
       let bodyContent = JSON.stringify({
         "dataSource": "Cluster0",
         "database": "eldearly",
         "collection": "phone"
       });
       
       let response = await fetch("https://data.mongodb-api.com/app/data-mrnjo/endpoint/data/v1/action/find", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       let data = await response.json();
        setFilteredDataSource(data.documents);
        setMasterDataSource(data.documents);
    }
    fetchdata();
  }, []);
 
  const searchFilterFunction = (text) => {
    if (text) {
  
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase().trim()
          : ''.toUpperCase();
        const bodyData = item.content ? item.content.toUpperCase().trim()
        : ''.toUpperCase();;
        const textData = text.toUpperCase();
        return (itemData.indexOf(textData) > -1 || bodyData.indexOf(textData) > -1);
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
 

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.button}
        onPress={() => {
          setMaterial(item.content);
          navigation.navigate('MD');
          }}>
        
        
          {item.title.toUpperCase()}
      </Text>
    );
  };
   
 
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title + ' Not implemented');
  };
 


  return (
    <View style={styles.container}>
    <ImageBackground
   style={styles.backgroundImage}
   source={require('../assets/15.png')}> 
    {/* <LinearGradient
    colors={['#8FA5A8', '#8FA5A8', '#E6B1B1']}
      style={styles.container}
    > */}

<Image style={styles.pic} source={{uri: "https://cdn.dribbble.com/users/187497/screenshots/1291104/iphone.gif"}}/>   
<Text style={{fontSize:50, fontStyle:'italic', color:'white', fontWeight:'bold', marginTop:0, marginLeft:130}}>Phone</Text> 

<Text style={{paddingBottom: 20, textAlign:'center', color:'white', padding:5, fontSize:15,
    fontWeight:'bold',
    textAlign:'center'}}>Welcome to our hub for learning how to use your phone in today's society!
  Use the search bar below to ask your question, or click on any of our most
  frequently asked questions below!
  </Text>

<Text style={{fontWeight: "bold", fontSize: 20, color:'white', padding:10, marginLeft:50}}>
Frequently Asked Questions
</Text>
        <SearchBar
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        backgroundColor="white"
        placeholder="Search here"
        style={styles.searchstyle}   
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        onClearPress={(text) => searchFilterFunction('')}
        />
         <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />
      

{/* 
<View style={{flexDirection:'row', alignContent:'flex-end'}}>
<AppButton title="FAQ1" onPress={() => alert("Currently not implemented")}/>
<AppButton title="FAQ2" onPress={() => alert("Currently not implemented")}/>

 </View>   
 <View style={{flexDirection:'row', alignContent:'flex-end'}}>
<AppButton title="FAQ1" onPress={() => alert("Currently not implemented")}/>
<AppButton title="FAQ2" onPress={() => alert("Currently not implemented")}/>
 </View>    */}
    {/* </LinearGradient> */}
    </ImageBackground>
    </View>  
  );
}

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
<Text style={styles.buttontext}>{title}</Text>
  </TouchableOpacity>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:15
  },
  logo:{
    width: 400, 
    height: 250, 
    position:'absolute', 
    top:40

  },
  pic:{
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft:90
  },
  text: {
    fontSize:20,
    color:'white',
    fontFamily: 'KohinoorDevanagari-Semibold',
    position:'absolute',
    top:250,
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  button:{
    backgroundColor:'#E23B53',
    borderWidth:2,
    borderColor:'white',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 30,
    margin:20,
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  buttontext:{
    color:'white', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  searchstyle: {
    width: 300,
    marginBottom:10
  }


});

export default PhoneScreen;


