
import React, { useState, UseState, useEffect} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Button, Pressable, SafeAreaView, FlatList, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "react-native-dynamic-search-bar";
//import PhoneScreenWelcome from "./phoneScreenWelcome.mdx";

//this is App Screen 
function AppScreen() {

  const [Search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


  useEffect(() => {

    const customData = require('./dataapp.json');
    setFilteredDataSource(customData);
        setMasterDataSource(customData);
  }, []);
 
  const searchFilterFunction = (text) => {
    if (text) {
  
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.body
          ? item.body.toUpperCase().trim()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
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
        onPress={() => getItem(item)}>
          {item.body.toUpperCase()}
      </Text>
    );
  };
   
 
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title + ' Not implemented');
  };
 


  return (
    <LinearGradient
    colors={['#8FA5A8', '#8FA5A8', '#E6B1B1']}
      style={styles.container}
    >
   
<Text style={{fontSize:50, fontStyle:'italic', color:'white', fontWeight:'bold', marginTop:50}}>Applications</Text> 
<Text style={{paddingBottom: 20, textAlign:'center', color:'white', padding:30}}>Welcome to our hub for learning how to use your phone in today's society!
  Use the search bar below to ask your question, or click on any of our most
  frequently asked questions below!
  </Text>

<Text style={{fontWeight: "bold", fontSize: 20, color:'white', padding:10}}>
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
    </LinearGradient>
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
  },
  logo:{
    width: 400, 
    height: 250, 
    position:'absolute', 
    top:40

  },
  text: {
    fontSize:'20',
    color:'white',
    fontFamily: 'KohinoorDevanagari-Semibold',
    position:'absolute',
    top:250
  },
  button:{
    backgroundColor:'#FF9F9F',
    borderWidth:3,
    borderColor:'white'
,   borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    margin:20,
    color:'white'
  },
  buttontext:{
    color:'white', 
    textAlign:'center',
    fontFamily: 'KohinoorDevanagari-Semibold'
  },
  searchstyle: {
    width: 300,
  }


});

export default AppScreen;


