import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';


// Home screen of app
const HomeScreen = ({navigation}) => {
    return(
      <SafeAreaView style={homeStyle.container}>
        <Text style={homeStyle.text}>Welcome to Mercury Works!</Text>
        <View style={homeStyle.button}>
          <Button 
            title= "Depth of field calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 0, lensName: 'Apo-Digitar 35mm f/5.6 XL', baseName: 'RS0, B6.4', spacerName: 'none', DOFResults: false})}
          />
        </View>
  
        <View style={homeStyle.button}>
          <Button 
            title= "Hyperfocal calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 1, lensName: 'Apo-Digitar 35mm f/5.6 XL', hyperfocalResults: false, fStop: 'F-22'})}
          />
        </View>
  
        <View style={homeStyle.button}>
          <Button 
            title= "Reciprocity calculator"
            onPress={() => navigation.navigate("ReciprocityScreen", {showResults: false, playTimer: false})}
          />
        </View>
  
        {/*console.log("home screen rendered")*/}
  
      </SafeAreaView>
    )
  }
  
  
  //Stylesheet for the app home page
  const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'tops',
    },
    text: {
      color: 'white',
      margin: 50,
      fontSize: 20,
    },
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 5,
    }
  });


export default HomeScreen;