# Mercury-Mobile-App
Respository for the Mercury Stereo Toolkit mobile app.  
Developed Spring 2024 by Emmanuelle Brent.  

## Directory Guide
* **README.md** - Contains documentation for the ease of use and information for future updates to this project.
* **MercuryMobileApp** - Directory containing the app files.
  * **App.js** - The navigation stack for the app and the shared header for the other pages.
  * **assets** - Directory containing the audio effects and images used throughout the app.
  * **screens** - Directory containing the screens that the app will render.
    * **about.js** - Short page with links to the Mercury Stereo website and Paypal (coming soon).
    * **baseCalculator.js** - Contains the calculator for the distance between two lens bases for stereo photography.
    * **closeFocusCalculator.js** - A calculator for determining the near focus distance of a lens, given a far distance of focus.
    * **dofCalculator.js** - Contains the Depth of Field and Hyperfocal calculators, which can be toggled between.
    * **home.js** - The home screen and initial render of the app. Contains buttons for navigating to all other screens.
    * **reciprocityCalculator.js** - A calculator for the reciprocity of different film types.
    * **userGuide.js** - The stereo system user guide.

## Instructions for updating app files 

### Adding a new screen/file
Each screen is its own file in the 'screens' directory (with the exception of the Depth of Field Calculator and Hyperfocal Calculator, which are kept in the same file as they are very closely related and share variables).  

To create a new screen: 
1.  Create a JavaScript file in the 'screens' directory with a name describing its functionality.
2.  Add import statements for React and 'react-native' components to the top of the file.
3.  Create a function or const that will contain the content of the screen. For consistency, I named all of these ____Screen (e.g. ```const DOFScreen = ({route}) => {}``` or ```function DOFScreen(route){}```)
4.  In the return() of this fucntion, add a <Text></Text> component with the name of the screen (e.g. ```<Text>DOF Screen</Text>```). This will be a temporary statement, but it will be useful for debugging to ensure that the correct screen is being navigated to.
5.  Finally, at the bottom of the file, add an export statement (e.g. ```export default DOFScreen;```) using the name of the function. This will ensure that the component can be used throughout the app.

See below for how to add your new screen to the navigation of the app (App.js), and navigate to it from other screens (home.js). 

Update instructions and explanations are organized by screen/file below. This section also contains explanations of the existing code and functions in each file, so that future contributors can have an in-depth understanding of how the app currecntly functions, updates to be made more efficiently.  


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
This file contains both the Depth of Field (DOF) Calculator, which is used to display the depth of field for a given lens, base, and spacer for different f-stops, as well as the Hyperfocal Calculator, which will find the hyperfocal for a given lens, base, and f-stop. The main updates to this file will be if the data needs to be expanded on, but an explanation of the file will also be provided incase in-depth updates are required in the future.  

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

At the bottom of each tab, there is a button to 'Calculate DOF' or 'Calculate hyperfocal.' When pressed, these will run the functions `calculateDOF()` or `calculateHyperfocal()` respectively, which will use the user entered data above and display the results.

When results are displayed, there will also be a pair of radio buttons which appears, giving users the option to select 'feet' or 'meters' as the units to use to display their results. The conversion is done using the function `handleUnits()`.

**Functions**
* `handleUnits()` -- This function takes one string argument, the units that the user has just selected, which will be used to set the selectedUnits state variable and perform the correct conversion on the results.
  * Two local variables (workingVal1 and workingVal2) will be used for temporary storage when performing the conversions.
  * The function uses if-statements to determine whether a user is on the DOF tab or the Hyperfocal tab of the screen.
  * Within those statements, there are then if statements used to determine if the units have been changed from meters --> feet or feet --> meters.
  * Then, all of the results are converted. The results variables (e.g., f22Response) are split into arrays to isolate the numeric values, then the conversion is performed and the new values are re-combined into the result variable as a string.
  * Some of the values can be either numeric or "INF", so for these values, first check if the value is numeric before attempting to perform the conversion.
  
