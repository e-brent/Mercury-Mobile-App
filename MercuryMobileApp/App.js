import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; //might be using?? maybe not, still figuring out best way to do forms
import SegmentedControlTab from "react-native-segmented-control-tab";

import ReciprocityScreen from './screens/reciprocityCalculator';
import DOFScreen from './screens/dofCalculator';
import HomeScreen from './screens/home';
import BaseScreen from './screens/baseCalculator';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
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

        {/* can add more pages here as they're made */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderLogo = () => {
  return (
    <Image
      style={{ width: 45, height: 45}}
      source={require('./images/mercuryLogoWhiteOnBlack.png')}
    />
  )
}

export default App;
