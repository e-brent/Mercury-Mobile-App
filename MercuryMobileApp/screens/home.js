import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';


// Home screen of app
const HomeScreen = ({navigation}) => {
    return(
      <SafeAreaView style={homeStyle.container}>
        <Text style={homeStyle.textTitle}>Welcome to Mercury Works!</Text>
        <View style={homeStyle.button}>
          <Button 
            title= "Depth of field calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 0, lensName: 'Apo-Digitar 35mm f/5.6 XL', baseName: 'RS0, B6.4', spacerName: 'none', DOFResults: false})}
            color="#000000"
          />
        </View>
  
        <View style={homeStyle.button}>
          <Button 
            title= "Hyperfocal calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 1, lensName: 'Apo-Digitar 35mm f/5.6 XL', hyperfocalResults: false, fStop: 'F-22'})}
            color="#000000"
          />
        </View>
  
        <View style={homeStyle.button}>
          <Button 
            title= "Reciprocity calculator"
            onPress={() => navigation.navigate("ReciprocityScreen", {showResults: false, playTimer: false})}
            color="#000000"
          />
        </View>

        <View style={homeStyle.button}>
          <Button 
            title= "Base calculator"
            onPress={() => navigation.navigate("BaseScreen")}
            color="#000000"
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
      justifyContent: 'tops',
    },
    textTitle: {
        color: 'white',
        margin: 5,
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
      },
    text: {
      color: 'white',
      margin: 8,
      marginTop: 13,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
    }
  });


export default HomeScreen;