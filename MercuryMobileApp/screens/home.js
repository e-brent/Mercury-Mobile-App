// See README.md for information about this file and how to make updates

import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';


// Home screen of app
const HomeScreen = ({navigation}) => {
    return(
      <SafeAreaView style={homeStyle.container}>

        {/*Title of the app*/}
        <Text style={homeStyle.textTitle} accessible={true} accessibilityLabel="Mercury works" accessibilityRole="text">Mercury Works</Text>
        <Text style={homeStyle.textSubtitle} accessible={true} accessibilityLabel="The world's first universal camera" accessibilityRole="text">The World's First Universal Camera</Text>

        {/*Maybe add more explanation/about here? Not sure if any text is required. Also not sure if this should go before or after the navigation buttons?*/}

        {/*Button to navigate to the DOF tab on the DOF screen*/}
        <View style={homeStyle.button} accessible={true} accessibilityLabel="Depth of field calculator" accessibilityHint="Navigates to the depth of field calculator screen" accessibilityRole="button">
          <Button 
            title= "Depth of field calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 0})} // {tab: 0} is a parameter passed to DOFScreen so that it has the correct initial tab open
            color="#000000" // changes the color of the text in the buttons to black
          />
        </View>
  
        {/*Button to navigate to the Hyperfocal tab on the DOF screen*/}
        <View style={homeStyle.button} accessible={true} accessibilityLabel="Hyperfocal calculator" accessibilityHint="Navigates to the hyperfocal calculator screen" accessibilityRole="button">
          <Button 
            title= "Hyperfocal calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 1})} // {tab: 1} is a parameter passed to DOFScreen so that it has the correct initial tab open
            color="#000000"
          />
        </View>
  

        {/*Button to navigate to the Reciprocity Calculator screen*/}
        <View style={homeStyle.button} accessible={true} accessibilityLabel="Reciprocity calculator" accessibilityHint="Navigates to the reciprocity calculator screen" accessibilityRole="button">
          <Button 
            title= "Reciprocity calculator"
            onPress={() => navigation.navigate("ReciprocityScreen")}
            color="#000000"
          />
        </View>


        {/*Button to navigate to the Base Distance Calculator screen*/}
        <View style={homeStyle.button} accessible={true} accessibilityLabel="base distance calculator" accessibilityHint="Navigates to the base distance calculator screen" accessibilityRole="button">
          <Button 
            title= "Base distance calculator"
            onPress={() => navigation.navigate("BaseScreen")}
            color="#000000"
          />
        </View>

        {/*Button to navigate to the Stereo System User Guide screen*/}
        <View style={homeStyle.button} accessible={true} accessibilityLabel="stereo system user guide" accessibilityHint="Navigates to the stereo system user guide screen" accessibilityRole="button">
          <Button 
            title= "Stereo system user guide"
            onPress={() => navigation.navigate("UserGuideScreen")}
            color="#000000"
          />
        </View>

        {/*Add new buttons here as new screens are created!*/}

  
      </SafeAreaView>
    )
  }
  
  
  // Stylesheet for the app home page
  const homeStyle = StyleSheet.create({
    // background of the page
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'tops',
    },
    // Main title
    textTitle: {
        color: 'white',
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
      },
    // Subtitle 
    textSubtitle: {
      color: 'white',
      margin: 5,
      marginBottom: 15,
      fontSize: 22,
      textAlign: 'center',
    },
    // Body text
    text: {
      color: 'white',
      margin: 8,
      marginTop: 13,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    // View around the buttons -- buttons themselves don't have a lot of styling options, so I mostly styled the views as needed
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
    }
  });


export default HomeScreen;