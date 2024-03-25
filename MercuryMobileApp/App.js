// See README.md for information about this file and how to make updates

import * as React from 'react';

// navigation imports -- see the README for links to more information about these
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// not using most of these but I'm scared to get rid of them
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';

// screen imports
import ReciprocityScreen from './screens/reciprocityCalculator';
import DOFScreen from './screens/dofCalculator';
import HomeScreen from './screens/home';
import BaseScreen from './screens/baseCalculator';
import UserGuideScreen from './screens/userGuide';


const Stack = createNativeStackNavigator();

// header logo component, used on every screen! Updates made here will be applied to every screen
const HeaderLogo = () => {
  return (
    <Image
      style={{ width: 45, height: 45}}
      source={require('./assets/images/mercuryLogoWhiteOnBlack.png')}
    />
  )
}

// main app function
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" // will load the home screen (from home.js) as the initial screen
        screenOptions={{
          headerTitle: () => <HeaderLogo/>,
          headerStyle: { 
            backgroundColor: '#000000',
          }
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
          name="UserGuideScreen"
          component={UserGuideScreen}
        />

        {/* add more pages here as they're made. Copy and paste, then just change the name and component.*/}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
