// See README.md for information about this file and how to make updates

// NECESSARY UPDATES: CHANGE THE UNITS SELECTION TO SEPARATE THE INPUT AND DISPLAYING THE RESULTS. ALSO WANT TO MESS AROUND WITH SPACING/LAYOUT SO THAT RESULTS ARE NOT JUST OFF SCREEN

import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';

// Special imports for this file, see README for links with more information about them
import { SelectList } from 'react-native-dropdown-select-list'; 
import RadioGroup from 'react-native-radio-buttons-group';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


// Dictionary for selecting a lens name from drop down menu, organized by focal length
// NOTE: SOME OF THESE LENSES AND HOW THEY ARE REFERRED TO IS DIFFERENT FROM THE DOF CALCULATOR. DO NOT COPY AND PASTE BETWEEN THE TWO FILES
const lensName = [
    {key:'1', value:'Super-Angulon 47mm f/5.6'},
    {key:'2', value:'Apo-Digitar 35mm f/5.6 XL'},
    {key:'3', value:'Pinhole 50mm (0.3mm)'},
    {key:'4', value:'Bronica 50mm f/2.8 MC (ETRS)'},
    {key:'5', value:'Mamiya Sekor 55mm f/4.5 (LTR)'},
    {key:'6', value:'Apo-Digitar 60mm f/4'},
    {key:'7', value:'Ilex 60mm f/16'},
    {key:'8', value:'Pinhole 65mm (0.35mm)'},
    {key:'9', value:'Mamiya Sekor 65mm f/3.5 (LTR)'},
    {key:'10', value:'Grandagon 65mm f/4.5'},
    {key:'11', value:'Angulon 65mm f/6.8'},
    {key:'12', value:'Super-Angulon 65mm f/8'},
    {key:'13', value:'Fujinon SW 65mm f/8'},
    {key:'14', value:'Graflex Optar W.A. 65mm f/6.8'},
    {key:'15', value:'Super Topcor 65mm f/7'},
    {key:'16', value:'HR Digiron-W 70mm f/5.6'},
    {key:'17', value:'Grandagon 75mm f/6.8'},
    {key:'18', value:'Super Angulon 75mm f/8'},
    {key:'19', value:'Fujinon SW 75mm F/8'},
    {key:'20', value:'Horseman Professional 75mm f/5.6'},
    {key:'21', value:'Mamiya Sekor 80mm f/2.8 (TLR)'},
    {key:'22', value:'Heligon 80mm f/2.8'},
    {key:'23', value:'Apo-Digitar 80mm f/4'},
    {key:'24', value:'Apo-Digitar 90mm f/4.5'},
    {key:'25', value:'Angulon 90mm f/6.8'},
    {key:'26', value:'Tessar 100mm f/3.5'},
    {key:'27', value:'Nikkor-W 100mm f/5.6'},
    {key:'28', value:'Apo-Digitar 100mm f/5.6'},
    {key:'29', value:'Sironar-N 100mm f/5.6'},
    {key:'30', value:'Symmar-S 100mm f/5.6'},
    {key:'31', value:'APO Symmar 100mm f/5.6'},
    {key:'32', value:'Trioptar 103mm f/4.5'},
    {key:'33', value:'Mamiya Sekor 105mm f/3.5 (TLR)'},
    {key:'34', value:'APO-Symmar 120mm f/5.6'},
    {key:'35', value:'Wista ID 130mm f/5.6'},
    {key:'36', value:'Mamiya Selor 135mm f/3.5 (TLR)'},
];

// Dictionary for selecting the units used to enter the distances (AND DISPLAY RESULTS -- MAY WANT TO MAKE THEM TWO SEPARATE CALCULATIONS)
const unitList = [
    {key:'1', value:'feet'},
    {key:'2', value:'inches'},
    {key:'3', value:'meters'},
    {key:'4', value:'millimeters'},
];

