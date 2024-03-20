# Mercury-Mobile-App
A mobile app for the camera company Mercury, containing calculators and the user guide for the stereo camera system

## Directory
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

### App.js
This file is fairly small and should only need to be updated if a.) there is a new screen to add to the app, or b.) the logo/header bar needs to be change.  

To add a new screen to the app: 
* Add an import statement at the top of this file. This should be an import for whatever the export default component is for the new screen.
* Add a new <Stack.Screen/> inside the <Stack.Navigator>. The name will be how the screen is referred to throughout the app when you are navigating to it; I made them the same as the component name to keep things simple. The component is whatever was imported.

To change the header: 
* To change the header content, update the <HeaderLogo> component with the new content.
* To change the style of the header, update that in the <Stack.Navigator> parameters.

For more information, refer to these links: 
* [React Native - Navigating Between Screens](https://reactnative.dev/docs/navigation)
* [React Navigation - Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
