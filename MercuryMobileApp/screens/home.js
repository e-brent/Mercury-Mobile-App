import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';


// Home screen of app
const HomeScreen = ({navigation}) => {
    return(
      <SafeAreaView style={homeStyle.container} accessible={true} accessibilityLabel="Home page">
        <Text style={homeStyle.textTitle}>Mercury Works</Text>
        <Text style={homeStyle.textSubtitle}>The World's First Universal Camera</Text>


        <View style={homeStyle.button} accessible={true} accessibilityLabel="Depth of field calculator" accessibilityHint="Navigates to the depth of field calculator screen">
          <Button 
            title= "Depth of field calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 0})}
            color="#000000"
          />
        </View>
  
        <View style={homeStyle.button} accessible={true} accessibilityLabel="Hyperfocal calculator" accessibilityHint="Navigates to the hyperfocal calculator screen">
          <Button 
            title= "Hyperfocal calculator"
            onPress={() => navigation.navigate("DOFScreen", {tab: 1})}
            color="#000000"
          />
        </View>
  
        <View style={homeStyle.button} accessible={true} accessibilityLabel="Reciprocity calculator" accessibilityHint="Navigates to the reciprocity calculator screen">
          <Button 
            title= "Reciprocity calculator"
            onPress={() => navigation.navigate("ReciprocityScreen")}
            color="#000000"
          />
        </View>

        <View style={homeStyle.button} accessible={true} accessibilityLabel="base distance calculator" accessibilityHint="Navigates to the base distance calculator screen">
          <Button 
            title= "Base distance calculator"
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
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
      },
      textSubtitle: {
        color: 'white',
        margin: 5,
        marginBottom: 15,
        fontSize: 22,
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