// Array of the lenses with their respective focal lengths (mm)
const focalLength = [
    {lens:'Super-Angulon 47mm f/5.6', focal: 24},
    {lens:'Apo-Digitar 35mm f/5.6 XL', focal: 24},
    {lens:'Pinhole 50mm (0.3mm)', focal: 25},
    {lens:'Bronica 50mm f/2.8 MC (ETRS)', focal: 25},
    {lens:'Mamiya Sekor 55mm f/4.5 (LTR)', focal: 28},
    {lens:'Apo-Digitar 60mm f/4', focal: 30},
    {lens:'Ilex 60mm f/16', focal: 30},
    {lens:'Pinhole 65mm (0.35mm)', focal: 35},
    {lens:'Mamiya Sekor 65mm f/3.5 (LTR)', focal: 35},
    {lens:'Grandagon 65mm f/4.5', focal: 35},
    {lens:'Angulon 65mm f/6.8', focal: 35},
    {lens:'Super-Angulon 65mm f/8', focal: 35},
    {lens:'Fujinon SW 65mm f/8', focal: 35},
    {lens:'Graflex Optar W.A. 65mm f/6.8', focal: 35},
    {lens:'Super Topcor 65mm f/7', focal: 35},
    {lens:'HR Digiron-W 70mm f/5.6', focal: 40},
    {lens:'Grandagon 75mm f/6.8', focal: 45},
    {lens:'Super Angulon 75mm f/8', focal: 45},
    {lens:'Fujinon SW 75mm F/8', focal: 45},
    {lens:'Horseman Professional 75mm f/5.6', focal: 45},
    {lens:'Mamiya Sekor 80mm f/2.8 (TLR)', focal: 50},
    {lens:'Heligon 80mm f/2.8', focal: 50},
    {lens:'Apo-Digitar 80mm f/4', focal: 50},
    {lens:'Apo-Digitar 90mm f/4.5', focalz: 55},
    {lens:'Angulon 90mm f/6.8', focal: 55},
    {lens:'Tessar 100mm f/3.5', focal: 60},
    {lens:'Nikkor-W 100mm f/5.6', focal: 60},
    {lens:'Apo-Digitar 100mm f/5.6', focal: 60},
    {lens:'Sironar-N 100mm f/5.6', focal: 60},
    {lens:'Symmar-S 100mm f/5.6', focal: 60},
    {lens:'APO Symmar 100mm f/5.6', focal: 60},
    {lens:'Trioptar 103mm f/4.5', focal: 60},
    {lens:'Mamiya Sekor 105mm f/3.5 (TLR)', focal: 60},
    {lens:'APO-Symmar 120mm f/5.6', focal: 70},
    {lens:'Wista ID 130mm f/5.6', focal: 75},
    {lens:'Mamiya Selor 135mm f/3.5 (TLR)', focal: 80},
]

// Default base distance value; used for results
var baseDist = 0;

