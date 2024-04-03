// See README.md for information about this file and how to make updates

import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';

// Special imports for this file, see README for links with more information about them
import { SelectList } from 'react-native-dropdown-select-list'; 
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio } from 'expo-av';

// Array/dictionary of key value pairs of different film stock for use in the dropdown menu
const filmStock = [
    {key: '1', value: 'Color negative'}, 
    {key: '2', value: 'Fuji Provia F (RDP III)'}, 
    {key: '3', value: 'Fuji Velvia, 64T'}, 
    {key: '4', value: 'Fuji Acros (I, II)'}, 
    {key: '5', value: 'Kodak Ektachrome E100'}, 
    {key: '6', value: 'Kodak Tri-X, Plus-X'},
    {key: '7', value: 'Kodak TMAX'},
    {key: '8', value: 'Ilford HP5+, XP2, Pan F'},
    {key: '9', value: 'Ilford FP4+, Delta 100'},
    {key: '10', value: 'Ilford Delta 400'}
];

// Global variable which stores the calculated reciprocity time, based on the selected film stock
var reciprocityTime = 0;
// Separate global variable which is used to pass the calculated reicprocity time to the timer... honestly I don't remember by just using reciprocityTime wasn't working, but it wasn't for some reason so idk
var timerTime = 0;