* `handleSelections()` -- This function takes 2 string arguments, lensVal and baseVal, which will be used to compare with the data in `lensData` to fill in the other dropdown menus and the result candidate data.
  * lensVal and baseVal are passed in by the "Select lens" and "Select base" dropdown menus, which call the function when an option is selected on them. In the current implementation, they pass in the values of the state variables `selectedLens` and `selectedBase` respectively.
  * A for-loop compares lensVal to the names in the lensData array, and when the correct row is found, the data associated with that lens is stored in global array variables.
  * There are then a set of nested for-loops used to fill in the `baseOptions` and `spacerOptions` arrays, which contain key/value pairs and are used to populate the dropdown menus. Duplicates are removed from the menus, and only spacers that are valid with the selected base will be added.

* `calculateDOF()` -- This function takes no arguments, and uses the state variables from user input, as well as the global variables, to select the correct results.
  * First, the state variables are set to display the correct results, and a state variable is incremented to "force" the screen to re-render when necessary.
  * Typically, the index of the selected spacer in `lensData` will be used as the index to select the results. However, as some of the lenses do not use spacers, if the spacer value is "none", then the index of the selected base will be used as the index to pull data from `lensData `.
   
* `calculateHyperfocal()` -- This function takes no arguments, and uses the state variables from user input, as well as the global variables, to select the correct results.
  * First, the state variables are set to display the correct results, and a state variable is incremented to "force" the screen to re-render when necessary.
  * A for-loop is used to search through `lensData` to find the selected lens and pull the correct f-stop data, based on the selected f-stop.
  * The hyperfocal distance for an f-stop will be the depth of field (DOF) with the closest 'near' distance with a 'far' distance of infinity (INF). To find this, loop through the array of DOF. If the DOF includes 'INF', split the string and compare the value of the current minimum value. If the new DOF has a smaller value, store the DOF, base, and spacer as the new minimum standard.

