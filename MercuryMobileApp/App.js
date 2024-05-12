// See README.md for information about this file and how to make updates

import * as React from 'react';

// navigation imports -- see the README for links to more information about these
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Header } from '@react-navigation/elements';

// not using most of these but I'm scared to get rid of them
import { StyleSheet, Text, View, Button, SafeAreaView, Image, Pressable, Platform, StatusBar} from 'react-native';

// screen imports
import ReciprocityScreen from './screens/reciprocityCalculator';
import DOFScreen from './screens/dofCalculator';
import HomeScreen from './screens/home';
import BaseScreen from './screens/baseCalculator';
import CloseFocusScreen from './screens/closeFocusCalculator';
import UserGuideScreen from './screens/userGuide';
//import UserGuideScreen from './screens/userGuide2';   // alternate user guide screen where I was testing stuff out
import AboutScreen from './screens/about';


const Stack = createNativeStackNavigator();

// header logo component, used on every screen! Updates made here will be applied to every screen
const HeaderLogo = () => {
  return (
      <Image
        style={{ width: 50, height: 50, alignSelf: 'center'}}
        source={require('./assets/images/mercuryLogoWhiteOnBlack.png')}
      />
  )
}

// main app function
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Stack.Navigator 
        initialRouteName="Home" // will load the home screen (from home.js) as the initial screen
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          //headerTransparent: false,
          //headerMode: 'float',
          header: ({navigation}) => (
            <SafeAreaView style= {{flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', backgroundColor: 'black', height: 0}}>     
              <View style={{backgroundColor:'black', height: 50, width: '100%'}}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                  <HeaderLogo/>
                </Pressable>
              </View>           
                
            </SafeAreaView>
          )
        }}
      >
        <Stack.Screen 
          name="Home"  
          component={HomeScreen}
        />
        <Stack.Screen 
          name="DOFScreen"  
          component={DOFScreen}
        /> 

        <Stack.Screen
          name="ReciprocityScreen"
          component={ReciprocityScreen}
        />

        <Stack.Screen
          name="BaseScreen"
          component={BaseScreen}
        />

        <Stack.Screen
          name="CloseFocusScreen"
          component={CloseFocusScreen}
        />

        <Stack.Screen
          name="UserGuideScreen"
          component={UserGuideScreen}
        />

        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
        />

        {/* add more pages here as they're made. Copy and paste, then just change the name and component.*/}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
