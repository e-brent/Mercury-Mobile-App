// See README.md for information about this file and how to make updates

import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Pressable, ScrollView, Linking, Alert} from 'react-native';



const mercuryStereoURL = 'https://www.mercurystereo.com';
const paypalURL = 'https://www.paypal.com/ncp/payment/TQDA8X6HZKP5Y';

const OpenURLLink = ({url, children}) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const OpenURLButton = ({url, children}) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button color="black" title={children} onPress={handlePress} />;
};


// About screen of app
const AboutScreen = () => {
    return(
        <SafeAreaView style={aboutStyle.container}>
            <Text style={aboutStyle.text} accessible={true} accessibilityLabel='App designed by Emmanuelle Brent' accessibilityRole='text'>App designed by Emmanuelle Brent</Text>
            <Text style={aboutStyle.text} accessible={true} accessibilityLabel='Copyright 2024 Mercury Works' accessibilityRole='text'>Copyright &copy; 2024 Mercury Works</Text>
            <View>
                <Text style={aboutStyle.text2} accessible={true} accessibilityLabel='For Medium Format 3D cameras, tools, and instructions, visit' accessibilityRole='text'>
                    For Medium Format 3D cameras, tools, and instructions, visit 
                </Text>
                <OpenURLLink url={mercuryStereoURL}>www.merucrystereo.com</OpenURLLink>
            </View>

            <View>
                <Text style={aboutStyle.text2} accessible={true} accessibilityLabel="Find this app useful? We'd be very grateful for a donation of any amount to support it!" accessibilityRole='text'>
                Find this app useful? We'd be very grateful for a donation of any amount to support it! 
                </Text>
                <View style={aboutStyle.button}>
                  <OpenURLButton url={paypalURL}>DONATE</OpenURLButton>
                </View>
            </View>

            <Text style={aboutStyle.text} accessible={true} accessibilityLabel='Special thanks to Ian Andvaag for Depth Range formulas.' accessibilityRole='text'>Special thanks to Ian Andvaag for Depth Range formulas.</Text>

        </SafeAreaView>
    );
}

// Stylesheet for the app home page
const aboutStyle = StyleSheet.create({
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
      marginTop: 8,
      fontSize: 15,
      textAlign: 'center',
      alignSelf: 'center',
    },
    // Body text v2
    text2: {
        color: 'white',
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
      },
    // View around the buttons -- buttons themselves don't have a lot of styling options, so I mostly styled the views as needed
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
      height: 50,
      width: '50%',
      alignSelf: 'center',
      display: 'flex',
      justifyContent: 'center',    
    }, 
    buttonText: {
      alignSelf: 'center',
      fontSize: 18,
    },
  });


export default AboutScreen;

//height: 50, backgroundColor: 'white', width: '90%', borderRadius: 10,
