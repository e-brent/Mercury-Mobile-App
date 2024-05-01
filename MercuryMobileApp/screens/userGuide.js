// See README.md for information about this file and how to make updates

// NECESSARY UPDATES: THIS FILE IS INCOMPLETE, AND THE USER GUIDE IS STILL IN THE PROCESS OF BEING UPDATED.

import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView, Modal, Image, Pressable, FlatList} from 'react-native';

// Special imports for this file, see README for links with more information about them
import {wrapScrollView, useScrollIntoView,} from 'react-native-scroll-into-view';
import ImageViewer from 'react-native-image-zoom-viewer';

// options is used in the scrollIntoView() function to customize where items are scrolled to on the page
const options ={
    align:'top',
    insets: {
        top: 5,
    },
}

var yourPicture = require('../assets/images/MercuryStereo UserGuide_html_67faff9346fa14a.jpg');

/*NOTE: As this is a long document, the paragraphs and images have been numbered in comments below for ease of jumping to a specific paragraph to make updates.
        The numbers for the paragraphs reset with each heading in the table of contents. The image count is cumultive to keep it consistent with the variable names. */


// Custom component which allows for referencing farther down the page with the table of contents and automatically scrolling to it
const CustomScrollView = wrapScrollView(ScrollView);

const UserGuideContent = () => {
    const scrollIntoView = useScrollIntoView(); // Function called when scrolling to specific spot of the page

    // References for jumping down page from table of contents -- each reference is a section from the table of contents
    const introRef = React.useRef();
    const partIRef = React.useRef();
    const gettingToKnowRef = React.useRef();
    const lensOptionsRef = React.useRef();
    const electronicLensRef = React.useRef();
    const manualLensRef = React.useRef();
    const compatibleLensRef = React.useRef();
    const baseSpacersRef = React.useRef();
    const focusSpacersRef = React.useRef();
    const filmBacksRef = React.useRef();
    const mercuryPanoBackRef = React.useRef();
    const mercuryCutFilmBackRef = React.useRef();
    const horsemanBackRef = React.useRef();
    const linhofTechnoRollexRef = React.useRef();
    const daYiBackRef = React.useRef();
    const largeFormatSheetFilmHoldersRef = React.useRef();
    const grafmaticRef = React.useRef();
    const glassPlatesTintypesRef = React.useRef();
    const instantFilmRef = React.useRef();
    const essentialAccessoriesRef = React.useRef();
    const viewfinderRef = React.useRef();
    const cameraStrapRef = React.useRef();
    const spannerWrenchRef = React.useRef();
    const lensCapRef = React.useRef();
    const recommendedAccessoriesRef = React.useRef();
    const sideHandleRef = React.useRef();
    const groundGlassBackRef = React.useRef();
    const qrClampRef = React.useRef();
    const lightMeterRef = React.useRef();
    const remoteTriggerRef = React.useRef();
    const miniScrewdriverRef = React.useRef();
    const filterStepUpRingsRef = React.useRef();
    const lensShadesRef = React.useRef();
    const lensboardShellRef = React.useRef();
    const graflokRearCapRef = React.useRef();
    const mercuryAppRef = React.useRef();
    const advancedAccessoriesRef = React.useRef();
    const rangeFinderRef = React.useRef();
    const lensElementMountref = React.useRef();
    const groundGlassLoupeRef = React.useRef();
    const mercuryTriggerControllerRef = React.useRef();
    const otherUpgradesRef = React.useRef();
    const partIIRef = React.useRef();
    const partIIIRef = React.useRef();
    const shootingGroundGlassRef = React.useRef();
    const aperaturePrevRef = React.useRef();
    const composingGroundGlassRef = React.useRef();
    const exposingShotRef = React.useRef();
    const deluxeGroundGlassBackRef = React.useRef();
    const mercuryStereoLensShadeSysRef = React.useRef();
    const shootingHyperCloseStereoRef = React.useRef();
    const extremeHyperstereoRef = React.useRef();
    const extremeCloseupRef = React.useRef();
    const shootingFlashRef = React.useRef();
    const offboardWirelessFlashRef = React.useRef();
    const whichShutterRef = React.useRef();
    const partIVRef = React.useRef();
    const compositing3DImagesRef = React.useRef();
    const screenViewingRef = React.useRef();
    const formattingImageParlorscopeRef = React.useRef();
    const xperia1SeriesRef = React.useRef();
    const xperiaZ5PremRef = React.useRef();
    const viewingImageParlorscopeRef = React.useRef();
    const parlorscopeAdjustmentsRef = React.useRef();
    const partVRef = React.useRef();
    const shootingSlidesRef = React.useRef();
    const mountingSlidesStndCardboardRef = React.useRef();
    const viewingSlidesParlorscopeRef = React.useRef();
    const partVIRef = React.useRef();
    const lensCompatibilityRef = React.useRef();
    const shutterCompatibilityRef = React.useRef();
    const supportedShuttersRef = React.useRef();
    const stereoElectronicLensboardRef = React.useRef();
    const manualLensboardRef = React.useRef();
    const settingUpLensboardRef = React.useRef();
    const transportingRef = React.useRef();
    const troubleshootingRef = React.useRef();


    // Image objects, created in the order they come up in the User Guide
    const image1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/stereoUserGuide1.png')
        }
    }]

    const image2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/stereoUserGuide2.png')
        }
    }]

    const image3 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/stereoUserGuide3.png')
        }
    }]

    // State variables for modals, which will be used to open and close the images; each image has its own modal 
    // Default value is false because the modals should start closed
    const [modal1Visible, setModal1Visible] = React.useState(false);
    const [modal2Visible, setModal2Visible] = React.useState(false);
    const [modal3Visible, setModal3Visible] = React.useState(false);


    return(
        <SafeAreaView>
    {/*Title*/}
            <Text style={guideStyle.textTitle} accessible={true} accessibilityLabel="Mercury Stereo User Guide" accessibilityRole="text">Mercury Stereo User Guide</Text>
            <Text style={guideStyle.noteText} accessible={true} accessibilityLabel="Version 0.8" accessibilityRole="text">Version 0.8</Text>

            <Image
                style={guideStyle.imageJPG}
                source={yourPicture}
            />

    {/*Table of contents header */}
            <Text style={guideStyle.textSubtitle1} accessible={true} accessibilityLabel="Table of contents" accessibilityRole="text">Table of Contents</Text>
            
    {/*Table of contents links to further down the page. onPress function will bring the labeled reference into view.*/}
    {/*PART I*/}
            <Pressable onPress={() => scrollIntoView(introRef.current, options)} style={guideStyle.button} accessible={true} accessibilityLabel="Introduction to Medium Format Stereo Photography" accessibilityHint="Click to jump to the introduction section" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Introduction to Medium Format Stereo Photography</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(partIRef.current, options)} style={guideStyle.button} accessible={true} accessibilityLabel="PART I: CAMERA BASICS" accessibilityHint="Click to jump to PART I: CAMERA BASICS" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART I: CAMERA BASICS</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(gettingToKnowRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Getting to Know Your Camera" accessibilityHint="Click to jump to Getting to Know Your Camera in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Getting to Know Your Camera</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensOptionsRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Lens Options" accessibilityHint="Click to jump to Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lens Options</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(electronicLensRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Electronic Lensboards" accessibilityHint="Click to jump to Electronic Lensboards in Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Electronic Lensboards</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(manualLensRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Manual Lensboards" accessibilityHint="Click to jump to Manual Lensboards in Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Manual Lensboards</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(compatibleLensRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Compatible Lenses" accessibilityHint="Click to jump to Compatible Lenses in Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Compatible Lenses</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(baseSpacersRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Base Spacers" accessibilityHint="Click to jump to Base Spacers in Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Base Spacers</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(focusSpacersRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Focus Spacers" accessibilityHint="Click to jump to Focus Spacers in Lens Options in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Focus Spacers</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(filmBacksRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Film Backs" accessibilityHint="Click to jump to Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Film Backs</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mercuryPanoBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Mercury 65/70mm Panoramic Back" accessibilityHint="Click to jump to Mercury 65/70mm Panoramic Back in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mercury 65/70mm Panoramic Back</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mercuryCutFilmBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Mercury 65mm Cut Film Back" accessibilityHint="Click to jump to Mercury 65mm Cut Film Back in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mercury 65mm Cut Film Back</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(horsemanBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Horseman 120 6x12 Back" accessibilityHint="Click to jump to Horseman 120 6x12 Back in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Horseman 120 6x12 Back</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(linhofTechnoRollexRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Linhof Techno Rollex" accessibilityHint="Click to jump to Linhof Techno Rollex in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Linhof Techno Rollex</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(daYiBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Da Yi 120 6x12 Back" accessibilityHint="Click to jump to Ca Yi 120 6x12 Back in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Da Yi 120 6x12 Back</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(largeFormatSheetFilmHoldersRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Large Format Sheet Film Holders" accessibilityHint="Click to jump to Large Format Sheet Film Holders in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Large Format Sheet Film Holders</Text>
            </Pressable> 

            <Pressable onPress={() => scrollIntoView(grafmaticRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Grafmatic" accessibilityHint="Click to jump to Grafmatic in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Grafmatic</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(glassPlatesTintypesRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Glass Plates and Tintypes" accessibilityHint="Click to jump to Glass Plates and Tintypes in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Glass Plates and Tintypes</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(instantFilmRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Instant Film" accessibilityHint="Click to jump to Instant Film in Film Backs in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Instant Film</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(essentialAccessoriesRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Essential Accessories" accessibilityHint="Click to jump to Essential Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Essential Accessories</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(viewfinderRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Viewfinder" accessibilityHint="Click to jump to Viewfinder in Essential Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Viewfinder</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(cameraStrapRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Camera Strap" accessibilityHint="Click to jump to Camera Strap in Essential Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Camera Strap</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(spannerWrenchRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Spanner Wrench" accessibilityHint="Click to jump to Spanner Wrench in Essential Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Spanner Wrench</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensCapRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Lens Cap" accessibilityHint="Click to jump to Lens Cap in Essential Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lens Cap</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(recommendedAccessoriesRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Highly Recommended Accessories" accessibilityHint="Click to jump to Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Highly Recommended Accessories</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(sideHandleRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Side Handle" accessibilityHint="Click to jump to Side Handle in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Side Handle</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(groundGlassBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Ground Glass Back" accessibilityHint="Click to jump to Ground Glass Back in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Ground Glass Back</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(qrClampRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="QR Clamp" accessibilityHint="Click to jump to QR Clamp in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>QR Clamp</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lightMeterRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Light Meter" accessibilityHint="Click to jump to Light Meter in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Light Meter</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(remoteTriggerRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Remote Trigger" accessibilityHint="Click to jump to Remote Trigger in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Remote Trigger</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(miniScrewdriverRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Mini Screwdriver Set" accessibilityHint="Click to jump to Mini Screwdriver Set in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mini Screwdriver Set</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(filterStepUpRingsRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Filter Step-Up Rings" accessibilityHint="Click to jump to Filter Step-Up Rings in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Filter Step-Up Rings</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensShadesRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Lens Shades" accessibilityHint="Click to jump to Lens Shades in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lens Shades</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensboardShellRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Lensboard Shell" accessibilityHint="Click to jump to Lensboard Shell in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lensboard Shell</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(graflokRearCapRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Graflok 45 Rear Protective Cap" accessibilityHint="Click to jump to Graflok 45 Rear Protective Cap in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Graflok 45 Rear Protective Cap</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mercuryAppRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Mercury Stereo Toolkit App" accessibilityHint="Click to jump to Mercury Stereo Toolkit App in Highly Recommended Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mercury Stereo Toolkit App</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(advancedAccessoriesRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Advanced Accessories" accessibilityHint="Click to jump to Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Advanced Accessories</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(rangeFinderRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Range Finder" accessibilityHint="Click to jump to Range Finder in Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Range Finder</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensElementMountref.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Lens Element Mount" accessibilityHint="Click to jump to Lens Element Mount in Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lens Element Mount</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(groundGlassLoupeRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Ground Glass Loupe" accessibilityHint="Click to jump to Ground Glass Loupe in Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Ground Glass Loupe</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mercuryTriggerControllerRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Mercury Trigger Controller" accessibilityHint="Click to jump to Mercury Trigger Controller in Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mercury Trigger Controller</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(otherUpgradesRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Other Upgrades" accessibilityHint="Click to jump to Other Upgrades in Advanced Accessories in Part I" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Other Upgrades</Text>
            </Pressable>

    {/*PART II*/}
            <Pressable onPress={() => scrollIntoView(partIIRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA" accessibilityHint="Click to jump to PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA</Text>
            </Pressable>


    {/*PART III*/}
            <Pressable onPress={() => scrollIntoView(partIIIRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART III: ADVANCED OPTIONS" accessibilityHint="Click to jump to PART III: ADVANCED OPTIONS" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART III: ADVANCED OPTIONS</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(shootingGroundGlassRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Shooting with Ground Glass" accessibilityHint="Click to jump to Shooting with Ground Glass in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Shooting with Ground Glass</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(aperaturePrevRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Aperature Preview" accessibilityHint="Click to jump to Aperature Preview in Shooting with Ground Glass in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Aperature Preview</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(composingGroundGlassRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Composing on Ground Glass" accessibilityHint="Click to jump to Composing on Ground Glass in Shooting with Ground Glass in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Composing on Ground Glass</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(exposingShotRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Exposing Your Shot" accessibilityHint="Click to jump to Exposing Your Shot in Shooting with Ground Glass in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Exposing Your Shot</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(deluxeGroundGlassBackRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Deluxe Ground Glass Back Accessories" accessibilityHint="Click to jump to Deluxe Ground Glass Back Accessories in Shooting with Ground Glass in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Deluxe Ground Glass Back Accessories</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mercuryStereoLensShadeSysRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Mercury Stereo Lens Shade System" accessibilityHint="Click to jump to Mercury Stereo Lens Shade System in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mercury Stereo Lens Shade System</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(shootingHyperCloseStereoRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Shooting Hyperstereo and Close-Up Stereo" accessibilityHint="Click to jump to Shooting Hyperstereo and Close-Up Stereo in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Shooting Hyperstereo and Close-Up Stereo</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(extremeHyperstereoRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Extreme Hyperstereo" accessibilityHint="Click to jump to Extreme Hyperstereo in Shooting Hyperstereo and Close-Up Stereo in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Extreme Hyperstereo</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(extremeCloseupRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Extreme Close-Ups" accessibilityHint="Click to jump to Extreme Close-Ups in Shooting Hyperstereo and Close-Up Stereo in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Extreme Close-Ups</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(shootingFlashRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Shooting With Flash" accessibilityHint="Click to jump to Shooting With Flash in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Shooting With Flash</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(offboardWirelessFlashRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Off-Board/Wireless Flash" accessibilityHint="Click to jump to Off-Board/Wireless Flash in Shooting With Flash in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Off-Board/Wireless Flash</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(whichShutterRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Which Shutter?" accessibilityHint="Click to jump to Which Shutter? in Shooting With Flash in Part III" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Which Shutter?</Text>
            </Pressable>

        {/*PART IV*/}
            <Pressable onPress={() => scrollIntoView(partIVRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART IV: VIEWING IN 3D: DIGITAL" accessibilityHint="Click to jump to PART IV: VIEWING IN 3D: DIGITAL" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART IV: VIEWING IN 3D: DIGITAL</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(compositing3DImagesRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Compositing Digital 3D Images" accessibilityHint="Click to jump to Compositing Digital 3D Images in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Compositing Digital 3D Images</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(screenViewingRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Screen Viewing" accessibilityHint="Click to jump to Screen Viewing in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Screen Viewing</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(formattingImageParlorscopeRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Formatting Digital Images for a Mercury Parlorscope" accessibilityHint="Click to jump to Formatting Digital Images for a Mercury Parlorscope in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Formatting Digital Images for a Mercury Parlorscope</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(xperia1SeriesRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Xperia 1 Series: 3840 x 1644" accessibilityHint="Click to jump to Xperia 1 Series: 3840 x 1644 in Formatting Digital Images for a Mercury Parlorscope in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Xperia 1 Series: 3844 x 1644</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(xperiaZ5PremRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Xpera Z5 Premium or XZ Premium" accessibilityHint="Click to jump to Xperia Z5 Premium or XZ Premium in Formatting Digital Images for a Mercury Parlorscope in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Xperia Z5 Premium or XZ Premium</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(viewingImageParlorscopeRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Viewing Digital Images on your Mercury Parlorscope" accessibilityHint="Click to jump to Viewing Digital Images on your Mercury Parlorscope in Formatting Digital Images for a Mercury Parlorscope in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Viewing Digital Images on your Mercury Parlorscope</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(parlorscopeAdjustmentsRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Parlorscope Optical Adjustments" accessibilityHint="Click to jump to Parlorscope Optical Adjustments in Formatting Digital Images for a Mercury Parlorscope in Part IV" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Parlorscope Optical Adjustments</Text>
            </Pressable>

        {/*PART V*/}
            <Pressable onPress={() => scrollIntoView(partVRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART V: VIEWING IN 3D: SLIDES" accessibilityHint="Click to jump to PART V: VIEWING IN 3D: SLIDES" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART V: VIEWING IN 3D: SLIDES</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(shootingSlidesRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Shooting Slides" accessibilityHint="Click to jump to  Shooting Slides in Part V" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Shooting Slides</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(mountingSlidesStndCardboardRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Mounting MF3D Slides in Standard Cardboard Mounts" accessibilityHint="Click to jump to Mounting MF3D Slides in Standard Cardboard Mounts in Part V" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Mounting MF3D Slides in Standard Cardboard Mounts</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(viewingSlidesParlorscopeRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Viewing MF3D Slides in Mercury Parlorscope" accessibilityHint="Click to jump to Viewing MF3D Slides in Mercury Parlorscope in Part V" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Viewing MF3D Slides in Mercury Parlorscope</Text>
            </Pressable>

        {/*PART VI*/}
            <Pressable onPress={() => scrollIntoView(partVIRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA" accessibilityHint="Click to jump to PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(lensCompatibilityRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Lens Compatibility" accessibilityHint="Click to jump to Lens Compatibility in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Lens Compatibility</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(shutterCompatibilityRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Shutter Compatibility" accessibilityHint="Click to jump to Shutter Compatibility in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Shutter Compatibility</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(supportedShuttersRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Supported Shutters" accessibilityHint="Click to jump to Supported Shutters in Shutter Compatibility in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Supported Shutters</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(stereoElectronicLensboardRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Stereo 12 Electronic Lensboards" accessibilityHint="Click to jump to Stereo 12 Electronic Lensboards in Shutter Compatibility in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Stereo 12 Electronic Lensboards</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(manualLensboardRef.current, options)} style={guideStyle.buttonLevel3} accessible={true} accessibilityLabel="Manual Lensboards" accessibilityHint="Click to jump to Manual Lensboards in Shutter Compatibility in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Manual Lensboards</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(settingUpLensboardRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Setting Up Your Lensboard" accessibilityHint="Click to jump to Setting Up Your Lensboard in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Setting Up Your Lensboard</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(transportingRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Transporting Your Camera" accessibilityHint="Click to jump to Transporting Your Camera in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Transporting Your Camera</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(troubleshootingRef.current, options)} style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Troubleshooting" accessibilityHint="Click to jump to Troubleshooting in Part VI" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Troubleshooting</Text>
            </Pressable>



        

    {/*Introduction to Medium Format Stereo Photography*/}
            <View ref={introRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="Introduction to Medium Format Stereo Photography" 
                    accessibilityRole="text"
                >
                    Introduction to Medium Format Stereo Photography
                </Text>
            </View>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Stereo (3D) imagery was invented, in drawn form, before photography, and immediately upon the invention of photography, photographers began making stereo images. For decades in the UK, stereo photography was more popular than the mono, or flat, form. There was a large market for it: photographers produced stereographs (prints of stereo images) in standardized forms, as the Victorians would purchase new sets constantly as entertainment. This was an early form of of immersive 3D media. The popularity of stereo photography continued into the 1930s, having spread to the United States. By this time, most major camera manufacturers in Europe were producing various stereo cameras, first for shooting on glass plates, and later, after Kodak developed roll film, on that format." 
                accessibilityRole="text"
            >
                Stereo (3D) imagery was invented, in drawn form, before photography, and immediately upon the invention of photography, photographers began making stereo images. For decades in the UK, stereo photography was more popular than the mono, or flat, form. There was a large market for it: photographers produced stereographs (prints of stereo images) in standardized forms, as the Victorians would purchase new sets constantly as entertainment. This was an early form of of immersive 3D media. The popularity of stereo photography continued into the 1930s, having spread to the United States. By this time, most major camera manufacturers in Europe were producing various stereo cameras, first for shooting on glass plates, and later, after Kodak developed roll film, on that format.
            </Text>
        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Medium format is the ideal stereoscopic format, because two 6x6 views (single images) fit together, almost by magic, at the same distance as the human eyes do from one another. This means that they fill a film strip (negative or positive) without any wasted distance between them, maximize the resolution available for human viewing, and produce a “full field” image that, when reproduced at a 1:1 ratio (without shrinking or enlarging), perfectly fill the human visual field with a minimum of optical distortion. This means that, besides all of the regular benefits of medium format, medium format stereo photos shot on slide film produces an unparalleled viewing experience. Think of how entrancing Viewmaster slides (shot on 16mm film) are. If you've ever seen them mounted in a viewer, think how amazing consumer slides and viewers (shot on half-frame 135 film) are. And now imagine eight times the resolution, and a backlit, cinematic image that does away with the viewing window of these other formats and immerses you in the scene, like an imax film image projected right onto your retina. Once you—and your friends—have seen this, you will never want to shoot flat photos again. And of course, even for viewing as stereographs or as digital images on screens or high-resolution VR displays, medium format images are a world ahead of the other options." 
                accessibilityRole="text"
            >
                Medium format is the ideal stereoscopic format, because two 6x6 views (single images) fit together, almost by magic, at the same distance as the human eyes do from one another. This means that they fill a film strip (negative or positive) without any wasted distance between them, maximize the resolution available for human viewing, and produce a “full field” image that, when reproduced at a 1:1 ratio (without shrinking or enlarging), perfectly fill the human visual field with a minimum of optical distortion. This means that, besides all of the regular benefits of medium format, medium format stereo photos shot on slide film produces an unparalleled viewing experience. Think of how entrancing Viewmaster slides (shot on 16mm film) are. If you've ever seen them mounted in a viewer, think how amazing consumer slides and viewers (shot on half-frame 135 film) are. And now imagine eight times the resolution, and a backlit, cinematic image that does away with the viewing window of these other formats and immerses you in the scene, like an imax film image projected right onto your retina. Once you—and your friends—have seen this, you will never want to shoot flat photos again. And of course, even for viewing as stereographs or as digital images on screens or high-resolution VR displays, medium format images are a world ahead of the other options.
            </Text>
        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Why is it, then, that so few camera companies have produced serious medium format stereo cameras?" 
                accessibilityRole="text"
            >
                Why is it, then, that so few camera companies have produced serious medium format stereo cameras?
            </Text>
        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken advantage of it. The German companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!" 
                accessibilityRole="text"
            >
                This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken advantage of it. The German companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!
            </Text>
        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Soviets, flying high after beating the Americans to space with the first satellite, Sputnik, decided they would be the first to introduce a modern medium format stereo camera as well. The parallel was clear enough for them to name it the Sputnik. Produced in large quantities in the Soviet Union starting in 1960, it remains in use by many medium format stereographers today due to a lack of other options. This is despite some pretty severe limitations: it was produced cheaply, out of poor materials, easily loses synchronization between its shutters, and most importantly, utilizes lenses of poor quality. Nonetheless, kudos to the Soviets for producing something, like the other Sputnik, that no one else could seem to manage." 
                accessibilityRole="text"
            >
                The Soviets, flying high after beating the Americans to space with the first satellite, Sputnik, decided they would be the first to introduce a modern medium format stereo camera as well. The parallel was clear enough for them to name it the Sputnik. Produced in large quantities in the Soviet Union starting in 1960, it remains in use by many medium format stereographers today due to a lack of other options. This is despite some pretty severe limitations: it was produced cheaply, out of poor materials, easily loses synchronization between its shutters, and most importantly, utilizes lenses of poor quality. Nonetheless, kudos to the Soviets for producing something, like the other Sputnik, that no one else could seem to manage.
            </Text>
        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="More recently, in 2006 a fly-by-night Chinese company called “3D World” popped up and ambitiously attempted to create a medium format stereoscopic ecosystem, starting with several slide viewers, and then eventually (in 2008) a camera, the TL-120-1. This camera was aimed at a prosumer market, produced cheaply and in a style very similar to the Sputnik. It is not a high end camera and does not make use of high-end optics, but it was at least a modern attempt at a medium format stereo camera, including reflex viewfinder and in-camera reflected light meter. Unfortunately, as fast as they had appeared, 3D World dissolved, leaving behind about a year's worth of produced cameras. A few years later, Holga made a stereo pinhole camera and slide viewer that were even more dreadful than their mono cameras, and it quickly disappeared. The only other cameras have been one-offs by brilliant machinists who hack together and synchronize two mono cameras, custom large format camera conversions, and novelty pinhole cameras." 
                accessibilityRole="text"
            >
                More recently, in 2006 a fly-by-night Chinese company called “3D World” popped up and ambitiously attempted to create a medium format stereoscopic ecosystem, starting with several slide viewers, and then eventually (in 2008) a camera, the TL-120-1. This camera was aimed at a prosumer market, produced cheaply and in a style very similar to the Sputnik. It is not a high end camera and does not make use of high-end optics, but it was at least a modern attempt at a medium format stereo camera, including reflex viewfinder and in-camera reflected light meter. Unfortunately, as fast as they had appeared, 3D World dissolved, leaving behind about a year's worth of produced cameras. A few years later, Holga made a stereo pinhole camera and slide viewer that were even more dreadful than their mono cameras, and it quickly disappeared. The only other cameras have been one-offs by brilliant machinists who hack together and synchronize two mono cameras, custom large format camera conversions, and novelty pinhole cameras.
            </Text>
        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="As a medium format and large format photographer, I saw a way forward. As the Mercury Camera system developed over the last eight years, adding hundreds of different modules to become the most versatile camera in the history of photography, I realized that it could be extended to fill this hole. In fact, customers have asked me, over the years, for a stereo camera. But let me tell you, it is a real engineering challenge! Not to make one camera, but to design a system flexible enough to be considered professional. We worked for the past seven years, off and on, on what would finally become the Mercury Stereo 12. Certain milestones in the Mercury system, such as our Universal Sync Box and Remote Shutter Actuation system, which enables precise electronic actuation of manual shutters, removed roadblocks to our stereo camera. Finally, in 2022, the biggest obstacles had been crossed and a final design took shape. Most of that year was devoted to prototying and testing the design. I put this camera through more testing than any other Mercury model, partly because there was so much we had to get right, and partly because I've never had more fun with a camera." 
                accessibilityRole="text"
            >
                As a medium format and large format photographer, I saw a way forward. As the Mercury Camera system developed over the last eight years, adding hundreds of different modules to become the most versatile camera in the history of photography, I realized that it could be extended to fill this hole. In fact, customers have asked me, over the years, for a stereo camera. But let me tell you, it is a real engineering challenge! Not to make one camera, but to design a system flexible enough to be considered professional. We worked for the past seven years, off and on, on what would finally become the Mercury Stereo 12. Certain milestones in the Mercury system, such as our Universal Sync Box and Remote Shutter Actuation system, which enables precise electronic actuation of manual shutters, removed roadblocks to our stereo camera. Finally, in 2022, the biggest obstacles had been crossed and a final design took shape. Most of that year was devoted to prototying and testing the design. I put this camera through more testing than any other Mercury model, partly because there was so much we had to get right, and partly because I've never had more fun with a camera.
            </Text>
        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The key design goals of the Mercury Stereo 12 were these:" 
                accessibilityRole="text"
            >
                The key design goals of the Mercury Stereo 12 were these:
            </Text>
        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* The camera had to be in a compact, lightweight, 4x5 large format form factor." 
                accessibilityRole="text"
            >
                * The camera had to be in a compact, lightweight, 4x5 large format form factor.
            </Text>
        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* It had to have exchangeable backs, to enable working with ground glass and multiple film formats simultaneously." 
                accessibilityRole="text"
            >
                * It had to have exchangeable backs, to enable working with ground glass and multiple film formats simultaneously.
            </Text>
        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* It had to accept industry standard backs that already existed as well as new backs that folks invent. The clear choice here was the Graflok 45 standard used by most modern 4x5 cameras. In particular, the excellent Horseman 6x12 back would, I realized, make the ultimate 120 back. But the camera also had to be compatible with cheaper 6x12 backs, homemade backs, and 4x5 sheet film." 
                accessibilityRole="text"
            >
                * It had to accept industry standard backs that already existed as well as new backs that folks invent. The clear choice here was the Graflok 45 standard used by most modern 4x5 cameras. In particular, the excellent Horseman 6x12 back would, I realized, make the ultimate 120 back. But the camera also had to be compatible with cheaper 6x12 backs, homemade backs, and 4x5 sheet film.
            </Text>
        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* It had to have interchangeable lenses. This was the most difficult aspect of the design. No medium format stereo camera save for hacked “twin” cameras have ever had interchangeable backs. But this is a must for professional photography." 
                accessibilityRole="text"
            >
                * It had to have interchangeable lenses. This was the most difficult aspect of the design. No medium format stereo camera save for hacked “twin” cameras have ever had interchangeable backs. But this is a must for professional photography.
            </Text>
        {/*Bullet 5*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* The camera had to be able to stop motion precisely, with perfectly synchronized triggers." 
                accessibilityRole="text"
            >
                * The camera had to be able to stop motion precisely, with perfectly synchronized triggers.
            </Text>
        {/*Bullet 6*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* It had to be compatible with the greatest possible numbers of shutters and lenses available from the history of photography. This was a guiding principal of the overall Mercury system, and it carried over into our Stereo system. We don't want to reinvent the wheel when it comes to lenses. The greatest lens makers out there have produced the greatest possible lenses. We needed to make our camera compatible with as many of them as possible." 
                accessibilityRole="text"
            >
                * It had to be compatible with the greatest possible numbers of shutters and lenses available from the history of photography. This was a guiding principal of the overall Mercury system, and it carried over into our Stereo system. We don't want to reinvent the wheel when it comes to lenses. The greatest lens makers out there have produced the greatest possible lenses. We needed to make our camera compatible with as many of them as possible.
            </Text>
        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The result was the Mercury Stereo 12, a full system that can make use of ground glass (with a full range of accessories), many different film formats (4x5 sheet film, 120 film, 70mm film, and even, experimentally, 135 film in a panoramic format), instantly interchangeable backs (switch from slow film to fast, BW to slide, etc.), and an interchangeable lens system that allows you to use 23 different recommended, legendary lenses, with compatibility with many more to be discovered." 
                accessibilityRole="text"
            >
                The result was the Mercury Stereo 12, a full system that can make use of ground glass (with a full range of accessories), many different film formats (4x5 sheet film, 120 film, 70mm film, and even, experimentally, 135 film in a panoramic format), instantly interchangeable backs (switch from slow film to fast, BW to slide, etc.), and an interchangeable lens system that allows you to use 23 different recommended, legendary lenses, with compatibility with many more to be discovered.
            </Text>
        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Finally, there is a professional stereo camera for advanced photographers. You don't need to spend thousands of dollars (though you easily can if you want: this camera is compatible with some of the most advanced, expensive lenses ever made). You don't need to scramble for some rare camera from the past with many limitations. If you are a stereographer who no longer wants to be limited by your tools, this camera if for you. If you are a medium format or large format photographer who has never entered the third dimension because no comparable tools were available, this camera is for you. Or if you are a camera tinkerer who would like to build on and innovate with an open platform in the world of stereography, this camera is for you." 
                accessibilityRole="text"
            >
                Finally, there is a professional stereo camera for advanced photographers. You don't need to spend thousands of dollars (though you easily can if you want: this camera is compatible with some of the most advanced, expensive lenses ever made). You don't need to scramble for some rare camera from the past with many limitations. If you are a stereographer who no longer wants to be limited by your tools, this camera if for you. If you are a medium format or large format photographer who has never entered the third dimension because no comparable tools were available, this camera is for you. Or if you are a camera tinkerer who would like to build on and innovate with an open platform in the world of stereography, this camera is for you.
            </Text>
        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="I can honestly say that no piece of equipment has ever reinvigorated my love of photography more than this camera. I only hope that it can do half as much for you." 
                accessibilityRole="text"
            >
                I can honestly say that no piece of equipment has ever reinvigorated my love of photography more than this camera. I only hope that it can do half as much for you.
            </Text>
    
    {/*PART I: CAMERA BASICS*/}
            <View ref={partIRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART I: CAMERA BASICS" 
                    accessibilityRole="text"
                >
                    PART I: CAMERA BASICS
                </Text>
            </View>

    {/*Getting to Know Your Camera*/}
            <View ref={gettingToKnowRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Getting to Know Your Camera" 
                    accessibilityRole="text"
                >
                    Getting to Know Your Camera
                </Text>
            </View>
        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Mercury Stereo 12 is a modular platform, and as such it's difficult to define what a typical, singular camera looks like. But in this section we'll examine an example configuration, noting the most significant features of the camera. Before your camera will look like this and be ready to shoot, you will need to obtain two shutters and lenses, and set up your lensboard. This one-time process is covered in a separate document, Stereo 12 Lens and Shutter Setup." 
                accessibilityRole="text"
            >
                The Mercury Stereo 12 is a modular platform, and as such it's difficult to define what a typical, singular camera looks like. But in this section we'll examine an example configuration, noting the most significant features of the camera. Before your camera will look like this and be ready to shoot, you will need to obtain two shutters and lenses, and set up your lensboard. This one-time process is covered in a separate document, Stereo 12 Lens and Shutter Setup.
            </Text>

        {/*Image 1*/}
            <Pressable onPress={() => setModal1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/stereoUserGuide1.png')}
                />
            </Pressable>
            <Modal 
                visible={modal1Visible} 
                transparent={true}
                //onRequestClose={() => {setModal1Visible(!modal1Visible);}}
            >
                <ImageViewer 
                    imageUrls={image1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setModal1Visible(false)}
                    onClick={() => setModal1Visible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Lensboard (and shutters and lens elements):" 
                accessibilityRole="text"
            >
                Lensboard (and shutters and lens elements):
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This configuration includes our Mamiya TLR Lensboard, with two Mamiya TLR shutters and a set of Mamiya C 65mm lenses. Both the shutters and lenses were originally released as part of their Twin Lens Reflex system (1959-1995). These are great lenses, small and compact, designed for the 6x6 format. They come in pairs of matched lenses (though not with a pair of shutters). The main thing the customer has to do once they receive their Mercury Stereo 12 is obtain and mount two shutters. The lenses then just screw into the shutters. Any set of lens elements (the glasses pieces that screw in) can be screwed into an assembled TLR Lens Board; they can be interchanged at will." 
                accessibilityRole="text"
            >
                This configuration includes our Mamiya TLR Lensboard, with two Mamiya TLR shutters and a set of Mamiya C 65mm lenses. Both the shutters and lenses were originally released as part of their Twin Lens Reflex system (1959-1995). These are great lenses, small and compact, designed for the 6x6 format. They come in pairs of matched lenses (though not with a pair of shutters). The main thing the customer has to do once they receive their Mercury Stereo 12 is obtain and mount two shutters. The lenses then just screw into the shutters. Any set of lens elements (the glasses pieces that screw in) can be screwed into an assembled TLR Lens Board; they can be interchanged at will.
            </Text>
        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Base Spacer:" 
                accessibilityRole="text"
            >
                Base Spacer:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Behind the lensboard are two spacers. The “Base spacer” has to be matched to the lens. Some lenses, such as the Mamiya C 65mm and Mamiya C 80mm, use the same base, but most lenses have different bases." 
                accessibilityRole="text"
            >
                Behind the lensboard are two spacers. The “Base spacer” has to be matched to the lens. Some lenses, such as the Mamiya C 65mm and Mamiya C 80mm, use the same base, but most lenses have different bases.
            </Text>
        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Focus Spacer:" 
                accessibilityRole="text"
            >
                Focus Spacer:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The second spacer, nearest the lensboard, is the focus spacer. Each spacer produces a zone of focus: the distance between which everything is sharp. Stereo photography is not about focusing on a subject, but rather making sure that your set of most important subjects within the range of depth that is your actual subject, fall within a particular focus zone. As will be covered under “How to Shoot in Stereo” later in this guide, stereo depth perception works best at certain depth ranges, and so in practice, 90% of effective stereo photos fall within one or two focus zones. This means that you usually do not need to change your focus spacer very often, and also don't need very many. In any case, however, a large range are available to purchase or 3D print yourself." 
                accessibilityRole="text"
            >
                The second spacer, nearest the lensboard, is the focus spacer. Each spacer produces a zone of focus: the distance between which everything is sharp. Stereo photography is not about focusing on a subject, but rather making sure that your set of most important subjects within the range of depth that is your actual subject, fall within a particular focus zone. As will be covered under “How to Shoot in Stereo” later in this guide, stereo depth perception works best at certain depth ranges, and so in practice, 90% of effective stereo photos fall within one or two focus zones. This means that you usually do not need to change your focus spacer very often, and also don't need very many. In any case, however, a large range are available to purchase or 3D print yourself.
            </Text>
        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textAside}
                accessible={true} 
                accessibilityLabel="Focus Spacer Information (customizable/optional): Our focus spacers are designed so that a row of a spreadsheet, when printed out and adhered to it, will fit on a flat ridge. This information is the most important thing to a stereographer, and it is customizable to your preferences. Just download our pre-filled spreadsheet with our suggested info for each spacer (particular to each lens), edit it to include or eliminate any info you don't want, then print it out on adhesive paper or vinyl for use with your camera. You can change this info and reprint at any time. Each spacer is reversible, so you can include info for one lens on the top and a different lens on the bottom." 
                accessibilityRole="text"
            >
                Focus Spacer Information (customizable/optional): Our focus spacers are designed so that a row of a spreadsheet, when printed out and adhered to it, will fit on a flat ridge. This information is the most important thing to a stereographer, and it is customizable to your preferences. Just download our pre-filled spreadsheet with our suggested info for each spacer (particular to each lens), edit it to include or eliminate any info you don't want, then print it out on adhesive paper or vinyl for use with your camera. You can change this info and reprint at any time. Each spacer is reversible, so you can include info for one lens on the top and a different lens on the bottom.
            </Text>
        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Thumbscrews:" 
                accessibilityRole="text"
            >
                Thumbscrews: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In order to change either the base spacer (with a lens change) or the focus spacer (to change your focus zone), simply unscrew the four screws and lift up on the lensboard, leaving the screws in place. Just lift out the spacer(s) you want to change, pop a new one on, and drop the lensboard back in place. The screws should screw right back in. The entire process takes less than 20 seconds. With practice, you can even do this with the camera facing forward on a tripod. Notice that our thumbscrews are color coded to each lens-spacer combination. By default, we include the colors that are compatible with a particular combo on the spreadsheet info line for you to print out. Most spacers for a given lens will take the same screws, but the color on the label will let you know when you need to switch, usually at the extremes of the range. When a “W” is listed, it means that you should use one of our standard washers with that screw. When both a plain box and “W” are shown, it means that either will work." 
                accessibilityRole="text"
            >
                In order to change either the base spacer (with a lens change) or the focus spacer (to change your focus zone), simply unscrew the four screws and lift up on the lensboard, leaving the screws in place. Just lift out the spacer(s) you want to change, pop a new one on, and drop the lensboard back in place. The screws should screw right back in. The entire process takes less than 20 seconds. With practice, you can even do this with the camera facing forward on a tripod. Notice that our thumbscrews are color coded to each lens-spacer combination. By default, we include the colors that are compatible with a particular combo on the spreadsheet info line for you to print out. Most spacers for a given lens will take the same screws, but the color on the label will let you know when you need to switch, usually at the extremes of the range. When a “W” is listed, it means that you should use one of our standard washers with that screw. When both a plain box and “W” are shown, it means that either will work.
            </Text>
        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Power Switch:" 
                accessibilityRole="text"
            >
                Power Switch:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Turn this on to energize the camera so it's ready to shoot. Turn it off when you're not planning to use the camera for a period of time. If you leave the camera switched on for long periods, it will slowly drain your batteries (over many days or weeks). But it's fine to keep it on for hours at a time while you're actually using the camera. A set of batteries should last for months of shooting." 
                accessibilityRole="text"
            >
                Turn this on to energize the camera so it's ready to shoot. Turn it off when you're not planning to use the camera for a period of time. If you leave the camera switched on for long periods, it will slowly drain your batteries (over many days or weeks). But it's fine to keep it on for hours at a time while you're actually using the camera. A set of batteries should last for months of shooting.
            </Text>
        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Cold Shoes:" 
                accessibilityRole="text"
            >
                Cold Shoes:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These standard cold shoes (three on top and one on the left side) are for accessories of your choosing, such as accessory range finders, viewfinders, a bubble level, a wireless trigger, an on-camera flash, etc. When you are shooting handheld (instead of with a tripod and ground glass back), a viewfinder is the one essential accessory. We make a basic one for 80mm and longer lenses, as well as two versions of an optical finder for 65mm lenses. Our limited edition deluxe version has bright lines for 65mm and a larger view for 55mm. For wider lenses, see our website for 3rd party recommendations." 
                accessibilityRole="text"
            >
                These standard cold shoes (three on top and one on the left side) are for accessories of your choosing, such as accessory range finders, viewfinders, a bubble level, a wireless trigger, an on-camera flash, etc. When you are shooting handheld (instead of with a tripod and ground glass back), a viewfinder is the one essential accessory. We make a basic one for 80mm and longer lenses, as well as two versions of an optical finder for 65mm lenses. Our limited edition deluxe version has bright lines for 65mm and a larger view for 55mm. For wider lenses, see our website for 3rd party recommendations.
            </Text>
        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Focal Plane Marker:" 
                accessibilityRole="text"
            >
                Focal Plane Marker:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The line in this symbol marks the position of the surface of the film. When measuring to create focus targets (for optional lens calibration) or when measuring distance to a subject with a laser finder or other method, this is the point you should measure from." 
                accessibilityRole="text"
            >
                The line in this symbol marks the position of the surface of the film. When measuring to create focus targets (for optional lens calibration) or when measuring distance to a subject with a laser finder or other method, this is the point you should measure from.
            </Text>
        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Trigger:" 
                accessibilityRole="text"
            >
                Trigger:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This red button triggers the camera. It is designed to be pressed with your right index finger while holding the grip." 
                accessibilityRole="text"
            >
                This red button triggers the camera. It is designed to be pressed with your right index finger while holding the grip.
            </Text>
        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Grip:" 
                accessibilityRole="text"
            >
                Grip:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The grip protects some electrical connections, and thus shouldn't be removed. However, it is replaceable should the need arise." 
                accessibilityRole="text"
            >
                The grip protects some electrical connections, and thus shouldn't be removed. However, it is replaceable should the need arise.
            </Text>

        {/*Image 2*/}
            <Pressable onPress={() => setModal2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/stereoUserGuide2.png')}
                />
            </Pressable>
            <Modal 
                visible={modal2Visible} 
                transparent={true}
                //onRequestClose={() => {setModal1Visible(!modal1Visible);}}
            >
                <ImageViewer 
                    imageUrls={image2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setModal2Visible(false)}
                    onClick={() => setModal2Visible(false)}
                />
            </Modal>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Quick Release Strap hole:" 
                accessibilityRole="text"
            >
                Quick Release Strap hole:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Each side of the camera possesses one of these holes, which is internally curved and designed to accept most quick release straps." 
                accessibilityRole="text"
            >
                Each side of the camera possesses one of these holes, which is internally curved and designed to accept most quick release straps.
            </Text>
        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Remote port:" 
                accessibilityRole="text"
            >
                Remote port:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This 2.5mm jack allows you to connect a remote trigger. A simple one costs less than $10 (look for Canon Rebel compatibility). We also make a Deluxe Remote with a short cable and a loose-fitting cold shoe foot that can be conveniently stored on top of the camera until you are ready to trigger a shot. This port is also compatible with wireless flash/camera triggers from PocketWizard and others, if you wish to trigger wirelessly." 
                accessibilityRole="text"
            >
                This 2.5mm jack allows you to connect a remote trigger. A simple one costs less than $10 (look for Canon Rebel compatibility). We also make a Deluxe Remote with a short cable and a loose-fitting cold shoe foot that can be conveniently stored on top of the camera until you are ready to trigger a shot. This port is also compatible with wireless flash/camera triggers from PocketWizard and others, if you wish to trigger wirelessly.
            </Text>
        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Lensboard port:" 
                accessibilityRole="text"
            >
                Lensboard port:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This 3.5mm jack is the connection point between the camera and any electronic lensboard." 
                accessibilityRole="text"
            >
                This 3.5mm jack is the connection point between the camera and any electronic lensboard.
            </Text>
        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Lensboard Cable:" 
                accessibilityRole="text"
            >
                Lensboard Cable:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This 3.5mm stereo Male-Male cable makes the electrical connection between the Stereo 12 body and electronic lensboards. Only disconnect this cable if you are changing lensboards." 
                accessibilityRole="text"
            >
                This 3.5mm stereo Male-Male cable makes the electrical connection between the Stereo 12 body and electronic lensboards. Only disconnect this cable if you are changing lensboards.
            </Text>
        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Side Handle connection:" 
                accessibilityRole="text"
            >
                Side Handle connection:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These threads adhere to the SmallRig side handle specification for cinema cage side handles. There are several options you can choose from to add a left side handle to your camera. From an ergonomic standpoint this is highly recommended for extensive handheld shooting. The handle can be added and removed in seconds, so it is easy to keep the camera more compact for tripod use or transportation/storage. Compatible side handles are listed under Accessories." 
                accessibilityRole="text"
            >
                These threads adhere to the SmallRig side handle specification for cinema cage side handles. There are several options you can choose from to add a left side handle to your camera. From an ergonomic standpoint this is highly recommended for extensive handheld shooting. The handle can be added and removed in seconds, so it is easy to keep the camera more compact for tripod use or transportation/storage. Compatible side handles are listed under Accessories.
            </Text>
        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="QR Foot:" 
                accessibilityRole="text"
            >
                QR Foot:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The foot of the camera is designed with a built-in Arca Swiss compatible QR plate. It can thus be slotted into any tripod or mount with an Arca Swiss QR base. Such bases are available inexpensively online, and we recommend this system for any tripod. However, if you wish to connect a different type of tripod plate directly to the camera, a standard ¼-20 mounting thread is available at the bottom of the foot. The foot is also useful as a platform enabling the camera to stand upward when sitting on a flat surface such as a table. It is also designed with enough clearance to be easily used with our Hyperstereo Mount (see section later in this Guide)." 
                accessibilityRole="text"
            >
                The foot of the camera is designed with a built-in Arca Swiss compatible QR plate. It can thus be slotted into any tripod or mount with an Arca Swiss QR base. Such bases are available inexpensively online, and we recommend this system for any tripod. However, if you wish to connect a different type of tripod plate directly to the camera, a standard ¼-20 mounting thread is available at the bottom of the foot. The foot is also useful as a platform enabling the camera to stand upward when sitting on a flat surface such as a table. It is also designed with enough clearance to be easily used with our Hyperstereo Mount (see section later in this Guide).
            </Text>
        
        {/*Image 3*/}
            <Pressable onPress={() => setModal3Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/stereoUserGuide3.png')}
                />
            </Pressable>
            <Modal 
                visible={modal3Visible} 
                transparent={true}
                //onRequestClose={() => {setModal1Visible(!modal1Visible);}}
            >
                <ImageViewer 
                    imageUrls={image3} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setModal3Visible(false)}
                    onClick={() => setModal3Visible(false)}
                />
            </Modal>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Graflock sliders:" 
                accessibilityRole="text"
            >
                Graflock sliders:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This camera adheres to the Graflok 45 standard, and can mount any Graflok 45 compatible back, including the Horseman 6x12 back, the Yi XX 6x12 back, our 3D printable back, our 6x12 modified 70mm back, and of course our range of ground glass backs. The four screws here should be tightened or loosened to your preferred tightness, enabling all of your backs to comfortably mount, but not easily disengage." 
                accessibilityRole="text"
            >
                This camera adheres to the Graflok 45 standard, and can mount any Graflok 45 compatible back, including the Horseman 6x12 back, the Yi XX 6x12 back, our 3D printable back, our 6x12 modified 70mm back, and of course our range of ground glass backs. The four screws here should be tightened or loosened to your preferred tightness, enabling all of your backs to comfortably mount, but not easily disengage.
            </Text>
        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Fuse:" 
                accessibilityRole="text"
            >
                Fuse:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is a slow-blow 1.5amp 5x20mm fuse in case you ever need to replace it. We placed it at the surface, so all you need to do is remove any back on the camera to get to it for inspection or replacement. This camera uses a fairly powerful 18V circuit and the fuse provides important protection against short circuiting, backwards battery connection, etc." 
                accessibilityRole="text"
            >
                This is a slow-blow 1.5amp 5x20mm fuse in case you ever need to replace it. We placed it at the surface, so all you need to do is remove any back on the camera to get to it for inspection or replacement. This camera uses a fairly powerful 18V circuit and the fuse provides important protection against short circuiting, backwards battery connection, etc.
            </Text>
        {/*Paragraph 20*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Battery Compartment:" 
                accessibilityRole="text"
            >
                Battery Compartment:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The lid to this compartment can be screwed in with the provided screws, or simply snapped in place. Either way, snap it out to gain access to the batteries. Use only 9V Alkaline or Lithium batteries in this camera, and take great care to insert them properly. They will only snap in place in one orientation, but a momentary press in the wrong orientation can be bad for the batteries, the camera, the fuse, or any of the above! Batteries should last for months of shooting. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don’t have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12’s unique circuitry." 
                accessibilityRole="text"
            >
                The lid to this compartment can be screwed in with the provided screws, or simply snapped in place. Either way, snap it out to gain access to the batteries. Use only 9V Alkaline or Lithium batteries in this camera, and take great care to insert them properly. They will only snap in place in one orientation, but a momentary press in the wrong orientation can be bad for the batteries, the camera, the fuse, or any of the above! Batteries should last for months of shooting. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don’t have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12’s unique circuitry.
            </Text>
        {/*Paragraph 21*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Elastic attachment points:" 
                accessibilityRole="text"
            >
                Elastic attachment points:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When using 4x5 camera accessories that aren’t Graflok compatible, such as unmodified cut film holders (Graflok-modified ones are available from Mercury Works), you can attach them using elastic/rubber bands. In this case, use two bands, each attached to the front of the top cold shoe rack of the camera (where a groove exists for this purpose) and this bottom screw." 
                accessibilityRole="text"
            >
                When using 4x5 camera accessories that aren’t Graflok compatible, such as unmodified cut film holders (Graflok-modified ones are available from Mercury Works), you can attach them using elastic/rubber bands. In this case, use two bands, each attached to the front of the top cold shoe rack of the camera (where a groove exists for this purpose) and this bottom screw.
            </Text>

    {/*Lens Options*/}
            <View ref={lensOptionsRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Lens Options" 
                    accessibilityRole="text"
                >
                    Lens Options
                </Text>
            </View>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Stereo 12 “lens stack” consists of a Base Spacer (specific to a particular lens), then a Focus Spacer (which determines your focus zone, or range of in-focus distances), then a Lensboard (specific to particular shutter models), then two shutters, then Lenses (which screw into the shutters)." 
                accessibilityRole="text"
            >
                The Stereo 12 “lens stack” consists of a Base Spacer (specific to a particular lens), then a Focus Spacer (which determines your focus zone, or range of in-focus distances), then a Lensboard (specific to particular shutter models), then two shutters, then Lenses (which screw into the shutters).
            </Text>
        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works manufactures the base spacers, focus spacers, and lensboards. You will then add two shutters and as many pairs of lenses as you wish." 
                accessibilityRole="text"
            >
                Mercury Works manufactures the base spacers, focus spacers, and lensboards. You will then add two shutters and as many pairs of lenses as you wish.
            </Text>

    {/*Electronic Lensboards*/}
            <View ref={electronicLensRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Electronic Lensboards" 
                    accessibilityRole="text"
                >
                    Electronic Lensboards
                </Text>
            </View>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The following electronic lensboards are available for the Stereo 12. Each features a 3.5mm electrical port to connect to the camera body (using the short cable provided with the camera, or any standard 3.5mm Male-Male stereo audio cable)." 
                accessibilityRole="text"
            >
                The following electronic lensboards are available for the Stereo 12. Each features a 3.5mm electrical port to connect to the camera body (using the short cable provided with the camera, or any standard 3.5mm Male-Male stereo audio cable).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Mamiya TLR: " 
                accessibilityRole="text"
            >
                Mamiya TLR:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This popular lensboard accepts two Mamiya TLR shutters from Mamiya Twin Lens Reflex lensboards. The lensboard includes a shutter preview option not available on the original lensboard. To activate it, set one or both shutters to “B” mode, then pull the actuator shaft on the lensboard to fire the shutter (no need to use the electronic actuation). While keeping the shaft pulled, screw a preview screw down into the threads, just enough so that it prevents the shaft from returning to its unfired position. The lens will now remain open until you loosen the screw. When you aren’t using preview mode, you can store the preview screws inside the lensboard via the threads on the backside." 
                accessibilityRole="text"
            >
                This popular lensboard accepts two Mamiya TLR shutters from Mamiya Twin Lens Reflex lensboards. The lensboard includes a shutter preview option not available on the original lensboard. To activate it, set one or both shutters to “B” mode, then pull the actuator shaft on the lensboard to fire the shutter (no need to use the electronic actuation). While keeping the shaft pulled, screw a preview screw down into the threads, just enough so that it prevents the shaft from returning to its unfired position. The lens will now remain open until you loosen the screw. When you aren’t using preview mode, you can store the preview screws inside the lensboard via the threads on the backside.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Copal 0: " 
                accessibilityRole="text"
            >
                Copal 0: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This popular lensboard accepts two set-and-release (not “press” style) Copal 0 shutters, of any era and style." 
                accessibilityRole="text"
            >
                This popular lensboard accepts two set-and-release (not “press” style) Copal 0 shutters, of any era and style.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Generic 0: " 
                accessibilityRole="text"
            >
                Generic 0: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard accepts all other brands of “0” size set-and-release shutters: Seiko 0 (Fujinon), Compur 0, and Seiko SLV (Horseman/Topcor)." 
                accessibilityRole="text"
            >
                This lensboard accepts all other brands of “0” size set-and-release shutters: Seiko 0 (Fujinon), Compur 0, and Seiko SLV (Horseman/Topcor).
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Compur 00, Base 62: " 
                accessibilityRole="text"
            >
                Compur 00, Base 62: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard accepts Compur 00 shutters, placing the lenses at the standard 62mm stereo base to match the human interpupillary distance." 
                accessibilityRole="text"
            >
                This lensboard accepts Compur 00 shutters, placing the lenses at the standard 62mm stereo base to match the human interpupillary distance.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Compur 00, Base 57: " 
                accessibilityRole="text"
            >
                Compur 00, Base 57: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard accepts two Compur 00 shutters, placing them slightly closer together. This has the advantage of enabling you to shoot subjects closer to the camera without causing viewers eyestrain, and also producing larger slides that require less horizontal masking when mounting stereo views. The tradeoff is that less depth will be rendered for farther-away objects." 
                accessibilityRole="text"
            >
                This lensboard accepts two Compur 00 shutters, placing them slightly closer together. This has the advantage of enabling you to shoot subjects closer to the camera without causing viewers eyestrain, and also producing larger slides that require less horizontal masking when mounting stereo views. The tradeoff is that less depth will be rendered for farther-away objects.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Graflar 1: " 
                accessibilityRole="text"
            >
                Graflar 1: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This specialty board accepts Graflar #1 shutters, such as the one used in the Optar 65mm lens." 
                accessibilityRole="text"
            >
                This specialty board accepts Graflar #1 shutters, such as the one used in the Optar 65mm lens.
            </Text>

    {/*Manual Lensboards*/}
            <View ref={manualLensRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Manual Lensboards" 
                    accessibilityRole="text"
                >
                    Manual Lensboards
                </Text>
            </View>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Stereo 12 also accepts non-electronic lensboards, including the following:" 
                accessibilityRole="text"
            >
                The Stereo 12 also accepts non-electronic lensboards, including the following:
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Pinhole 50mm: " 
                accessibilityRole="text"
            >
                Pinhole 50mm: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard includes two 0.3mm pinholes instead of lenses. Mount it to the camera with no front spacers to produce a 50mm equivalent field of view. Exposure is accomplished by manually lifting the dual shutter plate and then dropping it back in place when the exposure is finished. (Typical exposures are 5 to 15 seconds, so this is easy to do.)" 
                accessibilityRole="text"
            >
                This lensboard includes two 0.3mm pinholes instead of lenses. Mount it to the camera with no front spacers to produce a 50mm equivalent field of view. Exposure is accomplished by manually lifting the dual shutter plate and then dropping it back in place when the exposure is finished. (Typical exposures are 5 to 15 seconds, so this is easy to do.)
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Pinhole 65mm: " 
                accessibilityRole="text"
            >
                Pinhole 65mm: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard operates like the 50mm version, but provides a narrower field of view via two 0.35mm pinholes. Mount to the camera using a Base 19 spacer, or whatever you have that is close." 
                accessibilityRole="text"
            >
                This lensboard operates like the 50mm version, but provides a narrower field of view via two 0.35mm pinholes. Mount to the camera using a Base 19 spacer, or whatever you have that is close.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Century: " 
                accessibilityRole="text"
            >
                Century: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard accepts two Trioptar 103mm shutters/lenses. This is a readily available, inexpensive lens. They must be actuated via two cable releases. Because they are “press” shutters, they do not need to be cocked before actuation." 
                accessibilityRole="text"
            >
                This lensboard accepts two Trioptar 103mm shutters/lenses. This is a readily available, inexpensive lens. They must be actuated via two cable releases. Because they are “press” shutters, they do not need to be cocked before actuation.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Ilex 00: " 
                accessibilityRole="text"
            >
                Ilex 00: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts two Ilex 00 sized manual shutters (very rare)." 
                accessibilityRole="text"
            >
                This accepts two Ilex 00 sized manual shutters (very rare).
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="0 Manual: " 
                accessibilityRole="text"
            >
                0 Manual: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts two “0” sized shutters of any kind. They must be actuated via two cable releases. This is especially useful for “press” shutters, which do not need to be cocked before actuation." 
                accessibilityRole="text"
            >
                This accepts two “0” sized shutters of any kind. They must be actuated via two cable releases. This is especially useful for “press” shutters, which do not need to be cocked before actuation.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="00 Manual: " 
                accessibilityRole="text"
            >
                00 Manual: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts two “00” sized shutters of any kind. They must be actuated via two cable releases." 
                accessibilityRole="text"
            >
                This accepts two “00” sized shutters of any kind. They must be actuated via two cable releases.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Mamiya Manual: " 
                accessibilityRole="text"
            >
                Mamiya Manual:  
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts two Mamiya TLR shutters. They must be actuated via two cable releases. Unlike the Stereo 12 Electronic version of this lensboard, no aperture preview method is build-in to this lensboard. Instead, a set of spacers are provided for ground glass use." 
                accessibilityRole="text"
            >
                This accepts two Mamiya TLR shutters. They must be actuated via two cable releases. Unlike the Stereo 12 Electronic version of this lensboard, no aperture preview method is build-in to this lensboard. Instead, a set of spacers are provided for ground glass use.
            </Text>

    {/*Compatible Lenses*/}
            <View ref={compatibleLensRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Compatible Lensboards" 
                    accessibilityRole="text"
                >
                    Compatible Lensboards
                </Text>
            </View> 

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Most lenses that meet the following requirements are compatible with the Stereo 12:" 
                accessibilityRole="text"
            >
                Most lenses that meet the following requirements are compatible with the Stereo 12:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Front elements no larger than 60mm in diameter (usually this translates to a 58mm filter thread)." 
                accessibilityRole="text"
            >
                * Front elements no larger than 60mm in diameter (usually this translates to a 58mm filter thread).
            </Text>
        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Rear elements no larger than 60mm in diameter." 
                accessibilityRole="text"
            >
                * Rear elements no larger than 60mm in diameter.
            </Text>
        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Housed in a shutter model supported by the above lensboards." 
                accessibilityRole="text"
            >
                * Housed in a shutter model supported by the above lensboards.
            </Text>
        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Focal length between 47mm and 135mm. (Longer and shorter focal lengths are possible via special configurations.)" 
                accessibilityRole="text"
            >
                * Focal length between 47mm and 135mm. (Longer and shorter focal lengths are possible via special configurations.)
            </Text>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The following is a non-exhaustive list of lenses compatible with the Stereo 12:" 
                accessibilityRole="text"
            >
                The following is a non-exhaustive list of lenses compatible with the Stereo 12:
            </Text>


{/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
{/*Start working on react native table for compatible lenses*/}

        

    {/*Base Spacers*/}
            <View ref={baseSpacersRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Base Spacers" 
                    accessibilityRole="text"
                >
                    Base Spacers
                </Text>
            </View>

    {/*Focus Spacers*/}
            <View ref={focusSpacersRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Focus Spacers" 
                    accessibilityRole="text"
                >
                    Focus Spacers
                </Text>
            </View>
            
    {/*Film Backs*/}
            <View ref={filmBacksRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Film Backs" 
                    accessibilityRole="text"
                >
                    Film Backs
                </Text>
            </View>

    {/*Mercury 65/70mm Panoramic Back*/}
            <View ref={mercuryPanoBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Mercury 65/70mm Panoramic Back" 
                    accessibilityRole="text"
                >
                    Mercury 65/70mm Panoramic Back
                </Text>
            </View>

    {/*Mercury 66mm Cut Film Back*/}
            <View ref={mercuryCutFilmBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Mercury 65mm Cut Film Back" 
                    accessibilityRole="text"
                >
                    Mercury 65mm Cut Film Back
                </Text>
            </View>

    {/*Horseman 120 6x12 Back*/}
            <View ref={horsemanBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Horseman 120 6x12 Back" 
                    accessibilityRole="text"
                >
                    Horseman 120 6x12 Back
                </Text>
            </View>

    {/*Linhof Techno Rollex*/}
            <View ref={linhofTechnoRollexRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Linhof Techno Rollex" 
                    accessibilityRole="text"
                >
                    Linhof Techno Rollex
                </Text>
            </View>

    {/*Da Yi 120 6x12 Back*/}
            <View ref={daYiBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Da Yi 120 6x12 Back" 
                    accessibilityRole="text"
                >
                    Da Yi 120 6x12 Back
                </Text>
            </View>

    {/*Large Format Sheet Film Holders*/}
            <View ref={largeFormatSheetFilmHoldersRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Large Format Sheet Film Holders" 
                    accessibilityRole="text"
                >
                    Large Format Sheet Film Holders
                </Text>
            </View>

    {/*Grafmatic*/}
            <View ref={grafmaticRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Grafmatic" 
                    accessibilityRole="text"
                >
                    Grafmatic
                </Text>
            </View>

            
    {/*Glass Plates and Tintypes*/}
            <View ref={glassPlatesTintypesRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Glass Plates and Tintypes" 
                    accessibilityRole="text"
                >
                    Glass Plates and Tintypes
                </Text>
            </View>

    {/*Instant Film*/}
            <View ref={instantFilmRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Instant Film" 
                    accessibilityRole="text"
                >
                    Instant Film
                </Text>
            </View>

    {/*Essential Accessories*/}
            <View ref={essentialAccessoriesRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Essential Accessories" 
                    accessibilityRole="text"
                >
                    Essential Accessories
                </Text>
            </View>

    {/*Viewfinder*/}
            <View ref={viewfinderRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Viewfinder" 
                    accessibilityRole="text"
                >
                    Viewfinder
                </Text>
            </View>

    {/*Camera Strap*/}
            <View ref={cameraStrapRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Camera Strap" 
                    accessibilityRole="text"
                >
                    Camera Strap
                </Text>
            </View>

    {/*Spanner Wrench*/}
            <View ref={spannerWrenchRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Spanner Wrench" 
                    accessibilityRole="text"
                >
                    Spanner Wrench
                </Text>
            </View>

    {/*Lens Cap*/}
            <View ref={lensCapRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Lens Cap" 
                    accessibilityRole="text"
                >
                    Lens Cap
                </Text>
            </View>

    {/*Highly Recommended Accessories*/}
            <View ref={recommendedAccessoriesRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Highly Recommended Accessories" 
                    accessibilityRole="text"
                >
                    Highly Recommended Accessories
                </Text>
            </View>

    {/*Side Handle*/}
            <View ref={sideHandleRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Side Handle" 
                    accessibilityRole="text"
                >
                    Side Handle
                </Text>
            </View>

    {/*Ground Glass Back*/}
            <View ref={groundGlassBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Ground Glass Back" 
                    accessibilityRole="text"
                >
                    Ground Glass Back
                </Text>
            </View>

    {/*QR Clamp*/}
            <View ref={qrClampRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="QR Clamp" 
                    accessibilityRole="text"
                >
                    QR Clamp
                </Text>
            </View>

    {/*Light Meter*/}
            <View ref={lightMeterRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Light Meter" 
                    accessibilityRole="text"
                >
                    Light Meter
                </Text>
            </View>

    {/*Remote Trigger*/}
            <View ref={remoteTriggerRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Remote Trigger" 
                    accessibilityRole="text"
                >
                    Remote Trigger
                </Text>
            </View>

    {/*Mini Screwdriver Set*/}
            <View ref={miniScrewdriverRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Mini Screwdriver Set" 
                    accessibilityRole="text"
                >
                    Mini Screwdriver Set
                </Text>
            </View>

    {/*Filter Step-Up Rings*/}
            <View ref={filterStepUpRingsRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Filter Step-Up Rings" 
                    accessibilityRole="text"
                >
                    Filter Step-Up Rings
                </Text>
            </View>

    {/*Lens Shades*/}
            <View ref={lensShadesRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Lens Shades" 
                    accessibilityRole="text"
                >
                    Lens Shades
                </Text>
            </View>

    {/*Lensboard Shell*/}
            <View ref={lensboardShellRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Lensboard Shell" 
                    accessibilityRole="text"
                >
                    Lensboard Shell
                </Text>
            </View>

    {/*Graflok 45 Rear Protective Cap*/}
            <View ref={graflokRearCapRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Graflok Rear 45 Protective Cap" 
                    accessibilityRole="text"
                >
                    Graflok Read 45 Protective Cap
                </Text>
            </View>

    {/*Mercury Stereo Toolkit App*/}
            <View ref={mercuryAppRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Mercury Stereo Toolkit App" 
                    accessibilityRole="text"
                >
                    Mercury Stereo Toolkit App
                </Text>
            </View>

    {/*Advanced Accessories*/}
            <View ref={advancedAccessoriesRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Advanced Accessories" 
                    accessibilityRole="text"
                >
                    Advanced Accessories
                </Text>
            </View>

    {/*Range Finder*/}
            <View ref={rangeFinderRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Range Finder" 
                    accessibilityRole="text"
                >
                    Range Finder
                </Text>
            </View>

    {/*Lens Element Mount*/}
            <View ref={lensElementMountref}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Lens Element Mount" 
                    accessibilityRole="text"
                >
                    Lens Element Mount
                </Text>
            </View>

    {/*Ground Glass Loupe*/}
            <View ref={groundGlassLoupeRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Ground Glass Loupe" 
                    accessibilityRole="text"
                >
                    Ground Glass Loupe
                </Text>
            </View>

    {/*Mercury Trigger Controller*/}
            <View ref={mercuryTriggerControllerRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Mercury Trigger Controller" 
                    accessibilityRole="text"
                >
                    Mercury Trigger Controller
                </Text>
            </View>

    {/*Other Upgrades*/}
            <View ref={otherUpgradesRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Other Upgrades" 
                    accessibilityRole="text"
                >
                    Other Upgrades
                </Text>
            </View>

    {/*PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA*/}
            <View ref={partIIRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA" 
                    accessibilityRole="text"
                >
                    PART II: HOW TO SHOOT A STEREO PHOTO WITH YOUR CAMERA
                </Text>
            </View>

    {/*PART III: ADVANCED OPTIONS*/}
            <View ref={partIIIRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART III: ADVANCED OPTIONS" 
                    accessibilityRole="text"
                >
                    PART III: ADVANCED OPTIONS
                </Text>
            </View>

    {/*Shooting with Ground Glass*/}
            <View ref={shootingGroundGlassRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Shooting with Ground Glass" 
                    accessibilityRole="text"
                >
                    Shooting with Ground Glass
                </Text>
            </View>

    {/*Aperature Preview*/}
            <View ref={aperaturePrevRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Aperature Preview" 
                    accessibilityRole="text"
                >
                    Aperature Preview
                </Text>
            </View>

    {/*Composing on Ground Glass*/}
            <View ref={composingGroundGlassRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Composing on Ground Glass" 
                    accessibilityRole="text"
                >
                    Composing on Ground Glass
                </Text>
            </View>

    {/*Exposing Your Shot*/}
            <View ref={exposingShotRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Exposing Your Shot" 
                    accessibilityRole="text"
                >
                    Exposing Your Shot
                </Text>
            </View>

    {/*Deluxe Ground Glass Back Accessories*/}
            <View ref={deluxeGroundGlassBackRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Deluxe Ground Glass Back Accessories" 
                    accessibilityRole="text"
                >
                    Deluxe Ground Glass Back Accessories
                </Text>
            </View>

    {/*Mercury Stereo Lens Shade System*/}
            <View ref={mercuryStereoLensShadeSysRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Mercury Stereo Lens Shade System" 
                    accessibilityRole="text"
                >
                    Mercury Stereo Lens Shade System
                </Text>
            </View>

    {/*Shooting Hyperstereo and Close-Up Stereo*/}
            <View ref={shootingHyperCloseStereoRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Shooting Hyperstereo and Close-Up Stereo" 
                    accessibilityRole="text"
                >
                    Shooting Hyperstereo and Close-Up Stereo
                </Text>
            </View>

    {/*Extreme Hyperstereo*/}
            <View ref={extremeHyperstereoRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Extreme Hyperstereo" 
                    accessibilityRole="text"
                >
                    Extreme Hyperstereo
                </Text>
            </View>

    {/*Extreme Close-Up*/}
            <View ref={extremeCloseupRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Extreme Close-Up" 
                    accessibilityRole="text"
                >
                    Extreme Close-Up
                </Text>
            </View>

    {/*Shooting with Flash*/}
            <View ref={shootingFlashRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Shooting with Flash" 
                    accessibilityRole="text"
                >
                    Shooting with Flash
                </Text>
            </View>

    {/*Off-Board/Wireless Flash*/}
            <View ref={offboardWirelessFlashRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Off-Board/Wireless Flash" 
                    accessibilityRole="text"
                >
                    Off-Board/Wireless Flash
                </Text>
            </View>

    {/*Which Shutter?*/}
            <View ref={whichShutterRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Which Shutter?" 
                    accessibilityRole="text"
                >
                    Which Shutter? 
                </Text>
            </View>

    {/*PART IV: VIEWING IN 3D: DIGITAL*/}
            <View ref={partIVRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART IV: VIEWING IN 3D: DIGITAL" 
                    accessibilityRole="text"
                >
                    PART IV: VIEWING IN 3D: DIGITAL
                </Text>
            </View>

    {/*Copmpositing Digital 3D Images*/}
            <View ref={compositing3DImagesRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Compositing Digital 3D Images" 
                    accessibilityRole="text"
                >
                    Compositing Digital 3D Images
                </Text>
            </View>

    {/*Screen Viewing*/}
            <View ref={screenViewingRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Screen Viewing" 
                    accessibilityRole="text"
                >
                    Screen Viewing
                </Text>
            </View>

    {/*Formatting Digital Images for a Mercury Parlorscope*/}
            <View ref={formattingImageParlorscopeRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Formatting Digital Images for a Mercury Parlorscope" 
                    accessibilityRole="text"
                >
                    Formatting Digital Images for a Mercury Parlorscope
                </Text>
            </View>

    {/*Xperia 1 Series: 3840 x 1644*/}
            <View ref={xperia1SeriesRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Xperia 1 Series: 3840 x 1644" 
                    accessibilityRole="text"
                >
                    Xperia 1 Series: 3840 x 1644 
                </Text>
            </View>

    {/*Xperia Z5 Premium or XZ Premium*/}
        <View ref={xperiaZ5PremRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Xperia Z5 Premium of XZ Premium" 
                    accessibilityRole="text"
                >
                    Xperia Z5 Premium or XZ Premium 
                </Text>
            </View>

    {/*Viewing Digital Images on Your Mercury Parlorscope*/}
            <View ref={viewingImageParlorscopeRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Viewing Digital Images on Your Mercury Parlorscope" 
                    accessibilityRole="text"
                >
                    Viewing Digital Images on Your Mercury Parlorscope
                </Text>
            </View>

    {/*Parlorscope Optical Adjustments*/}
            <View ref={parlorscopeAdjustmentsRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Parlorscope Optical Adjustments" 
                    accessibilityRole="text"
                >
                    Parlorscope Optical Adjustments
                </Text>
            </View>

    {/*PART V: VIEWING IN 3D: SLIDES*/}
            <View ref={partVRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART V: VIEWING IN 3D: SLIDES" 
                    accessibilityRole="text"
                >
                    PART V: VIEWING IN 3D: SLIDES
                </Text>
            </View>

    {/*Shooting Slides*/}
            <View ref={shootingSlidesRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Shooting Slides" 
                    accessibilityRole="text"
                >
                    Shooting Slides
                </Text>
            </View>

    {/*Mounting MF3D Slides in Standard Cardboard Mounts*/}
            <View ref={mountingSlidesStndCardboardRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Mounting MF3D Slides in Standard Cardboard Mounts" 
                    accessibilityRole="text"
                >
                    Mounting MF3D Slides in Standard Cardboard Mounts
                </Text>
            </View>

    {/*Viewing MF3D SLides in Mercury Parlorscopes*/}
            <View ref={viewingSlidesParlorscopeRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Viewing MF3D Slides in Mercury Parlorscopes" 
                    accessibilityRole="text"
                >
                    Viewing MF3D Slides in Mercury Parlorscopes
                </Text>
            </View>

    {/*PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA*/}
            <View ref={partVIRef}>
                <Text 
                    style={guideStyle.textSubtitle1}
                    accessible={true} 
                    accessibilityLabel="PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA" 
                    accessibilityRole="text"
                >
                    PART VI: WORKING ON, EXPANDING, AND CARING FOR YOUR CAMERA
                </Text>
            </View>

    {/*Lens Compatibility*/}
            <View ref={lensCompatibilityRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Lens Compatibility" 
                    accessibilityRole="text"
                >
                    Lens Compatibility
                </Text>
            </View>

    {/*Shutter Compatibility*/}
            <View ref={shutterCompatibilityRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Shutter Compatibility" 
                    accessibilityRole="text"
                >
                    Shutter Compatibility
                </Text>
            </View>

    {/*Supported Shutters*/}
            <View ref={supportedShuttersRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Supported Shutters" 
                    accessibilityRole="text"
                >
                    Supported Shutters
                </Text>
            </View>

    {/*Stereo 12 Electronic Lensboards*/}
            <View ref={stereoElectronicLensboardRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Stereo 12 Electronic Lensboards" 
                    accessibilityRole="text"
                >
                    Stereo 12 Electronic Lensboard
                </Text>
            </View>

    {/*Manual Lensboard*/}
            <View ref={manualLensboardRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Manual Lensboards" 
                    accessibilityRole="text"
                >
                    Manual Lensboards
                </Text>
            </View>

    {/*Setting Up Your Lensboard*/}
            <View ref={settingUpLensboardRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Setting Up Your Lensboard" 
                    accessibilityRole="text"
                >
                    Setting Up Your Lensboard
                </Text>
            </View>

    {/*Transporting Your Camera*/}
            <View ref={transportingRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Transporting Your Camera" 
                    accessibilityRole="text"
                >
                    Transporting Your Camera
                </Text>
            </View>

    {/*Troubleshooting*/}
            <View ref={troubleshootingRef}>
                <Text 
                    style={guideStyle.textSubtitle2}
                    accessible={true} 
                    accessibilityLabel="Troubleshooting" 
                    accessibilityRole="text"
                >
                    Troubleshooting
                </Text>
            </View>

            

            

            



            

        


        </SafeAreaView>
    )
};


const UserGuideScreen = () =>{ 
    const topRef = React.useRef();

    return(
        <>
        <CustomScrollView style={guideStyle.container} innerRef={(ref) => {topRef.current = ref}}>
            <UserGuideContent/>
        </CustomScrollView> 
        <SafeAreaView style={guideStyle.footer}>
            <View accessible={true} accessibilityLabel="Click to jump to top" accessibilityRole="button">
                <Button 
                    title= "Back to Contents"
                    onPress={() => topRef.current?.scrollTo({
                        x:0,
                        y: 0, 
                        animated: true,
                    })}
                />
            </View>
        </SafeAreaView>
        </>
        
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
    // Title text of page
    textTitle: {
        color: 'white',
        margin: 5,
        marginTop: 55,
        marginBottom: 0,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
      },
    text: {
      color: 'white',
      margin: 8,
      marginTop: 13,
      fontSize: 20,
      textAlign: 'left',
      alignSelf: 'flex-start',
    },
    textSubtitle1: {
        color: 'white',
        margin: 8,
        marginTop: 13,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    textSubtitle2: {
        color: 'white',
        margin: 8,
        marginTop: 13,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    textSubtitle3: {
        color: 'white',
        margin: 8,
        marginTop: 13,
        fontSize: 20,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    textSubSubtitle: {
        color: 'white',
        margin: 8,
        marginBottom: 0,
        marginLeft: 15,
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
        fontWeight: 'bold',
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
        marginLeft: 15,
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
    imageJPG: {
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