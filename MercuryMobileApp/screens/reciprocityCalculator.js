import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView } from 'react-native';

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

export default function ReciprocityScreen(){

    const [selectedFilm, setSelectedFilm] = React.useState('');
    
    return (
        <SafeAreaView style={reciprocityStyle.container}>
            <Text style={reciprocityStyle.text}>Reciprocity Screen</Text>
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
    }
  });