import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; 
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio } from 'expo-av';

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


var reciprocityTime = 0;
var timerTime = 0;

const ReciprocityScreen = () => {

    const [selectedFilm, setSelectedFilm] = React.useState('');
    const [time, onChangeTime] = React.useState('');
    const [result, showResult] = React.useState(false);
    const [updateResult, setUpdateResult] = React.useState(0);
    const [key, setKey] = React.useState(0);
    const [playTimer, setPlayTimer] = React.useState(false);
    const [timerEnd, setTimerEnd] = React.useState(false);
    const [sound, setSound] = React.useState();
    
    const calculateReciprocity = (film, seconds) => {

      showResult(true);
      setUpdateResult(updateResult + 1);
      setPlayTimer(false);
      setTimerEnd(false);

      seconds = parseFloat(seconds);

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

      reciprocityTime = reciprocityTime.toFixed(1);
      timerTime = parseFloat(reciprocityTime);
    }

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync( require('../assets/audio/beep1.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync();
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);

    //KEEP WORKING HERE ON WEDNESDAY TO SORT OUT AUDIO -- react-native-audio-toolkit
    const handleBackground = () => {
      playSound();
      setTimerEnd(true);
    }
    
    return (
      <SafeAreaView style={[(timerEnd == false) ? reciprocityStyle.containerRegular : reciprocityStyle.containerTimerEnd]}>
        <ScrollView>
            <Text style={reciprocityStyle.textTitle}>Reciprocity Calculator</Text>

{/*Dropdown menu for selecting film stock to use in calculation*/}
            <Text style={reciprocityStyle.text}>Select film stock:</Text>
            <SelectList
              setSelected={(val) => setSelectedFilm(val)}
              data={filmStock}
              save="value"
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
              onSelect = {() => setTimerEnd(false)}
            />
            
          <View style={reciprocityStyle.contentBlock}>
            <Text style={reciprocityStyle.text}>Enter time:</Text>
            <TextInput
              style={reciprocityStyle.input}
              onChangeText={onChangeTime}
              value={time}
              placeholder='0'
              inputMode='decimal'
              keyboardType='decimal-pad'
              enterKeyHint='done'
              returnKeyType='done'
              onSubmitEditing={() => calculateReciprocity(selectedFilm, time)}
            /> 
            <Text style={reciprocityStyle.text}> seconds</Text>
          </View>
            

            {result && (<Text style={reciprocityStyle.timerText}>Reciprocity time: {reciprocityTime} seconds</Text>)}


            <View style = {reciprocityStyle.timer}>
              { result && (<CountdownCircleTimer
                key = {key}
                isPlaying = {playTimer}
                duration = {timerTime}
                colors = {['#FFFFFF']}
                trailColor = '#bd1004'
                onComplete = {() => {handleBackground()}}
              >
                {({ remainingTime }) => <Text style={reciprocityStyle.insideTimerText}>{remainingTime}</Text>}
              </CountdownCircleTimer>)}
            </View>

            <View style = {reciprocityStyle.timer}>
              { result && (<View style={reciprocityStyle.button}>
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

              {result && (<Text style={reciprocityStyle.noteText}>Timer will reset automatically when started.</Text>)}  
              {result && (<Text style={reciprocityStyle.noteText}>Ringer on or use headphones for sound.</Text>)}
            </View> 


          </ScrollView>           
      </SafeAreaView>
    )
}


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