// Exported component
const BaseScreen = () => {

    // State variables for saving information and updating the screen
    const [selectedLens, setSelectedLens] = React.useState('');     // Name of the selected lens
    const [units, setUnits] = React.useState('feet');               // id of selected radio button for units, used for claculations and updating display
    const [nearDist, setNearDist] = React.useState('0');            // Near subject distance, default is 0
    const [farDistIndex, setFarDistIndex] = React.useState('0');    // Radio button index for the far subject distance; 1 is INF, 2 allows the user to enter a number
    const [farDist, setFarDist] = React.useState('0');              // Numeric far subject distance, if the user selects to enter one
    const [showResults, setShowResults] = React.useState(false);    // Controls whether or not to display results
    const [calculate, setCalculate] = React.useState(0);            // Incremented to "force" the page to update/recalculate results whenever changes are made

    // Creates the radio buttons where users select a far subject distance (INF or a custom numeric value)
    const distRadioButtons = React.useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'INF',
            value: 'INF',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'INF',
            accessibilityRole: 'radio'
        },
        {
            id: '2',
            label: 'Custom Value:',
            value: '',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'Custom distance',
            accessibilityRole: 'radio'
        }
    ]), []);

    // Creates the radio buttons where users select their desired units for entering subject distances
    const unitsRadioButtons = React.useMemo(() => ([
        {
            id: 'feet', // acts as primary key, should be unique and non-empty string
            label: 'feet',
            value: 'feet',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'feet',
            accessibilityRole: 'radio',
        },
        {
            id: 'inches', // acts as primary key, should be unique and non-empty string
            label: 'inches',
            value: 'inches',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'inches',
            accessibilityRole: 'radio'
        },
        {
            id: 'meters', // acts as primary key, should be unique and non-empty string
            label: 'meters',
            value: 'meters',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'meters',
            accessibilityRole: 'radio'
        },
        {
            id: 'millimeters', // acts as primary key, should be unique and non-empty string
            label: 'millimeters',
            value: 'millimeters',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'},
            accessible: true,
            accessibilityLabel: 'millimeters',
            accessibilityRole: 'radio'
        },
    ]), []);


    // Function to calculate the base distance given the lens (determines focal length), near subject distance, and far subject distance
    const calculateBaseDist = () => {

        // Set state variables to show/update results when calculated
        setShowResults(true);
        setCalculate(calculate + 1);

        // Assign variables for calculation
        let p = 3;

        let n = parseFloat(nearDist);   // Make variable numeric
        let lessThan12 = false;     // Assume it is farther than 12in by default

        let l = 0;  // Create variable for far subject distance
        // The far subject distance is either a number or INF -- assign it accordingly
        if(farDistIndex.localeCompare('1') == 0){
            l = 'INF';
        }
        else {
            l = parseFloat(farDist);
        }

        let f = 0;      // Create focal distance variable
        // Use the selected lens to assign the correct focal distance
        for (let i = 0; i < focalLength.length; i ++){
            if(focalLength[i].lens.localeCompare(selectedLens) == 0){
                f = parseInt(focalLength[i].focal);
            }
        }

        // Convert distances to millimeters to use in calculation
        /* I couldn't find anywhere that confirmed that this was the correct thing to do, but given that the focal length
           is alwasy in mm it makes sense to me? And when I didn't do it, I would end up getting results with negative numbers, so... */
        if(units.localeCompare('feet') == 0){
            n = n * 304.8;
            if(!isNaN(l)){
                l = l * 304.8;
            }
        }
        else if (units.localeCompare('meters') == 0){
            n = n * 1000;
            if(!isNaN(l)){
                l = l * 1000;
            }
        }
        else if (units.localeCompare('inches') == 0){
            n = n * 25.4;
            if(!isNaN(l)){
                l = l * 25.4;
            }
        }

        // Check if n < 12 inches, will be a factor in the chosen formula
        if ( (n/25.4) < 12 ){
            lessThan12 = true;
        }


        // If n < 12in and l is a number --> use Wattie and Bercovitz, return the smaller number
        if ((!isNaN(l)) && lessThan12){
            let wattieB = n * 0.9;
            let berkovitzB = p * ((l * n)/(l - n)) * ((1 / f) - ((l + n) / (2 * l * n)));
            if(wattieB < berkovitzB){
                baseDist = wattieB;
            }
            else{
                baseDist = berkovitzB;
            }
        }
        // Else if n < 12in and l is not a number (INF) --> use Wattie
        else if ((isNaN(l)) && (n < 12)){
            baseDist = n * 0.9;
        }
        // Else if l is a number, but it is less than 2*n
        else if ((!isNaN(l)) && (l < 2*n)){
            l = 2 * n;
            baseDist = p * ((l * n)/(l - n)) * ((1 / f) - ((l + n) / (2 * l * n)));
        }
        // Else if l is INF
        else if (isNaN(l)){
            baseDist = p * ((n / f) - 0.5);
        }
        // Every other case
        else{
            baseDist =  p * ((l * n)/(l - n)) * ((1 / f) - ((l + n) / (2 * l * n)));
        }
       
        // Round the results to 2 decimal places
        baseDist = baseDist.toFixed(2);

    }

    return (
        <SafeAreaView style={baseStyle.container}>
            {/*Use KeyboardAware because there are some text inputs where the keyboard would otherwise cover the input */}
            <KeyboardAwareScrollView>   

                {/*Page title and instructions */}
                <Text style={baseStyle.textTitle} accessible={true} accessibilityLabel="Base distance calculator" accessibilityRole="text">Base Distance Calculator</Text>
                <Text style={baseStyle.text} accessible={true} accessibilityLabel="This tool calculates the ideal base distance (distance between the stereo lenses) depending on the distance to your subject(s).  This is for medium format 6x6 photography. Use it for very close and very distant subjects." accessibilityRole="text">
                    This tool calculates the ideal base distance (distance between the stereo lenses) depending on the distance to your subject(s). This is for medium format 6x6 photography. Use it for very close and very distant subjects.
                </Text>

                {/*Dropdown menu to select the lens (will determine the focal length for calculations*/}
                <Text style={baseStyle.text} accessible={true} accessibilityLabel="Select lens" accessibilityRole="text">Select lens:</Text>
                <SelectList 
                    setSelected={(val) => setSelectedLens(val)}
                    data= {lensName}
                    save="value"
                    boxStyles={{marginBottom:12}}
                    dropdownTextStyles={{color:'white'}}
                    inputStyles={{color:'white'}}
                    accessible={true}
                    accessibilityLabel="A searchable dropdown menu to select a lens to calculate the base distance for"
                />

                {/*Group of radio buttons to select the units that the user will use for their subject distance input */}
                <Text style={baseStyle.text} accessible={true} accesssibilityLabel="Select units" accessibilityRole="text">Select units:</Text>
                <RadioGroup 
                    radioButtons={unitsRadioButtons} 
                    onPress={setUnits}
                    selectedId={units}
                    containerStyle={baseStyle.radioButton}
                    accessible={true}
                    accessibilityRole="radiogroup"

                />

                {/*A numeric-only text input for users to enter a custom near subject distance value*/}
                <Text style={baseStyle.text} accessible={true} accessibilityLabel="Near subject distance" accessibilityRole="text">Near subject distance:</Text>
                <View style={baseStyle.contentBlock}>
                    <TextInput
                        style={baseStyle.input}
                        onChangeText={setNearDist}
                        value={nearDist}
                        placeholder='0'
                        inputMode='decimal'
                        keyboardType='decimal-pad'
                        enterKeyHint='done'
                        returnKeyType='done'
                        accessible={true}
                        accessibilityLabel="Text entry box to enter the near subject distance using the selected units"
                    />
                    <Text style={baseStyle.text}>{units}</Text>
                </View>
                

                {/*Radio buttons and a text input where users can select/enter their far subject distance value. If the INF radio button is selected, the text input is disabled.*/}
                <Text style={baseStyle.text} accessible={true} accessibilityLabel="Far subject distance" accessibilityRole="text">Far subject distance:</Text>  

                <RadioGroup 
                    radioButtons={distRadioButtons} 
                    onPress={setFarDistIndex}
                    selectedId={farDistIndex}
                    containerStyle={baseStyle.radioButton}
                    accessible={true}
                    accessibilityRole="radiogroup"

                />

                <View style={baseStyle.contentBlock}>
                    <TextInput
                        style={baseStyle.input}
                        onChangeText={setFarDist}
                        value={farDist}
                        placeholder='0'
                        inputMode='decimal'
                        keyboardType='decimal-pad'
                        enterKeyHint='done'
                        returnKeyType='done'
                        editable={farDistIndex.localeCompare('2') == 0}
                        accessible={true}
                        accessibilityLabel="Text entry box to enter the far subject distance using the selected units"
                    />
                     <Text style={baseStyle.text}>{units}</Text>
                </View>
            
                {/*Button to click to calculate/show results*/}
                <View style={baseStyle.button} accessible={true} accessibilityLabel="Click to show the calculated base distance results, will not change to a different screen" accessibilityRole="button">
                    <Button 
                        title= "Calculate Base Distance"
                        onPress={() => calculateBaseDist()}
                        color="#000000"
                    />
                </View>

                {/*Results -- currently they appear just off-screen when they are calculated, may want to update some spacing to make it more clear that a user must scroll to see them?*/}
                {showResults && (<Text style={baseStyle.textResult} accessible={true} accessibilityLabel="stereo base results" accessibilityRole="text">Stereo base:  {baseDist} mm</Text>)}

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

// Stylesheet for the base calculator screen
const baseStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
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
      marginTop: 12,
      marginBottom: 6,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    textResult: {
        color: 'white',
        margin: 8,
        marginTop: 13,
        fontSize: 20,
        alignSelf: 'center',
      },
    radioButton: {
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    noteText: {
      color: 'white',
      margin: 10,
      marginTop: 10,
      fontSize: 12,
      alignSelf: 'center',
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
      marginLeft: 20,
      marginBottom: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      color: 'white',
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
  });


export default BaseScreen;