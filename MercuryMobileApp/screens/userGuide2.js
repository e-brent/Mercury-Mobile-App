// See README.md for information about this file and how to make updates

// NECESSARY UPDATES: THIS FILE IS INCOMPLETE, AND THE USER GUIDE IS STILL IN THE PROCESS OF BEING UPDATED.

import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView, Modal, Image, Pressable, FlatList} from 'react-native';

import { WebView } from 'react-native-webview';

// potential user cuide content list
const guide_content = [
    {
        id : '1',

    }
]

const UserGuideScreen = () => {

    return(
        <WebView
            style={guideStyle.container}
            source={{baseUrl:"../assets/html/Mercury Stereo User Guide.html"}}
        />
    )
}

const guideStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      //justifyContent: 'top',
    },
    containerInner: {
        flex: .85,
        backgroundColor: 'black',
        //justifyContent: 'top',
      },
    contentBlock: {
      flex: .2,
      flexDirection: 'row',
      marginTop: 20,
    },
    textTitle: {
      color: 'white',
      margin: 5,
      marginBottom: 0,
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
    textSubtitle: {
        color: 'white',
        margin: 8,
        marginTop: 13,
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center',
    },
    textBody: {
        color: 'white',
        margin: 8,
        marginLeft: 25,
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    textImageLabel: {
        color: 'red',
        margin: 8,
        marginLeft: 25,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    textAside: {
        color: 'white',
        margin: 8,
        marginLeft: 25,
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    textBullet: {
        color: 'white',
        margin: 8,
        marginLeft: 35,
        fontSize: 14,
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

    },
    noteText: {
      color: 'white',
      margin: 10,
      marginTop: 10,
      fontSize: 10,
      alignSelf: 'center',
    },
    buttonText: {
        color: '#007AFF',
        alignSelf: 'flex-start',
        fontSize: 18,
    },
    button: {
      margin: 8,
      alignSelf: 'flex-start',
    },
    buttonLevel2: {
        margin: 8,
        alignSelf: 'flex-start',
        marginTop: 0,
        marginLeft: 30,
    },
    buttonLevel3: {
        margin: 8,
        alignSelf: 'flex-start',
        marginTop: 0,
        marginLeft: 50,
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
    image: {
        width: 300,
        height: 250,
        resizeMode: 'cover',
        alignSelf: 'center',
        margin: 10,
    },
    footer: {
        backgroundColor: 'black',
        position: 'fixed',
    },
  });

export default UserGuideScreen;