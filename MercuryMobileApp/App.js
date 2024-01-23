import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; //might be using?? maybe not, still figuring out best way to do forms


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"  
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="DOFScreen"  
          component={DOFScreen} 
        /> 

        {/* can add more pages here as they're made */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Home screen of app
const HomeScreen = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text>Welcome to Mercury Works!</Text>
      <Button 
        title= "Go to DOF calculator"
        onPress={() => navigation.navigate("DOFScreen")}
      />
    </View>
  )
}

// DOF screen of app
const DOFScreen = ({route, navigation}) => {
  return(
    <View style={styles.container}>
      <Text>DOF Calculator</Text>
      <Button 
        title= "Back to Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
