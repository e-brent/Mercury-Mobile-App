import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; 
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
//import { useCountdown } from 'react-native-countdown-circle-timer';
//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
var playTimer = false;

const ReciprocityScreen = ({route, navigation}) => {

    const [selectedFilm, setSelectedFilm] = React.useState('');
    const [time, onChangeTime] = React.useState('');
    const [result, showResult] = React.useState(false);
    const [updateResult, setUpdateResult] = React.useState(0);
    const [timer, showTimer] = React.useState(false);
    const [updateTimer, setUpdateTimer] = React.useState(0);

    const calculateReciprocity = (film, seconds) => {

      showResult(true);
      setUpdateResult(updateResult + 1);

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

    }

    
    return (
        <SafeAreaView style={reciprocityStyle.container}>
            <Text></Text>
            <Text style={reciprocityStyle.text}>Reciprocity Calculator</Text>

{/*Dropdown menu for selecting film stock to use in calculation*/}
            <Text style={reciprocityStyle.text}>Select film stock:</Text>
            <SelectList
              setSelected={(val) => setSelectedFilm(val)}
              data={filmStock}
              save="value"
              dropdownTextStyles={{color:'white'}}
              inputStyles={{color:'white'}}
            />

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

            {result && (<Text style={reciprocityStyle.text}>Reciprocity time: {reciprocityTime} seconds</Text>)}

            {result && (<View style={reciprocityStyle.button}>
              {result && (<Button
                title="Show/hide timer"
                onPress = {() => 
                  {if(timer == true){
                    showTimer(false)
                  }
                  else{
                    showTimer(true)
                  }}
                  }
              />)}
            </View>)}

            { timer && (<CountdownCircleTimer
              isPlaying = {false}
              duration = {reciprocityTime}
              colors = {['#FFFFFF','#FF2D00']}
              colorsTime = {[ reciprocityTime, 0 ]}
              trailColor = '#8A8A8A'
              onComplete={() => {return { shouldRepeat: false }}}
            >
              {({ remainingTime }) => <Text style={reciprocityStyle.text}>{remainingTime}</Text>}
            </CountdownCircleTimer>)}

            {/*GET TIMER FUNCTIONING PROPERLY HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

        </SafeAreaView>
    )
}


const reciprocityStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'tops',
    },
    text: {
      color: 'white',
      margin: 5,
      fontSize: 20,
    },
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 5,
    },
    input: {
      height: 40,
      width: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      color: 'white',
      borderRadius: 10,

    },
  });


  export default ReciprocityScreen;