For more information, refer to these links: 
* [React Native Dropdown Select List](https://www.npmjs.com/package/react-native-dropdown-select-list)
* [React Native Segmented Control Tab](https://www.npmjs.com/package/react-native-segmented-control-tab)

### reciprocityCalculator.js
This file contains the screen components and calculations for film reciprocity, which takes user input for the film stock and time, then outputs the reciprocity time and a countdown timer. The main updates to this file will be if the film data needs to be expanded on, but an explanation of the file will also be provided incase in-depth updates are required in the future.  

Adding additional film data: 
* The types of film that this calculator can use are stored in the global variable `filmStock` near the top of the file. Additional film types can be added here.
* To add the reciprocity calculation for the new film to the file, the `calculateReciprocity()` function will have to be updated with the required formulas. To do this, simply add a new else if{} statement to the function with the new film's name, and assign the results of the calculation to the variable `reciprocityTime`.

How this screen is organized: 
**Visible Screen Components**  
When a user arrives on the screen, there is a single seachable dropdown menu, which a user uses to select the film stock they would like to find the reciprocity time for. There is also a text entry box which allows a user to enter a numeric value for the time they would like to caluclate the reciprocity on. When the user presses 'Done' on the keyboard when they enter a time, the `calculateReciprocity()` function will execute (see section below for details about this function).  

Once a user presses 'Done', results will be displayed. The reciprocity time will be displayed, along with a countdown timer and a button to start it. When the timer runs out, the screen will turn red and a sound will play (a user's ringer must be turn on or they must be using headphones). 

**Functions**  
* `calculateReciprocity()` -- This function takes two arguments, for the film type and the time input by the users. 

*This section of the README is still in progress, thank you for your patience*

### baseCalculator.js

*This section of the README is still in progress, thank you for your patience*

### userGuide.js
This file contains an interactive user guide for the stereo system. It is currently in **Version 0.8**.  This file contains a table of contents that a user can press to be brought to that section of the document, images that can be opened and zoomed, and the text of the user guide. There is also a button on the bottom of the screen which can be pressed at any time to return to the top of the document. Future versions of the user guide may also include videos, links to other documents or websites, and a search feature.  

As this document is very long, paragraphs, images, and bullet points have been numbered in comments to make them easier to find in the file. Paragraph numbers are reset to 1 under each header from the table of contents. Images are numbered by the order in which they appear in the document and they are not reset in different sections; this is so there are not conflicting names for image objects. *(Note: This numbering likely won't remain perfect as new images are added later, but still keep the image names consistent with the comments referring to them for ease of searching the document.)* Bullet points are numbered based on their position within the group they are a part of and each group restarts with bullet 1. Finally, any headings and titles do not count as paragraphs.  

To add a new section to the User Guide: 
* At the top of the UserGuideContent component, add a reference with a descriptive name for the new section to be added (`const lensOptionsRef = React.useRef();`). The current references are in order of the table of contents.
* In the return() of UserGuideContent, add a "button" to the table of contents in the order where you want it to go. The current "buttons" are <Pressable> components wrapped around a <Text> component, as this allows for more styling, such as the hierachy of the table of contents. To create a button, copy and paste an existing one, then:
  * The <Pressable> component has an onPress property which should call the `scrollIntoView()` function. Update the reference name in this function to match the reference you just created above
  * Choose the style that matches the level of the button in the table of content. The base level will be `guideStyle.button`, the children of those will be `guideStyle.buttonLevel2`, and the children of those will be `guideStyle.buttonLevel3`
  * Update the accessibility properties in <Pressable> and the visible text in the <Text> component to match the name and description of the new section you are adding.
* Scroll to the place in the file where you want to add the new section. *(Note: I will be adding comments at the beginning and end of each section, so a quick ctrl+F can take you to the correct spot in the file)*.
  * Create a <View> component that will wrap the <Text> component with the title of the section.
  * Add a ref property to the <View> component with the name of the reference created for this section (`ref={lensOptionsRef}`).
  * The text should use the `guideStyle.textSubtitle` style, and it will just contain the title for the section.
* Below the <View> component, add the content for the section.
  * Split up the <Text> components by paragraph and number them accordingly. Also include the accessibilityLabel property, and add the paragraph there as well.

To add an image to the user guide: 
* Add the image to the images directory, which can be found under assets. Currently, images for the user guide are named stereoUserGuide_.png, where the underscore is the number correlating to the order it appears in the document. However, as the file is assigned to an object before it is referred to, the naming scheme doesn't necessarily have to be kept consistent.
* At the top of the UserGuideContent component, create a new image object. The images are currently named based on the order which they appear in the document. However, as images are later added to the middle of the document, it's possible this scheme will not stay consistent. Consider naming images with "2a" if they go between 2 and 3?
* Below the images, create a state variable to control the Modal which will be used to open and zoom in on the image. Name the modal with a number to match the image (for image two, the variable is modal2Visible). Set the initial value to false, which will make the modal invisible when the page first renders.
* Scroll to the place in the file where the image will be placed.
* Create a <Pressable> component that wraps an <Image> component.
  * In the onPress property of the <Pressable> component, call the function to set the modal for that image to true (`onPress={() => setModal2Visible(true)}`). This will make it so when a user taps on the image, it will open the modal where they can view the image in isolation and zoom in on it
  * The source property of the <Image> component should be the file chosen for this image
* Below the <Pressable> component, create a <Modal> component, which will wrap around an <ImageViewer> component.
  * The visible property of the modal will be set equal to the modal's state variable (e.g., modal2Visible)
  * The imageUrls property of the ImageViewer will be set to the object created above (step 2)

To update content: 
* To change text content, find the corresponding existing paragraph and copy+paste the updated content. Be sure to change both the visible text and the accessibilityLabel property.
* To change an image, either make the new image have the same name as the one it is replacing and remove the old image from the directory, or change the image source to match the name of the new image. This will need to be done in the object created at the top of the UserGuideContent component and in the <Image> component where the image will appear on the screen.  
  
For more information, refer to these links:  
* [React Native Scroll-Into-View](https://www.npmjs.com/package/react-native-scroll-into-view)
* [React Native Image Zoom Viewer](https://www.npmjs.com/package/react-native-image-zoom-viewer)

*This section of the README is still in progress, thank you for your patience*



## Accessibility Statement
The creator of this app intends to provide a user friendly experience for anyone, regardless of ability or disability. However, as this is the first mobile app that I have ever created and I am almost entirely self-taught in using React and ReactNative, it is quite possible that I have missed some of the accessibility features that it offers. I welcome constructive criticism that will help make this application more accessible to everyone, including technical feedback on how to best utilize React, as well as design choices. Thank you!
