# Mercury-Mobile-App
A mobile app for Mercury Works camera company, containing calculators and the user guide for the stereo camera system.

## Directory Guide
>**README.md** - Contains documentation for the ease of use and information for future updates to this project.
>
>**MercuryMobileApp** - Directory containing the app files.
>>**App.js** - The navigation stack for the app and the shared header for the other pages.
>>
>>**assets** - Directory containing the audio effects and images used throughout the app.
>>
>>**screens** - Directory containing the screens that the app will render.
>>>**home.js** - The home screen and initial render of the app. Contains buttons for navigating to all other screens.  
>>>**dofCalculator.js** - Contains the Depth of Field and Hyperfocal calculators, which can be toggled between.  
>>>**reciprocityCalculator.js** - A calculator for the reciprocity of different film types.  
>>>**baseCalculator.js** - Contains the calculator for the distance between two lens bases for stereo photography.  
>>>**userGuide.js** - The stereo system user guide.  

## Updating the app

### Adding a new screen
Each screen is its own file in the 'screens' directory (with the exception of the Depth of Field Calculator and Hyperfocal Calculator, which are kept in the same file as they are very closely related and share variables).  

To create a new screen: 
* Create a JavaScript file in the 'screens' directory with a name describing its functionality.
* Add import statements for React and 'react-native' components to the top of the file.
* Create a function or const that will contain the content of the screen. For consistency, I named all of these ____Screen (e.g. ```const DOFScreen = ({route}) => {}``` or ```function DOFScreen(route){}```)
* In the return() of this fucntion, add a <Text></Text> component with the name of the screen (e.g. ```<Text>DOF Screen</Text>```). This will be a temporary statement, but it will be useful for debugging to ensure that the correct screen is being navigated to.
* Finally, at the bottom of the file, add an export statement (e.g. ```export default DOFScreen;```) using the name of the function. This will ensure that the component can be used throughout the app.

See below for how to add your new screen to the navigation of the app, and navigate to it from other screens. 


### App.js
This file is fairly small and should only need to be updated if a.) there is a new screen to add to the app, or b.) the logo/header bar needs to be change.  

To add a new screen to the app: 
* Add an import statement at the top of this file. This should be an import for whatever the export default component is for the new screen. (e.g. ```import DOFScreen from './screens/dofCalculator';```)
* Add a new <Stack.Screen/> inside the <Stack.Navigator>. The name will be how the screen is referred to throughout the app when you are navigating to it; I made them the same as the component name to keep things simple. The component is whatever was imported.

To change the header: 
* To change the header content, update the HeaderLogo component with the new content.
* To change the style of the header, update that in the <Stack.Navigator> parameters.

For more information, refer to these links: 
* [React Native - Navigating Between Screens](https://reactnative.dev/docs/navigation)
* [React Navigation - Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)

### home.js
This file is also small and simple, and should only need to be updated when a new screen is added to the app. Each screen of the app is accessed via a button on this page.  

To add a new button to the home screen: 
* Each button is a <View> the encloses a <Button>. It can be copied and pasted to create an additional button with the same styling.
* Change the 'title' of the button to change the text displayed on it.
* Update the 'onPress' function of the button to navigate to the new screen. *(Note: It is helpful to do this after creating the file and adding the screen to the stack in App.js so that you can check whether the button functions properly right away.)*

### dofCalculator.js
This file contains both the Depth of Field (DOF) Calculator, which is used to display the depth of field for a given lens, base, and spacer for different F-stops, as well as the Hyperfocal Calculator, which will find the hyperfocal for a given lens, base, and F-stop. The main updates to this file will be if the data needs to be expanded on, but a 'tour' of the file will also be provided incase for in-depth updates are required in the future.  

To add additional data: 
* The lens data for these screens is all in global variables at the top of the file, so that it can be used in the calculations for both DOF and hyperfocal calculations.
* 'lensData' is an array of objects, each containing all of the information about a lens, based on the data in the file 'Stereo lens data for Emme.ods'. The lenses are ordered by focal length, so new lenses added should follow that pattern accordingly. Be sure to update the 'id' attributes accordingly.
* 'lensName' is an array of key/value pairs, which is used in the dropdown menu to select a lens. The lenses are stored in the same order as 'lens data', so the 'key' and 'id' of each lens matches up accordingly. This pattern should be maintained if new lenses are added.
* 'fStops' is an array of key/value pairs, used in the dropdown menu to select an f-stop when calculating the hyperfocal. If an additional f-stop is added here, 'lensData' should be with data for that f-stop for each lens. The first for-loop in calculateHyperfocal() will also have to be updated to check for this additional f-stop value.

How this screen is organized: 
*This section of the README is still in progress, thank you for your patience*

For more information, refer to these links: 
* [React Native Dropdown Select List](https://www.npmjs.com/package/react-native-dropdown-select-list)
* [React Native Segmented Control Tab](https://www.npmjs.com/package/react-native-segmented-control-tab)

Updates to be made to this file: 
* Add capabilities for the user to choose whether results are displayed in meters or feet, and recalculate results accordingly. 

## Accessibility Statement
The creator of this app intends to provide a user friendly experience for anyone, regardless of ability or disability. However, as this is the first mobile app that I have ever created and I am almost entirely self-taught in using React and ReactNative, it is quite possible that I have missed some of the accessibility features that it offers. I welcome constructive criticism that will help make this application more accessible to everyone, including technical feedback on how to best utilize React, as well as design choices. Thank you!
