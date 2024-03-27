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
This file contains both the Depth of Field (DOF) Calculator, which is used to display the depth of field for a given lens, base, and spacer for different F-stops, as well as the Hyperfocal Calculator, which will find the hyperfocal for a given lens, base, and F-stop. The main updates to this file will be if the data needs to be expanded on, but an explanation of the file will also be provided incase in-depth updates are required in the future.  

To add additional data: 
* The lens data for these screens is all in global variables at the top of the file, so that it can be used in the calculations for both DOF and hyperfocal calculations.
* `lensData` is an array of objects, each containing all of the information about a lens, based on the data in the file 'Stereo lens data for Emme.ods'. The lenses are ordered by focal length, so new lenses added should follow that pattern accordingly. Be sure to update the 'id' attributes accordingly.
* `lensName` is an array of key/value pairs, which is used in the dropdown menu to select a lens. The lenses are stored in the same order as 'lens data', so the 'key' and 'id' of each lens matches up accordingly. This pattern should be maintained if new lenses are added.
* `fStops` is an array of key/value pairs, used in the dropdown menu to select an f-stop when calculating the hyperfocal. If an additional f-stop is added here, 'lensData' should also be updated with data for that f-stop for each lens. The first for-loop in `calculateHyperfocal()` will also have to be updated to check for this additional f-stop value.

How this screen is organized:  
**Segmented control tabs**  
The main organization of this screen is provided by the two tabs at the top labeled "Depth of Field" and "Hyperfocal." Toggling between these two tabs changes a state variable `selectedIndex`, which is used to conditionally render the components seen on screen, changing whether the DOF 'screen' or Hyperfocal 'screen' is visible.  
  
**Visible screen components**  
On the DOF tab, there are three dropdown menus which allow users to select the lens, base, and spacer they are using. These menus can also be searched, to narrow results. The data for the lens menu is stored in the `lensname` array, and the data for base and spacer menus are calculated by the `handleSelections()` function.  
  
On the Hyperfocal tab, there are only two dropdown menus which are used to select a lens and f-stop. Data for these menus is stored in the `lensName` and `fStop` arrays, respectively.  

*(Note: This will be changing)* On both tabs, there is then a set of radio buttons, allowing a user to select the units they desire to see the results displayed in. Current options include feet (default), inches, meters, and millimeters.  

At the bottom of each tab, there is a button to 'Calculate DOF' or 'Calculate hyperfocal.' When pressed, these will run the functions `calculateDOF()` or `calculateHyperfocal()` respectively, which will use the user entered data above and display the results.  

**Functions**
* `handleSelections()` -- This function takes 2 string arguments, lensVal and baseVal, which will be used to compare with the data in `lensData` to fill in the other dropdown menus and the result candidate data.
  * lensVal and baseVal are passed in by the "Select lens" and "Select base" dropdown menus, which call the function when an option is selected on them. In the current implementation, they pass in the values of the state variables `selectedLens` and `selectedBase` respectively.
  * A for-loop compares lensVal to the names in the lensData array, and when the correct row is found, the data associated with that lens is stored in global array variables.
  * There are then a set of nested for-loops used to fill in the `baseOptions` and `spacerOptions` arrays, which contain key/value pairs and are used to populate the dropdown menus. Duplicates are removed from the menus, and only spacers that are valid with the selected base will be added.

* `calculateDOF()` -- This function takes no arguments, and uses the state variables from user input, as well as the global variables, to select the correct results.
  * First, the state variables are set to display the correct results, and a state variable is incremented to "force" the screen to re-render when necessary.
  * Typically, the index of the selected spacer in `lensData` will be used as the index to select the results. However, as some of the lenses do not use spacers, if the spacer value is "none", then the index of the selected base will be used as the index to pull data from `lensData `.
  * *(Note: THIS WILL BE CHANGING) The results are then changed to match the selected units.*
* `calculateHyperfocal()` -- This function takes no arguments, and uses the state variables from user input, as well as the global variables, to select the correct results.
  * First, the state variables are set to display the correct results, and a state variable is incremented to "force" the screen to re-render when necessary.
  * A for-loop is used to search through `lensData` to find the selected lens and pull the correct f-stop data, based on the selected f-stop.
  * The hyperfocal distance for an f-stop will be the depth of field (DOF) with the closest 'near' distance with a 'far' distance of infinity (INF). To find this, loop through the array of DOF. If the DOF includes 'INF', split the string and compare the value of the current minimum value. If the new DOF has a smaller value, store the DOF, base, and spacer as the new minimum standard.

*This section of the README is still in progress, thank you for your patience*

For more information, refer to these links: 
* [React Native Dropdown Select List](https://www.npmjs.com/package/react-native-dropdown-select-list)
* [React Native Segmented Control Tab](https://www.npmjs.com/package/react-native-segmented-control-tab)

Updates to be made to this file: 
* Add capabilities for the user to choose whether results are displayed in meters or feet, and recalculate results accordingly. (Right now it has feet, inches, meters, and millimeters, but that seems a little overkill haha. Also I may want to change where it's implemented

## Accessibility Statement
The creator of this app intends to provide a user friendly experience for anyone, regardless of ability or disability. However, as this is the first mobile app that I have ever created and I am almost entirely self-taught in using React and ReactNative, it is quite possible that I have missed some of the accessibility features that it offers. I welcome constructive criticism that will help make this application more accessible to everyone, including technical feedback on how to best utilize React, as well as design choices. Thank you!
