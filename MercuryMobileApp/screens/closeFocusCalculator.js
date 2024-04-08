// See README.md for information about this file and how to make updates

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

const CloseFocusScreen = () => {
    return (
        <SafeAreaView style={closeFocusStyle.container}>
            {/*Use KeyboardAware because there are some text inputs where the keyboard would otherwise cover the input */}
            <KeyboardAwareScrollView>   

                {/*Page title and instructions */}
                <Text style={closeFocusStyle.textTitle} accessible={true} accessibilityLabel="Close focus calculator" accessibilityRole="text">Close Focus Calculator</Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>    
    )
}

// Stylesheet for the close focus calculator screen
const closeFocusStyle = StyleSheet.create({
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


export default CloseFocusScreen;