// Screen component
const ReciprocityScreen = () => {

  // State variables for saving data and updating the screen
    const [selectedFilm, setSelectedFilm] = React.useState(''); // Selected film stock
    const [time, onChangeTime] = React.useState('');            // The time entered by users in the textbox
    const [result, showResult] = React.useState(false);         // Boolean value for whether or not to display results
    const [updateResult, setUpdateResult] = React.useState(0);  // Value to increment to ensure that the screen is displayed with the most up-to-date data
    const [key, setKey] = React.useState(0);                    // Variable which allows the countdown timer to be restarted at any point
    const [playTimer, setPlayTimer] = React.useState(false);    // Boolean value which controls whether the countdown timer is playing or not
    const [timerEnd, setTimerEnd] = React.useState(false);      // Boolean variable to track whether the countdown timer has completed counting down (determines when sound plays and screen color turns red)
    const [sound, setSound] = React.useState();                 // Variable which the sound effect is assigned to
    

    // Given the film stock and an input time, calculates the reciprocity time
    const calculateReciprocity = (film, seconds) => {

      // Sets state variables to show/update results, stop the timer from playing, and change background color back to default
      showResult(true);
      setUpdateResult(updateResult + 1);
      setPlayTimer(false);
      setTimerEnd(false);

      // take user input (string number) and make it a number to be used for calculations
      seconds = parseFloat(seconds);

      // based on the selected film stock and time length, apply the correct formula to calculate the reciprocity time
      if (film.localeCompare('Color negative') == 0){
        reciprocityTime = seconds ** 1.35;
      }
      else if (film.localeCompare('Fuji Provia F (RDP III)') == 0){
        reciprocityTime = seconds;
      }
      else if (film.localeCompare('Fuji Velvia, 64T') == 0){
        reciprocityTime = -0.9718 + (seconds ** 1.1);
      }
      else if (film.localeCompare('Fuji Acros (I, II)') == 0){
        if (seconds > 120){
          reciprocityTime = seconds * 2;
        }
        else{
          reciprocityTime = seconds;
        }
      }
      else if (film.localeCompare('Kodak Ektachrome E100') == 0){
        if (seconds > 10){
          reciprocityTime = ((seconds + 1) ** (1/0.96)) - 1;
        }
        else{
          reciprocityTime = seconds;
        }
      }
      else if (film.localeCompare('Kodak Tri-X, Plus-X') == 0){
        reciprocityTime = seconds ** 1.54;
      }
      else if (film.localeCompare('Kodak TMAX') == 0){
        reciprocityTime = seconds ** 1.15;
      }
      else if (film.localeCompare('Ilford HP5+, XP2, Pan F') == 0){
        reciprocityTime = seconds ** 1.31;
      }
      else if (film.localeCompare('Ilford FP4+, Delta 100') == 0){
        reciprocityTime = seconds ** 1.26;
      }
      else {
        reciprocityTime  = seconds ** 1.41;
      }

      // Round the reciprocity time to one decimal point
      reciprocityTime = reciprocityTime.toFixed(1);
      // Assign the reciprocity time to the timerTime variable for use by the countdown timer
      timerTime = parseFloat(reciprocityTime);
    }

    // Function to load and play the sound effect from the audio directory under assets
    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/audio/beep1.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    // Effect to unload the sound after use
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    // Function to play the sound and set the state variable to control the UI when the timer ends
    const handleBackground = () => {
      playSound();
      setTimerEnd(true);
    }


    return (
      <SafeAreaView style={[(timerEnd == false) ? reciprocityStyle.containerRegular : reciprocityStyle.containerTimerEnd]}>
        <ScrollView>
          {/*Page title */}
            <Text style={reciprocityStyle.textTitle} accessible={true} accessibilityLabel="Reciprocity calculator" accessibilityRole="text">Reciprocity Calculator</Text>

          {/*Dropdown menu for selecting film stock to use in calculation*/}
            <Text style={reciprocityStyle.text} accessible={true} accessibilityLabel="Select film stock" accessibilityRole="text">Select film stock:</Text>
            <SelectList
              setSelected={(val) => setSelectedFilm(val)} // updates state variable
              data={filmStock}
              save="value"
              boxStyles={{marginBottom:12}}
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              onSelect = {() => setTimerEnd(false)}
              accessible={true}
              accessibilityHint="A searchable drop down menu to select a film stock option"
            />

          {/*Numeric text input for users to input a time to calculate reciprocity for */}
          <View style={reciprocityStyle.contentBlock}>
            <Text style={reciprocityStyle.text} accessible={true} accessibilityLabel="Enter time in seconds" accessibilityRole="text">Enter time:</Text>
            <TextInput
              style={reciprocityStyle.input}
              onChangeText={onChangeTime}
              value={time}
              placeholder='0'
              defaultValue='0'
              placeholderTextColor='#FFFFFF'
              inputMode='decimal'
              keyboardType='decimal-pad'
              enterKeyHint='done'
              returnKeyType='done'
              onSubmitEditing={() => calculateReciprocity(selectedFilm, time)}
              accessible={true}
              accessibilityLabel="Text entry box to enter a time in seconds"
            /> 
            <Text style={reciprocityStyle.text}> seconds</Text>
          </View>
            
          {/*Results text*/}
            {result && (<Text style={reciprocityStyle.timerText} accessible={true} accessibilityLabel="Calculated reciprocity time" accessibilityRole="text">Reciprocity time:  {reciprocityTime} seconds</Text>)}

          {/*Countdown timer*/}
            <View style = {reciprocityStyle.timer} accessible={true} accessibilityLabel="Countdown timer. Will sound when it reaches 0 if ringer is on">
              { result && (<CountdownCircleTimer
                key = {key}
                isPlaying = {playTimer}
                duration = {timerTime}
                colors = {['#FFFFFF']}
                trailColor = '#bd1004'
                onComplete = {() => {handleBackground()}} // when the timer ends, play the sound and turn the screen red to indicate
              >
                {({ remainingTime }) => <Text style={reciprocityStyle.insideTimerText} accessible={true} accessibilityRole="timer" accessibilityLiveRegion="assertive" importantForAccessibility="yes">{remainingTime}</Text>} {/*Text that is shown inside the timer */}
              </CountdownCircleTimer>)}
            </View>

            <View style = {reciprocityStyle.timer}>

            {/*Button to start/re-start the timer*/}
              { result && (<View style={reciprocityStyle.button} accessible={true} accessibilityLabel="Start timer" accessibilityHint="Click here to start the countdown timer" accessibilityRole="button">
                { result && (<Button
                title="Start timer"
                onPress = {() => {
                  setKey(prevKey => prevKey + 1);
                  setPlayTimer(true); 
                  setTimerEnd(false);
                }}
                color="#000000"
                />)}
                </View>)}

            {/*Notes for the bottom of the page to clarify some of the features to users */}
              {result && (<Text style={reciprocityStyle.noteText} accessible={true} accessibilityLabel="The displayed time on the timer will reset automatically when the timer is started" accessibilityRole="text">The displayed time on the timer will reset automatically when the timer is started.</Text>)}  
              {result && (<Text style={reciprocityStyle.noteText} accessible={true} accessibilityLabel="Turn ringer on or use headphones for sound" accessibilityRole="text">Turn ringer on or use headphones for sound.</Text>)}
            </View> 

          </ScrollView>           
      </SafeAreaView>
    )
}

// Stylesheet for the reciprocity calculator screen
const reciprocityStyle = StyleSheet.create({
    containerRegular: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'top',
    },
    containerTimerEnd: {
      flex: 1,
      backgroundColor: '#bd1004',
      justifyContent: 'top',
    },
    contentBlock: {
      flex: .2,
      flexDirection: 'row',
      marginTop: 20,
    },
    textTitle: {
      color: 'white',
      margin: 5,
      fontSize: 40,
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
    timerText: {
      color: 'white',
      margin: 20,
      marginTop: 40,
      fontSize: 20,
      alignSelf: 'center',
    },
    insideTimerText: {
      color: 'white',
      margin: 20,
      fontSize: 20,
      alignSelf: 'center',
    },
    noteText: {
      color: 'white',
      margin: 10,
      marginTop: 10,
      fontSize: 12,
      alignSelf: 'center',
      textAlign:'center',
    },
    timer: {
      alignSelf: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
    },
    input: {
      height: 40,
      width: 100,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      color: 'white',
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
  });

  export default ReciprocityScreen;