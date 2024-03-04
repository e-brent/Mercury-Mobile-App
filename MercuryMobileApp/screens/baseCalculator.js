import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';

import { SelectList } from 'react-native-dropdown-select-list'; 
import RadioGroup from 'react-native-radio-buttons-group';

//Dictionary for selecting a lens name from drop down menu
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

const unitList = [
    {key:'1', value:'feet'},
    {key:'2', value:'inches'},
    {key:'3', value:'meters'},
    {key:'4', value:'millimeters'},
];

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

var baseDist = 0;


const BaseScreen = () => {

    const [selectedLens, setSelectedLens] = React.useState('');
    const [units, setUnits] = React.useState('feet');
    const [nearDist, setNearDist] = React.useState('0');
    const [farDistIndex, setFarDistIndex] = React.useState('0');
    const [farDist, setFarDist] = React.useState('0');
    const [showResults, setShowResults] = React.useState(false);
    const [calculate, setCalculate] = React.useState(0);

    const radioButtons = React.useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'INF',
            value: 'INF',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'}
        },
        {
            id: '2',
            label: 'Custom Value:',
            value: '',
            color: '#ffffff',
            labelStyle: {textAlign:'left', color: '#ffffff'},
            containerStyle: {alignSelf: 'flex-start'}
        }
    ]), []);

    const calculateBaseDist = () => {

        //show results when calculated
        setShowResults(true);
        setCalculate(calculate + 1);

        //assign variables for calculation
        let p = 3;

        let n = parseFloat(nearDist);

        let l = 0;

        let f = 0;
        for (let i = 0; i < focalLength.length; i ++){
            if(focalLength[i].lens.localeCompare(selectedLens) == 0){
                f = parseInt(focalLength[i].focal);
            }
        }


        //far distance is either number or INF
        if(farDistIndex.localeCompare('1') == 0){
            l = 'INF';
        }
        else {
            l = parseFloat(farDist);
        }

        //convert distances to inches to use in calculations
        if(units.localeCompare('feet') == 0){
            n = n * 12;
            if(!isNaN(l)){
                l = l * 12;
            }
        }
        else if (units.localeCompare('meters') == 0){
            n = n * 39.37;
            if(!isNaN(l)){
                l = l * 39.37;
            }
        }
        else if (units.localeCompare('millimeters') == 0){
            n = n / 25.4;
            if(!isNaN(l)){
                l = l / 25.4;
            }
        }

        //if n < 12 --> use Wattie and Bercovitz, return the smaller number
        if(isNaN(l)){
            baseDist = p * ((n / f) - 0.5);
        }
        else if (n < 12){
            let wattieB = n * 0.9;
            let berkovitzB = p * ((l * n)/(l - n)) * ((1 / f) - ((l + n) / (2 * l * n)));
            if(wattieB < berkovitzB){
                baseDist = wattieB;
            }
            else{
                baseDist = berkovitzB;
            }
        }
        else if (!isNaN(l) && (l < 2*n)){
            baseDist = p * ((2 * (n ** 2))/ n) * ((1 / f) - ((3 * n) / (4 * (n ** 2)))); 
        }
        else{
            baseDist =  p * ((l * n)/(l - n)) * ((1 / f) - ((l + n) / (2 * l * n)));
        }

        //convert result back to desired units
        //convert distances to inches to use in calculations
        
        if(units.localeCompare('feet') == 0){
            baseDist = baseDist / 12;
        }
        else if (units.localeCompare('meters') == 0){
            baseDist = baseDist / 39.37;
        }
        else if (units.localeCompare('millimeters') == 0){
            baseDist = baseDist * 25.4;
        }

        baseDist = baseDist.toFixed(2);

    }

    return (
        <SafeAreaView style={baseStyle.container}>
            <ScrollView>
                <Text style={baseStyle.textTitle}>Base Calculator</Text>
                <Text style={baseStyle.text}>This tool calculates the ideal base distance (distance between the stereo lenses) depending on the distance to your subject(s).  This is for medium format 6x6 photography.  Use it for very close and very distant subjects.</Text>

                <Text style={baseStyle.text}>Select lens:</Text>
                <SelectList 
                    setSelected={(val) => setSelectedLens(val)}
                    data= {lensName}
                    save="value"
                    //onSelect={handleSelections(selectedLens, selectedBase)}
                    dropdownTextStyles={{color:'white'}}
                    inputStyles={{color:'white'}}
                />


                <Text style={baseStyle.text}>Select units:</Text>
                <SelectList 
                    setSelected={(val) => setUnits(val)}
                    data= {unitList}
                    save="value"
                    //onSelect={handleSelections(selectedLens, selectedBase)}
                    dropdownTextStyles={{color:'white'}}
                    inputStyles={{color:'white'}}
                />

                <Text style={baseStyle.text}>Near subject distance:</Text>
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
                    />
                    <Text style={baseStyle.text}>{units}</Text>
                </View>
                


                <Text style={baseStyle.text}>Far subject distance:</Text>  

                <RadioGroup 
                    radioButtons={radioButtons} 
                    onPress={setFarDistIndex}
                    selectedId={farDistIndex}
                    containerStyle={baseStyle.radioButton}
                    //labelStyle={baseStyle.text}
                    //onPress={enableDistanceEdit}
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
                        //onSubmitEditing={() => calculateReciprocity(selectedFilm, time)}
                        editable={farDistIndex.localeCompare('2') == 0}
                    />
                     <Text style={baseStyle.text}>{units}</Text>
                </View>
            

                <View style={baseStyle.button}>
                    <Button 
                        title= "Calculate Base Distance"
                        onPress={() => calculateBaseDist()}
                        color="#000000"
                    />
                </View>

                {showResults && (<Text style={baseStyle.text}>Stereo base: {baseDist} {units}</Text>)}

            </ScrollView>
        </SafeAreaView>
    )
}


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
      marginTop: 13,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    radioButton: {
        alignSelf: 'flex-start',

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
      borderWidth: 1,
      padding: 10,
      borderColor: 'white',
      color: 'white',
      borderRadius: 10,
      alignSelf: 'flex-start',
    },
  });


export default BaseScreen;