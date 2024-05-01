// See README.md for information about this file and how to make updates

import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Pressable, ScrollView} from 'react-native';


// Home screen of app
const HomeScreen = ({navigation}) => {
    return(
      <SafeAreaView style={homeStyle.container}>
        <ScrollView>
          {/*Title of the app*/}
          <Text style={homeStyle.textTitle} accessible={true} accessibilityLabel="Mercury Stereo Toolkit" accessibilityRole="text">Mercury Stereo Toolkit</Text>
          
          {/*Button to navigate to the Hyperfocal tab on the DOF screen*/}
          <Pressable onPress={() => navigation.navigate("DOFScreen", {tab: 0})} style={homeStyle.button} accessible={true} accessibilityLabel="Hyperfocal" accessibilityHint="Navigates to the hyperfocal calculator screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/mercuryLogoBlackOnWhite.png')}
            />
            <Text style={homeStyle.buttonText}>HYPERFOCAL</Text>
          </Pressable>
          
          {/*Button to navigate to the DOF tab on the DOF screen*/}
          <Pressable onPress={() => navigation.navigate("DOFScreen", {tab: 1})} style={homeStyle.button} accessible={true} accessibilityLabel="Depth of field" accessibilityHint="Navigates to the depth of field calculator screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/mercuryLogoBlackOnWhite.png')}
            />
            <Text style={homeStyle.buttonText}>DEPTH OF FIELD</Text>
          </Pressable>

          {/*Button to navigate to the Close Focus Calculator screen*/}
          <Pressable onPress={() => navigation.navigate("CloseFocusScreen")} style={homeStyle.button} accessible={true} accessibilityLabel="Depth range (close up)" accessibilityHint="Navigates to the close focus calculator screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/ruler.png')}
            />
            <Text style={homeStyle.buttonText}>DEPTH RANGE (CLOSE UP)</Text>
          </Pressable>

          {/*Button to navigate to the Base Distance Calculator screen*/}
          <Pressable onPress={() => navigation.navigate("BaseScreen")}style={homeStyle.button} accessible={true} accessibilityLabel="Base distance (hypo/hyper)" accessibilityHint="Navigates to the base distance calculator screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/base.png')}
            />
            <Text style={homeStyle.buttonText}>BASE DISTANCE (HYPO/HYPER)</Text>
          </Pressable>
    

          {/*Button to navigate to the Reciprocity Calculator screen*/}
          <Pressable onPress={() => navigation.navigate("ReciprocityScreen")} style={homeStyle.button} accessible={true} accessibilityLabel="Reciprocity (long exposures)" accessibilityHint="Navigates to the reciprocity calculator screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/timer.png')}
            />
            <Text style={homeStyle.buttonText}>RECIPROCITY (LONG EXPOSURES)</Text>
          </Pressable>


          {/*Button to navigate to the Stereo System User Guide screen*/}
          <Pressable onPress={() => navigation.navigate("UserGuideScreen")} style={homeStyle.button} accessible={true} accessibilityLabel="Mercury Stereo user guide" accessibilityHint="Navigates to the stereo system user guide screen" accessibilityRole="button">
            <Image
              style={{ width: 25, height: 25, alignSelf: 'center', marginRight: 8}}
              source={require('../assets/images/mercuryLogoBlackOnWhite.png')}
            />
            <Text style={homeStyle.buttonText}>MERCURY STEREO USER GUIDE</Text>
          </Pressable>

          {/*Button to navigate to the About screen*/}
          <Pressable onPress={() => navigation.navigate("AboutScreen")} style={homeStyle.buttonAbout} accessible={true} accessibilityLabel="About" accessibilityHint="Navigates to the about screen" accessibilityRole="button">
            <Text style={homeStyle.buttonTextAbout}>ABOUT</Text>
          </Pressable>

          {/*Add new buttons here as new screens are created!*/}


        </ScrollView>
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
      marginTop: 55,
      margin: 5,
      fontSize: 35,
      textAlign: 'center',
      fontWeight: 'bold',
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
    // Styling the Pressable component, functions as a button but it has more styling options
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
      height: 50,
      width: '90%',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    buttonAbout: {
      height: 50,
      width: '90%',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
    }, 
    buttonText: {
      alignSelf: 'center',
      fontSize: 18,
    },
    buttonTextAbout: {
      alignSelf: 'center',
      fontSize: 18,
      color: '#007AFF',
    },

  });


export default HomeScreen;