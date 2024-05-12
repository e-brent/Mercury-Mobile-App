// See README.md for information about this file and how to make updates

// NECESSARY UPDATES: THIS FILE IS INCOMPLETE, AND THE USER GUIDE IS STILL IN THE PROCESS OF BEING UPDATED.

import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView, Modal, Image, Pressable, Linking} from 'react-native';

// Special imports for this file, see README for links with more information about them
import {wrapScrollView, useScrollIntoView,} from 'react-native-scroll-into-view';
import ImageViewer from 'react-native-image-zoom-viewer';
import {DataTable} from 'react-native-paper';

// options is used in the scrollIntoView() function to customize where items are scrolled to on the page
const options ={
    align:'top',
    insets: {
        top: 50,
    },
}

const mercuryStereoURL = 'https://www.mercurystereo.com';
const assemblingLensboardURL = 'https://youtu.be/P3YvPQqCXik';
const shoot70URL = 'http://www.shoot70mm.com/';
const mAlchemy = 'https://www.m-alchemy.com/';
const loadingCassettesURL = 'https://youtu.be/9_D-mRHmWaQ';
const holderLoadingURL = 'https://youtu.be/yyqn09501r0';
const recommendedStrapURL = 'https://www.amazon.com/gp/product/B08TBGXSWN/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const smallrigUniversalURL = 'https://www.amazon.com/gp/product/B083HVVDTF/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const neewerAluminumURL = 'https://www.amazon.com/gp/product/B095JKH5DV/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const smallrigSnapOnURL = 'https://www.amazon.com/gp/product/B0C49P5TVS/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const smallrigMiniURL = 'https://www.amazon.com/gp/product/B07F2GNJ53/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const sekonicFlashmateURL = 'https://www.amazon.com/Sekonic-L-308S-U-Flashmate-Light-401-307/dp/B079YWCZNC?ref_=ast_sto_dp&th=1'; 
const miniScrewdriverURL = 'https://www.amazon.com/Screwdriver-Precision-Different-Flathead-Screwdrivers/dp/B07QYL9KJT/ref=sr_1_1_sspa?crid=3SB48YVHBLNH0&keywords=small+philips+screw+driver&qid=1678901038&sprefix=small+philips+%2Caps%2C82&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMlJHTlhSWkZPUzE5JmVuY3J5cHRlZElkPUEwNzM0NzgyVFhJS1JVRllXMlRSJmVuY3J5cHRlZEFkSWQ9QTA5MTMwMDUyTjhKQjNWUk1GWDQ1JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==';
const mercuryCameraURL = 'http://www.mercurycamera.com/';
const stereoPhotoMakerURL = 'https://stereo.jpn.org/eng/stphmkr/';
const nvp3dStereoscopeURL = 'https://nvp3d.ch/en/shop';
const pocket3dvuURL = 'https://3dgear.com/products/pocket-3d-view?pr_prod_strat=jac&pr_rec_id=2ad4d9226&pr_rec_pid=8274819711284&pr_ref_pid=8576055410996&pr_seq=uniform';
const freeViewingTutorialURL = 'https://stereoscopy.blog/2022/03/11/learning-to-free-view-see-stereoscopic-images-with-the-naked-eye/';
const usbAdapterURL = 'https://www.amazon.com/gp/product/B08Y6VQN99/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';
const glueURL = 'https://www.amazon.com/gp/product/B001I6FEHE/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1';

const OpenURLLink = ({url, children}) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Pressable onPress={handlePress}><Text style={guideStyle.link}>{children}</Text></Pressable>;
};


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

    // 1st camera diagram in Getting to Know Your Camera
    const cameraDiagram1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cameraDiagram1.png')
        }
    }];

    const cameraDiagram2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cameraDiagram2.png')
        }
    }];

    const cameraDiagram3 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cameraDiagram3.png')
        }
    }];

    const compatibleLensTable = [{
        url: '',
        width: 300,
        height: 850,
        props: {
            source: require('../assets/images/compatibleLensTable.png')
        }
    }];

    const focusSpacerLabel = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/focusSpacerLabel.jpg')
        }
    }];

    const sFocusSpacer = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/sFocusSpacer.jpg')
        }
    }];

    const frontBolts = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/frontBolts.jpg')
        }
    }];

    const mercuryPanoBack = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/mercuryPanoBack.jpg')
        }
    }];

    const metalCassette = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/metalCassette.jpg')
        }
    }];

    const exposures = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/exposures.jpg')
        }
    }];

    const panoBackLever = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/panoBackLever.jpg')
        }
    }];

    const kit120 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/kit120.jpg')
        }
    }];

    const spoolsWide = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/spoolsWide.jpg')
        }
    }];

    const spoolsClose = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/spoolsClose.jpg')
        }
    }];

    const holder = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/holder.jpg')
        }
    }];

    const cutFilmGuide = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cutFilmGuide.jpg')
        }
    }];

    const cutFilmBox = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cutFilmBox.jpg')
        }
    }];

    const horsemanBack = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/horsemanBack.jpg')
        }
    }];

    const linhofBack = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/linhofBack.jpg')
        }
    }];

    const linhofPreMod = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/linhofPreMod.jpg')
        }
    }];

    const linhofPostMod = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/linhofPostMod.jpg')
        }
    }];

    const daYiBack = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/daYiBack.jpg')
        }
    }];

    const daYiMod1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/daYiMod1.jpg')
        }
    }];

    const daYiMod2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/daYiMod2.jpg')
        }
    }];

    const septumNotch = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/septumNotch.png')
        }
    }];

    const septumLoading = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/septumLoading.png')
        }
    }];

    const septumStack = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/septumStack.jpg')
        }
    }];

    const viewfinder1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/viewfinder1.jpg')
        }
    }];

    const viewfinder2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/viewfinder2.jpg')
        }
    }];

    const viewfinder3 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/viewfinder3.jpg')
        }
    }];

    const viewfinder4 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/viewfinder4.jpg')
        }
    }];

    const cameraStrap = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cameraStrap.jpg')
        }
    }];

    const spannerWrench = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/spannerWrench.jpg')
        }
    }];

    const sideHandle = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/sideHandle.jpg')
        }
    }];

    const adapterKit1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/adapterKit1.jpg')
        }
    }];

    const adapterKit2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/adapterKit2.jpg')
        }
    }];

    const sunHood = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/sunHood.jpg')
        }
    }];

    const magnifier = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/magnifier.jpg')
        }
    }];

    const qrClamp = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/qrClamp.jpg')
        }
    }];

    const remoteTrigger = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/remoteTrigger.jpg')
        }
    }];

    const lensShade = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/lensShade.jpg')
        }
    }];

    const lensboardShells = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/lensboardShells.jpg')
        }
    }];

    const shellWithBolts = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/shellWithBolts.jpg')
        }
    }];

    const rearShell = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/rearShell.jpg')
        }
    }];

    const lensMount = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/lensMount.jpg')
        }
    }];

    const focalLabel = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/focalLabel.jpg')
        }
    }];

    const setLenses = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/setLenses.jpg')
        }
    }];

    const onSwitch = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/onSwitch.jpg')
        }
    }];

    const cockingLevers = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cockingLevers.jpg')
        }
    }];

    const darkslide = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/darkslide.jpg')
        }
    }];

    const batteries = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/batteries.jpg')
        }
    }];

    const cameraIllustration = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/cameraIllustration.png')
        }
    }];

    const ggMagnifier = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/ggMagnifier.jpg')
        }
    }];

    const lensShadeSys = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/lensShadeSys.gif')
        }
    }];

    const recommendedShadeSize = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/recommendedShadeSize.png')
        }
    }];

    const hyperstereoMount = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/hyperstereoMount.jpg')
        }
    }];

    const screenViewer1 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/screenViewer1.jpg')
        }
    }];

    const screenViewer2 = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/screenViewer2.jpg')
        }
    }];

    const adjustmentDials = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/adjustmentDials.jpg')
        }
    }];

    const focusAdjustments = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/focusAdjustments.jpg')
        }
    }];

    const mountingTabs = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/mountingTabs.jpg')
        }
    }];

    const mylarTape = [{
        url: '',
        width: 300,
        height: 250,
        props: {
            source: require('../assets/images/mylarTape.jpg')
        }
    }];

    const supportedShuttersTable = [{
        url: '',
        width: 300,
        height: 850,
        props: {
            source: require('../assets/images/supportedShuttersTable.png')
        }
    }];

    const electronicLensboardsTable = [{
        url: '',
        width: 300,
        height: 850,
        props: {
            source: require('../assets/images/electronicLensboardsTable.png')
        }
    }];

    const manualLensboardsTable = [{
        url: '',
        width: 300,
        height: 850,
        props: {
            source: require('../assets/images/manualLensboardsTable.png')
        }
    }];

    // State variables for modals, which will be used to open and close the images; each image has its own modal 
    // Default value is false because the modals should start closeds
    const [diagram1Visible, setDiagram1Visible] = React.useState(false);
    const [diagram2Visible, setDiagram2Visible] = React.useState(false);
    const [diagram3Visible, setDiagram3Visible] = React.useState(false);
    const [table1Visible, setTable1Visible] = React.useState(false);
    const [spacerLabelVisible, setSpacerLabelVisible] = React.useState(false);
    const [sFocusSpacerVisible, setSFocusSpacerVisible] = React.useState(false);
    const [frontBoltsVisible, setFrontBoltsVisible] = React.useState(false);
    const [mercuryPanoBackVisible, setMercuryPanoBackVisible] = React.useState(false);
    const [metalCassetteVisible, setMetalCassetteVisible] = React.useState(false);
    const [exposuresVisible, setExposuresVisible] = React.useState(false);
    const [panoBackLeverVisible, setPanoBackLeverVisible] = React.useState(false);
    const [kit120Visible, setKit120Visible] = React.useState(false);
    const [spoolsWideVisible, setSpoolsWideVisible] = React.useState(false);
    const [spoolsCloseVisible, setSpoolsCloseVisible] = React.useState(false);
    const [holderVisible, setHolderVisible] = React.useState(false);
    const [cutFilmGuideVisible, setCutFilmGuideVisible] = React.useState(false);
    const [cutFilmBoxVisible, setCutFilmBoxVisible] = React.useState(false);
    const [horsemanBackVisible, setHorsemanBackVisible] = React.useState(false);
    const [linhofBackVisible, setLinhofBackVisible] = React.useState(false);
    const [linhofPreModVisible, setLinhofPreModVisible] = React.useState(false);
    const [linhofPostModVisible, setLinhofPostModVisible] = React.useState(false);
    const [daYiBackVisible, setDaYiBackVisible] = React.useState(false);
    const [daYiMod1Visible, setDaYiMod1Visible] = React.useState(false);
    const [daYiMod2Visible, setDaYiMod2Visible] = React.useState(false);
    const [septumNotchVisible, setSeptumNotchVisible] = React.useState(false);
    const [septumLoadingVisible, setSeptumLoadingVisible] = React.useState(false);
    const [septumStackVisible, setSeptumStackVisible] = React.useState(false);
    const [viewfinder1Visible, setViewfinder1Visible] = React.useState(false);
    const [viewfinder2Visible, setViewfinder2Visible] = React.useState(false);
    const [viewfinder3Visible, setViewfinder3Visible] = React.useState(false);
    const [viewfinder4Visible, setViewfinder4Visible] = React.useState(false);
    const [cameraStrapVisible, setCameraStrapVisible] = React.useState(false);
    const [spannerWrenchVisible, setSpannerWrenchVisible] = React.useState(false);
    const [sideHandleVisible, setSideHandleVisible] = React.useState(false);
    const [adapterKit1Visible, setAdapterKit1Visible] = React.useState(false);
    const [adapterKit2Visible, setAdapterKit2Visible] = React.useState(false);
    const [sunHoodVisible, setSunHoodVisible] = React.useState(false);
    const [magnifierVisible, setMagnifierVisible] = React.useState(false);
    const [qrClampVisible, setQrClampVisible] = React.useState(false);
    const [remoteTriggerVisible, setRemoteTriggerVisible] = React.useState(false);
    const [lensShadeVisible, setLensShadeVisible] = React.useState(false);
    const [lensboardShellsVisible, setLensboardShellsVisible] = React.useState(false);
    const [shellWithBoltsVisible, setShellWithBoltsVisible] = React.useState(false);
    const [rearShellVisible, setRearShellVisible] = React.useState(false);
    const [lensMountVisible, setLensMountVisible] = React.useState(false);
    const [focalLabelVisible, setFocalLabelVisible] = React.useState(false);
    const [setLensesVisible, setSetLensesVisible] = React.useState(false);
    const [onSwitchVisible, setOnSwitchVisible] = React.useState(false);
    const [cockingLeversVisible, setCockingLeversVisible] = React.useState(false);
    const [darkslideVisible, setDarkslideVisible] = React.useState(false);
    const [batteriesVisible, setBatteriesVisible] = React.useState(false);
    const [cameraIllustrationVisible, setCameraIllustrationVisible] = React.useState(false);
    const [ggMagnifierVisible, setGgMagnifierVisible] = React.useState(false);
    const [lensShadeSysVisible, setLensShadeSysVisible] = React.useState(false);
    const [recommendedShadeSizeVisible, setRecommendedShadeSizeVisible] = React.useState(false);
    const [hyperstereoMountVisible, setHyperstereoMountVisible] = React.useState(false);
    const [screenViewer1Visible, setScreenViewer1Visible] = React.useState(false);
    const [screenViewer2Visible, setScreenViewer2Visible] = React.useState(false);
    const [adjustmentDialsVisible, setAdjustmentDialsVisible] = React.useState(false);
    const [focusAdjustmentsVisible, setFocusAdjustmentsVisible] = React.useState(false);
    const [mountingTabsVisible, setMountingTabsVisible] = React.useState(false);
    const [mylarTapeVisible, setMylarTapeVisible] = React.useState(false);
    const [supportedShuttersTableVisible, setSupportedShuttersTableVisible] = React.useState(false);
    const [electronicLensboardsTableVisible, setElectronicLensboardsTableVisible] = React.useState(false);
    const [manualLensboardsTableVisible, setManualLensboardsTableVisible] = React.useState(false);
    



    return(
        <SafeAreaView>
    {/*Title*/}
            <Text style={guideStyle.textTitle} accessible={true} accessibilityLabel="Mercury Stereo User Guide" accessibilityRole="text">Mercury Stereo User Guide</Text>
            <Text style={guideStyle.noteText} accessible={true} accessibilityLabel="Version 1.0" accessibilityRole="text">Version 1.0</Text>

            <Image
                style={guideStyle.image}
                source={require('../assets/images/titleIllustration.jpg')}
            />
            
    {/*Table of contents header */}
            <Text style={guideStyle.textSubtitle1} accessible={true} accessibilityLabel="Table of contents" accessibilityRole="text">Table of Contents</Text>
            
    {/*Table of contents links to further down the page. onPress function will bring the labeled reference into view.*/}
    {/*PART I*/}
            <Pressable onPress={() => scrollIntoView(introRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="Introduction to Medium Format Stereo Photography" accessibilityHint="Click to jump to the introduction section" accessibilityRole="button">
                <Text style={guideStyle.buttonText}>Introduction to Medium Format Stereo Photography</Text>
            </Pressable>

            <Pressable onPress={() => scrollIntoView(partIRef.current, options)} style={guideStyle.buttonLevel1} accessible={true} accessibilityLabel="PART I: CAMERA BASICS" accessibilityHint="Click to jump to PART I: CAMERA BASICS" accessibilityRole="button">
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
                accessibilityLabel="This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken adavantage of it. The german companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!" 
                accessibilityRole="text"
            >
                This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken adavantage of it. The german companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!
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

        {/*Camera Diagram 1*/}
            <Pressable onPress={() => setDiagram1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cameraDiagram1.png')}
                />
            </Pressable>
            <Modal 
                visible={diagram1Visible} 
                transparent={true}
                //onRequestClose={() => {setModal1Visible(!modal1Visible);}}
            >
                <ImageViewer 
                    imageUrls={cameraDiagram1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDiagram1Visible(false)}
                    onClick={() => setDiagram1Visible(false)}
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

        {/*Camera Diagram 2*/}
            <Pressable onPress={() => setDiagram2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cameraDiagram2.png')}
                />
            </Pressable>
            <Modal 
                visible={diagram2Visible} 
                transparent={true}
                //onRequestClose={() => {setModal1Visible(!modal1Visible);}}
            >
                <ImageViewer 
                    imageUrls={cameraDiagram2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDiagram2Visible(false)}
                    onClick={() => setDiagram2Visible(false)}
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
        
        {/*Camera Diagram 3*/}
            <Pressable onPress={() => setDiagram3Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cameraDiagram3.png')}
                />
            </Pressable>
            <Modal 
                visible={diagram3Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cameraDiagram3} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDiagram3Visible(false)}
                    onClick={() => setDiagram3Visible(false)}
                />
            </Modal>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textImageLabel}
                accessible={true} 
                accessibilityLabel="Graflok sliders:" 
                accessibilityRole="text"
            >
                Graflok sliders:
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
                accessibilityLabel="The lid to this compartment can be screwed in with the provided screws, or simply snapped in place. Either way, snap it out to gain access to the batteries. Use only 9V Alkaline or Lithium batteries in this camera, and take great care to insert them properly. They will only snap in place in one orientation, but a momentary press in the wrong orientation can be bad for the batteries, the camera, the fuse, or any of the above! Batteries should last for months of shooting. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don't have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12's unique circuitry." 
                accessibilityRole="text"
            >
                The lid to this compartment can be screwed in with the provided screws, or simply snapped in place. Either way, snap it out to gain access to the batteries. Use only 9V Alkaline or Lithium batteries in this camera, and take great care to insert them properly. They will only snap in place in one orientation, but a momentary press in the wrong orientation can be bad for the batteries, the camera, the fuse, or any of the above! Batteries should last for months of shooting. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don't have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12's unique circuitry.
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
                accessibilityLabel="When using 4x5 camera accessories that aren't Graflok compatible, such as unmodified cut film holders (Graflok-modified ones are available from Mercury Works), you can attach them using elastic/rubber bands. In this case, use two bands, each attached to the front of the top cold shoe rack of the camera (where a groove exists for this purpose) and this bottom screw." 
                accessibilityRole="text"
            >
                When using 4x5 camera accessories that aren't Graflok compatible, such as unmodified cut film holders (Graflok-modified ones are available from Mercury Works), you can attach them using elastic/rubber bands. In this case, use two bands, each attached to the front of the top cold shoe rack of the camera (where a groove exists for this purpose) and this bottom screw.
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
                accessibilityLabel="The Stereo 12 'lens stack' consists of a Base Spacer (specific to a particular lens), then a Focus Spacer (which determines your focus zone, or range of in-focus distances), then a Lensboard (specific to particular shutter models), then two shutters, then Lenses (which screw into the shutters)." 
                accessibilityRole="text"
            >
                The Stereo 12 'lens stack' consists of a Base Spacer (specific to a particular lens), then a Focus Spacer (which determines your focus zone, or range of in-focus distances), then a Lensboard (specific to particular shutter models), then two shutters, then Lenses (which screw into the shutters).
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
                accessibilityLabel="This popular lensboard accepts two Mamiya TLR shutters from Mamiya Twin Lens Reflex lensboards. The lensboard includes a shutter preview option not available on the original lensboard. To activate it, set one or both shutters to 'B' mode, then pull the actuator shaft on the lensboard to fire the shutter (no need to use the electronic actuation). While keeping the shaft pulled, screw a preview screw down into the threads, just enough so that it prevents the shaft from returning to its unfired position. The lens will now remain open until you loosen the screw. When you aren't using preview mode, you can store the preview screws inside the lensboard via the threads on the backside." 
                accessibilityRole="text"
            >
                This popular lensboard accepts two Mamiya TLR shutters from Mamiya Twin Lens Reflex lensboards. The lensboard includes a shutter preview option not available on the original lensboard. To activate it, set one or both shutters to 'B' mode, then pull the actuator shaft on the lensboard to fire the shutter (no need to use the electronic actuation). While keeping the shaft pulled, screw a preview screw down into the threads, just enough so that it prevents the shaft from returning to its unfired position. The lens will now remain open until you loosen the screw. When you aren't using preview mode, you can store the preview screws inside the lensboard via the threads on the backside.
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

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Deluxe Pinhole: " 
                accessibilityRole="text"
            >
                Deluxe Pinhole 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This board requires no lenses; it includes two switchable pinholes. Use the 50mm pinhole with the board mounted to the camera with no front spacers. It has infinite depth of field and a fixed f-stop of 168. Use the 70mm pinhole with a Base 19, 20, or 21, or Focus Spacer #14, for a more “normal” field of view. This option has a fixed f-stop of 200." 
                accessibilityRole="text"
            >
                This board requires no lenses; it includes two switchable pinholes. Use the 50mm pinhole with the board mounted to the camera with no front spacers. It has infinite depth of field and a fixed f-stop of 168. Use the 70mm pinhole with a Base 19, 20, or 21, or Focus Spacer #14, for a more “normal” field of view. This option has a fixed f-stop of 200.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard has an electronic shutter and can be actuated via standard “bulb” shooting (hold trigger for duration of the exposure) or via the optional Mercury Trigger Controller, which can set exact exposure times between 1 second and 30 seconds. Do not use the electronic triggering on this lensboard for exposures longer than 30 seconds, or your lensboard could overheat and eventually fail." 
                accessibilityRole="text"
            >
                This lensboard has an electronic shutter and can be actuated via standard “bulb” shooting (hold trigger for duration of the exposure) or via the optional Mercury Trigger Controller, which can set exact exposure times between 1 second and 30 seconds. Do not use the electronic triggering on this lensboard for exposures longer than 30 seconds, or your lensboard could overheat and eventually fail.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In addition to electronic exposure, these shutters can also be actuated with two standard cable releases. Just thread one into each cable release port on the bottom of the lens assembly and trigger them in unison. With this method the shutters only function in “bulb” mode. However, you can use any duration of exposure without danger of overheating." 
                accessibilityRole="text"
            >
                In addition to electronic exposure, these shutters can also be actuated with two standard cable releases. Just thread one into each cable release port on the bottom of the lens assembly and trigger them in unison. With this method the shutters only function in “bulb” mode. However, you can use any duration of exposure without danger of overheating.
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
                accessibilityLabel="0 Manual: " 
                accessibilityRole="text"
            >
                0 Manual: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts two “0” sized shutters of any kind. They must be actuated via two cable releases. This is especially useful for “press” shutters, which do not need to be cocked before actuation, but can be used with standard Copal 0, Compur 0, and Seiko (Fujinon) lenses. No cable release socket is provided by the lensboard, so this board won't work well for Mamiya TLR or Topcon/Horseman Seiko shutters. For those, use the Mamiya TLR manual lensboard, below." 
                accessibilityRole="text"
            >
                This accepts two “0” sized shutters of any kind. They must be actuated via two cable releases. This is especially useful for “press” shutters, which do not need to be cocked before actuation, but can be used with standard Copal 0, Compur 0, and Seiko (Fujinon) lenses. No cable release socket is provided by the lensboard, so this board won't work well for Mamiya TLR or Topcon/Horseman Seiko shutters. For those, use the Mamiya TLR manual lensboard, below.
            </Text>

        {/*Paragraph 3*/}
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
                accessibilityLabel="This accepts two Mamiya TLR shutters. They must be actuated via two cable releases. Unlike the Stereo 12 Electronic version of this lensboard, no aperture preview method is build-in to this lensboard. However, you can set your shutters to “B” mode and lock your cable releases down to effect a preview for ground glass use. This board can also be used for Topcon/Horseman shutters that lack an on-board cable release socket." 
                accessibilityRole="text"
            >
                This accepts two Mamiya TLR shutters. They must be actuated via two cable releases. Unlike the Stereo 12 Electronic version of this lensboard, no aperture preview method is build-in to this lensboard. However, you can set your shutters to “B” mode and lock your cable releases down to effect a preview for ground glass use. This board can also be used for Topcon/Horseman shutters that lack an on-board cable release socket.
            </Text>

        {/*Paragraph 4*/}
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
                accessibilityLabel="This accepts two Compur 00 sized shutters. They must be actuated via two cable releases." 
                accessibilityRole="text"
            >
                This accepts two Compur 00 sized shutters. They must be actuated via two cable releases.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="00 Base 57 Manual: " 
                accessibilityRole="text"
            >
                00 Base 57 Manual:  
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard accepts two Compur 00 shutters, placing them slightly closer together. This has the advantage of enabling you to shoot subjects closer to the camera without causing viewers eyestrain, and also producing larger slides that require less horizontal masking when mounting stereo views. The tradeoff is that less depth will be rendered for farther-away objects." 
                accessibilityRole="text"
            >
                This lensboard accepts two Compur 00 shutters, placing them slightly closer together. This has the advantage of enabling you to shoot subjects closer to the camera without causing viewers eyestrain, and also producing larger slides that require less horizontal masking when mounting stereo views. The tradeoff is that less depth will be rendered for farther-away objects.
            </Text>

        {/*Paragraph 6*/}
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

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Pinhole 70mm: " 
                accessibilityRole="text"
            >
                Pinhole 70mm: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This lensboard operates like the 50mm version, but provides a narrower field of view via two 0.35mm pinholes. Mount to the camera using a Base 19, Base 20, or Base 21 spacer. It's fixed f/stop is 200." 
                accessibilityRole="text"
            >
                This lensboard operates like the 50mm version, but provides a narrower field of view via two 0.35mm pinholes. Mount to the camera using a Base 19, Base 20, or Base 21 spacer. It's fixed f/stop is 200.
            </Text>

        {/*Paragraph 8*/}
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

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Wista Twin: " 
                accessibilityRole="text"
            >
                Wista Twin: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This experimental board requires a vintage Wista Twin lensboard (originally used for ID card photos). The septum on the vintage Twin lensboard must be removed (easily via 4 screws) and then mounted on this Mercury lensboard. Requires either Base 43 spacer or (recommended) Front Extension Spacer 40 + Base 8. The Wista Twin has a stereo base of 50mm, making it most useful for close subjects. It’s lenses are removable, however, and different lenses can potentially be mounted onto this, in order to make use of its built-in stereo shutter." 
                accessibilityRole="text"
            >
                This experimental board requires a vintage Wista Twin lensboard (originally used for ID card photos). The septum on the vintage Twin lensboard must be removed (easily via 4 screws) and then mounted on this Mercury lensboard. Requires either Base 43 spacer or (recommended) Front Extension Spacer 40 + Base 8. The Wista Twin has a stereo base of 50mm, making it most useful for close subjects. It’s lenses are removable, however, and different lenses can potentially be mounted onto this, in order to make use of its built-in stereo shutter.
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


        {/*Table 1*/}
            <Pressable onPress={() => setTable1Visible(true)}>
                <Image
                    style={guideStyle.imageTable}
                    source={require('../assets/images/compatibleLensTable.png')}
                />
            </Pressable>
            <Modal 
                visible={table1Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={compatibleLensTable} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setTable1Visible(false)}
                    onClick={() => setTable1Visible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='Lens recommendations can be found at:' accessibilityRole='text'>
                Lens recommendations can be found at:
                </Text>
                <OpenURLLink url={mercuryStereoURL}>www.merucrystereo.com</OpenURLLink>
            </View>

        {/*Paragraph 3*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='Detailed instructions for mounting shutters to Mercury lensboards are found in our supplemental document, “Lens and Shutter Assembly” and our video:' accessibilityRole='text'>
                Detailed instructions for mounting shutters to Mercury lensboards are found in our supplemental document, “Lens and Shutter Assembly” and our video:
                </Text>
                <OpenURLLink url={assemblingLensboardURL}>How to Assemble Your Mercury Stereo 12 Lensboard</OpenURLLink>
            </View> 

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

        
        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Almost all lenses require a base spacer. Base spacers are named after their total thickness. For example, a Base 12 is a spacer 12mm thick. In general, the base spacers is always used for a given lens, and only the Focus Spacer is changed in order to alter focal zones. However, some lenses, as can be seen in the preceding chart, use a base spacer and no focus spacer. In some of these cases, different base spacers will produce a different focus zone. When this is the case, our separate spreadsheet, “Stereo Lens Info,” lists multiple base spacers instead of focus spacers for different focus zones. Only very wide lenses fall into this category." 
                accessibilityRole="text"
            >
                Almost all lenses require a base spacer. Base spacers are named after their total thickness. For example, a Base 12 is a spacer 12mm thick. In general, the base spacers is always used for a given lens, and only the Focus Spacer is changed in order to alter focal zones. However, some lenses, as can be seen in the preceding chart, use a base spacer and no focus spacer. In some of these cases, different base spacers will produce a different focus zone. When this is the case, our separate spreadsheet, “Stereo Lens Info,” lists multiple base spacers instead of focus spacers for different focus zones. Only very wide lenses fall into this category.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Front Extension Spacer (FES): " 
                accessibilityRole="text"
            >
                Front Extension Spacer (FES):
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is a special category of base spacer that is essentially a camera extension. It mounts to your camera like any base spacer, but always does so via four (4) M4x8mm screws with no thumbscrew knobs. They may need to be tightened with an allen wrench (do not overtighten!). At the other end of the spacer is a new camera front, to which you can mount additional spacers. Typically you would mount a standard base spacer to the FES, then add a focus spacer as usual. All spacers after the FES mount directly to the FES rather than the camera front." 
                accessibilityRole="text"
            >
                This is a special category of base spacer that is essentially a camera extension. It mounts to your camera like any base spacer, but always does so via four (4) M4x8mm screws with no thumbscrew knobs. They may need to be tightened with an allen wrench (do not overtighten!). At the other end of the spacer is a new camera front, to which you can mount additional spacers. Typically you would mount a standard base spacer to the FES, then add a focus spacer as usual. All spacers after the FES mount directly to the FES rather than the camera front.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The FES enables much longer camera configurations than would otherwise be possible. This is useful for lenses with longer focal lengths (generally 120mm and greater) as well as macro photography." 
                accessibilityRole="text"
            >
                The FES enables much longer camera configurations than would otherwise be possible. This is useful for lenses with longer focal lengths (generally 120mm and greater) as well as macro photography.
            </Text>
       

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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Unlike base spacers, which are specific to a given lens (or several lenses), focus spacers are all the same. You only need to own one set of focus spacers to cover any number of lenses." 
                accessibilityRole="text"
            >
                Unlike base spacers, which are specific to a given lens (or several lenses), focus spacers are all the same. You only need to own one set of focus spacers to cover any number of lenses.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Focus spacers are labeled with a number from 1 to 14. This does not represent their absolute thickness, but only relative thickness: #1 is the thinnest, #14 the thickest. For a given lens, each focus spacer will produce a different focus zone (the range of distances at which objects are in focus). The approximate focus zone for each spacer and lens combination is given in the “Stereo Lens Info” spreadsheet." 
                accessibilityRole="text"
            >
                Focus spacers are labeled with a number from 1 to 14. This does not represent their absolute thickness, but only relative thickness: #1 is the thinnest, #14 the thickest. For a given lens, each focus spacer will produce a different focus zone (the range of distances at which objects are in focus). The approximate focus zone for each spacer and lens combination is given in the “Stereo Lens Info” spreadsheet.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For a given lens, only certain spacers will be relevant. Wide angle lenses may only have a few focus spacers to cover their entire practical focal range, while very long lenses (over 100mm) may require all 14." 
                accessibilityRole="text"
            >
                For a given lens, only certain spacers will be relevant. Wide angle lenses may only have a few focus spacers to cover their entire practical focal range, while very long lenses (over 100mm) may require all 14.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="However, we typically recommend only 3-4 spacers per lens, for commonly used focal zones. Excepting special purposes, you don’t need a full focus spacer set." 
                accessibilityRole="text"
            >
                However, we typically recommend only 3-4 spacers per lens, for commonly used focal zones. Excepting special purposes, you don’t need a full focus spacer set.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Selecting a focus spacer: " 
                accessibilityRole="text"
            >
                Selecting a focus spacer:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For a given lens, you will want to select a focus spacer that renders a focal zone that covers what you are likely to shoot, at the f-stop you are likely to use. If you will be shooting far away objects, you may want to select the “hyperfocal” spacer for your given lens and f-stop. This is the spacer that has the closest focus zone that still reaches infinity." 
                accessibilityRole="text"
            >
                For a given lens, you will want to select a focus spacer that renders a focal zone that covers what you are likely to shoot, at the f-stop you are likely to use. If you will be shooting far away objects, you may want to select the “hyperfocal” spacer for your given lens and f-stop. This is the spacer that has the closest focus zone that still reaches infinity.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Because faraway objects don’t have much—or any—stereo depth, the optimal focal zone for most photographers is the one that covers roughly 6-12 ft. This is the distance that the human eyes are optimized to see depth at, and thus your photos will maximize the depth possible (the 3D effect) if you can contain your most important objects within this range. Of course, your focal zone may expand significantly past this range, giving you much more that is in focus besides. Wider lenses and larger f-stops will significantly expand your focal zone, and this is usually desirable for stereo photography." 
                accessibilityRole="text"
            >
                Because faraway objects don’t have much—or any—stereo depth, the optimal focal zone for most photographers is the one that covers roughly 6-12 ft. This is the distance that the human eyes are optimized to see depth at, and thus your photos will maximize the depth possible (the 3D effect) if you can contain your most important objects within this range. Of course, your focal zone may expand significantly past this range, giving you much more that is in focus besides. Wider lenses and larger f-stops will significantly expand your focal zone, and this is usually desirable for stereo photography.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Given these considerations, one or two focus spacers for a given lens will probably cover 95% of your needs. If your particular style of photography requires more spacers, you can obtain them from Mercury Works or 3D print your own using our files." 
                accessibilityRole="text"
            >
                Given these considerations, one or two focus spacers for a given lens will probably cover 95% of your needs. If your particular style of photography requires more spacers, you can obtain them from Mercury Works or 3D print your own using our files.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Focus Spacer Labels:" 
                accessibilityRole="text"
            >
                Focus Spacer Labels:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Stereo 12 focus spacers are designed such that they have a flat surface near their base that perfectly fits a single row of text from our Stereo Lens Info spreadsheet. You will notice that there are some sheets in the spreadsheet that are formatted with a black background and a subset of information. These are designed for direct printing. If you then use a paper cutter (or a steady hand with scissors) to cut out individual rows for individual spacers, you can adhere those strips to spacers. Now, when you mount a spacer, you can see at a glance what your focal zones (depth of field) will be at several different f-stops, as well as the nominal focal point, the lens, the spacer #, and which colored bolts are used to mount the lensboard when using this spacer (a straight color indicates bolts without a washer of that color will work; a “W” indicates bolts of that color with a washer; two side-by-side options indicates that either will work)." 
                accessibilityRole="text"
            >
                Stereo 12 focus spacers are designed such that they have a flat surface near their base that perfectly fits a single row of text from our Stereo Lens Info spreadsheet. You will notice that there are some sheets in the spreadsheet that are formatted with a black background and a subset of information. These are designed for direct printing. If you then use a paper cutter (or a steady hand with scissors) to cut out individual rows for individual spacers, you can adhere those strips to spacers. Now, when you mount a spacer, you can see at a glance what your focal zones (depth of field) will be at several different f-stops, as well as the nominal focal point, the lens, the spacer #, and which colored bolts are used to mount the lensboard when using this spacer (a straight color indicates bolts without a washer of that color will work; a “W” indicates bolts of that color with a washer; two side-by-side options indicates that either will work).
            </Text>


        {/*Focus Spacer Label Image*/}
            <Pressable onPress={() => setSpacerLabelVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/focusSpacerLabel.jpg')}
                />
            </Pressable>
            <Modal 
                visible={spacerLabelVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={focusSpacerLabel} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSpacerLabelVisible(false)}
                    onClick={() => setSpacerLabelVisible(false)}
                />
            </Modal>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can customize the information if you wish by altering the spreadsheet before printing." 
                accessibilityRole="text"
            >
                You can customize the information if you wish by altering the spreadsheet before printing. 
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="S Focus Spacers: " 
                accessibilityRole="text"
            >
                S Focus Spacers: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The “S” focus spacers are extremely thin spacers that fit in between the base spacer (or camera front) and the lensboard. They are only used for extremely wide lenses. There are four, labeled S1 (the thinnest), S2, S3, and S4 (the thickest, rarely used)." 
                accessibilityRole="text"
            >
                The “S” focus spacers are extremely thin spacers that fit in between the base spacer (or camera front) and the lensboard. They are only used for extremely wide lenses. There are four, labeled S1 (the thinnest), S2, S3, and S4 (the thickest, rarely used).
            </Text>

        {/*S Focus Spacer Image*/}
            <Pressable onPress={() => setSFocusSpacerVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/sFocusSpacer.jpg')}
                />
            </Pressable>
            <Modal 
                visible={sFocusSpacerVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={sFocusSpacer} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSFocusSpacerVisible(false)}
                    onClick={() => setSFocusSpacerVisible(false)}
                />
            </Modal>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="S spacers are marked with white dots. The number of dots present corresponds to the number of the spacer model. The one pictured above, for instance, is an S2." 
                accessibilityRole="text"
            >
                S spacers are marked with white dots. The number of dots present corresponds to the number of the spacer model. The one pictured above, for instance, is an S2.
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Front Bolts: " 
                accessibilityRole="text"
            >
                Front Bolts:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Changing spacers sometimes necessitates moving to longer or shorter bolts. In the Mercury Stereo system front bolts have thumbscrew heads that are color coded by bolt length. In the Stereo Lens Info spreadsheet, the proper bolts are listed for every Base/Focus spacer combo, in both actual bolt length and color. A “W” signifies that the given bolt must have a washer added to it. Mercury Stereo washers are plastic and of a uniform thickness. A set of four comes with every camera." 
                accessibilityRole="text"
            >
                Changing spacers sometimes necessitates moving to longer or shorter bolts. In the Mercury Stereo system front bolts have thumbscrew heads that are color coded by bolt length. In the Stereo Lens Info spreadsheet, the proper bolts are listed for every Base/Focus spacer combo, in both actual bolt length and color. A “W” signifies that the given bolt must have a washer added to it. Mercury Stereo washers are plastic and of a uniform thickness. A set of four comes with every camera.
            </Text>

        {/*Front Bolts Image*/}
            <Pressable onPress={() => setFrontBoltsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/frontBolts.jpg')}
                />
            </Pressable>
            <Modal 
                visible={frontBoltsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={frontBolts} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setFrontBoltsVisible(false)}
                    onClick={() => setFrontBoltsVisible(false)}
                />
            </Modal>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Front bolts are standard M4 size and available in their color-coded thumbscrew version from Mercury Works. You can also purchase generic ones online." 
                accessibilityRole="text"
            >
                Front bolts are standard M4 size and available in their color-coded thumbscrew version from Mercury Works. You can also purchase generic ones online.
            </Text>            

            
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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Stereo 12 is the first modern stereo camera to feature interchangeable backs. This gives you many different options for film format and form factor." 
                accessibilityRole="text"
            >
                The Stereo 12 is the first modern stereo camera to feature interchangeable backs. This gives you many different options for film format and form factor.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is the flagship back for the Stereo 12. We have to machine and rebuild a vintage Graflex RH50 back (not itself compatible with the Stereo 12), modify its frame counter, refurbish, and add many features to it, but the result is a back that can accept 70mm aerial and portrait film, 65mm motion picture film, and even 120 film (with some limitations). The availability of these backs is highly dependent on our ability to source the vintage parts." 
                accessibilityRole="text"
            >
                This is the flagship back for the Stereo 12. We have to machine and rebuild a vintage Graflex RH50 back (not itself compatible with the Stereo 12), modify its frame counter, refurbish, and add many features to it, but the result is a back that can accept 70mm aerial and portrait film, 65mm motion picture film, and even 120 film (with some limitations). The availability of these backs is highly dependent on our ability to source the vintage parts.
            </Text>

        {/*Mercury Panoramic Back Image*/}
            <Pressable onPress={() => setMercuryPanoBackVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/mercuryPanoBack.jpg')}
                />
            </Pressable>
            <Modal 
                visible={mercuryPanoBackVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={mercuryPanoBack} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setMercuryPanoBackVisible(false)}
                    onClick={() => setMercuryPanoBackVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This back shoots a nominal 6x12 image (actual: 56 x 113mm), the same as Linhof, Horseman, and Da Yi 6x12 120 backs. But instead of accepting only 120 spools, this back accepts 70mm cassettes. Those cassettes can be loaded with 70mm film as well as 65mm motion picture film (the film used for IMAX) using Mercury Works 65mm Cassette Spools (a set of which is included with this back)." 
                accessibilityRole="text"
            >
                This back shoots a nominal 6x12 image (actual: 56 x 113mm), the same as Linhof, Horseman, and Da Yi 6x12 120 backs. But instead of accepting only 120 spools, this back accepts 70mm cassettes. Those cassettes can be loaded with 70mm film as well as 65mm motion picture film (the film used for IMAX) using Mercury Works 65mm Cassette Spools (a set of which is included with this back).
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You will need two metal 70mm cassettes, which are sold separately (available via Ebay, and sometimes available from Mercury Works)." 
                accessibilityRole="text"
            >
                You will need two metal 70mm cassettes, which are sold separately (available via Ebay, and sometimes available from Mercury Works).
            </Text>

        {/*Metal Cassette Image*/}
            <Pressable onPress={() => setMetalCassetteVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/metalCassette.jpg')}
                />
            </Pressable>
            <Modal 
                visible={metalCassetteVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={metalCassette} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setMetalCassetteVisible(false)}
                    onClick={() => setMetalCassetteVisible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='We add a complete loading diagram to the back to clearly indicate how to position the cassettes and how to load the film. For complete loading instructions, see:' accessibilityRole='text'>
                We add a complete loading diagram to the back to clearly indicate how to position the cassettes and how to load the film. For complete loading instructions, see:
                </Text>
                <OpenURLLink url={shoot70URL}>www.shoot70mm.com</OpenURLLink>
            </View> 

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When loading 70mm film, you can get as many as 35 exposures (stereo pairs) per load." 
                accessibilityRole="text"
            >
                When loading 70mm film, you can get as many as 35 exposures (stereo pairs) per load.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When loading 65mm film, you can get as many as 32 exposures (stereo pairs) per load." 
                accessibilityRole="text"
            >
                When loading 65mm film, you can get as many as 32 exposures (stereo pairs) per load.
            </Text>

        {/*35 Exposures Image*/}
            <Pressable onPress={() => setExposuresVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/exposures.jpg')}
                />
            </Pressable>
            <Modal 
                visible={exposuresVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={exposures} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setExposuresVisible(false)}
                    onClick={() => setExposuresVisible(false)}
                />
            </Modal>   

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The long-roll cassette system used by this back is variable load, so you can choose how long each roll is, from just several exposures to the maximum listed above. Furthermore, you can cut your roll at any point, so you don’t have to “finish a roll” in order to develop what you’ve shot. When you cut a roll, you can simply add a new takeup cassette and continue shooting with the rest of your unexposed roll." 
                accessibilityRole="text"
            >
                The long-roll cassette system used by this back is variable load, so you can choose how long each roll is, from just several exposures to the maximum listed above. Furthermore, you can cut your roll at any point, so you don’t have to “finish a roll” in order to develop what you’ve shot. When you cut a roll, you can simply add a new takeup cassette and continue shooting with the rest of your unexposed roll.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Especially when shooting the 65mm motion picture film (IMAX) that Mercury Works makes available to photographers, this system confers enormous advantages over 120:" 
                accessibilityRole="text"
            >
                Especially when shooting the 65mm motion picture film (IMAX) that Mercury Works makes available to photographers, this system confers enormous advantages over 120:
            </Text> 

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Far less expensive film (½ the price of 120)!" 
                accessibilityRole="text"
            >
                * Far less expensive film (½ the price of 120)!
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Most advanced film emulsions ever developed" 
                accessibilityRole="text"
            >
                * Most advanced film emulsions ever developed
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Amazing color, low grain, high exposure latitude" 
                accessibilityRole="text"
            >
                * Amazing color, low grain, high exposure latitude
            </Text>

        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Each cassette can hold over 5.5 times as many frames as 120" 
                accessibilityRole="text"
            >
                * Each cassette can hold over 5.5 times as many frames as 120
            </Text>

        {/*Bullet 5*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Variable load cassettes (you choose how big each roll is)" 
                accessibilityRole="text"
            >
                * Variable load cassettes (you choose how big each roll is)
            </Text>

        {/*Bullet 6*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Mid-roll cutting (cut your roll any time for developing)" 
                accessibilityRole="text"
            >
                * Mid-roll cutting (cut your roll any time for developing)
            </Text>

        {/*Bullet 7*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Far better protection against light leaks, scratches, halation, and X-rays" 
                accessibilityRole="text"
            >
                * Far better protection against light leaks, scratches, halation, and X-rays
            </Text>

        {/*Bullet 8*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Much less film curl than 120 (better flatness)" 
                accessibilityRole="text"
            >
                * Much less film curl than 120 (better flatness)
            </Text>

        {/*Bullet 9*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Can be developed in long roll format by M-Alchemy or at home" 
                accessibilityRole="text"
            >
                * Can be developed in long roll format by M-Alchemy or at home
            </Text>

        {/*Bullet 10*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Can be printed to medium format slides (just like IMAX 70mm exhibition)" 
                accessibilityRole="text"
            >
                * Can be printed to medium format slides (just like IMAX 70mm exhibition)
            </Text>

        {/*Paragraph 9*/}
            <View>
                <OpenURLLink url={mAlchemy}>M-Alchemy</OpenURLLink>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='is the Mercury Works film lab, and can process any 65mm and 70mm film, in any length up to the maximum. We can also print beautiful slides from your negatives using the motion picture industry’s print film technology (as used in IMAX 70mm exhibition).' accessibilityRole='text'>
                    is the Mercury Works film lab, and can process any 65mm and 70mm film, in any length up to the maximum. We can also print beautiful slides from your negatives using the motion picture industry’s print film technology (as used in IMAX 70mm exhibition).
                </Text>
            </View> 

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To develop at home, Mercury Works makes spirals available for both Paterson and Jobo. These can hold up to a 220 length of 65mm or 70mm film." 
                accessibilityRole="text"
            >
                To develop at home, Mercury Works makes spirals available for both Paterson and Jobo. These can hold up to a 220 length of 65mm or 70mm film.
            </Text> 

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Shooting 65mm and 70mm Film" 
                accessibilityRole="text"
            >
                Shooting 65mm and 70mm Film
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you’ve loaded your film and closed the back, test to see where in the advance lever stroke you feel tension. If it isn’t right away (i.e., it is somewhere in the middle or toward the end of the stroke), go ahead and advance the lever to the end of the stroke." 
                accessibilityRole="text"
            >
                Once you’ve loaded your film and closed the back, test to see where in the advance lever stroke you feel tension. If it isn’t right away (i.e., it is somewhere in the middle or toward the end of the stroke), go ahead and advance the lever to the end of the stroke.
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now advance the frame counter (via the black metal knurled knob) until it reaches the red arrow." 
                accessibilityRole="text"
            >
                Now advance the frame counter (via the black metal knurled knob) until it reaches the red arrow.
            </Text>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When you are ready to shoot, advance three full strokes until the counter is at “1”. You are ready to expose!" 
                accessibilityRole="text"
            >
                When you are ready to shoot, advance three full strokes until the counter is at “1”. You are ready to expose!
            </Text>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="After every shot, you need to advance the lever 1.5 strokes. The half stroke is properly aligned when the right edge of the advance lever lines up with the tip of the white triangle, as shown here:" 
                accessibilityRole="text"
            >
                After every shot, you need to advance the lever 1.5 strokes. The half stroke is properly aligned when the right edge of the advance lever lines up with the tip of the white triangle, as shown here:
            </Text>


        {/*Pano Back Level Image*/}
            <Pressable onPress={() => setPanoBackLeverVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/panoBackLever.jpg')}
                />
            </Pressable>
            <Modal 
                visible={panoBackLeverVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={panoBackLever} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setPanoBackLeverVisible(false)}
                    onClick={() => setPanoBackLeverVisible(false)}
                />
            </Modal>


        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note that the lever is only advancing when you feel tension. Sometimes your half stroke will happen before the full stroke (i.e., you’ll only feel tension start at the halfway point of the stroke). The other 50% of the time you will have tension from the beginning of the stroke, in which case, your second stroke will be the 0.5, and you’ll only advance it to the halfway point. A white indicator shows the halfway point; just advance until the right edge of the lever is in line with this mark. (This is difficult to describe, but in practice is very simple. Just advance 1.5 times, counting as an advance only when feeling the film tension.)" 
                accessibilityRole="text"
            >
                Note that the lever is only advancing when you feel tension. Sometimes your half stroke will happen before the full stroke (i.e., you’ll only feel tension start at the halfway point of the stroke). The other 50% of the time you will have tension from the beginning of the stroke, in which case, your second stroke will be the 0.5, and you’ll only advance it to the halfway point. A white indicator shows the halfway point; just advance until the right edge of the lever is in line with this mark. (This is difficult to describe, but in practice is very simple. Just advance 1.5 times, counting as an advance only when feeling the film tension.)
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Mid-Roll Cutting" 
                accessibilityRole="text"
            >
                Mid-Roll Cutting
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To cut your film for developing before you finish your cassette, simply advance the film one extra frame (the usual 1.5 strokes), then remove the insert from the shell and use a pair of scissors to cut the film (near the takeup edge of the pressure plate). You can easily insert another cassette in the takeup position, spool your unexposed film onto it, and continue shooting. All of this can be done in subdued light." 
                accessibilityRole="text"
            >
                To cut your film for developing before you finish your cassette, simply advance the film one extra frame (the usual 1.5 strokes), then remove the insert from the shell and use a pair of scissors to cut the film (near the takeup edge of the pressure plate). You can easily insert another cassette in the takeup position, spool your unexposed film onto it, and continue shooting. All of this can be done in subdued light.
            </Text>

        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If cutting for a 220 length of film, use the following guide:" 
                accessibilityRole="text"
            >
                If cutting for a 220 length of film, use the following guide:
            </Text> 

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* If you added leader to the roll: After exposure #11, advance to the next frame and cut in the middle of the pressure plate." 
                accessibilityRole="text"
            >
                * If you added leader to the roll: After exposure #11, advance to the next frame and cut in the middle of the pressure plate.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* If you didn’t add leader to the roll: After exposure #9, advance to the next frame and cut in the middle of the pressure plate." 
                accessibilityRole="text"
            >
                * If you didn’t add leader to the roll: After exposure #9, advance to the next frame and cut in the middle of the pressure plate.
            </Text>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Shooting 120 film in the Mercury Panoramic Back" 
                accessibilityRole="text"
            >
                Shooting 120 film in the Mercury Panoramic Back
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="While this back is primarily designed for long-roll medium format (65mm or 70mm), it is also possible to shoot 120 film in it. It isn’t as convenient as a dedicated 120 back, but it can be really handy if you primarily want to shoot 65mm and only occasionally want to shoot 120, or if you only want to bring one back with you on a trip and want a backup option in case you need to purchase film locally, etc. Be aware, however, that it is difficult to hold 120 film completely flat. Your film must be perfectly centered when loaded into the back, and even then it can slip a bit during the roll. The result could affect your photos if they are shot at a wide aperture and thus have narrow depth of field." 
                accessibilityRole="text"
            >
                While this back is primarily designed for long-roll medium format (65mm or 70mm), it is also possible to shoot 120 film in it. It isn’t as convenient as a dedicated 120 back, but it can be really handy if you primarily want to shoot 65mm and only occasionally want to shoot 120, or if you only want to bring one back with you on a trip and want a backup option in case you need to purchase film locally, etc. Be aware, however, that it is difficult to hold 120 film completely flat. Your film must be perfectly centered when loaded into the back, and even then it can slip a bit during the roll. The result could affect your photos if they are shot at a wide aperture and thus have narrow depth of field.
            </Text>

        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To shoot 120, you need the inexpensive “120 kit” for this back. It includes a drill bit (¼ inch, hex shank), a bit handle, and four plastic spacers." 
                accessibilityRole="text"
            >
                To shoot 120, you need the inexpensive “120 kit” for this back. It includes a drill bit (¼ inch, hex shank), a bit handle, and four plastic spacers.
            </Text>

        {/*120 Kit Image*/}
            <Pressable onPress={() => setKit120Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/kit120.jpg')}
                />
            </Pressable>
            <Modal 
                visible={kit120Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={kit120} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setKit120Visible(false)}
                    onClick={() => setKit120Visible(false)}
                />
            </Modal>

        {/*Paragraph 20*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To load a 120 spool, you need to first slightly enlarge the hole at both ends of the 120 film spool (as well as a 120 takeup spool). This can be done very easily, in less than a second, with a drill. Just drill out the existing hole, no deeper than the original hole. If you wish to do this in the field, with no drill handy, you can insert the drill bit into the included bit handle and do this by hand. It takes a bit more finesse, but can be done without much trouble." 
                accessibilityRole="text"
            >
                To load a 120 spool, you need to first slightly enlarge the hole at both ends of the 120 film spool (as well as a 120 takeup spool). This can be done very easily, in less than a second, with a drill. Just drill out the existing hole, no deeper than the original hole. If you wish to do this in the field, with no drill handy, you can insert the drill bit into the included bit handle and do this by hand. It takes a bit more finesse, but can be done without much trouble.
            </Text>

        {/*Paragraph 21*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you’ve prepared your spools, insert them into the back, with a spacer placed around each of the spool holders (one ring on top, one ring on bottom). Snap the bottom of the back closed to secure your spools." 
                accessibilityRole="text"
            >
                Once you’ve prepared your spools, insert them into the back, with a spacer placed around each of the spool holders (one ring on top, one ring on bottom). Snap the bottom of the back closed to secure your spools.
            </Text>

        {/*Spools Wide Image*/}
            <Pressable onPress={() => setSpoolsWideVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/spoolsWide.jpg')}
                />
            </Pressable>
            <Modal 
                visible={spoolsWideVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={spoolsWide} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSpoolsWideVisible(false)}
                    onClick={() => setSpoolsWideVisible(false)}
                />
            </Modal>

        {/*Paragraph 22*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now load the backing paper as usual: pull it around the front of the film insert, then back around the takeup spool. Use the back’s advance lever to begin to wind the paper around the takeup spool." 
                accessibilityRole="text"
            >
                Now load the backing paper as usual: pull it around the front of the film insert, then back around the takeup spool. Use the back’s advance lever to begin to wind the paper around the takeup spool.
            </Text>

        {/*Spools Close Image*/}
            <Pressable onPress={() => setSpoolsCloseVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/spoolsClose.jpg')}
                />
            </Pressable>
            <Modal 
                visible={spoolsCloseVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={spoolsClose} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSpoolsCloseVisible(false)}
                    onClick={() => setSpoolsCloseVisible(false)}
                />
            </Modal>

        {/*Paragraph 23*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="As you advance, the “Start” line on the backing paper will begin to travel across the insert. It is difficult to see, but will periodically black out the holes in the pressure plate. You want to advance the backing paper until the center holes in the plate are blacked out." 
                accessibilityRole="text"
            >
                As you advance, the “Start” line on the backing paper will begin to travel across the insert. It is difficult to see, but will periodically black out the holes in the pressure plate. You want to advance the backing paper until the center holes in the plate are blacked out.
            </Text>

        {/*Paragraph 24*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When the backing paper is in this position, double check both sides of the insert to make sure that the backing paper is spooling across the pressure plate in a straight line, without being pulled up or down (i.e., that it is perfectly parallel to the two spools). Adjust up or down as needed. Then place the insert into the shell of the back and close the shell." 
                accessibilityRole="text"
            >
                When the backing paper is in this position, double check both sides of the insert to make sure that the backing paper is spooling across the pressure plate in a straight line, without being pulled up or down (i.e., that it is perfectly parallel to the two spools). Adjust up or down as needed. Then place the insert into the shell of the back and close the shell.
            </Text>

        {/*Paragraph 25*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Next, you need to advance the lever 3.5 strokes. Note that the lever is only advancing when you feel tension on the film, and tension will only begin at some point over the full stroke of the lever. Note that point and use it as your reference for 3.5 strokes." 
                accessibilityRole="text"
            >
                Next, you need to advance the lever 3.5 strokes. Note that the lever is only advancing when you feel tension on the film, and tension will only begin at some point over the full stroke of the lever. Note that point and use it as your reference for 3.5 strokes.
            </Text>

        {/*Paragraph 26*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you’ve achieved 3.5 strokes (approximately, since the 0.5 is difficult to get exactly), continue to advance the lever until the current stroke has been completed (the lever has advanced all the way to the right)." 
                accessibilityRole="text"
            >
                Once you’ve achieved 3.5 strokes (approximately, since the 0.5 is difficult to get exactly), continue to advance the lever until the current stroke has been completed (the lever has advanced all the way to the right).
            </Text>

        {/*Paragraph 27*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now turn the frame counter knurled knob counter-clockwise until the frame counter resets. Advance it all the way to frame 1 (not the red start arrow!)." 
                accessibilityRole="text"
            >
                Now turn the frame counter knurled knob counter-clockwise until the frame counter resets. Advance it all the way to frame 1 (not the red start arrow!).
            </Text>

        {/*Paragraph 28*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now turn the frame counter knurled knob counter-clockwise until the frame counter resets. Advance it all the way to frame 1 (not the red start arrow!).Now shoot as usual! You should get your full six exposures on the 120 roll, and the backing paper tail will then continue to roll on as usual." 
                accessibilityRole="text"
            >
                Now shoot as usual! You should get your full six exposures on the 120 roll, and the backing paper tail will then continue to roll on as usual.
            </Text>

        {/*Paragraph 29*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Final Considerations" 
                accessibilityRole="text"
            >
                Final Considerations
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot." 
                accessibilityRole="text"
            >
                Like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot.
            </Text>

        {/*Paragraph 30*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='You can watch our video demonstrating how to load 70mm cassettes here:' accessibilityRole='text'>
                    You can watch our video demonstrating how to load 70mm cassettes here:
                </Text>
                <OpenURLLink url={loadingCassettesURL}>https://youtu.be/9_D-mRHmWaQ</OpenURLLink>
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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is the least expensive back available for the Stereo 12, as well as the lightest and smallest. It is a modified 4x5 (large format) sheet film holder, with added mounting grooves and a film path designed for 65mm motion picture film." 
                accessibilityRole="text"
            >
                This is the least expensive back available for the Stereo 12, as well as the lightest and smallest. It is a modified 4x5 (large format) sheet film holder, with added mounting grooves and a film path designed for 65mm motion picture film.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Each holder holds only two stereo pair exposures: one on each side. However, even three of these holders are together smaller, lighter, and far less expensive than a 120 back, while holding as many exposures. Best of all, you get all of the advantages of 65mm motion picture film (see above)." 
                accessibilityRole="text"
            >
                Each holder holds only two stereo pair exposures: one on each side. However, even three of these holders are together smaller, lighter, and far less expensive than a 120 back, while holding as many exposures. Best of all, you get all of the advantages of 65mm motion picture film (see above).
            </Text>

        {/*Holder Image*/}
            <Pressable onPress={() => setHolderVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/holder.jpg')}
                />
            </Pressable>
            <Modal 
                visible={holderVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={holder} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setHolderVisible(false)}
                    onClick={() => setHolderVisible(false)}
                />
            </Modal>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The downside to these backs is that you must load them in darkness (a dark room or a changing bag). To load, use the Mercury 65mm Cut Film Guide. Just unroll a bit of film from the end of one of our bulk 65mm rolls and slide it, emulsion side down (i.e., the inside of the roll) into the groove of the Film Guide. Best to wear a cotton glove on one hand. With the film in place, hold it down with a finger, then cut the film with a pair of scissors placed against the oversized end of the Film Guide. Note that scissors won’t cut perfectly flush with the edge of the Guide; the size of the guide takes this into account." 
                accessibilityRole="text"
            >
                The downside to these backs is that you must load them in darkness (a dark room or a changing bag). To load, use the Mercury 65mm Cut Film Guide. Just unroll a bit of film from the end of one of our bulk 65mm rolls and slide it, emulsion side down (i.e., the inside of the roll) into the groove of the Film Guide. Best to wear a cotton glove on one hand. With the film in place, hold it down with a finger, then cut the film with a pair of scissors placed against the oversized end of the Film Guide. Note that scissors won’t cut perfectly flush with the edge of the Guide; the size of the guide takes this into account.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textAside}
                accessible={true} 
                accessibilityLabel="Optional but recommended: You can make a second cut at an angle, using the diagonal part of the Film Guide. This will snip a tiny bit off of one corner of your film. This gives you a future indicator of which side of your film is the emulsion side, following large format guidelines." 
                accessibilityRole="text"
            >
                Optional but recommended: You can make a second cut at an angle, using the diagonal part of the Film Guide. This will snip a tiny bit off of one corner of your film. This gives you a future indicator of which side of your film is the emulsion side, following large format guidelines.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Next, load this cut strip of film directly into your Cut Film Holder by flipping it over (so emulsion side is up), then sliding it into the grooves in the holder. (Note that the darkslide must be at least partially open and the end of the holder hinged open.) Now close the holder’s hinge and fully insert the darkslide." 
                accessibilityRole="text"
            >
                Next, load this cut strip of film directly into your Cut Film Holder by flipping it over (so emulsion side is up), then sliding it into the grooves in the holder. (Note that the darkslide must be at least partially open and the end of the holder hinged open.) Now close the holder’s hinge and fully insert the darkslide.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Flip the holder over and repeat." 
                accessibilityRole="text"
            >
                Flip the holder over and repeat.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="With some practice, this can be done in mere seconds." 
                accessibilityRole="text"
            >
                With some practice, this can be done in mere seconds.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Close up your bulk roll, turn on the light, and label your holder with pencil to indicate the type of film you’ve loaded." 
                accessibilityRole="text"
            >
                Close up your bulk roll, turn on the light, and label your holder with pencil to indicate the type of film you’ve loaded.
            </Text>

        {/*Paragraph 9*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='You can watch our video version of these loading instructions here:' accessibilityRole='text'>
                You can watch our video version of these loading instructions here:
                </Text>
                <OpenURLLink url={holderLoadingURL}>https://youtu.be/yyqn09501r0</OpenURLLink>
            </View>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="To Shoot: " 
                accessibilityRole="text"
            >
                To Shoot: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Just mount the back like any other to your Stereo 12. Pull the darkslide when you’re ready and expose the side. It is then recommended that you flip your darkslide over (so the silver side is facing out) and reinsert it in that position. When the black side of the darkslide is facing it out it indicates un-exposed film; silver indicates exposed film." 
                accessibilityRole="text"
            >
                Just mount the back like any other to your Stereo 12. Pull the darkslide when you’re ready and expose the side. It is then recommended that you flip your darkslide over (so the silver side is facing out) and reinsert it in that position. When the black side of the darkslide is facing it out it indicates un-exposed film; silver indicates exposed film.
            </Text>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To shoot your second exposure, remove the holder, flip it to the other side, and re-attach to the camera." 
                accessibilityRole="text"
            >
                To shoot your second exposure, remove the holder, flip it to the other side, and re-attach to the camera.
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="To Develop: " 
                accessibilityRole="text"
            >
                To Develop: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These strips of film can be loaded onto 65mm developing reels (safely, two per reel), tray developed, or sent to M-Alchemy for developing." 
                accessibilityRole="text"
            >
                These strips of film can be loaded onto 65mm developing reels (safely, two per reel), tray developed, or sent to M-Alchemy for developing.
            </Text>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Basically, this method treats these advanced film strips as large format sheets, creating a panorama, or in this case, a stereo pair. The final strips can be contact printed to make beautiful IMAX-style slides." 
                accessibilityRole="text"
            >
                Basically, this method treats these advanced film strips as large format sheets, creating a panorama, or in this case, a stereo pair. The final strips can be contact printed to make beautiful IMAX-style slides.
            </Text>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These holders produce an image that is the full, maximum 120mm in width, to maximize horizontal space on your slides (less horizontal masking required)." 
                accessibilityRole="text"
            >
                These holders produce an image that is the full, maximum 120mm in width, to maximize horizontal space on your slides (less horizontal masking required).
            </Text>

        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works also makes this style of back in a 70mm variant. It works the same, but accepts 70mm film instead of 65mm." 
                accessibilityRole="text"
            >
                Mercury Works also makes this style of back in a 70mm variant. It works the same, but accepts 70mm film instead of 65mm.
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Cut Film Accessories:" 
                accessibilityRole="text"
            >
                Cut Film Accessories: 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To easily cut 65mm and 70mm strips of film to size in the dark (including adding corner notches that allow you to identify the emulsion side by feel if you later get mixed up), use our Cut Film Guide (available in two versions: one for 65mm film and one for 70mm film)." 
                accessibilityRole="text"
            >
                To easily cut 65mm and 70mm strips of film to size in the dark (including adding corner notches that allow you to identify the emulsion side by feel if you later get mixed up), use our Cut Film Guide (available in two versions: one for 65mm film and one for 70mm film).
            </Text>

        {/*Cut Film Guide Image*/}
            <Pressable onPress={() => setCutFilmGuideVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cutFilmGuide.jpg')}
                />
            </Pressable>
            <Modal 
                visible={cutFilmGuideVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cutFilmGuide} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setCutFilmGuideVisible(false)}
                    onClick={() => setCutFilmGuideVisible(false)}
                />
            </Modal> 

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To store cut film strips for later use (if not loading directly into holders) or to safely ship for developing at M-Alchemy, use our Cut Film Box." 
                accessibilityRole="text"
            >
                To store cut film strips for later use (if not loading directly into holders) or to safely ship for developing at M-Alchemy, use our Cut Film Box.
            </Text>   

        {/*Cut Film Box Image*/}
            <Pressable onPress={() => setCutFilmBoxVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cutFilmBox.jpg')}
                />
            </Pressable>
            <Modal 
                visible={cutFilmBoxVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cutFilmBox} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setCutFilmBoxVisible(false)}
                    onClick={() => setCutFilmBoxVisible(false)}
                />
            </Modal>     



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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Horseman 6x12 (also called the “6 EXP”) is the best of the practical 120 backs. It loads and unloads like a dream, boasts excellent build quality, and uses a precise lever winding system that produces near-perfect frame spacing. Like our 65/70mm backs, there’s no need to peer through a window or manually line up frame numbers (see below). The Horseman back is not cheap, though: it is only available used, and typically costs over $650 (and is thus more expensive than the Mercury 65/70mm Panoramic back). It is, however, much cheaper than the Techno Rollex (see below)!" 
                accessibilityRole="text"
            >
                The Horseman 6x12 (also called the “6 EXP”) is the best of the practical 120 backs. It loads and unloads like a dream, boasts excellent build quality, and uses a precise lever winding system that produces near-perfect frame spacing. Like our 65/70mm backs, there’s no need to peer through a window or manually line up frame numbers (see below). The Horseman back is not cheap, though: it is only available used, and typically costs over $650 (and is thus more expensive than the Mercury 65/70mm Panoramic back). It is, however, much cheaper than the Techno Rollex (see below)!
            </Text>

        {/*Horseman Back Image*/}
            <Pressable onPress={() => setHorsemanBackVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/horsemanBack.jpg')}
                />
            </Pressable>
            <Modal 
                visible={horsemanBackVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={horsemanBack} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setHorsemanBackVisible(false)}
                    onClick={() => setHorsemanBackVisible(false)}
                />
            </Modal>     

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This back produces a 56mm x 113mm usable image. It is not modifiable." 
                accessibilityRole="text"
            >
                This back produces a 56mm x 113mm usable image. It is not modifiable.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot." 
                accessibilityRole="text"
            >
                Like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you are going to shoot a lot of 120 and want a back that is quick and easy to operate and will serve you reliably, this is the one we recommend." 
                accessibilityRole="text"
            >
                If you are going to shoot a lot of 120 and want a back that is quick and easy to operate and will serve you reliably, this is the one we recommend.
            </Text>
        

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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is the fanciest, and most expensive, 6x12 back ever manufactured for the Graflok 45 standard. It is the Rolls Royce of 120 backs for the Stereo 12." 
                accessibilityRole="text"
            >
                This is the fanciest, and most expensive, 6x12 back ever manufactured for the Graflok 45 standard. It is the Rolls Royce of 120 backs for the Stereo 12.
            </Text>

        {/*Linhof Back Image*/}
            <Pressable onPress={() => setLinhofBackVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/linhofBack.jpg')}
                />
            </Pressable>
            <Modal 
                visible={linhofBackVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={linhofBack} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLinhofBackVisible(false)}
                    onClick={() => setLinhofBackVisible(false)}
                />
            </Modal>    

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Its chief advantage over the Horseman 120 back is that it features a full 120mm wide aperture, for reduced horizontal masking when mounting MF3D slides. Other advantages include an extremely smooth advancing mechanism thanks to an oversized roller and exceptional machining of the advance gearing, and amazing German build quality." 
                accessibilityRole="text"
            >
                Its chief advantage over the Horseman 120 back is that it features a full 120mm wide aperture, for reduced horizontal masking when mounting MF3D slides. Other advantages include an extremely smooth advancing mechanism thanks to an oversized roller and exceptional machining of the advance gearing, and amazing German build quality.
            </Text> 

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="220: This back also has the capability of shooting with 220 film. Technically, the insert’s backplate is meant to be changed to a specially-sized 220 plate, but in practice, this will still work with the standard 120 plate (theoretically your film could be up to 0.1mm out of spec in terms of flatness)." 
                accessibilityRole="text"
            >
                220: This back also has the capability of shooting with 220 film. Technically, the insert’s backplate is meant to be changed to a specially-sized 220 plate, but in practice, this will still work with the standard 120 plate (theoretically your film could be up to 0.1mm out of spec in terms of flatness).
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Disadvantages of the Techno Rollex back include (besides price) more weight than the Horseman, a bit more bulk than the Horseman, a slightly more complex three-part structure rather than the simpler two-part structure of the Horseman and the Da Yi backs, and the Linhof oddity of the film takeup spool being on the left instead of on the right (and the corresponding advance lever, which is operated from right to left)." 
                accessibilityRole="text"
            >
                Disadvantages of the Techno Rollex back include (besides price) more weight than the Horseman, a bit more bulk than the Horseman, a slightly more complex three-part structure rather than the simpler two-part structure of the Horseman and the Da Yi backs, and the Linhof oddity of the film takeup spool being on the left instead of on the right (and the corresponding advance lever, which is operated from right to left).
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Required Modification: The Techno Rollex includes one small part that is designed to mate specifically with Linhof Technica cameras, which must be removed to work with some other Graflok cameras, including the Stereo 12. This only takes a moment, is non-destructive, and doesn’t affect the function of the back. The small ridge near the base of the darkslide, held to the back via two small screws, must be removed:" 
                accessibilityRole="text"
            >
                Required Modification: The Techno Rollex includes one small part that is designed to mate specifically with Linhof Technica cameras, which must be removed to work with some other Graflok cameras, including the Stereo 12. This only takes a moment, is non-destructive, and doesn’t affect the function of the back. The small ridge near the base of the darkslide, held to the back via two small screws, must be removed:
            </Text>

        {/*Linhof PreMod Image*/}
            <Pressable onPress={() => setLinhofPreModVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/linhofPreMod.jpg')}
                />
            </Pressable>
            <Modal 
                visible={linhofPreModVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={linhofPreMod} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLinhofPreModVisible(false)}
                    onClick={() => setLinhofPreModVisible(false)}
                />
            </Modal>
            
        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Keep it in a safe place! With it gone, it will be slightly more difficult to see exactly where to insert the darkslide. This can be remedied with the following optional part:" 
                accessibilityRole="text"
            >
                Keep it in a safe place! With it gone, it will be slightly more difficult to see exactly where to insert the darkslide. This can be remedied with the following optional part:
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works has created a replacement part for the original Linhof part that, when installed (simply by replacing two screws) renders the back compatible with all Graflok 45 cameras, including the Mercury Universal and Mercury Stereo:" 
                accessibilityRole="text"
            >
                Mercury Works has created a replacement part for the original Linhof part that, when installed (simply by replacing two screws) renders the back compatible with all Graflok 45 cameras, including the Mercury Universal and Mercury Stereo:
            </Text>

        {/*Linhof PostMod Image*/}
            <Pressable onPress={() => setLinhofPostModVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/linhofPostMod.jpg')}
                />
            </Pressable>
            <Modal 
                visible={linhofPostModVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={linhofPostMod} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLinhofPostModVisible(false)}
                    onClick={() => setLinhofPostModVisible(false)}
                />
            </Modal>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="We’ll provide this kit to any owner of both the Stereo 12 and the Techno Rollex, for free with any order. Just ask us!" 
                accessibilityRole="text"
            >
                We’ll provide this kit to any owner of both the Stereo 12 and the Techno Rollex, for free with any order. Just ask us!
            </Text>
            

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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Da Yi back is a currently-manufactured item from China. It is solidly made and works well, but lacks some of the features of lever-action backs and has a few drawbacks. Instead of automatic frame spacing, this back has a window in the back, through which you must manually line up the numbers on the backing paper while turning the advance knob. This is significantly less convenient and elegant than the backs listed above." 
                accessibilityRole="text"
            >
                The Da Yi back is a currently-manufactured item from China. It is solidly made and works well, but lacks some of the features of lever-action backs and has a few drawbacks. Instead of automatic frame spacing, this back has a window in the back, through which you must manually line up the numbers on the backing paper while turning the advance knob. This is significantly less convenient and elegant than the backs listed above.
            </Text>

        {/*Da Yi Back Image*/}
            <Pressable onPress={() => setDaYiBackVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/daYiBack.jpg')}
                />
            </Pressable>
            <Modal 
                visible={daYiBackVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={daYiBack} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDaYiBackVisible(false)}
                    onClick={() => setDaYiBackVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To work with the Stereo 12, you must remove this back’s extra screws that hold optional masks in place. This feature, to shoot smaller formats, is just a distraction. Removal of the mask-mounting screws does not expose any internal part of the back to light." 
                accessibilityRole="text"
            >
                To work with the Stereo 12, you must remove this back’s extra screws that hold optional masks in place. This feature, to shoot smaller formats, is just a distraction. Removal of the mask-mounting screws does not expose any internal part of the back to light.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Ignore the second backing paper window (or better yet, block it) and its superfluous information about smaller formats. When using this back, you must advance only to odd numbers on the backing paper: 1, 3, 5, 7, 9, and 11." 
                accessibilityRole="text"
            >
                Ignore the second backing paper window (or better yet, block it) and its superfluous information about smaller formats. When using this back, you must advance only to odd numbers on the backing paper: 1, 3, 5, 7, 9, and 11.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In its stock configuration this back produces a usable image size of 56mm x 114mm." 
                accessibilityRole="text"
            >
                In its stock configuration this back produces a usable image size of 56mm x 114mm.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Modifying the Da Yi Back" 
                accessibilityRole="text"
            >
                Modifying the Da Yi Back 
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works has designed a modification of this back to enlarge its image aperture. This requires completely disassembling the back, machining multiple metal parts, machining a new, longer darkslide, and precisely gluing and sanding multiple plastic parts. The result is a usable image area of 56mm x 120mm." 
                accessibilityRole="text"
            >
                Mercury Works has designed a modification of this back to enlarge its image aperture. This requires completely disassembling the back, machining multiple metal parts, machining a new, longer darkslide, and precisely gluing and sanding multiple plastic parts. The result is a usable image area of 56mm x 120mm.
            </Text>

        {/*Da Yi Mod 1 Image*/}
            <Pressable onPress={() => setDaYiMod1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/daYiMod1.jpg')}
                />
            </Pressable>
            <Modal 
                visible={daYiMod1Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={daYiMod1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDaYiMod1Visible(false)}
                    onClick={() => setDaYiMod1Visible(false)}
                />
            </Modal>

        {/*Paragraph 6*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='Our separate guide to this modification is available at' accessibilityRole='text'>
                    Our separate guide to this modification is available at
                </Text>
                <OpenURLLink url={mercuryStereoURL}>www.merucrystereo.com</OpenURLLink>
            </View>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works also offers, on a limited basis, a modification service to perform this modification on your back. Our version of the modification includes the installation of a film box clip to the back that also covers the unused advance window and text." 
                accessibilityRole="text"
            >
                Mercury Works also offers, on a limited basis, a modification service to perform this modification on your back. Our version of the modification includes the installation of a film box clip to the back that also covers the unused advance window and text.
            </Text>

        {/*Da Yi Mod 2 Image*/}
            <Pressable onPress={() => setDaYiMod2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/daYiMod2.jpg')}
                />
            </Pressable>
            <Modal 
                visible={daYiMod2Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={daYiMod2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDaYiMod2Visible(false)}
                    onClick={() => setDaYiMod2Visible(false)}
                />
            </Modal>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Challenges and Potential Problems with the Da Yi Back" 
                accessibilityRole="text"
            >
                Challenges and Potential Problems with the Da Yi Back
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Straight from the factory, this back can sometimes pinch thicker 120 film, leading to scratches or failure. Our modification guide describes a fix for this that can be performed while the back is disassembled." 
                accessibilityRole="text"
            >
                Straight from the factory, this back can sometimes pinch thicker 120 film, leading to scratches or failure. Our modification guide describes a fix for this that can be performed while the back is disassembled.
            </Text>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This back can also suffer from light leaks. If you find that this is the case, adding black cloth gaffer’s tape around the outside will fix the problem. Also, like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot." 
                accessibilityRole="text"
            >
                This back can also suffer from light leaks. If you find that this is the case, adding black cloth gaffer’s tape around the outside will fix the problem. Also, like every removable back with a darkslide, particularly bright sunlight from the right angle can penetrate the light trap when the darkslide is removed, and even glint off the darkslide when it is pulled open but not fully removed. In those conditions, we recommend that you use a thin strip of black cloth gaffer’s tape to tape up the darkslide slot.
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Loading and unloading this back can be a bit difficult because 120 spools fit very tightly. When unloading spools, we recommend that you use a thin, mini flathead screwdriver to pull or pry the spools out of the back. This problem is exacerbated when using Kodak, Ilford, and similar 120 film spools. Fuji’s film spools are rounded on the ends and are significantly easier to insert and remove from this back." 
                accessibilityRole="text"
            >
                Loading and unloading this back can be a bit difficult because 120 spools fit very tightly. When unloading spools, we recommend that you use a thin, mini flathead screwdriver to pull or pry the spools out of the back. This problem is exacerbated when using Kodak, Ilford, and similar 120 film spools. Fuji’s film spools are rounded on the ends and are significantly easier to insert and remove from this back.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Standard 4x5 sheet film holders are not Graflok 45 compatible: they don't have the proper ridges to lock onto Graflok sliders. They do, however, perfectly slot into the Mercury Stereo 12. Instead of using the sliders to lock the sheet film holder in place, you will need to string two rubber bands over the back of the camera to hold it tightly in place. We provide high-quality black synthetic bands for this purpose, but you could use standard (ugly) rubber bands as well. This takes only a second." 
                accessibilityRole="text"
            >
                Standard 4x5 sheet film holders are not Graflok 45 compatible: they don't have the proper ridges to lock onto Graflok sliders. They do, however, perfectly slot into the Mercury Stereo 12. Instead of using the sliders to lock the sheet film holder in place, you will need to string two rubber bands over the back of the camera to hold it tightly in place. We provide high-quality black synthetic bands for this purpose, but you could use standard (ugly) rubber bands as well. This takes only a second.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The bands connect from the groove in the front of the top left and top right cold shoes to the small black screws that protrude from the bottom of the camera on the left and right. Hold the Graflok sliders open while you string the bands, so they don't get pulled closed. After the first time you do it, you'll discover the best place to “route” them with respect to the sliders." 
                accessibilityRole="text"
            >
                The bands connect from the groove in the front of the top left and top right cold shoes to the small black screws that protrude from the bottom of the camera on the left and right. Hold the Graflok sliders open while you string the bands, so they don't get pulled closed. After the first time you do it, you'll discover the best place to “route” them with respect to the sliders.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once the bands are in place, just slide the sheet film holder into place under them. It will make a firm connection with the camera. Just pull the darkslide and expose as you would roll film. (You will notice that sheet film darkslides have a black and a white or silver side to their handles. This is so you can indicate to yourself whether the sheet on that side of the holder is unexposed or exposed. Choose a color to indicate exposed [probably white] and stick with it!)" 
                accessibilityRole="text"
            >
                Once the bands are in place, just slide the sheet film holder into place under them. It will make a firm connection with the camera. Just pull the darkslide and expose as you would roll film. (You will notice that sheet film darkslides have a black and a white or silver side to their handles. This is so you can indicate to yourself whether the sheet on that side of the holder is unexposed or exposed. Choose a color to indicate exposed [probably white] and stick with it!)
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Mercury Cut Film Holders:" 
                accessibilityRole="text"
            >
                Mercury Cut Film Holders:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works makes a modified version of combination wood/metal sheet film holders that have Graflok grooves cut into them. These can be mounted directly to the Stereo 12 (and Mercury Universal 4x5 cameras) like any other Graflok back, without the need for rubber bands. We make these in standard 4x5, in a special 65mm cut film version (see above), and in a 70mm cut film version." 
                accessibilityRole="text"
            >
                Mercury Works makes a modified version of combination wood/metal sheet film holders that have Graflok grooves cut into them. These can be mounted directly to the Stereo 12 (and Mercury Universal 4x5 cameras) like any other Graflok back, without the need for rubber bands. We make these in standard 4x5, in a special 65mm cut film version (see above), and in a 70mm cut film version.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Mercury Stereo 12 is also compatible with the remarkable Grafmatic back created by Graflex. It holds 6 sheets of 4x5 film, 65mm film, or 70mm film, and is a Graflok 45 back, so can mount without bands. It takes a bit of knowledge to know how to load it (watch our video), but using it is extremely easy and fairly miraculous: You can change from one sheet or strip to another without removing the back (unlike standard sheet film holders), with just a quick lever action (faster than advancing a 6x12 roll film back)." 
                accessibilityRole="text"
            >
                The Mercury Stereo 12 is also compatible with the remarkable Grafmatic back created by Graflex. It holds 6 sheets of 4x5 film, 65mm film, or 70mm film, and is a Graflok 45 back, so can mount without bands. It takes a bit of knowledge to know how to load it (watch our video), but using it is extremely easy and fairly miraculous: You can change from one sheet or strip to another without removing the back (unlike standard sheet film holders), with just a quick lever action (faster than advancing a 6x12 roll film back).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The main limitation of this back is that by default it includes a metal frame number mask wheel that eats into the usable image area on one side. This wheel needs to be removed for proper Stereo 12 use." 
                accessibilityRole="text"
            >
                The main limitation of this back is that by default it includes a metal frame number mask wheel that eats into the usable image area on one side. This wheel needs to be removed for proper Stereo 12 use.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works makes a modified version of the Grafmatic that removes the wheel and also adapts its septums for any combination of 65mm, 70mm, or 4x5." 
                accessibilityRole="text"
            >
                Mercury Works makes a modified version of the Grafmatic that removes the wheel and also adapts its septums for any combination of 65mm, 70mm, or 4x5.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This back has the same capacity as a 6x12 120 back, but holds the film much flatter (no rollfilm curl), is much lighter, is significantly less bulky, costs about 1/3 as much, accepts more film formats, and is faster to advance frames. Its chief disadvantage is that it must be loaded and unloaded in darkness." 
                accessibilityRole="text"
            >
                This back has the same capacity as a 6x12 120 back, but holds the film much flatter (no rollfilm curl), is much lighter, is significantly less bulky, costs about 1/3 as much, accepts more film formats, and is faster to advance frames. Its chief disadvantage is that it must be loaded and unloaded in darkness.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Loading" 
                accessibilityRole="text"
            >
                Loading
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To load the Grafmatic, advance it until you reach “X”. Then turn the frame counter to read “1”. Turn the back onto its back (label side down) and open the advancing mechanism by holding the silver lever against the handle and pulling it all the way out. Now push the darkslide slightly inward. It will disengage, allowing you to pull it all the way out. The six septums will pop up so that their back ends are raised above the surface of the Grafmatic." 
                accessibilityRole="text"
            >
                To load the Grafmatic, advance it until you reach “X”. Then turn the frame counter to read “1”. Turn the back onto its back (label side down) and open the advancing mechanism by holding the silver lever against the handle and pulling it all the way out. Now push the darkslide slightly inward. It will disengage, allowing you to pull it all the way out. The six septums will pop up so that their back ends are raised above the surface of the Grafmatic.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now simply remove the septums. In the dark, load them with film. The standard, unmodified septum accepts 4x5 film just like a sheet film holder. Our modified septums accept a cut strip of 65mm film. Cut these to length and add the corner notch (to identify the emulsion side if you need to later) using our Cut Film Guide. Then just insert the strip, emulsion side up, into place. Our 70mm septums contain an extra notch at the bottom corner of the septum so that you can identify the difference between 65mm and 70mm septums in the dark, when you are using both." 
                accessibilityRole="text"
            >
                Now simply remove the septums. In the dark, load them with film. The standard, unmodified septum accepts 4x5 film just like a sheet film holder. Our modified septums accept a cut strip of 65mm film. Cut these to length and add the corner notch (to identify the emulsion side if you need to later) using our Cut Film Guide. Then just insert the strip, emulsion side up, into place. Our 70mm septums contain an extra notch at the bottom corner of the septum so that you can identify the difference between 65mm and 70mm septums in the dark, when you are using both.
            </Text>

        {/*Septum Notch Image*/}
            <Pressable onPress={() => setSeptumNotchVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/septumNotch.png')}
                />
            </Pressable>
            <Modal 
                visible={septumNotchVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={septumNotch} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSeptumNotchVisible(false)}
                    onClick={() => setSeptumNotchVisible(false)}
                />
            </Modal>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you’ve loaded all of the septums you wish (with any combination of 4x5, 65mm, and 70mm), stack them together to that they are ready to insert into the Grafmatic: the large hole in each should be in the upper left corner." 
                accessibilityRole="text"
            >
                Once you’ve loaded all of the septums you wish (with any combination of 4x5, 65mm, and 70mm), stack them together to that they are ready to insert into the Grafmatic: the large hole in each should be in the upper left corner.
            </Text>

        {/*Septum Loading Image*/}
            <Pressable onPress={() => setSeptumLoadingVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/septumLoading.png')}
                />
            </Pressable>
            <Modal 
                visible={septumLoadingVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={septumLoading} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSeptumLoadingVisible(false)}
                    onClick={() => setSeptumLoadingVisible(false)}
                />
            </Modal>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Arrange the septums in whatever order you prefer, with “Frame 1” on top of the stack, “Frame 2” next, and the final frame at the bottom." 
                accessibilityRole="text"
            >
                Arrange the septums in whatever order you prefer, with “Frame 1” on top of the stack, “Frame 2” next, and the final frame at the bottom.
            </Text>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you are loading fewer than 6 septums, load empty septums in the stack so that the total number is always six! While a back can sometimes operate with fewer than six septums, it can cause an uneven film plane, improper film plane distance, and jams." 
                accessibilityRole="text"
            >
                If you are loading fewer than 6 septums, load empty septums in the stack so that the total number is always six! While a back can sometimes operate with fewer than six septums, it can cause an uneven film plane, improper film plane distance, and jams.
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Slide your complete stack back into the Grafmatic, hole-side first. Once they have slid all the way in, gently push them down against the spring and then slide the darkslide closed over them, holding them down in place." 
                accessibilityRole="text"
            >
                Slide your complete stack back into the Grafmatic, hole-side first. Once they have slid all the way in, gently push them down against the spring and then slide the darkslide closed over them, holding them down in place.
            </Text>

        {/*Septum Stack Image*/}
            <Pressable onPress={() => setSeptumStackVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/septumStack.jpg')}
                />
            </Pressable>
            <Modal 
                visible={septumStackVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={septumStack} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSeptumStackVisible(false)}
                    onClick={() => setSeptumStackVisible(false)}
                />
            </Modal>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Close the darkslide completely, and then the full advance mechanism, until everything snaps back into its original size." 
                accessibilityRole="text"
            >
                Close the darkslide completely, and then the full advance mechanism, until everything snaps back into its original size.
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Back in the light, write out what you’ve loaded in each of the six positions on the white memo area of the back (it is large so you can specify each of the six shots, if they are different sizes, films, ISO ratings, etc.)." 
                accessibilityRole="text"
            >
                Back in the light, write out what you’ve loaded in each of the six positions on the white memo area of the back (it is large so you can specify each of the six shots, if they are different sizes, films, ISO ratings, etc.).
            </Text>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Notes for Shooting" 
                accessibilityRole="text"
            >
                Notes for Shooting
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="1. To shoot the current numbered frame, pull the darkslide fully out and then insert it completely again. This doesn’t operate like a normal darkslide. It must be in before you expose your shot, or your film plane will be incorrect and light can leak into the corners of other sheets." 
                accessibilityRole="text"
            >
                1. To shoot the current numbered frame, pull the darkslide fully out and then insert it completely again. This doesn’t operate like a normal darkslide. It must be in before you expose your shot, or your film plane will be incorrect and light can leak into the corners of other sheets.
            </Text>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="2. When you perform this procedure (darkslide out and then in again), a red dot will appear on the lower right corner of the back. This indicates that film is uncovered—do not remove the back from the camera, remove lenses, etc. while a red dot is showing!" 
                accessibilityRole="text"
            >
                2. When you perform this procedure (darkslide out and then in again), a red dot will appear on the lower right corner of the back. This indicates that film is uncovered—do not remove the back from the camera, remove lenses, etc. while a red dot is showing!
            </Text>

        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The one exception is shot #1. When you first load the back, a red dot will show, even though your darkslide is blocking the film and you can safely transport and remove your back. The red dot will remain when you actually work the darkslide, and you must do so in order to expose frame 1." 
                accessibilityRole="text"
            >
                The one exception is shot #1. When you first load the back, a red dot will show, even though your darkslide is blocking the film and you can safely transport and remove your back. The red dot will remain when you actually work the darkslide, and you must do so in order to expose frame 1.
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="3. Once your film is uncovered (red dot showing), you cannot cover it again without advancing to the next frame. It’s okay to do this, leaving your shot unexposed. Just note it on the memo area of the back. You can always cycle back to that shot later." 
                accessibilityRole="text"
            >
                3. Once your film is uncovered (red dot showing), you cannot cover it again without advancing to the next frame. It’s okay to do this, leaving your shot unexposed. Just note it on the memo area of the back. You can always cycle back to that shot later.
            </Text>

        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="4. Once you’ve exposed a frame, advance to the next by holding the silver “thumb lever” tightly against the darkslide handle and pull the mechanism out of the back all the way. Then push it back until it is fully closed. Your frame counter will advance to the next number and your next sheet of film will be advanced to the front. Remember that in order to expose it you must work the darkslide (exposing the red dot)." 
                accessibilityRole="text"
            >
                4. Once you’ve exposed a frame, advance to the next by holding the silver “thumb lever” tightly against the darkslide handle and pull the mechanism out of the back all the way. Then push it back until it is fully closed. Your frame counter will advance to the next number and your next sheet of film will be advanced to the front. Remember that in order to expose it you must work the darkslide (exposing the red dot).
            </Text>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="5. When you advance past frame 6, your frame counter will read “X”. At this point the back will not advance any further until you manually turn the frame counter one more notch, to “1”. From there you can continue to advance again." 
                accessibilityRole="text"
            >
                5. When you advance past frame 6, your frame counter will read “X”. At this point the back will not advance any further until you manually turn the frame counter one more notch, to “1”. From there you can continue to advance again.
            </Text>

        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="6. It’s okay to skip some frames and later cycle back to them to expose them." 
                accessibilityRole="text"
            >
                6. It’s okay to skip some frames and later cycle back to them to expose them.
            </Text>

        {/*Paragraph 20*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="We recommend that if you load film that requires different processing (different ISOs, different film stocks), that you make them different formats, so you can easily tell the difference in the dark. For instance, load some 65mm color strips, and 70mm BW strips. You can mix and match, and yet will be able to separate out the two formats in the dark, for separate processing." 
                accessibilityRole="text"
            >
                We recommend that if you load film that requires different processing (different ISOs, different film stocks), that you make them different formats, so you can easily tell the difference in the dark. For instance, load some 65mm color strips, and 70mm BW strips. You can mix and match, and yet will be able to separate out the two formats in the dark, for separate processing.
            </Text>

            
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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Stereo 12 is compatible with both dry plate and wet plate processes!" 
                accessibilityRole="text"
            >
                The Stereo 12 is compatible with both dry plate and wet plate processes!
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Various vintage and new dry plate and wet plate holders are sold on Ebay and Etsy. As long as they are compatible with Graflok 4x5 mount cameras, they will work on the Stereo 12." 
                accessibilityRole="text"
            >
                Various vintage and new dry plate and wet plate holders are sold on Ebay and Etsy. As long as they are compatible with Graflok 4x5 mount cameras, they will work on the Stereo 12.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Dry plate backs usually have two sides, like sheet film holders. Use this for pre-prepared dry plate glass negatives and tintype positives." 
                accessibilityRole="text"
            >
                Dry plate backs usually have two sides, like sheet film holders. Use this for pre-prepared dry plate glass negatives and tintype positives.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Wet plate backs hold only one wet plate at a time. When using wet plate with the Stereo 12, be sure to clean all traces of any chemicals that spill into or touch the Stereo 12 body soon after use, as collodion will damage the camera over time." 
                accessibilityRole="text"
            >
                Wet plate backs hold only one wet plate at a time. When using wet plate with the Stereo 12, be sure to clean all traces of any chemicals that spill into or touch the Stereo 12 body soon after use, as collodion will damage the camera over time.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The days of 4x5 instant film have largely passed, but the Stereo 12 is compatible with a couple of instant film backs:" 
                accessibilityRole="text"
            >
                The days of 4x5 instant film have largely passed, but the Stereo 12 is compatible with a couple of instant film backs:
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Polaroid 545i: This back takes PN instant film. It is available used. The New55 project manufactured new BW and color versions of this film for some time, but is currently not. We’ll see what the future holds." 
                accessibilityRole="text"
            >
                Polaroid 545i: This back takes PN instant film. It is available used. The New55 project manufactured new BW and color versions of this film for some time, but is currently not. We’ll see what the future holds.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Polaroid 550 or Fuji PA-45: These backs take Fuji’s famous FP-100C45 peel-apart film, now discontinued. It is still available, for a premium price, used. While a new version of Type 100 film is being made as One Instant, the larger 4x5 size required by the Stereo 12 has not yet been re-engineered." 
                accessibilityRole="text"
            >
                Polaroid 550 or Fuji PA-45: These backs take Fuji’s famous FP-100C45 peel-apart film, now discontinued. It is still available, for a premium price, used. While a new version of Type 100 film is being made as One Instant, the larger 4x5 size required by the Stereo 12 has not yet been re-engineered.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Required when shooting without ground glass. The camera can accept any accessory viewfinder with a cold shoe foot. The viewfinder must match the focal length of your lenses. The Mercury 5S viewfinder was specially developed for this camera. It is a simple, non-optical (it doesn't contain a lens) and has interchangeable front plates for 75/80mm, 90mm, or 100/105mm lenses." 
                accessibilityRole="text"
            >
                Required when shooting without ground glass. The camera can accept any accessory viewfinder with a cold shoe foot. The viewfinder must match the focal length of your lenses. The Mercury 5S viewfinder was specially developed for this camera. It is a simple, non-optical (it doesn't contain a lens) and has interchangeable front plates for 75/80mm, 90mm, or 100/105mm lenses.
            </Text>

        {/*Viewfinder 1 Image*/}
            <Pressable onPress={() => setViewfinder1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/viewfinder1.jpg')}
                />
            </Pressable>
            <Modal 
                visible={viewfinder1Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={viewfinder1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setViewfinder1Visible(false)}
                    onClick={() => setViewfinder1Visible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For 65mm lenses, Mercury makes an inexpensive optical viewfinder and a Deluxe optical viewfinder. The Deluxe version contains a brightline frame for 65mm and a larger view area for 55mm (but can also be used with 47mm lenses, though you’ll have to keep in mind that a bit more will be captured than you will see through the viewfinder)." 
                accessibilityRole="text"
            >
                For 65mm lenses, Mercury makes an inexpensive optical viewfinder and a Deluxe optical viewfinder. The Deluxe version contains a brightline frame for 65mm and a larger view area for 55mm (but can also be used with 47mm lenses, though you’ll have to keep in mind that a bit more will be captured than you will see through the viewfinder).
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can use any cold shoe accessory viewfinder with your camera, so you can shop vintage or 3rd party options if you like. Just note the 35mm equivalent FOV of your lens (given in the Full Lens Info document) and search for a viewfinder of that focal length." 
                accessibilityRole="text"
            >
                You can use any cold shoe accessory viewfinder with your camera, so you can shop vintage or 3rd party options if you like. Just note the 35mm equivalent FOV of your lens (given in the Full Lens Info document) and search for a viewfinder of that focal length.
            </Text>

        {/*Viewfinder 2 Image*/}
            <Pressable onPress={() => setViewfinder2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/viewfinder2.jpg')}
                />
            </Pressable>
            <Modal 
                visible={viewfinder2Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={viewfinder2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setViewfinder2Visible(false)}
                    onClick={() => setViewfinder2Visible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note that when using the Mercury 65/55mm viewfinder or 3rd party viewfinders, they will be formatted for a slightly rectangular frame, when the proper frame for the Stereo 12 should be square. Use the viewfinder's edges as a rough average and keep in mind that the frame will be slightly taller and slightly less wide than you see. Or, in other words, your actual frame size is an average of your vertical view and your horizontal view. In practice, this is not difficult to judge." 
                accessibilityRole="text"
            >
                Note that when using the Mercury 65/55mm viewfinder or 3rd party viewfinders, they will be formatted for a slightly rectangular frame, when the proper frame for the Stereo 12 should be square. Use the viewfinder's edges as a rough average and keep in mind that the frame will be slightly taller and slightly less wide than you see. Or, in other words, your actual frame size is an average of your vertical view and your horizontal view. In practice, this is not difficult to judge.
            </Text>

        {/*Viewfinder 3 Image*/}
            <Pressable onPress={() => setViewfinder3Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/viewfinder3.jpg')}
                />
            </Pressable>
            <Modal 
                visible={viewfinder3Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={viewfinder3} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setViewfinder3Visible(false)}
                    onClick={() => setViewfinder3Visible(false)}
                />
            </Modal>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="One of the best viewfinders ever made, especially for medium format lenses, is the Mamiya Press 65mm viewfinder that was bundled with the M-Press 65mm lens. Unfortunately, this is difficult to find independently, is larger and heavier, and will be significantly more expensive than Mercury options. The viewfinder has three chief advantages: it is very large and comfortable to use, it includes parallax correction for close-up subjects, and it can be easily masked to a 6x6 frame by adding opaque window film, cardboard, or gaffer’s tape strips on the right and left sides of the front glass of the finder. Just mask down to the existing indicators. Note that thusly configured, this finder will crop a bit tighter than your actual image. The finder also isn’t usable for any other focal lengths, as it contains no brightlines or excess image area like the Mercury Deluxe 65/55mm finder. Finally, the Mamiya 65mm finder has a non-standard cold shoe foot that will need to be filed/cut down or replaced before it will mount on non-Press cameras. Mercury Works makes a replacement foot for this finder. To replace the stock foot, just remove the two flathead screws on the original, lift away the foot, replace it with the Mercury version, and attach it using the original two screws." 
                accessibilityRole="text"
            >
                One of the best viewfinders ever made, especially for medium format lenses, is the Mamiya Press 65mm viewfinder that was bundled with the M-Press 65mm lens. Unfortunately, this is difficult to find independently, is larger and heavier, and will be significantly more expensive than Mercury options. The viewfinder has three chief advantages: it is very large and comfortable to use, it includes parallax correction for close-up subjects, and it can be easily masked to a 6x6 frame by adding opaque window film, cardboard, or gaffer’s tape strips on the right and left sides of the front glass of the finder. Just mask down to the existing indicators. Note that thusly configured, this finder will crop a bit tighter than your actual image. The finder also isn’t usable for any other focal lengths, as it contains no brightlines or excess image area like the Mercury Deluxe 65/55mm finder. Finally, the Mamiya 65mm finder has a non-standard cold shoe foot that will need to be filed/cut down or replaced before it will mount on non-Press cameras. Mercury Works makes a replacement foot for this finder. To replace the stock foot, just remove the two flathead screws on the original, lift away the foot, replace it with the Mercury version, and attach it using the original two screws.
            </Text>

        {/*Viewfinder 4 Image*/}
            <Pressable onPress={() => setViewfinder4Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/viewfinder4.jpg')}
                />
            </Pressable>
            <Modal 
                visible={viewfinder4Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={viewfinder4} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setViewfinder4Visible(false)}
                    onClick={() => setViewfinder4Visible(false)}
                />
            </Modal>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Final Note: Only the black version of the Mamiya 65mm viewfinder is suitable for Mercury Stereo use. The older gray/beige version is offset instead of centered, and will not produce an accurate image." 
                accessibilityRole="text"
            >
                Final Note: Only the black version of the Mamiya 65mm viewfinder is suitable for Mercury Stereo use. The older gray/beige version is offset instead of centered, and will not produce an accurate image.
            </Text>


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

        {/*Camera Strap Image*/}
            <Pressable onPress={() => setCameraStrapVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cameraStrap.jpg')}
                />
            </Pressable>
            <Modal 
                visible={cameraStrapVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cameraStrap} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setCameraStrapVisible(false)}
                    onClick={() => setCameraStrapVisible(false)}
                />
            </Modal>

        {/*Paragraph 1*/}
            <View>
                <Text style={guideStyle.textBody} accessible={true} accessibilityLabel='This camera is designed to accept camera straps with quick release connectors. These have thin but strong cords that you push through the curved holes in the top of the camera as shown, then feed the plastic connector through the loop you’ve made and pull tight. Many types are available via online marketplaces. Here’s' accessibilityRole='text'>
                    This camera is designed to accept camera straps with quick release connectors. These have thin but strong cords that you push through the curved holes in the top of the camera as shown, then feed the plastic connector through the loop you’ve made and pull tight. Many types are available via online marketplaces. Here’s
                </Text>
                <OpenURLLink url={recommendedStrapURL}>one recommended strap.</OpenURLLink>
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

        {/*Spanner Wrench Image*/}
            <Pressable onPress={() => setSpannerWrenchVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/spannerWrench.jpg')}
                />
            </Pressable>
            <Modal 
                visible={spannerWrenchVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={spannerWrench} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSpannerWrenchVisible(false)}
                    onClick={() => setSpannerWrenchVisible(false)}
                />
            </Modal>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This versatile and inexpensive tool is used to setup your lensboard for the first time." 
                accessibilityRole="text"
            >
                This versatile and inexpensive tool is used to setup your lensboard for the first time.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If the lenses you chose to use with your camera don't have individual lens caps (true for Mamiya TLR lenses in particular), you'll need to order some generic lens caps for them. 65mm TLR lenses use 48mm caps, while all other Mamiya TLR lenses use 46mm caps. Consult the Full Lens Info document for filter size (and thus lens cap size) for all tested lenses." 
                accessibilityRole="text"
            >
                If the lenses you chose to use with your camera don't have individual lens caps (true for Mamiya TLR lenses in particular), you'll need to order some generic lens caps for them. 65mm TLR lenses use 48mm caps, while all other Mamiya TLR lenses use 46mm caps. Consult the Full Lens Info document for filter size (and thus lens cap size) for all tested lenses.
            </Text>


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


        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you plan to shoot handheld for any length of time, we highly recommend a removeable side handle. This greatly improves the ergonomics of the Stereo 12, which has been engineered to accept some handles that conform to the Smallrig standard. Some handles have too short of mounting screws and can be modified. Some interfere slightly with the side cold shoe can can also be modified. Here are two that work without modification and are highly recommended:" 
                accessibilityRole="text"
            >
                If you plan to shoot handheld for any length of time, we highly recommend a removeable side handle. This greatly improves the ergonomics of the Stereo 12, which has been engineered to accept some handles that conform to the Smallrig standard. Some handles have too short of mounting screws and can be modified. Some interfere slightly with the side cold shoe can can also be modified. Here are two that work without modification and are highly recommended:
            </Text>

        {/*Bullet 1*/}
            <View>
                <Text style={guideStyle.textBullet} accessible={true} accessibilityLabel='* Highest quality, larger size, faster mounting/unmounting screws:' accessibilityRole='text'>
                    * Highest quality, larger size, faster mounting/unmounting screws:
                </Text>
                <OpenURLLink url={smallrigUniversalURL}>SmallRig Universal Aluminum Side Handle Grip, HSS2425</OpenURLLink>
            </View>

        {/*Bullet 2*/}
            <View>
                <Text style={guideStyle.textBullet} accessible={true} accessibilityLabel='* Best Value, smaller size, great for travel:' accessibilityRole='text'>
                    * Best Value, smaller size, great for travel:
                </Text>
                <OpenURLLink url={neewerAluminumURL}>Neewer Aluminum Side Handle Grip, VS105</OpenURLLink>
            </View>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Perhaps the fanciest side handle is a “Nato Quick Release” version of the Smallrig Universal handle mentioned above. It is a bit larger, bulkier, and heavier than the standard options (especially the Neewer), but it is a great option for photographers who want to frequently pop on and pop off a side handle. To make use of this handle, however, you’ll need three items:" 
                accessibilityRole="text"
            >
                Perhaps the fanciest side handle is a “Nato Quick Release” version of the Smallrig Universal handle mentioned above. It is a bit larger, bulkier, and heavier than the standard options (especially the Neewer), but it is a great option for photographers who want to frequently pop on and pop off a side handle. To make use of this handle, however, you’ll need three items:
            </Text>

        {/*Side Handle Image*/}
            <Pressable onPress={() => setSideHandleVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/sideHandle.jpg')}
                />
            </Pressable>
            <Modal 
                visible={sideHandleVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={sideHandle} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSideHandleVisible(false)}
                    onClick={() => setSideHandleVisible(false)}
                />
            </Modal>

        {/*Bullet 1*/}
            <View>
                <Text style={guideStyle.textBullet} accessible={true} accessibilityLabel='* SmallRig' accessibilityRole='text'>
                    * SmallRig
                </Text>
                <OpenURLLink url={smallrigSnapOnURL}>Snap-On NATO Side Handle, 1/4”-20 Thread Hole- 4017</OpenURLLink>
            </View>

        {/*Bullet 2*/}
            <View>
                <Text style={guideStyle.textBullet} accessible={true} accessibilityLabel='* SmallRig' accessibilityRole='text'>
                    * SmallRig
                </Text>
                <OpenURLLink url={smallrigMiniURL}>Mini NATO Rail, Anti-Off Quick Release NATO Rail, Thickness 6mm, Length 48mm for NATO Handle, Camera Cage – 2172</OpenURLLink>
            </View>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Mercury Stereo 12 NATO adapter kit. This consists of a thin spacer that goes under your Mini NATO Rail and a replacement side cold shoe that conforms to the rail. If ordered at the same time as your camera, Mercury Works will install this for you. Otherwise, you will need a Torx #6 driver to remove the side cold shoe’s screws. Use the same screws on the new cold shoe." 
                accessibilityRole="text"
            >
                * Mercury Stereo 12 NATO adapter kit. This consists of a thin spacer that goes under your Mini NATO Rail and a replacement side cold shoe that conforms to the rail. If ordered at the same time as your camera, Mercury Works will install this for you. Otherwise, you will need a Torx #6 driver to remove the side cold shoe’s screws. Use the same screws on the new cold shoe.
            </Text>

        {/*Adapter Kit 1 Image*/}
            <Pressable onPress={() => setAdapterKit1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/adapterKit1.jpg')}
                />
            </Pressable>
            <Modal 
                visible={adapterKit1Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={adapterKit1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setAdapterKit1Visible(false)}
                    onClick={() => setAdapterKit1Visible(false)}
                />
            </Modal>

        {/*Adapter Kit 2 Image*/}
            <Pressable onPress={() => setAdapterKit2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/adapterKit2.jpg')}
                />
            </Pressable>
            <Modal 
                visible={adapterKit2Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={adapterKit2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setAdapterKit2Visible(false)}
                    onClick={() => setAdapterKit2Visible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For calibration/checking of your lenses and for shooting on a tripod, a ground glass is essential for precision stereoscopic work. Mercury Works offers three versions for this camera: the Basic back, which provides ground glass viewing but can’t mount any accessories, the Deluxe back (which can accept a range of mountable accessories via adjustable mounting rails, and also includes a light-blocking ridge on the camera side to block light and help lock it more firmly in place on your camera), and the Deluxe Ultrabright back (which functions like the Deluxe but makes use of a high-end optical plastic with etched grid and integrated fresnel lens to increase its brightness from the standard ground glass). Accessories for the Deluxe versions include a protective cap, a hood, and a magnifying viewer." 
                accessibilityRole="text"
            >
                For calibration/checking of your lenses and for shooting on a tripod, a ground glass is essential for precision stereoscopic work. Mercury Works offers three versions for this camera: the Basic back, which provides ground glass viewing but can’t mount any accessories, the Deluxe back (which can accept a range of mountable accessories via adjustable mounting rails, and also includes a light-blocking ridge on the camera side to block light and help lock it more firmly in place on your camera), and the Deluxe Ultrabright back (which functions like the Deluxe but makes use of a high-end optical plastic with etched grid and integrated fresnel lens to increase its brightness from the standard ground glass). Accessories for the Deluxe versions include a protective cap, a hood, and a magnifying viewer.
            </Text>

        {/*Sun-blocking Hood Image*/}
            <Pressable onPress={() => setSunHoodVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/sunHood.jpg')}
                />
            </Pressable>
            <Modal 
                visible={sunHoodVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={sunHood} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSunHoodVisible(false)}
                    onClick={() => setSunHoodVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Accessories for the Deluxe ground glass backs include a sun-blocking hood (pictured above), a protective cap for use during transportation and storage, and a Sliding Magnifier that blocks sun from your image, can shift to either the left or right images, and magnifies your image to enable detailed inspection of focus." 
                accessibilityRole="text"
            >
                Accessories for the Deluxe ground glass backs include a sun-blocking hood (pictured above), a protective cap for use during transportation and storage, and a Sliding Magnifier that blocks sun from your image, can shift to either the left or right images, and magnifies your image to enable detailed inspection of focus.
            </Text>

        {/*Magnifier Image*/}
            <Pressable onPress={() => setMagnifierVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/magnifier.jpg')}
                />
            </Pressable>
            <Modal 
                visible={magnifierVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={magnifier} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setMagnifierVisible(false)}
                    onClick={() => setMagnifierVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If your tripod doesn't already have an Arca Swiss style QR base, we highly recommend getting one. The Stereo 12 has a built in QR plate meant to mount to this type of base. This is the most secure method of mounting your camera. You can choose any generic base of the “Arca Swiss QR” type. These can be found in many online marketplaces." 
                accessibilityRole="text"
            >
                If your tripod doesn't already have an Arca Swiss style QR base, we highly recommend getting one. The Stereo 12 has a built in QR plate meant to mount to this type of base. This is the most secure method of mounting your camera. You can choose any generic base of the “Arca Swiss QR” type. These can be found in many online marketplaces.
            </Text>

        {/*QR Clamp Image*/}
            <Pressable onPress={() => setQrClampVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/qrClamp.jpg')}
                />
            </Pressable>
            <Modal 
                visible={qrClampVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={qrClamp} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setQrClampVisible(false)}
                    onClick={() => setQrClampVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can use an app (recommended: Light Meter Pro on iOS or Light Meter on Android) on your phone if you can't afford a light meter, but we always recommend a standalone photography light meter. The"
                accessibilityRole="text"
            >
                You can use an app (recommended: Light Meter Pro on iOS or Light Meter on Android) on your phone if you can't afford a light meter, but we always recommend a standalone photography light meter. The
            </Text>

            <View>
                <OpenURLLink url={sekonicFlashmateURL}>Sekonic Flashmate</OpenURLLink>
            </View>

            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="is the classic choice for a small, compact, excellent meter. They can often be found used. Larger, more professional Sekonic models are even better." 
                accessibilityRole="text"
            >
                is the classic choice for a small, compact, excellent meter. They can often be found used. Larger, more professional Sekonic models are even better.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If shooting on a tripod, you'll want a remote trigger. Any basic wired trigger with a 2.5mm connector (“compatible with Canon Rebel”) will work. Mercury Works makes a deluxe version specifically designed for this camera with a short cable and a cold shoe mount so it remains conveniently mounted on top of the camera until you are ready to shoot."
                accessibilityRole="text"
            >
                If shooting on a tripod, you'll want a remote trigger. Any basic wired trigger with a 2.5mm connector (“compatible with Canon Rebel”) will work. Mercury Works makes a deluxe version specifically designed for this camera with a short cable and a cold shoe mount so it remains conveniently mounted on top of the camera until you are ready to shoot.
            </Text>

        {/*Remote Trigger Image*/}
            <Pressable onPress={() => setRemoteTriggerVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/remoteTrigger.jpg')}
                />
            </Pressable>
            <Modal 
                visible={remoteTriggerVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={remoteTrigger} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setRemoteTriggerVisible(false)}
                    onClick={() => setRemoteTriggerVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Useful in general, you may wish to keep the Philips screwdriver from a"
                accessibilityRole="text"
            >
                Useful in general, you may wish to keep the Philips screwdriver from a
            </Text>

            <View>
                <OpenURLLink url={miniScrewdriverURL}>set like this</OpenURLLink>
            </View>

            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="in your camera bag at all times if you choose to use the included screws to secure the battery compartment plate. You may also need/want to adjust the tightness of the Graflok sliders that secure your removable backs." 
                accessibilityRole="text"
            >
                in your camera bag at all times if you choose to use the included screws to secure the battery compartment plate. You may also need/want to adjust the tightness of the Graflok sliders that secure your removable backs.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you plan to shoot with multiple lenses, we highly recommend that you standardize your lens filters by stepping all of your lenses up to the same filter size. We recommend 52mm. Most of our Recommended lenses are natively 52mm or smaller, and those that are larger (up to 58mm) are designed to cover large format and can be stepped down to 52mm without cropping/vignetting the image. 52mm is a very common and economic filter size. It is also the default recommended size for our Lens Shade system (see below)."
                accessibilityRole="text"
            >
                If you plan to shoot with multiple lenses, we highly recommend that you standardize your lens filters by stepping all of your lenses up to the same filter size. We recommend 52mm. Most of our Recommended lenses are natively 52mm or smaller, and those that are larger (up to 58mm) are designed to cover large format and can be stepped down to 52mm without cropping/vignetting the image. 52mm is a very common and economic filter size. It is also the default recommended size for our Lens Shade system (see below).
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Lens shades can be more important for stereo photography than mono because lens flares will disproportionately affect the two different views, producing a discordant visual effect for the viewer. The Mercury Stereo Lens Shade system can be used with all lenses in our Recommended list. See Advanced Options for an explanation of the system. While our Shade system offers more extensive shading than screw-on shades and provides full access to lens filters without the necessity of removing the shade (and doesn’t require a second size of lens caps), you can also use screw-on filters, at least for longer lenses."
                accessibilityRole="text"
            >
                Lens shades can be more important for stereo photography than mono because lens flares will disproportionately affect the two different views, producing a discordant visual effect for the viewer. The Mercury Stereo Lens Shade system can be used with all lenses in our Recommended list. See Advanced Options for an explanation of the system. While our Shade system offers more extensive shading than screw-on shades and provides full access to lens filters without the necessity of removing the shade (and doesn’t require a second size of lens caps), you can also use screw-on filters, at least for longer lenses.
            </Text>

        {/*Lens Shade Image*/}
            <Pressable onPress={() => setLensShadeVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/lensShade.jpg')}
                />
            </Pressable>
            <Modal 
                visible={lensShadeVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={lensShade} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLensShadeVisible(false)}
                    onClick={() => setLensShadeVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Use this to protect your lensboard during storage and travel. The Lensboard Shell can be be used on-camera or as a complete form of protection for a detached lensboard. It consists of a front shell that protects all of the sensitive electronics and connections on your lensboard, with cutouts for your lenses, so you can still access their lenscaps, etc. We make two models: one for all size 0 lensboards (left, below), and one for all size 00 lensboards (right, below). The 00 front shell is compatible with standard base and 57mm base lensboards."
                accessibilityRole="text"
            >
                Use this to protect your lensboard during storage and travel. The Lensboard Shell can be be used on-camera or as a complete form of protection for a detached lensboard. It consists of a front shell that protects all of the sensitive electronics and connections on your lensboard, with cutouts for your lenses, so you can still access their lenscaps, etc. We make two models: one for all size 0 lensboards (left, below), and one for all size 00 lensboards (right, below). The 00 front shell is compatible with standard base and 57mm base lensboards.
            </Text>

        {/*Lensboard Shells Image*/}
            <Pressable onPress={() => setLensboardShellsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/lensboardShells.jpg')}
                />
            </Pressable>
            <Modal 
                visible={lensboardShellsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={lensboardShells} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLensboardShellsVisible(false)}
                    onClick={() => setLensboardShellsVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When used on-camera to protect a lensboard that is currently mounted, you use only the front shell. You need two front bolts that are at least 25mm longer than the bolts you are currently using. In practical terms, if you are using gray bolts, you’ll likely need red. If you’re using black bolts, you’ll likely need dark blue. (For the list of all bolts, with their lengths and colors, see the “Full Lens Info” spreadsheet downloadable from "
                accessibilityRole="text"
            >
                When used on-camera to protect a lensboard that is currently mounted, you use only the front shell. You need two front bolts that are at least 25mm longer than the bolts you are currently using. In practical terms, if you are using gray bolts, you’ll likely need red. If you’re using black bolts, you’ll likely need dark blue. (For the list of all bolts, with their lengths and colors, see the “Full Lens Info” spreadsheet downloadable from 
            </Text>

            <View>
                <OpenURLLink url={mercuryStereoURL}>www.mercurystereo.com</OpenURLLink>
            </View>

            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="which contains a “Bolts” sheet devoted to this info." 
                accessibilityRole="text"
            >
                which contains a “Bolts” sheet devoted to this info.
            </Text>

        {/*Lensboard Shell With Bolts Image*/}
            <Pressable onPress={() => setShellWithBoltsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/shellWithBolts.jpg')}
                />
            </Pressable>
            <Modal 
                visible={shellWithBoltsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={shellWithBolts} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setShellWithBoltsVisible(false)}
                    onClick={() => setShellWithBoltsVisible(false)}
                />
            </Modal>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When used to protect a detached lensboard, the Front Shell is paired with a Rear Shell that fully encloses the back side of your lensboard, including lens elements. We make Rear Shells in a variety of different depths to accommodate different lenses. Each Rear Shell is imprinted with its depth (in millimeters) on the inside for reference. See the main info sheet in the “Full Lens Info” spreadsheet"
                accessibilityRole="text"
            >
                When used to protect a detached lensboard, the Front Shell is paired with a Rear Shell that fully encloses the back side of your lensboard, including lens elements. We make Rear Shells in a variety of different depths to accommodate different lenses. Each Rear Shell is imprinted with its depth (in millimeters) on the inside for reference. See the main info sheet in the “Full Lens Info” spreadsheet
            </Text>

            <View>
                <OpenURLLink url={mercuryStereoURL}>(downloadable from www.mercurystereo.com)</OpenURLLink>
            </View>

            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="for the minimum depth required for each lens. All of our Rear Shells are compatible with all of our Front Shells." 
                accessibilityRole="text"
            >
                for the minimum depth required for each lens. All of our Rear Shells are compatible with all of our Front Shells.
            </Text>


        {/*Rear Shell Image*/}
            <Pressable onPress={() => setRearShellVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/rearShell.jpg')}
                />
            </Pressable>
            <Modal 
                visible={rearShellVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={rearShell} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setRearShellVisible(false)}
                    onClick={() => setRearShellVisible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="A Rear Shell is screwed together with a Front Shell with at least two standard front bolts (in opposite corners). The Copal 0 Front Shell requires black bolts to couple with any Rear Shell. The Compur 00 Front Shell requires gray bolts to couple with any Rear Shell."
                accessibilityRole="text"
            >
                A Rear Shell is screwed together with a Front Shell with at least two standard front bolts (in opposite corners). The Copal 0 Front Shell requires black bolts to couple with any Rear Shell. The Compur 00 Front Shell requires gray bolts to couple with any Rear Shell.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textAside}
                accessible={true} 
                accessibilityLabel="Use of the Stereo 12 Shell system is very highly recommended for travel, backpacking, etc."
                accessibilityRole="text"
            >
                Use of the Stereo 12 Shell system is very highly recommended for travel, backpacking, etc.
            </Text>


    {/*Graflok 45 Rear Protective Cap*/}
            <View ref={graflokRearCapRef}>
                <Text 
                    style={guideStyle.textSubtitle3}
                    accessible={true} 
                    accessibilityLabel="Graflok 45 Rear Protective Cap" 
                    accessibilityRole="text"
                >
                    Graflok 45 Rear Protective Cap
                </Text>
            </View>

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This is a simple rear cover for your Stereo 12. It locks in place like any Graflok back, but is simply a protective cover. Use this when transporting or storing your camera without a back attached. It keeps the interior of your camera, as well as your lenses, protecting from dust, debris, and impacts. This cap contains a groove on the inside surface that you can optionally glue a ridge to if you want an even more secure fit: the ridge will lock into the right-side slot on on your camera. Note that this protective cap is compatible not just with the Stereo 12, but also with all large format cameras that accept Graflok 45 style backs. This includes the Mercury Stereo Pano body and the Mercury Universal 4x5.."
                accessibilityRole="text"
            >
                This is a simple rear cover for your Stereo 12. It locks in place like any Graflok back, but is simply a protective cover. Use this when transporting or storing your camera without a back attached. It keeps the interior of your camera, as well as your lenses, protecting from dust, debris, and impacts. This cap contains a groove on the inside surface that you can optionally glue a ridge to if you want an even more secure fit: the ridge will lock into the right-side slot on on your camera. Note that this protective cap is compatible not just with the Stereo 12, but also with all large format cameras that accept Graflok 45 style backs. This includes the Mercury Stereo Pano body and the Mercury Universal 4x5.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This mobile app performs all common calculations useful when shooting MF3D. Use it to select focus spacers and show all possible focal zones, depth of field, find hyperfocal settings, and calculate “legal” distance ranges (i.e., how close of an object can appear in your frame given how far away the farthest object is)."
                accessibilityRole="text"
            >
                This mobile app performs all common calculations useful when shooting MF3D. Use it to select focus spacers and show all possible focal zones, depth of field, find hyperfocal settings, and calculate “legal” distance ranges (i.e., how close of an object can appear in your frame given how far away the farthest object is).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can also use the app for hyperstereo and hypo (macro) stereo calculations: given how far away your in-frame subjects are, the app will calculate your stereo base (how far apart your lenses should be)."
                accessibilityRole="text"
            >
                You can also use the app for hyperstereo and hypo (macro) stereo calculations: given how far away your in-frame subjects are, the app will calculate your stereo base (how far apart your lenses should be).
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When shooting pinhole or other long exposures, the app will calculate reciprocity failure, or how long you need to actually expose your film stock for, given a particular metered exposure time."
                accessibilityRole="text"
            >
                When shooting pinhole or other long exposures, the app will calculate reciprocity failure, or how long you need to actually expose your film stock for, given a particular metered exposure time.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Finally, the app contains a fully local version of this User Guide that you can browse on a long flight, on the beach, deep in the jungle, or during office meetings."
                accessibilityRole="text"
            >
                Finally, the app contains a fully local version of this User Guide that you can browse on a long flight, on the beach, deep in the jungle, or during office meetings.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Stereo 12 uses zone focusing, but if you are bad at estimating distances or want a more precise device, a vintage accessory range finder can be used. For more information and a comprehensive set of options with reviews, see the Mercury Range Finder Roundup at"
                accessibilityRole="text"
            >
                The Stereo 12 uses zone focusing, but if you are bad at estimating distances or want a more precise device, a vintage accessory range finder can be used. For more information and a comprehensive set of options with reviews, see the Mercury Range Finder Roundup at
            </Text>

            <View>
                <OpenURLLink url={mercuryCameraURL}>www.mercurycamera.com</OpenURLLink>
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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This accepts the viewing lens mounts from Mamiya TLR lensboards, which otherwise aren't used with Mercury cameras. This allows you to safely store a complete set of extra lens elements that can be screwed into your Mercury Stereo lensboard when you wish to use them. This includes a press-on back cap to protect the rear elements. You should use lenscaps to protect the front elements. You can also use a discarded Mamiya TLR lensboard, along with two of its viewer lens element spacers, to hold an extra set of lens elements, albeit without any rear protection."
                accessibilityRole="text"
            >
                This accepts the viewing lens mounts from Mamiya TLR lensboards, which otherwise aren't used with Mercury cameras. This allows you to safely store a complete set of extra lens elements that can be screwed into your Mercury Stereo lensboard when you wish to use them. This includes a press-on back cap to protect the rear elements. You should use lenscaps to protect the front elements. You can also use a discarded Mamiya TLR lensboard, along with two of its viewer lens element spacers, to hold an extra set of lens elements, albeit without any rear protection.
            </Text>

        {/*Lens Mount Image*/}
            <Pressable onPress={() => setLensMountVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/lensMount.jpg')}
                />
            </Pressable>
            <Modal 
                visible={lensMountVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={lensMount} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLensMountVisible(false)}
                    onClick={() => setLensMountVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you don't have a Mercury Deluxe Ground Glass back and its accompanying Magnifier, or you want higher levels of spot magnification (especially for testing/calibration of lenses), we recommend a high quality metal 6X or 8X ground glass loupe. These can be found on various online marketplaces. We do not recommend any cheap plastic versions."
                accessibilityRole="text"
            >
                If you don't have a Mercury Deluxe Ground Glass back and its accompanying Magnifier, or you want higher levels of spot magnification (especially for testing/calibration of lenses), we recommend a high quality metal 6X or 8X ground glass loupe. These can be found on various online marketplaces. We do not recommend any cheap plastic versions.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This advanced device has to functions: to introduce a programmable delay before triggering your camera, or to precisely time a long exposure (1 second to 30 seconds). Both functions can be used on any shutters compatible with Stereo 12 Electronic Lensboards, including our Deluxe Pinhole lenboard."
                accessibilityRole="text"
            >
                This advanced device has to functions: to introduce a programmable delay before triggering your camera, or to precisely time a long exposure (1 second to 30 seconds). Both functions can be used on any shutters compatible with Stereo 12 Electronic Lensboards, including our Deluxe Pinhole lenboard.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To use, plug it’s two protruding cables into your camera’s Remote and Lensboard ports, and connect your lensboard to the Trigger Controller’s “Lensboard” port. Connect a wired remote to the Trigger Controller. Set your shutter to “B” if using Exposure mode."
                accessibilityRole="text"
            >
                To use, plug it’s two protruding cables into your camera’s Remote and Lensboard ports, and connect your lensboard to the Trigger Controller’s “Lensboard” port. Connect a wired remote to the Trigger Controller. Set your shutter to “B” if using Exposure mode.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Turn the Trigger Controller on via the On/Off switch, then use the Mode switch to select either Delay or Exposure mode. Use the dial on top of the device to select a time (in seconds). Use the Range switch to choose between the white range of numbers and the blue range of numbers. Press the connected external trigger to start the process."
                accessibilityRole="text"
            >
                Turn the Trigger Controller on via the On/Off switch, then use the Mode switch to select either Delay or Exposure mode. Use the dial on top of the device to select a time (in seconds). Use the Range switch to choose between the white range of numbers and the blue range of numbers. Press the connected external trigger to start the process.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In Delay mode, the Trigger Box will wait for the amount of time (in seconds) entered, and then trigger your lenses, which will operate normally."
                accessibilityRole="text"
            >
                In Delay mode, the Trigger Box will wait for the amount of time (in seconds) entered, and then trigger your lenses, which will operate normally.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In Expososure mode, activating the trigger will immediately start an exposure. The Trigger Controller will time your exposure to last for the time you have entered (in seconds). This is extremely helpful for longer exposures, which are difficult to accurately time and sync by hand in bulb mode. It may even be helpful for 1 second exposures in the case of some shutters, as its electronically-controlled timing is often more accurate that the mechanical spring used for the 1 second speed by the shutter itself."
                accessibilityRole="text"
            >
                In Expososure mode, activating the trigger will immediately start an exposure. The Trigger Controller will time your exposure to last for the time you have entered (in seconds). This is extremely helpful for longer exposures, which are difficult to accurately time and sync by hand in bulb mode. It may even be helpful for 1 second exposures in the case of some shutters, as its electronically-controlled timing is often more accurate that the mechanical spring used for the 1 second speed by the shutter itself.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="LED: the on-board LED will flash red/green during boot-up, when you turn it on. When the light is steady green, it is ready to accept a trigger event. When it is steady red, it has been activated and is currently timing an exposure."
                accessibilityRole="text"
            >
                LED: the on-board LED will flash red/green during boot-up, when you turn it on. When the light is steady green, it is ready to accept a trigger event. When it is steady red, it has been activated and is currently timing an exposure.
            </Text>

    
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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Some of the best upgrades for your camera system are extra lenses and extra film backs. See Part II of this Guide for details of options."
                accessibilityRole="text"
            >
                Some of the best upgrades for your camera system are extra lenses and extra film backs. See Part II of this Guide for details of options.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You may also want to consider shooting 65mm IMAX film and having it printed to slides by M-Alchemy, which will vastly expand the potential shooting conditions you can tackle with your camera. See the Film Backs section of this Guide, and"
                accessibilityRole="text"
            >
                You may also want to consider shooting 65mm IMAX film and having it printed to slides by M-Alchemy, which will vastly expand the potential shooting conditions you can tackle with your camera. See the Film Backs section of this Guide, and
            </Text>

            <View>
                <OpenURLLink url={mAlchemy}>www.m-alchemy.com</OpenURLLink>
            </View>

            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="for more details."
                accessibilityRole="text"
            >
                for more details.
            </Text>



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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="1. Work out your shot." 
                accessibilityRole="text"
            >
                1. Work out your shot.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Frame up using the viewfinder or (advanced) ground glass back if shooting on a tripod. To use ground glass, replace your film back with a ground glass back, mount the camera on a tripod, and put your lenses into “aperture preview” mode." 
                accessibilityRole="text"
            >
                Frame up using the viewfinder or (advanced) ground glass back if shooting on a tripod. To use ground glass, replace your film back with a ground glass back, mount the camera on a tripod, and put your lenses into “aperture preview” mode.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="2. Make sure that your subject(s) falls within your focal range." 
                accessibilityRole="text"
            >
                2. Make sure that your subject(s) falls within your focal range.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Focal range is determined by the particular “focus spacer” you have on your camera. Swapping out the focus spacer for a different one will shift your focus zone, or the range of distances that are sharply in focus. There are 14 possible focus spacers, but in practice each lens only requires around 3 spacers to cover all ordinary focal ranges. Focus spacers with lower numbers set your focus zone further away, while spacers with larger number move your focus range closer. Each focus spacer lists its number on the left and right sides. A comprehensive table of all spacers and their focus ranges at different f-stops can be found in the Mercury “Lens Focal Info” spreadsheet, available for download at"
                accessibilityRole="text"
            >
                Focal range is determined by the particular “focus spacer” you have on your camera. Swapping out the focus spacer for a different one will shift your focus zone, or the range of distances that are sharply in focus. There are 14 possible focus spacers, but in practice each lens only requires around 3 spacers to cover all ordinary focal ranges. Focus spacers with lower numbers set your focus zone further away, while spacers with larger number move your focus range closer. Each focus spacer lists its number on the left and right sides. A comprehensive table of all spacers and their focus ranges at different f-stops can be found in the Mercury “Lens Focal Info” spreadsheet, available for download at
            </Text>

            <View>
                <OpenURLLink url={mercuryStereoURL}>www.mercurystereo.com</OpenURLLink>
            </View>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="That spreadsheet can be printed to create labels for each lens-spacer combo that lists focal ranges at three different f-stops (circled below). From left to right: the range if your lens is set to f/22, the range if your lens is set to f/16, and f/8. This information can be customized before you print if you wish."
                accessibilityRole="text"
            >
                That spreadsheet can be printed to create labels for each lens-spacer combo that lists focal ranges at three different f-stops (circled below). From left to right: the range if your lens is set to f/22, the range if your lens is set to f/16, and f/8. This information can be customized before you print if you wish.
            </Text>

        {/*Focal Label Image*/}
            <Pressable onPress={() => setFocalLabelVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/focalLabel.jpg')}
                />
            </Pressable>
            <Modal 
                visible={focalLabelVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={focalLabel} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setFocalLabelVisible(false)}
                    onClick={() => setFocalLabelVisible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Does your focal range look reasonable? If your subject falls closer or farther away, you can change to a different front spacer. Just fully loosen the four thumbscrews on the front of the camera, lift away your lensboard, usually keeping it connected via wire to the camera body. You’ll notice two spacers below the lensboard: the one next to the camera body is the BASE spacer. Leave it there. The second, the one with the focal range numbers, is your focal spacer. Remove it and replace it with a different one. As the numerical value (#) of each spacer increases, the camera will focus closer."
                accessibilityRole="text"
            >
                Does your focal range look reasonable? If your subject falls closer or farther away, you can change to a different front spacer. Just fully loosen the four thumbscrews on the front of the camera, lift away your lensboard, usually keeping it connected via wire to the camera body. You’ll notice two spacers below the lensboard: the one next to the camera body is the BASE spacer. Leave it there. The second, the one with the focal range numbers, is your focal spacer. Remove it and replace it with a different one. As the numerical value (#) of each spacer increases, the camera will focus closer.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you’ve replaced the spacer (make sure it snapped all the way in place, evenly), place the lensboard back on top and screw down the thumbscrews. Sometimes you will need to remove or add washers to your thumbscrew for different spacers, or change to screws with different colored heads. Each spacer’s label has a colored box that indicates which bolt to use, and if it also requires a washer (“W”)."
                accessibilityRole="text"
            >
                Once you’ve replaced the spacer (make sure it snapped all the way in place, evenly), place the lensboard back on top and screw down the thumbscrews. Sometimes you will need to remove or add washers to your thumbscrew for different spacers, or change to screws with different colored heads. Each spacer’s label has a colored box that indicates which bolt to use, and if it also requires a washer (“W”).
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="3. Take a light reading." 
                accessibilityRole="text"
            >
                3. Take a light reading.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="While a real light meter is the best way to do this, but if you don’t have one you can use any light meter app. Recommendations: Light Meter for Android, or Light Meter PRO for iOS. Input the ISO of your loaded film. Take a light reading with your phone."
                accessibilityRole="text"
            >
                While a real light meter is the best way to do this, but if you don’t have one you can use any light meter app. Recommendations: Light Meter for Android, or Light Meter PRO for iOS. Input the ISO of your loaded film. Take a light reading with your phone.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For stereo photography, because the goal is usually to maximize your depth of field, you generally want to choose the largest f-stop number you can, to maximize what is in focus (which increases the stereo depth in the image). However, you have to keep a reasonable shutter speed. If hand-holding the camera, you need to have a 30 shutter speed or faster (larger number). If on a tripod, you can slow down your shutter speed all the way to 1 second."
                accessibilityRole="text"
            >
                For stereo photography, because the goal is usually to maximize your depth of field, you generally want to choose the largest f-stop number you can, to maximize what is in focus (which increases the stereo depth in the image). However, you have to keep a reasonable shutter speed. If hand-holding the camera, you need to have a 30 shutter speed or faster (larger number). If on a tripod, you can slow down your shutter speed all the way to 1 second.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="4. Set your chosen f-stop and shutter speed settings on both shutters:" 
                accessibilityRole="text"
            >
                4. Set your chosen f-stop and shutter speed settings on both shutters:
            </Text>

        {/*Set Lenses Image*/}
            <Pressable onPress={() => setSetLensesVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/setLenses.jpg')}
                />
            </Pressable>
            <Modal 
                visible={setLensesVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={setLenses} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSetLensesVisible(false)}
                    onClick={() => setSetLensesVisible(false)}
                />
            </Modal>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Simply turn the aperture and shutter speed rings on both shutters until your desired settings have been set identically for both. (If your aperture scale has multiple colored lines, line up with the color that matches your lens.)"
                accessibilityRole="text"
            >
                Simply turn the aperture and shutter speed rings on both shutters until your desired settings have been set identically for both. (If your aperture scale has multiple colored lines, line up with the color that matches your lens.)
            </Text>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="5. Prep the camera to shoot." 
                accessibilityRole="text"
            >
                5. Prep the camera to shoot.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(a) If on a tripod and you want to use a remote trigger, plug it in now to the jack on the left side of the camera, near the top, labeled “Remote.”"
                accessibilityRole="text"
            >
                (a) If on a tripod and you want to use a remote trigger, plug it in now to the jack on the left side of the camera, near the top, labeled “Remote.”
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(b) Turn the camera on via the switch on top:"
                accessibilityRole="text"
            >
                (b) Turn the camera on via the switch on top:
            </Text>

        {/*On Switch Image*/}
            <Pressable onPress={() => setOnSwitchVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/onSwitch.jpg')}
                />
            </Pressable>
            <Modal 
                visible={onSwitchVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={onSwitch} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setOnSwitchVisible(false)}
                    onClick={() => setOnSwitchVisible(false)}
                />
            </Modal>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(c) Remove your lens caps. It’s easy to forget to do this when not using a ground glass back, since you are using a viewfinder and not looking through the lenses themselves when you are previewing!"
                accessibilityRole="text"
            >
                (c) Remove your lens caps. It’s easy to forget to do this when not using a ground glass back, since you are using a viewfinder and not looking through the lenses themselves when you are previewing!
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(d) Cock both of your shutters by moving the silver levers (circled below) to the left until they click in place. If you’re using lenses other than Mamiya TLR, your cocking levers will look different and may, in some cases, move in opposite directions on the two different shutters."
                accessibilityRole="text"
            >
                (d) Cock both of your shutters by moving the silver levers (circled below) to the left until they click in place. If you’re using lenses other than Mamiya TLR, your cocking levers will look different and may, in some cases, move in opposite directions on the two different shutters.
            </Text>

        {/*Cocking Levers Image*/}
            <Pressable onPress={() => setCockingLeversVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cockingLevers.jpg')}
                />
            </Pressable>
            <Modal 
                visible={cockingLeversVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cockingLevers} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setCockingLeversVisible(false)}
                    onClick={() => setCockingLeversVisible(false)}
                />
            </Modal>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(e) Final step, when you are ready to shoot: slide the darkslide out of your film back, pulling it to the right until you see the line drawn on it. Stop there."
                accessibilityRole="text"
            >
                (e) Final step, when you are ready to shoot: slide the darkslide out of your film back, pulling it to the right until you see the line drawn on it. Stop there.
            </Text>

        {/*Darkslide Image*/}
            <Pressable onPress={() => setDarkslideVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/darkslide.jpg')}
                />
            </Pressable>
            <Modal 
                visible={darkslideVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={darkslide} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setDarkslideVisible(false)}
                    onClick={() => setDarkslideVisible(false)}
                />
            </Modal>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="6. Trigger the camera." 
                accessibilityRole="text"
            >
                6. Trigger the camera.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Press the red trigger button on the camera grip or the button on your remote trigger, if you have one plugged in. The shutters should fire. You can check, afterwards, to see if both cocking levers are back to their uncocked position. If they are, all went well!"
                accessibilityRole="text"
            >
                Press the red trigger button on the camera grip or the button on your remote trigger, if you have one plugged in. The shutters should fire. You can check, afterwards, to see if both cocking levers are back to their uncocked position. If they are, all went well!
            </Text>

        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="7. Close your darkslide and advance the film." 
                accessibilityRole="text"
            >
                7. Close your darkslide and advance the film.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="It is important to do this immediately after exposing a shot! If you don’t successfully train yourself to ignore everything else and immediately advance the film, you will inevitably make mistakes (advance twice and lose film or not advance and double expose)."
                accessibilityRole="text"
            >
                It is important to do this immediately after exposing a shot! If you don’t successfully train yourself to ignore everything else and immediately advance the film, you will inevitably make mistakes (advance twice and lose film or not advance and double expose).
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you are using a lever-operated rollfilm back, advance to the next frame. If you are using a windowed 120 back, wind the knob until the next odd number on the backing paper shows through the window, and close the window. If you are using a cut film holder, make sure that your darkslide handle has been re-inserted with the silver side facing outward, then flip the holder around and re-attach it to the camera. If you are using a Grafmatic back, advance the mechanism so that the next frame number is showing on the frame counter."
                accessibilityRole="text"
            >
                If you are using a lever-operated rollfilm back, advance to the next frame. If you are using a windowed 120 back, wind the knob until the next odd number on the backing paper shows through the window, and close the window. If you are using a cut film holder, make sure that your darkslide handle has been re-inserted with the silver side facing outward, then flip the holder around and re-attach it to the camera. If you are using a Grafmatic back, advance the mechanism so that the next frame number is showing on the frame counter.
            </Text>

        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Next..." 
                accessibilityRole="text"
            >
                Next...
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Your camera is now ready to take another exposure. If you’re done for awhile, be sure to replace your lenscaps and turn the camera off to save your batteries."
                accessibilityRole="text"
            >
                Your camera is now ready to take another exposure. If you’re done for awhile, be sure to replace your lenscaps and turn the camera off to save your batteries.
            </Text>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Changing Batteries" 
                accessibilityRole="text"
            >
                Changing Batteries
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you ever need to change batteries, they are accessible once you take your film back off the camera. Remove the two screws holding the battery cover in place."
                accessibilityRole="text"
            >
                If you ever need to change batteries, they are accessible once you take your film back off the camera. Remove the two screws holding the battery cover in place.
            </Text>

        {/*Batteries Image*/}
            <Pressable onPress={() => setBatteriesVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/batteries.jpg')}
                />
            </Pressable>
            <Modal 
                visible={batteriesVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={batteries} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setBatteriesVisible(false)}
                    onClick={() => setBatteriesVisible(false)}
                />
            </Modal>

        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Mercury takes two 9V batteries. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don’t have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12’s unique circuitry."
                accessibilityRole="text"
            >
                The Mercury takes two 9V batteries. We recommend using name brand Alkaline batteries. Lithium batteries last much longer, but have less power and can lead to inadequate triggering. Do not use rechargeable batteries—they don’t have enough amperage, and their internal circuitry will likely shut them down due to the Stereo 12’s unique circuitry.
            </Text>

        {/*Paragraph 20*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="How long your batteries will last depends on their age since produced, quality, ambient temperature and humidity, and whether you forget to turn off your camera when not using it, but you will generally get about 80 exposures from one set of batteries."
                accessibilityRole="text"
            >
                How long your batteries will last depends on their age since produced, quality, ambient temperature and humidity, and whether you forget to turn off your camera when not using it, but you will generally get about 80 exposures from one set of batteries.
            </Text>



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

        {/*Camera Illustration Image*/}
            <Pressable onPress={() => setCameraIllustrationVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/cameraIllustration.png')}
                />
            </Pressable>
            <Modal 
                visible={cameraIllustrationVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={cameraIllustration} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setCameraIllustrationVisible(false)}
                    onClick={() => setCameraIllustrationVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you are shooting in a controlled or slowly changing environment, the greatest precision is afforded by shooting on a tripod with ground glass. Large format photographers know the joy that this style of shooting brings."
                accessibilityRole="text"
            >
                If you are shooting in a controlled or slowly changing environment, the greatest precision is afforded by shooting on a tripod with ground glass. Large format photographers know the joy that this style of shooting brings.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Instead of a film back, start with a ground glass back mounted. If you are using the Copal or Generic 0 lensboard, place the two shutters in preview mode. Copal shutters have a triangular preview lever that is slid to one side to engage preview mode, whether the shutter is cocked or not. The Seiko LF shutter also has a preview lever, but the shutter must be cocked to engage it."
                accessibilityRole="text"
            >
                Instead of a film back, start with a ground glass back mounted. If you are using the Copal or Generic 0 lensboard, place the two shutters in preview mode. Copal shutters have a triangular preview lever that is slid to one side to engage preview mode, whether the shutter is cocked or not. The Seiko LF shutter also has a preview lever, but the shutter must be cocked to engage it.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mamiya TLR shutters don't have preview modes, so our corresponding lensboards contain special preview screws. To activate them, make sure the Mercury preview thumbscrews are threaded into the front of the lensboard (they can be screwed into the back side of the lensboard when not used). Set each shutter to the “B” shutter speed. Then, for each shutter, press the actuator piston, where it connects to the shutter release lever, away from the shutter. This will actuate the shutter, but keep pressing the piston, holding it in the actuated position, and thread the corresponding preview thumbscrew in until it meets with the first hint of resistance. Let go of the piston. The screw should hold it in place. Do this for both shutters."
                accessibilityRole="text"
            >
                Mamiya TLR shutters don't have preview modes, so our corresponding lensboards contain special preview screws. To activate them, make sure the Mercury preview thumbscrews are threaded into the front of the lensboard (they can be screwed into the back side of the lensboard when not used). Set each shutter to the “B” shutter speed. Then, for each shutter, press the actuator piston, where it connects to the shutter release lever, away from the shutter. This will actuate the shutter, but keep pressing the piston, holding it in the actuated position, and thread the corresponding preview thumbscrew in until it meets with the first hint of resistance. Let go of the piston. The screw should hold it in place. Do this for both shutters.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Compur 0 shutters have a preview nub that has to be moved along the body of the shutter. One shutter, however, will have its nub somewhat obscured by the other shutter. You can either use some thin tool to rotate the nub or use a preview actuator screw for that shutter, just as with Mamiya TLR shutters."
                accessibilityRole="text"
            >
                Compur 0 shutters have a preview nub that has to be moved along the body of the shutter. One shutter, however, will have its nub somewhat obscured by the other shutter. You can either use some thin tool to rotate the nub or use a preview actuator screw for that shutter, just as with Mamiya TLR shutters.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Compur 00 shutters are especially tiny and do not possess aperture preview modes, and our lensboards for them, in the spirit of an extremely compact unit, do not possess preview locks either. While we don’t recommend these lenses for ground glass use, you can certainly still use them by setting the shutters to “B” and then holding the solenoid piston(s) open after tripping the shutter."
                accessibilityRole="text"
            >
                Compur 00 shutters are especially tiny and do not possess aperture preview modes, and our lensboards for them, in the spirit of an extremely compact unit, do not possess preview locks either. While we don’t recommend these lenses for ground glass use, you can certainly still use them by setting the shutters to “B” and then holding the solenoid piston(s) open after tripping the shutter.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For all shutters: change your aperture to the largest (that is, the smallest f-stop number) available."
                accessibilityRole="text"
            >
                For all shutters: change your aperture to the largest (that is, the smallest f-stop number) available.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You should now have an image from each lens showing in your ground glass. Of course, slow lenses will produce much dimmer image than fast lenses, brighter subjects will be easier to see than dark ones, and you must adequately block light from behind the camera from shining on the ground glass. You can use a darkcloth to block out the light, or hold a magnifier loupe designed for ground glass to the surface of the glass, or, if you have a Deluxe Mercury Ground Glass back, you can insert our hood or our magnifying viewer into the rails on the back. Both of these will help block out the exterior light and help you focus on the image being produced by your lenses."
                accessibilityRole="text"
            >
                You should now have an image from each lens showing in your ground glass. Of course, slow lenses will produce much dimmer image than fast lenses, brighter subjects will be easier to see than dark ones, and you must adequately block light from behind the camera from shining on the ground glass. You can use a darkcloth to block out the light, or hold a magnifier loupe designed for ground glass to the surface of the glass, or, if you have a Deluxe Mercury Ground Glass back, you can insert our hood or our magnifying viewer into the rails on the back. Both of these will help block out the exterior light and help you focus on the image being produced by your lenses.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Ground glass will help you visualize the exact image you will photograph, including focus range (depth of field) and composition. But unlike flat photography, ground glass gives you additional information for stereography. Namely: divergence."
                accessibilityRole="text"
            >
                Ground glass will help you visualize the exact image you will photograph, including focus range (depth of field) and composition. But unlike flat photography, ground glass gives you additional information for stereography. Namely: divergence.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The two “views” displayed on your ground glass are of the same scene, but from two slightly different perspectives. The differences between these side-by-side images are directly translatable into the 3D effect of the final photo, when viewed through any stereo viewer. That is, through the ground glass you're seeing not a stereo image in 3D, but rather a dissected stereo image: one where you can see how much each object in the frame diverges from the other view. A high degree of divergence will produce an image “close” in 3D space, while a low degree of divergence will place that object at a distant plane, behind the high-divergence one, and so on. You will quickly learn to associate ground glass divergence with stereo depth. Ground glass is thus a very powerful tool for composing in Z-space. You can instantly see the depth effects of moving the camera closer or farther away, repositioning subjects within the scene, and changing lenses. Since these are all tools that are important to stereography, it helps to be able to fully preview them."
                accessibilityRole="text"
            >
                The two “views” displayed on your ground glass are of the same scene, but from two slightly different perspectives. The differences between these side-by-side images are directly translatable into the 3D effect of the final photo, when viewed through any stereo viewer. That is, through the ground glass you're seeing not a stereo image in 3D, but rather a dissected stereo image: one where you can see how much each object in the frame diverges from the other view. A high degree of divergence will produce an image “close” in 3D space, while a low degree of divergence will place that object at a distant plane, behind the high-divergence one, and so on. You will quickly learn to associate ground glass divergence with stereo depth. Ground glass is thus a very powerful tool for composing in Z-space. You can instantly see the depth effects of moving the camera closer or farther away, repositioning subjects within the scene, and changing lenses. Since these are all tools that are important to stereography, it helps to be able to fully preview them.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Also notice that the edges of your frame are not the same for the two views. Each view will have different edges. In the final 3D image, only objects visible in both views will be rendered with great clarity. Anything visible only to one eye will hover at the periphery of your vision but have no real 3D presence. Ground glass thus allows your to far more precisely adjust your composition so that your left and right edges fall in good places, without cropping anything important."
                accessibilityRole="text"
            >
                Also notice that the edges of your frame are not the same for the two views. Each view will have different edges. In the final 3D image, only objects visible in both views will be rendered with great clarity. Anything visible only to one eye will hover at the periphery of your vision but have no real 3D presence. Ground glass thus allows your to far more precisely adjust your composition so that your left and right edges fall in good places, without cropping anything important.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note: When viewing with ground glass, you are seeing what the film sees, not what the viewer will see later. Your images will be upside down (that how your film or sensor records images in all cameras) and reversed left-to-right. In addition, your stereo views are in the wrong order: the one on the left is actually meant for your right eye, and vice versa. But none of this matters once you get used to it. The features described above give you an analytical version of your photo, providing detailed information to the knowing photograph, not a synthetic version meant for viewers' enjoyment."
                accessibilityRole="text"
            >
                Note: When viewing with ground glass, you are seeing what the film sees, not what the viewer will see later. Your images will be upside down (that how your film or sensor records images in all cameras) and reversed left-to-right. In addition, your stereo views are in the wrong order: the one on the left is actually meant for your right eye, and vice versa. But none of this matters once you get used to it. The features described above give you an analytical version of your photo, providing detailed information to the knowing photograph, not a synthetic version meant for viewers' enjoyment.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you've adjusted all relevant parameters of your image, lock your tripod and replace the ground glass back with a film back, loaded with your choice of film."
                accessibilityRole="text"
            >
                Once you've adjusted all relevant parameters of your image, lock your tripod and replace the ground glass back with a film back, loaded with your choice of film.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Attach a remote trigger unless shooting with a high shutter speed, so you don't have to touch the camera when you expose your shot."
                accessibilityRole="text"
            >
                Attach a remote trigger unless shooting with a high shutter speed, so you don't have to touch the camera when you expose your shot.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Don't forget to take your lenses out of preview mode and set your actual desired shutter speed and aperture. Then take your shot."
                accessibilityRole="text"
            >
                Don't forget to take your lenses out of preview mode and set your actual desired shutter speed and aperture. Then take your shot.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When you view a scene through a viewfinder, you only see an average of two different perspectives. This works when shooting rough and dirty, handheld, but for precise stereographic control, ground glass opens up an entirely new world of stereo photographic control."
                accessibilityRole="text"
            >
                When you view a scene through a viewfinder, you only see an average of two different perspectives. This works when shooting rough and dirty, handheld, but for precise stereographic control, ground glass opens up an entirely new world of stereo photographic control.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Unlike the basic Mercury Stereo ground glass, our Deluxe Ground Glass Back possesses two accessory rails that can be tightened or loosened with four thumbscrews. Accessories mount by sliding on either end of the back, under the accessory rails. Accessories include the following:"
                accessibilityRole="text"
            >
                Unlike the basic Mercury Stereo ground glass, our Deluxe Ground Glass Back possesses two accessory rails that can be tightened or loosened with four thumbscrews. Accessories mount by sliding on either end of the back, under the accessory rails. Accessories include the following:
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Ground Glass Shade:" 
                accessibilityRole="text"
            >
                Ground Glass Shade:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This shade blocks light from the top and sides to help you view your image on your ground glass, even when the camera is in the sun."
                accessibilityRole="text"
            >
                This shade blocks light from the top and sides to help you view your image on your ground glass, even when the camera is in the sun.
            </Text>

        {/*Ground Glass Shade / Sun Hood Image*/}
            <Pressable onPress={() => setSunHoodVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/sunHood.jpg')}
                />
            </Pressable>
            <Modal 
                visible={sunHoodVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={sunHood} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSunHoodVisible(false)}
                    onClick={() => setSunHoodVisible(false)}
                />
            </Modal>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Protective Cap:" 
                accessibilityRole="text"
            >
                Protective Cap:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This simple cap protects your ground glass from impacts, scratches, and dirt when it is not being used. It is a very good idea to slide it in place when the ground glass back is being transported."
                accessibilityRole="text"
            >
                This simple cap protects your ground glass from impacts, scratches, and dirt when it is not being used. It is a very good idea to slide it in place when the ground glass back is being transported.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Ground Glass Magnifier:" 
                accessibilityRole="text"
            >
                Ground Glass Magnifier:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This magnifying viewer slides onto the accessory rails and into either the left or right position, displaying one lens view at a time. By blocking stray light, it allows you to view your image without a handheld loupe, even in direct sunlight, in sufficient detail to ascertain critical focus, framing, and stereoscopic divergence at different depth planes. It can even be slid to the right or left edge of the ground glass back, allowing it to be fully removed from view without taking it off the back. The eyepiece can be rotated to focus for particular viewers’ eyes."
                accessibilityRole="text"
            >
                This magnifying viewer slides onto the accessory rails and into either the left or right position, displaying one lens view at a time. By blocking stray light, it allows you to view your image without a handheld loupe, even in direct sunlight, in sufficient detail to ascertain critical focus, framing, and stereoscopic divergence at different depth planes. It can even be slid to the right or left edge of the ground glass back, allowing it to be fully removed from view without taking it off the back. The eyepiece can be rotated to focus for particular viewers’ eyes.
            </Text>

        {/*Ground Glass Magnifier Image*/}
            <Pressable onPress={() => setGgMagnifierVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/ggMagnifier.jpg')}
                />
            </Pressable>
            <Modal 
                visible={ggMagnifierVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={ggMagnifier} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setGgMagnifierVisible(false)}
                    onClick={() => setGgMagnifierVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This a fully modular system that consists of two parts: A Shade Base and a Shade. The Shade Base is rated by filter size: either the native filter size of the lenses you wish to use or the size of your step-up ring if using one (as we recommend). We recommend that you standardize your stereo lenses (even if only using one lens set) to 52mm. This is our default Shade Base size, but others are available as well, such as 46mm and 49mm. We also make a special 52mm Shade Base with a stereo base of 57mm instead of our standard 62.5mm, for users of our Compur 00 57mm Base lensboard."
                accessibilityRole="text"
            >
                This a fully modular system that consists of two parts: A Shade Base and a Shade. The Shade Base is rated by filter size: either the native filter size of the lenses you wish to use or the size of your step-up ring if using one (as we recommend). We recommend that you standardize your stereo lenses (even if only using one lens set) to 52mm. This is our default Shade Base size, but others are available as well, such as 46mm and 49mm. We also make a special 52mm Shade Base with a stereo base of 57mm instead of our standard 62.5mm, for users of our Compur 00 57mm Base lensboard.
            </Text>

        {/*Lens Shade System Image*/}
            <Pressable onPress={() => setLensShadeSysVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/lensShadeSys.gif')}
                />
            </Pressable>
            <Modal 
                visible={lensShadeSysVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={lensShadeSys} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setLensShadeSysVisible(false)}
                    onClick={() => setLensShadeSysVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To attach the Shade Base to your lenses, just press it on the front of your step-up adapter or lens until the front of both adapters are flush with the inside surface of the Shade Base."
                accessibilityRole="text"
            >
                To attach the Shade Base to your lenses, just press it on the front of your step-up adapter or lens until the front of both adapters are flush with the inside surface of the Shade Base.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Shades come in 10mm increments from 25mm to 50mm. All shades “snap” in place over the Shade Base. Because all our Shade Base variants share the same outer size (only the lens/filter diameter is different), the basic set of Shades fit on all Shade Bases universally."
                accessibilityRole="text"
            >
                Shades come in 10mm increments from 25mm to 50mm. All shades “snap” in place over the Shade Base. Because all our Shade Base variants share the same outer size (only the lens/filter diameter is different), the basic set of Shades fit on all Shade Bases universally.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To lock a Shade in place and tighten the Shade Base to your lens pair, insert the thumbscrew in the hold in the top and turn it until the Shade Base is holding fairly tightly to your step-up rings / lenses. There’s no need to over-tighten; the Shade Base is designed to slip back and loose in case of extreme impact, rather than shattering (though it will still help protect your lenses in this scenario)."
                accessibilityRole="text"
            >
                To lock a Shade in place and tighten the Shade Base to your lens pair, insert the thumbscrew in the hold in the top and turn it until the Shade Base is holding fairly tightly to your step-up rings / lenses. There’s no need to over-tighten; the Shade Base is designed to slip back and loose in case of extreme impact, rather than shattering (though it will still help protect your lenses in this scenario).
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This table shows the maximum recommended Shade depth for different lens focal lengths. Note that you can always use a shorter shade if you want your camera to be more compact or you want even easier access to your lens filters/caps."
                accessibilityRole="text"
            >
                This table shows the maximum recommended Shade depth for different lens focal lengths. Note that you can always use a shorter shade if you want your camera to be more compact or you want even easier access to your lens filters/caps.
            </Text>

        {/*Shade Size Table Image*/}
            {/*Camera Strap Image*/}
            <Pressable onPress={() => setRecommendedShadeSizeVisible(true)}>
                <Image
                    style={guideStyle.imageTableSmall}
                    source={require('../assets/images/recommendedShadeSize.png')}
                />
            </Pressable>
            <Modal 
                visible={recommendedShadeSizeVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={recommendedShadeSize} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setRecommendedShadeSizeVisible(false)}
                    onClick={() => setRecommendedShadeSizeVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Mercury Stereo 12 is designed to emulate the human eyes, and records roughly the amount of depth perspective that we have (though this changes somewhat based on the focal length of the lens you use)."
                accessibilityRole="text"
            >
                The Mercury Stereo 12 is designed to emulate the human eyes, and records roughly the amount of depth perspective that we have (though this changes somewhat based on the focal length of the lens you use).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="There are times, however, when you may wish to shoot subjects that require an expansion or a contraction of the “stereo base.” Because we must view these images with our standard human interpupillary distance (IPD), the difference in the spacing of the lenses during photographic explore and the distance of the eyes for viewing allows very close subjects to be processed by our nervous system as resolvable in depth (when they wouldn't be in real life), or very far objects that look flat to us in real life to gain dynamic tension in depth with each other. This is done in the first case by reducing the stereo base, or distance between the two lenses, giving an extremely close object the stereo depth of something somewhat farther away, which we can process, and very far objects an exaggerated stereo base, to make them intelligible in depth."
                accessibilityRole="text"
            >
                There are times, however, when you may wish to shoot subjects that require an expansion or a contraction of the “stereo base.” Because we must view these images with our standard human interpupillary distance (IPD), the difference in the spacing of the lenses during photographic explore and the distance of the eyes for viewing allows very close subjects to be processed by our nervous system as resolvable in depth (when they wouldn't be in real life), or very far objects that look flat to us in real life to gain dynamic tension in depth with each other. This is done in the first case by reducing the stereo base, or distance between the two lenses, giving an extremely close object the stereo depth of something somewhat farther away, which we can process, and very far objects an exaggerated stereo base, to make them intelligible in depth.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="How can you do this if the distance between lenses on the camera doesn't change?"
                accessibilityRole="text"
            >
                How can you do this if the distance between lenses on the camera doesn't change?
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can accomplish this with the Mercury Hyperstereo Mount. This metal, sliding mount goes in-between your tripod and the foot of the Mercury camera, all using the same QR system already built-in to the camera."
                accessibilityRole="text"
            >
                You can accomplish this with the Mercury Hyperstereo Mount. This metal, sliding mount goes in-between your tripod and the foot of the Mercury camera, all using the same QR system already built-in to the camera.
            </Text>

        {/*Hyperstereo Mount Image*/}
            <Pressable onPress={() => setHyperstereoMountVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/hyperstereoMount.jpg')}
                />
            </Pressable>
            <Modal 
                visible={hyperstereoMountVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={hyperstereoMount} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setHyperstereoMountVisible(false)}
                    onClick={() => setHyperstereoMountVisible(false)}
                />
            </Modal>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To use it, set up your shot (tripod only) then only cock the left shutter at first. If you are shooting a distant subject and need to increase the stereo depth, loosen the large knob that protrudes toward you and physically slide the top plate (including the entire camera) to the left if you want to increase the stereo base and to the right if you want to decrease it. Measure how far you've shifted by aligning the left edge of the bottom plate with the scale on the top plate. Each line represents 1mm. The maximum you should ever shift is to the 0 point. If contracting, this would fully cancel the stereo effect and your left and right lenses would shoot the same thing (a flat image). If expanding, this will roughly quadruple your stereo base."
                accessibilityRole="text"
            >
                To use it, set up your shot (tripod only) then only cock the left shutter at first. If you are shooting a distant subject and need to increase the stereo depth, loosen the large knob that protrudes toward you and physically slide the top plate (including the entire camera) to the left if you want to increase the stereo base and to the right if you want to decrease it. Measure how far you've shifted by aligning the left edge of the bottom plate with the scale on the top plate. Each line represents 1mm. The maximum you should ever shift is to the 0 point. If contracting, this would fully cancel the stereo effect and your left and right lenses would shoot the same thing (a flat image). If expanding, this will roughly quadruple your stereo base.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note that our default printable spreadsheet for spacer labels includes, as an optional data point, a suggestion for how much to shift, assuming that you closest subject is near (and certainly not closer than) the close focus distance of your depth of field at f/22. Include this in your spacer labels if you wish to shoot with the Hyperstereo Mount and find this useful."
                accessibilityRole="text"
            >
                Note that our default printable spreadsheet for spacer labels includes, as an optional data point, a suggestion for how much to shift, assuming that you closest subject is near (and certainly not closer than) the close focus distance of your depth of field at f/22. Include this in your spacer labels if you wish to shoot with the Hyperstereo Mount and find this useful.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When you've shifted the amount you want, tighten the big knob and trigger the camera. (Remember that only the left lens will fire.) Then shift to the right, to the same number you used when shifting to the left (this time measure from the right edge of the base plate), cock just the right shutter, and trigger the camera again. Now advance your film. You've shot a hyperstereo photo!"
                accessibilityRole="text"
            >
                When you've shifted the amount you want, tighten the big knob and trigger the camera. (Remember that only the left lens will fire.) Then shift to the right, to the same number you used when shifting to the left (this time measure from the right edge of the base plate), cock just the right shutter, and trigger the camera again. Now advance your film. You've shot a hyperstereo photo!
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you want to shoot something really far from the camera, such as a distant mountain range, you will need much more hyperstereo shifting than is possible with the Hyperstereo Mount. To do this you will have to either rig something ridiculous or physically walk the camera to the left and then the right. Of course, doing this will introduce all sort of potential alignment problems, but it's worth experimenting with!"
                accessibilityRole="text"
            >
                If you want to shoot something really far from the camera, such as a distant mountain range, you will need much more hyperstereo shifting than is possible with the Hyperstereo Mount. To do this you will have to either rig something ridiculous or physically walk the camera to the left and then the right. Of course, doing this will introduce all sort of potential alignment problems, but it's worth experimenting with!
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you want to shoot a subject really close to the camera, you can experiment to work out the amount of negative shift that results in a good photo, but you will likely need to drastically increase your front spacing to achieve actual close-up focus. You can stack multiple spacers with extra-long bolts or makeshift methods of attachment. Custom spacers can also be made. Ask us if you want to go this route! To determine the amount of spacing you need for a given focal distance, experiment while viewing with a ground glass back until you have a number."
                accessibilityRole="text"
            >
                If you want to shoot a subject really close to the camera, you can experiment to work out the amount of negative shift that results in a good photo, but you will likely need to drastically increase your front spacing to achieve actual close-up focus. You can stack multiple spacers with extra-long bolts or makeshift methods of attachment. Custom spacers can also be made. Ask us if you want to go this route! To determine the amount of spacing you need for a given focal distance, experiment while viewing with a ground glass back until you have a number.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To shoot with flash, you need at least one shutter with a functional flash port."
                accessibilityRole="text"
            >
                To shoot with flash, you need at least one shutter with a functional flash port.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mamiya TLR and Seiko Horseman shutters do not have functional on-board flash ports, and instead provide a signal wire that terminates in an off-board port. In order to make this a functional port on a Mercury Stereo camera, you will need to mount the port on your lensboard and add a ground wire to it. Please see the separate How to Set Up Your Lensboard document, especially the Mamiya TLR section."
                accessibilityRole="text"
            >
                Mamiya TLR and Seiko Horseman shutters do not have functional on-board flash ports, and instead provide a signal wire that terminates in an off-board port. In order to make this a functional port on a Mercury Stereo camera, you will need to mount the port on your lensboard and add a ground wire to it. Please see the separate How to Set Up Your Lensboard document, especially the Mamiya TLR section.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Most other shutters, and especially Copal, Compur, and Seiko Fujinon shutters, have onboard flash sync ports."
                accessibilityRole="text"
            >
                Most other shutters, and especially Copal, Compur, and Seiko Fujinon shutters, have onboard flash sync ports.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In order to shoot with a single on-board flash unit, mount the flash on one of the Mercury top cold shoes, then connect the flash’s own sync port to one of your shutter’s sync ports. Different flash units use different cables, but the port is usually 3.5mm or 2.5mm. Sometimes it is a PC flash port. Old Vivitar flash units use a proprietary Vivitar port. Since almost all shutters use a PC port, you’ll need a cable that connects PC sync to whatever your flash input is. Most flash units come with this cable included. If not, you can easily purchase one online."
                accessibilityRole="text"
            >
                In order to shoot with a single on-board flash unit, mount the flash on one of the Mercury top cold shoes, then connect the flash’s own sync port to one of your shutter’s sync ports. Different flash units use different cables, but the port is usually 3.5mm or 2.5mm. Sometimes it is a PC flash port. Old Vivitar flash units use a proprietary Vivitar port. Since almost all shutters use a PC port, you’ll need a cable that connects PC sync to whatever your flash input is. Most flash units come with this cable included. If not, you can easily purchase one online.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Some shutters have a flash sync mode selector with options like “M” and “X”. If you do, make sure it is set to “X”. If you don’t, then the shutter is “X” by default."
                accessibilityRole="text"
            >
                Some shutters have a flash sync mode selector with options like “M” and “X”. If you do, make sure it is set to “X”. If you don’t, then the shutter is “X” by default.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When you shoot, your flash unit will now fire."
                accessibilityRole="text"
            >
                When you shoot, your flash unit will now fire.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For off-board flash units or strobes, connect a wireless trigger to your camera in exactly the same way. The Stereo 12 will then trigger all flashes/strobes you have programmed to receive the transmitter’s signal."
                accessibilityRole="text"
            >
                For off-board flash units or strobes, connect a wireless trigger to your camera in exactly the same way. The Stereo 12 will then trigger all flashes/strobes you have programmed to receive the transmitter’s signal.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can connect your flash or transmitter to either of your two shutters (not both). We recommend that you do an exposure test with both. Make sure that both your left and right images are exposed identically. This indicates that your flash unit is working well and you have a connected to a good shutter. If your two frames look different, try to connect your flash to the other shutter. Hopefully this will fix the imbalance. If not, your shutters may be mis-timed. In that case, have one or both shutters serviced for a CLA."
                accessibilityRole="text"
            >
                You can connect your flash or transmitter to either of your two shutters (not both). We recommend that you do an exposure test with both. Make sure that both your left and right images are exposed identically. This indicates that your flash unit is working well and you have a connected to a good shutter. If your two frames look different, try to connect your flash to the other shutter. Hopefully this will fix the imbalance. If not, your shutters may be mis-timed. In that case, have one or both shutters serviced for a CLA.
            </Text>



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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you have shot a stereo pair, you will need to edit and composite it into a 3D format before you can view it in full 3D."
                accessibilityRole="text"
            >
                Once you have shot a stereo pair, you will need to edit and composite it into a 3D format before you can view it in full 3D.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Pre-Editing"
                accessibilityRole="text"
            >
                Pre-Editing
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You can edit your individual images like you would any other in a photo editing program such as Gimp, Photoshop, Lightroom, or Capture One. Just remember these tips:"
                accessibilityRole="text"
            >
                You can edit your individual images like you would any other in a photo editing program such as Gimp, Photoshop, Lightroom, or Capture One. Just remember these tips:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Do not crop any smaller than the borders of the image during this step. All cropping should be done only in Stereo Photo Maker (see below)."
                accessibilityRole="text"
            >
                * Do not crop any smaller than the borders of the image during this step. All cropping should be done only in Stereo Photo Maker (see below).
            </Text>  

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Any changes you make to exposure, color balance, etc., should be made to the other image in your stereo pair as well."
                accessibilityRole="text"
            >
                * Any changes you make to exposure, color balance, etc., should be made to the other image in your stereo pair as well.
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Dust busting is a good idea, as dust, hairs, or specs that appear on one image but not the other are very prominent when viewing in 3D."
                accessibilityRole="text"
            >
                * Dust busting is a good idea, as dust, hairs, or specs that appear on one image but not the other are very prominent when viewing in 3D.
            </Text>  

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="When pre-editing, you can open both images, scale them the same, and place them side by side on your monitor in order to preview their stereo qualities using a screen viewer (see section below)."
                accessibilityRole="text"
            >
                When pre-editing, you can open both images, scale them the same, and place them side by side on your monitor in order to preview their stereo qualities using a screen viewer (see section below).
            </Text>  

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Compositing in Stereo Photo Maker"
                accessibilityRole="text"
            >
                Compositing in Stereo Photo Maker
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you have edited your individual images to fix any imperfections and set your color, contrast, etc., import them both into Stereo Photo Maker. This is a free program, found at"
                accessibilityRole="text"
            >
                Once you have edited your individual images to fix any imperfections and set your color, contrast, etc., import them both into Stereo Photo Maker. This is a free program, found at
            </Text> 
            <View>
                <OpenURLLink url={stereoPhotoMakerURL}>https://stereo.jpn.org/eng/stphmkr/</OpenURLLink>
            </View> 

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="1. Open Dual Images. Choose both."
                accessibilityRole="text"
            >
                1. Open Dual Images. Choose both.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="2. Check to see if left and right are correct. Use a screen viewer (best, see below) or switch into Analglyph mode and use a pair of analytic glasses to see if the foreground objects look closer than the background objects. If this is reversed, click the “Swap Images” button and check again."
                accessibilityRole="text"
            >
                2. Check to see if left and right are correct. Use a screen viewer (best, see below) or switch into Analglyph mode and use a pair of analytic glasses to see if the foreground objects look closer than the background objects. If this is reversed, click the “Swap Images” button and check again.
            </Text>
            
        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="3. Most of the time, you can auto correct alignment and stereo window placement by clicking on the Auto Align button."
                accessibilityRole="text"
            >
                3. Most of the time, you can auto correct alignment and stereo window placement by clicking on the Auto Align button.
            </Text>   

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="4. If you need to move the depth of the entire photo so that an objet isn’t causing a window violation (crossing a window and remaining visible to an eye that, spatially, shouldn’t be able to see it), or have an object in the foreground that you want to proceed to “pop out” on the viewer’s side of the window, you can change the overall placement in depth of the photo using the left and right arrow keys on the keyboard. Right arrow moves the images further apart and causes the overall stereo view to recede further behind the window. Left arrow moves the images closer together and causes everything to move closer to the viewer."
                accessibilityRole="text"
            >
                4. If you need to move the depth of the entire photo so that an objet isn’t causing a window violation (crossing a window and remaining visible to an eye that, spatially, shouldn’t be able to see it), or have an object in the foreground that you want to proceed to “pop out” on the viewer’s side of the window, you can change the overall placement in depth of the photo using the left and right arrow keys on the keyboard. Right arrow moves the images further apart and causes the overall stereo view to recede further behind the window. Left arrow moves the images closer together and causes everything to move closer to the viewer.
            </Text> 

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="5. If colors or exposure are inconsistent between the two images, use Image → Auto Correct Color to fix. Select the Left or Right side as your reference, and SPM will attempt to make the other images match."
                accessibilityRole="text"
            >
                5. If colors or exposure are inconsistent between the two images, use Image → Auto Correct Color to fix. Select the Left or Right side as your reference, and SPM will attempt to make the other images match.
            </Text>     

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="6. When you’re happy with everything press “S” or select “Save” to save your stereo pair in side by side (SBS) format. This is the most ubiquitous format, but other formats are also available."
                accessibilityRole="text"
            >
                6. When you’re happy with everything press “S” or select “Save” to save your stereo pair in side by side (SBS) format. This is the most ubiquitous format, but other formats are also available.
            </Text>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you want to print (or make a PDF of) a stereo card for a card viewer, select “Print Stereo Card” from the File menu. Note that you must have at least one printer driver installed on your computer for this option to function properly."
                accessibilityRole="text"
            >
               If you want to print (or make a PDF of) a stereo card for a card viewer, select “Print Stereo Card” from the File menu. Note that you must have at least one printer driver installed on your computer for this option to function properly.
            </Text> 

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you want to add borders, select View → Image With Borders and then save that."
                accessibilityRole="text"
            >
               If you want to add borders, select View → Image With Borders and then save that.
            </Text>     


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once you have a side-by-side (SBS) format image, you can load it directly onto devices for viewing."
                accessibilityRole="text"
            >
               Once you have a side-by-side (SBS) format image, you can load it directly onto devices for viewing.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The most basic form of stereo viewing is to use a Screen Viewer. This device is simply held up to your eyes while viewing a side-by-side stereo image on any screen (computer monitor, mobile device, projection, TV, or large prints). They are adjustable for different sized image/screens and produce a very high-quality image when viewing high-resolution screens. The best screen viewer we’ve found is the NVP3D Stereoscope, found here:"
                accessibilityRole="text"
            >
                The most basic form of stereo viewing is to use a Screen Viewer. This device is simply held up to your eyes while viewing a side-by-side stereo image on any screen (computer monitor, mobile device, projection, TV, or large prints). They are adjustable for different sized image/screens and produce a very high-quality image when viewing high-resolution screens. The best screen viewer we’ve found is the NVP3D Stereoscope, found here:
            </Text> 
            <View>
                <OpenURLLink url={nvp3dStereoscopeURL}>https://nvp3d.ch/en/shop</OpenURLLink>
            </View>

        {/*Screen Viewer 1 Image*/}
            <Pressable onPress={() => setScreenViewer1Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/screenViewer1.jpg')}
                />
            </Pressable>
            <Modal 
                visible={screenViewer1Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={screenViewer1} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setScreenViewer1Visible(false)}
                    onClick={() => setScreenViewer1Visible(false)}
                />
            </Modal>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Another good screen viewer is the Pocket 3Dvu, which isn’t quite as generous in its adjustments or compatible screen sizes, but is less expensive and available"
                accessibilityRole="text"
            >
                Another good screen viewer is the Pocket 3Dvu, which isn’t quite as generous in its adjustments or compatible screen sizes, but is less expensive and available
            </Text> 
            <View>
                <OpenURLLink url={pocket3dvuURL}>here.</OpenURLLink>
            </View>

        {/*Screen Viewer 2 Image*/}
            <Pressable onPress={() => setScreenViewer2Visible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/screenViewer2.jpg')}
                />
            </Pressable>
            <Modal 
                visible={screenViewer2Visible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={screenViewer2} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setScreenViewer2Visible(false)}
                    onClick={() => setScreenViewer2Visible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Free Viewing" 
                accessibilityRole="text"
            >
                Free Viewing
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Free viewing involves teaching your eyes to relax certain muscles and focus in certain ways that allow you to fuse two side-by-side images into a single 3D image. For many people it is very easy to learn; for others it never clicks." 
                accessibilityRole="text"
            >
                Free viewing involves teaching your eyes to relax certain muscles and focus in certain ways that allow you to fuse two side-by-side images into a single 3D image. For many people it is very easy to learn; for others it never clicks.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="There are two methods, each for a different SBS format: Parallel viewing and Cross-Eyed Viewing. Parallel viewing allows you to fuse standard SBS images; Cross-Eyed viewing requires a reversed SBS image, with the right eye on the left side of the pair, and the left eye on the right side of the pair!"
                accessibilityRole="text"
            >
                There are two methods, each for a different SBS format: Parallel viewing and Cross-Eyed Viewing. Parallel viewing allows you to fuse standard SBS images; Cross-Eyed viewing requires a reversed SBS image, with the right eye on the left side of the pair, and the left eye on the right side of the pair!
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="A very useful background primer and method for teaching yourself how to free view in a few minutes are given on this page:"
                accessibilityRole="text"
            >
                A very useful background primer and method for teaching yourself how to free view in a few minutes are given on this page:
            </Text> 
            <View>
                <OpenURLLink url={freeViewingTutorialURL}>https://stereoscopy.blog/2022/03/11/learning-to-free-view-see-stereoscopic-images-with-the-naked-eye/</OpenURLLink>
            </View>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note that even if you can free view, using a viewer of some kind can be far more comfortable for your nervous system, and produce a more cinematic experience by blocking out non-image material."
                accessibilityRole="text"
            >
                Note that even if you can free view, using a viewer of some kind can be far more comfortable for your nervous system, and produce a more cinematic experience by blocking out non-image material.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works makes two different lines of medium format viewers: a 60mm Immersive Parlorscope and a 75mm Gallery Parlorscope. Both are high-end viewers that use the best available lenses and extremely ergonomic designs for a premium viewing experience of both medium format slides and digital stereo images."
                accessibilityRole="text"
            >
                Mercury Works makes two different lines of medium format viewers: a 60mm Immersive Parlorscope and a 75mm Gallery Parlorscope. Both are high-end viewers that use the best available lenses and extremely ergonomic designs for a premium viewing experience of both medium format slides and digital stereo images.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you own, or will exhibit on, a Mercury Parlorscope, we highly recommend that you format your SBS digital images (see next section for analog slides) to optimize them for the particular phone model that you’re using inside the Parlorscope."
                accessibilityRole="text"
            >
                If you own, or will exhibit on, a Mercury Parlorscope, we highly recommend that you format your SBS digital images (see next section for analog slides) to optimize them for the particular phone model that you’re using inside the Parlorscope.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The following is a step-by-step guide for two different families of Sony 4k phones."
                accessibilityRole="text"
            >
                The following is a step-by-step guide for two different families of Sony 4k phones.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="1. Resize image to 2900 pixels wide (keeping the current aspect ratio)."
                accessibilityRole="text"
            >
                1. Resize image to 2900 pixels wide (keeping the current aspect ratio).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="2. If image height is now smaller than 1524, move to Step 3."
                accessibilityRole="text"
            >
                2. If image height is now smaller than 1524, move to Step 3.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If image height is now between 1525 and 1800, resize to a height of 1524 (keeping the current aspect ratio)."
                accessibilityRole="text"
            >
                If image height is now between 1525 and 1800, resize to a height of 1524 (keeping the current aspect ratio).
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If the image was significantly vertical in orientation and thus has a larger height than 1800 or so, the two views will need to be separated (the left image shifted left and the right image shifted right) for proper viewing. Undo the horizontal resize (step 1). Working with the original resolution, multiply the current height by 13 and divide by 7. Resize your canvas’ width to that number (while unchaining your vertical canvas size, so that it does not change). Center your image in the new canvas in the dialog box for resizing the canvas, and choose black as your background color. Select your left view, then cut and paste it to a new layer. Divide the width of your canvas roughly into 4 quadrants (i.e., imagine a line down the center, and then a line down the center of each half). Move the left view so that it is centered on the first line (centered on the left half of the canvas) and your right view so that it is centered on the right half of your canvas. (You can also move the right view so that it is an equal distance from the right edge of the canvas as the left view now is.) Now resize your entire image to a height of 1524 while keeping the aspect ratio locked."
                accessibilityRole="text"
            >
                If the image was significantly vertical in orientation and thus has a larger height than 1800 or so, the two views will need to be separated (the left image shifted left and the right image shifted right) for proper viewing. Undo the horizontal resize (step 1). Working with the original resolution, multiply the current height by 13 and divide by 7. Resize your canvas’ width to that number (while unchaining your vertical canvas size, so that it does not change). Center your image in the new canvas in the dialog box for resizing the canvas, and choose black as your background color. Select your left view, then cut and paste it to a new layer. Divide the width of your canvas roughly into 4 quadrants (i.e., imagine a line down the center, and then a line down the center of each half). Move the left view so that it is centered on the first line (centered on the left half of the canvas) and your right view so that it is centered on the right half of your canvas. (You can also move the right view so that it is an equal distance from the right edge of the canvas as the left view now is.) Now resize your entire image to a height of 1524 while keeping the aspect ratio locked.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="3. Resize your canvas, using a black background, to exactly 3840 pixels wide by 1644 pixels in height. Choose the option to center your image in the new canvas size. Save as a JPG for viewing."
                accessibilityRole="text"
            >
                3. Resize your canvas, using a black background, to exactly 3840 pixels wide by 1644 pixels in height. Choose the option to center your image in the new canvas size. Save as a JPG for viewing.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Final resolution: 3840 x 2160"
                accessibilityRole="text"
            >
                Final resolution: 3840 x 2160
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="1. Resize image to 1830 pixels high (keeping the current aspect ratio)."
                accessibilityRole="text"
            >
                1. Resize image to 1830 pixels high (keeping the current aspect ratio).
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="2. If image width is now between 3500 and 3840, move to Step 3."
                accessibilityRole="text"
            >
                2. If image width is now between 3500 and 3840, move to Step 3.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If image width is now larger than 3840, resize to a width of 3840 (keeping the current aspect ratio)."
                accessibilityRole="text"
            >
                If image width is now larger than 3840, resize to a width of 3840 (keeping the current aspect ratio).
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If the image was significantly vertical in orientation and thus has a width less than 3500 or so, the two views will need to be separated (the left image shifted left and the right image shifted right) for proper viewing. Resize your canvas’ width to 3840 (while unlocking your aspect ratio, so that your vertical canvas size does not change). Center your image in the new canvas in the dialog box for resizing the canvas, and choose black as your background color. Select first your left view and later your right view, cutting them and pasting them to new layers. Divide the width of your canvas roughly into 4 quadrants (i.e., imagine a line down the center, and then a line down the center of each half). Move the left view so that it is centered on the first line (centered on the left half of the canvas) and your right view so that it is centered on the right half of your canvas."
                accessibilityRole="text"
            >
                If the image was significantly vertical in orientation and thus has a width less than 3500 or so, the two views will need to be separated (the left image shifted left and the right image shifted right) for proper viewing. Resize your canvas’ width to 3840 (while unlocking your aspect ratio, so that your vertical canvas size does not change). Center your image in the new canvas in the dialog box for resizing the canvas, and choose black as your background color. Select first your left view and later your right view, cutting them and pasting them to new layers. Divide the width of your canvas roughly into 4 quadrants (i.e., imagine a line down the center, and then a line down the center of each half). Move the left view so that it is centered on the first line (centered on the left half of the canvas) and your right view so that it is centered on the right half of your canvas.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="3. Resize your canvas, using a black background, to exactly 3840 pixels wide by 2160 pixels in height. Choose the option to center your image in the new canvas size. Save as a JPG for viewing."
                accessibilityRole="text"
            >
                3. Resize your canvas, using a black background, to exactly 3840 pixels wide by 2160 pixels in height. Choose the option to center your image in the new canvas size. Save as a JPG for viewing.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Your Mercury Parlorscope can accept medium format slides or Sony 4K phones for digital viewing (if configured to do so; some versions of the Parlarscope omit digital viewing as a feature)."
                accessibilityRole="text"
            >
                Your Mercury Parlorscope can accept medium format slides or Sony 4K phones for digital viewing (if configured to do so; some versions of the Parlarscope omit digital viewing as a feature).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Immersive (60mm) Parlorscope is compatible with the following phones:"
                accessibilityRole="text"
            >
                The Immersive (60mm) Parlorscope is compatible with the following phones:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Sony Xperia Z5 Premium"
                accessibilityRole="text"
            >
                * Sony Xperia Z5 Premium
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Sony Xperia XZ Premium"
                accessibilityRole="text"
            >
                * Sony Xperia XZ Premium
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Sony Xperia 1 series"
                accessibilityRole="text"
            >
                * Sony Xperia 1 series
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The 75mm Parlorscope is compatible only with Sony Xperia 1 series phones."
                accessibilityRole="text"
            >
                The 75mm Parlorscope is compatible only with Sony Xperia 1 series phones.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Each phone has a particular “phone tray” manufactured by Mercury Works, specific to the phone model and the Parlorscope model. Contact us for additional trays."
                accessibilityRole="text"
            >
                Each phone has a particular “phone tray” manufactured by Mercury Works, specific to the phone model and the Parlorscope model. Contact us for additional trays.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="All phone trays enable the phone to be inserted into the side of the parlorscope. When the tray has been inserted all the way, and the right side is flush with the contour of the parlorscope, the phone is in the correct position. When full inserted, you can still plug devices (such as a charging cable or the included slideshow keyboard) into the USB port on the phone, via the hole in the phone tray."
                accessibilityRole="text"
            >
                All phone trays enable the phone to be inserted into the side of the parlorscope. When the tray has been inserted all the way, and the right side is flush with the contour of the parlorscope, the phone is in the correct position. When full inserted, you can still plug devices (such as a charging cable or the included slideshow keyboard) into the USB port on the phone, via the hole in the phone tray.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Instructions for individual phones are provided below."
                accessibilityRole="text"
            >
                Instructions for individual phones are provided below.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Xperia Z5 Premium:" 
                accessibilityRole="text"
            >
                Xperia Z5 Premium:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This model uses a USB Micro port. It will charge with any USB Micro cable plugged into a USB power source. However, in order to use the Mercury slideshow keyboard, you must authorize the keyboard as a device. You must do this every time the phone is rebooted." 
                accessibilityRole="text"
            >
                This model uses a USB Micro port. It will charge with any USB Micro cable plugged into a USB power source. However, in order to use the Mercury slideshow keyboard, you must authorize the keyboard as a device. You must do this every time the phone is rebooted.
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="1. Plug in the keyboard, with phone in tray. (The keyboard is connected, via a USB-C cable, to a USB Micro OTG adapter.)"
                accessibilityRole="text"
            >
                1. Plug in the keyboard, with phone in tray. (The keyboard is connected, via a USB-C cable, to a USB Micro OTG adapter.)
            </Text>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="2. From the pull-down quick menu on the phone, select the gear icon: Settings."
                accessibilityRole="text"
            >
                2. From the pull-down quick menu on the phone, select the gear icon: Settings.
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="3. Device Connection → USB Connectivity → Detect USB Device"
                accessibilityRole="text"
            >
                3. Device Connection → USB Connectivity → Detect USB Device
            </Text>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="4. You won’t get any indication it worked, but it did. Go back to the Home screen and proceed from there."
                accessibilityRole="text"
            >
                4. You won’t get any indication it worked, but it did. Go back to the Home screen and proceed from there.
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="You must also change your Display settings as follows (luckily, these settings are persistent, and you don’t need to repeat this after rebooting the phone):"
                accessibilityRole="text"
            >
                You must also change your Display settings as follows (luckily, these settings are persistent, and you don’t need to repeat this after rebooting the phone):
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Adaptive Brightness: Off"
                accessibilityRole="text"
            >
                * Adaptive Brightness: Off
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Set brightness to maximum"
                accessibilityRole="text"
            >
                * Set brightness to maximum
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Change screen sleep time to 30 minutes"
                accessibilityRole="text"
            >
                * Change screen sleep time to 30 minutes
            </Text>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To view stereo images, you must use the Album app. You can add this to your home screen, but by default it is in the “Apps” folder. When you open Album, it will display all photos on your device by default, in reverse chronological order. To load only a curated set of images, tap the “…” menu button within the Album app, and select “Folder”. Then select the folder you want to load, and only that folder’s contents will be displayed."
                accessibilityRole="text"
            >
                To view stereo images, you must use the Album app. You can add this to your home screen, but by default it is in the “Apps” folder. When you open Album, it will display all photos on your device by default, in reverse chronological order. To load only a curated set of images, tap the “…” menu button within the Album app, and select “Folder”. Then select the folder you want to load, and only that folder’s contents will be displayed.
            </Text>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Tap a photo to enlarge it to full screen size. Make sure there are no overlays on top of it, and insert the phone tray fully into the viewer. If the orientation of the photos is wrong, tilt the phone until it fills the screen properly."
                accessibilityRole="text"
            >
                Tap a photo to enlarge it to full screen size. Make sure there are no overlays on top of it, and insert the phone tray fully into the viewer. If the orientation of the photos is wrong, tilt the phone until it fills the screen properly.
            </Text>

        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="While viewing, use the two keys on the slideshow keyboard to advance forward or backward among the images in the folder."
                accessibilityRole="text"
            >
                While viewing, use the two keys on the slideshow keyboard to advance forward or backward among the images in the folder.
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textAside}
                accessible={true} 
                accessibilityLabel="Important Note: On this phone, each image takes about 6 seconds to load in full resolution. Before then you will see a pixelated, low-resolution version of the image."
                accessibilityRole="text"
            >
                Important Note: On this phone, each image takes about 6 seconds to load in full resolution. Before then you will see a pixelated, low-resolution version of the image.
            </Text>

        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Xperia XZ Premium:" 
                accessibilityRole="text"
            >
                Xperia XZ Premium:
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This model uses a USB-C port. It will charge with any USB cable plugged into a USB power source." 
                accessibilityRole="text"
            >
                This model uses a USB-C port. It will charge with any USB cable plugged into a USB power source.
            </Text>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To connect the Mercury 2-key keyboard, you need a USB C (phone) to USB A (female) OTG cable, then a USB A to USB C cable to connect the keyboard itself. You can use the included OTG cable, or a splitter OTG cable that provides you with one USB A input and one USB C female input for charging. This optional cable allows you to connect the 2-key keyboard at the same time as a USB C charging cable to power your phone simultaneously. We recommend the"
                accessibilityRole="text"
            >
                To connect the Mercury 2-key keyboard, you need a USB C (phone) to USB A (female) OTG cable, then a USB A to USB C cable to connect the keyboard itself. You can use the included OTG cable, or a splitter OTG cable that provides you with one USB A input and one USB C female input for charging. This optional cable allows you to connect the 2-key keyboard at the same time as a USB C charging cable to power your phone simultaneously. We recommend the
            </Text> 
            <View>
                <OpenURLLink url={usbAdapterURL}>MOSWAG USB C OTG Adapter Splitter</OpenURLLink>
            </View>

        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Otherwise, the XZ Premium is used just like the Z5 Premium."
                accessibilityRole="text"
            >
                Otherwise, the XZ Premium is used just like the Z5 Premium.
            </Text> 


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="There are two styles of Mercury Parlorscope, each with different adjustments. Our Immersive Parlorscope and our Budget Parlorscope have three adjustment dials:"
                accessibilityRole="text"
            >
                There are two styles of Mercury Parlorscope, each with different adjustments. Our Immersive Parlorscope and our Budget Parlorscope have three adjustment dials:
            </Text>

        {/*Adjustment Dials Image*/}
            <Pressable onPress={() => setAdjustmentDialsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/adjustmentDials.jpg')}
                />
            </Pressable>
            <Modal 
                visible={adjustmentDialsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={adjustmentDials} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setAdjustmentDialsVisible(false)}
                    onClick={() => setAdjustmentDialsVisible(false)}
                />
            </Modal>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The left and right focus dials independently adjust the focus for each eye. The IPD adjustment adjusts the spacing between the two lenses to match your eyes. When in doubt, the IPD should be adjusted so that the lenses are at the center point."
                accessibilityRole="text"
            >
                The left and right focus dials independently adjust the focus for each eye. The IPD adjustment adjusts the spacing between the two lenses to match your eyes. When in doubt, the IPD should be adjusted so that the lenses are at the center point.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The Mercury 75mm viewer has physically larger lenses that do not have, and do not require, IPD adjustment. This viewer accommodates a wide range of IPD values. Accordingly, it possesses only focus adjustments:"
                accessibilityRole="text"
            >
                The Mercury 75mm viewer has physically larger lenses that do not have, and do not require, IPD adjustment. This viewer accommodates a wide range of IPD values. Accordingly, it possesses only focus adjustments:
            </Text>

        {/*Focus Adjustments Image*/}
            <Pressable onPress={() => setFocusAdjustmentsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/focusAdjustments.jpg')}
                />
            </Pressable>
            <Modal 
                visible={focusAdjustmentsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={focusAdjustments} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setFocusAdjustmentsVisible(false)}
                    onClick={() => setFocusAdjustmentsVisible(false)}
                />
            </Modal>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Due to the large, heavy lenses in this viewer, the focus adjustment must be kept quite firm. Accordingly, it requires a fair amount of pressure to adjust focus. Do so by sliding the left and right sliders forward or backward."
                accessibilityRole="text"
            >
                Due to the large, heavy lenses in this viewer, the focus adjustment must be kept quite firm. Accordingly, it requires a fair amount of pressure to adjust focus. Do so by sliding the left and right sliders forward or backward.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you find that adjustment is too difficult, or that the adjustment is slipping, you can tighten or loosen the screws in the middle of the sliders."
                accessibilityRole="text"
            >
                If you find that adjustment is too difficult, or that the adjustment is slipping, you can tighten or loosen the screws in the middle of the sliders.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="There are several ways to shoot transparencies on the Mercury Stereo system:"
                accessibilityRole="text"
            >
                There are several ways to shoot transparencies on the Mercury Stereo system:
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="1. Shoot 120 slide film." 
                accessibilityRole="text"
            >
                1. Shoot 120 slide film.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Kodak’s E100, Fuji’s Veliva 50, Velvia 100 (not available in US), and Provia 100 are all excellent slide films. They tend to be expensive, and must be processed E-6 (Mercury Works Lab processes this, as do some other labs). They are also slow (50 or 100 ISO) and have a very narrow dynamic range (about 6 stops). This makes small differences in exposure critical. Shooting slide film is only recommended in bright sunlight or other extremely controlled lighting conditions." 
                accessibilityRole="text"
            >
                Kodak’s E100, Fuji’s Veliva 50, Velvia 100 (not available in US), and Provia 100 are all excellent slide films. They tend to be expensive, and must be processed E-6 (Mercury Works Lab processes this, as do some other labs). They are also slow (50 or 100 ISO) and have a very narrow dynamic range (about 6 stops). This makes small differences in exposure critical. Shooting slide film is only recommended in bright sunlight or other extremely controlled lighting conditions.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Note that expired slide film is also available in 70mm, and new slide film available in 4x5 and 135, all of which can be shot on the Mercury."
                accessibilityRole="text"
            >
                Note that expired slide film is also available in 70mm, and new slide film available in 4x5 and 135, all of which can be shot on the Mercury.
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="2. Shoot Motion Picture Film and use M-Chrome service" 
                accessibilityRole="text"
            >
                2. Shoot Motion Picture Film and use M-Chrome service
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="at Mercury Works Labs to create transparencies from your favorite negatives. Kodak Vision 3 65mm films, sold for still photographers by Mercury Works, make excellent slides when processed ECN-2 (rather than C-41) and then printed to transparency using the M-Chrome process. When you order slides from Mercury Works, you can choose to customize your exposure and color balance, giving you far more control over the look of your slides. We can do color or BW slides. We can also make slides from C-41 processed film and BW film, with less predictable contrast and less accurate color." 
                accessibilityRole="text"
            >
                at Mercury Works Labs to create transparencies from your favorite negatives. Kodak Vision 3 65mm films, sold for still photographers by Mercury Works, make excellent slides when processed ECN-2 (rather than C-41) and then printed to transparency using the M-Chrome process. When you order slides from Mercury Works, you can choose to customize your exposure and color balance, giving you far more control over the look of your slides. We can do color or BW slides. We can also make slides from C-41 processed film and BW film, with less predictable contrast and less accurate color.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Significant advantages of this process include:"
                accessibilityRole="text"
            >
                Significant advantages of this process include:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* A wider range of film stocks. Four Vision 3 film stocks exist, each with special characteristics, including speed, color balance, level of grain, etc."
                accessibilityRole="text"
            >
                * A wider range of film stocks. Four Vision 3 film stocks exist, each with special characteristics, including speed, color balance, level of grain, etc.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Higher ISOs. You can shoot at ISO 50 or up to 1600 (with push developing) to cover a much wider array of subjects and shooting conditions."
                accessibilityRole="text"
            >
                * Higher ISOs. You can shoot at ISO 50 or up to 1600 (with push developing) to cover a much wider array of subjects and shooting conditions.
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* The film is significantly cheaper than slide film."
                accessibilityRole="text"
            >
                * The film is significantly cheaper than slide film.
            </Text>

        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Much greater exposure latitude to capture more details in highlights and shadows. This I much more forgiving than slide film for incorrect exposure as well."
                accessibilityRole="text"
            >
                * Much greater exposure latitude to capture more details in highlights and shadows. This I much more forgiving than slide film for incorrect exposure as well.
            </Text>

        {/*Bullet 5*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Ability to make multiple copies of your favorite negatives!"
                accessibilityRole="text"
            >
                * Ability to make multiple copies of your favorite negatives!
            </Text>

        {/*Bullet 6*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Ability to change the color balance and brightness (exposure) of your slides, including making multiple versions."
                accessibilityRole="text"
            >
                * Ability to change the color balance and brightness (exposure) of your slides, including making multiple versions.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="3. Shoot glass negatives and contact print to glass (or film) transparencies."
                accessibilityRole="text"
            >
                3. Shoot glass negatives and contact print to glass (or film) transparencies.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="This special process yields amazing results. Contact Mercury Works for more information. We can do the processing and positives for you." 
                accessibilityRole="text"
            >
                This special process yields amazing results. Contact Mercury Works for more information. We can do the processing and positives for you.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Standard 80x132mm cardboard slide mounts are available from Mercury Works, as well as other vendors and individuals online. The following is a guide to mounting your transparencies (slides or M0Chrome prints) in these mounts. With a bit of practice, it becomes fast, easy, and fun!"
                accessibilityRole="text"
            >
                Standard 80x132mm cardboard slide mounts are available from Mercury Works, as well as other vendors and individuals online. The following is a guide to mounting your transparencies (slides or M0Chrome prints) in these mounts. With a bit of practice, it becomes fast, easy, and fun!
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="1. Choose a mount."
                accessibilityRole="text"
            >
                1. Choose a mount.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you shot your image with a 112mm back (Horseman 6x12, unmodified Da Yi 6x12, Mercury 65/70mm, Mercury 135 Pano), you will usually use a 45mm wide window. Slide mounts of this width can be purchased directly from Mercury Works. If you shot with a 120mm modded Da Yi back, or a 4x5 sheet film holder, you can use between a 45mm and 50mm wide window; choose according to where you’d like to mask." 
                accessibilityRole="text"
            >
                If you shot your image with a 112mm back (Horseman 6x12, unmodified Da Yi 6x12, Mercury 65/70mm, Mercury 135 Pano), you will usually use a 45mm wide window. Slide mounts of this width can be purchased directly from Mercury Works. If you shot with a 120mm modded Da Yi back, or a 4x5 sheet film holder, you can use between a 45mm and 50mm wide window; choose according to where you’d like to mask.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Then choose the height of your stereo window. This depends entirely on aesthetics: how much you wish to mask out (too much sky, too much foreground, etc.)."
                accessibilityRole="text"
            >
                Then choose the height of your stereo window. This depends entirely on aesthetics: how much you wish to mask out (too much sky, too much foreground, etc.).
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="2. Cut out your chips."
                accessibilityRole="text"
            >
                2. Cut out your chips.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These are your individual left and right images. First lay out your stereo pair as developed on a light table, oriented so that you can read the text printed on the film. If there is no text, place your film emulsion side down, and such that your images are look right-side-up and not filled left-to-right." 
                accessibilityRole="text"
            >
                These are your individual left and right images. First lay out your stereo pair as developed on a light table, oriented so that you can read the text printed on the film. If there is no text, place your film emulsion side down, and such that your images are look right-side-up and not filled left-to-right.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Now trim the left edge of the leftmost image and the right edge of the rightmost image."
                accessibilityRole="text"
            >
                Now trim the left edge of the leftmost image and the right edge of the rightmost image.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Cut your film down the center, separating the two chips."
                accessibilityRole="text"
            >
                Cut your film down the center, separating the two chips.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Move the rightmost chip to the left side and the leftmost chip to the right side (swap or “transpose” them)."
                accessibilityRole="text"
            >
                Move the rightmost chip to the left side and the leftmost chip to the right side (swap or “transpose” them).
            </Text>

        {/*Paragraph 8*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="3. Prep your slide mount."
                accessibilityRole="text"
            >
                3. Prep your slide mount.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="First, crease it on the provided crease line, folding it away from the indented/embossed line. Then, make sure that the side with the larger squares and no rounded corners is sitting down on your light table, with the other side sticking up vertically." 
                accessibilityRole="text"
            >
                First, crease it on the provided crease line, folding it away from the indented/embossed line. Then, make sure that the side with the larger squares and no rounded corners is sitting down on your light table, with the other side sticking up vertically.
            </Text>

        {/*Paragraph 9*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Next, add double-sided mounting tabs to the base of your slide mount. We recommend using eight per mount, as seen below."
                accessibilityRole="text"
            >
                Next, add double-sided mounting tabs to the base of your slide mount. We recommend using eight per mount, as seen below.
            </Text>

        {/*Paragraph 10*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In order to get some of these to fit, you will need to cut them in half, lengthwise, and stick half on each side. You can do this for all of them to conserve tabs if you wish."
                accessibilityRole="text"
            >
                In order to get some of these to fit, you will need to cut them in half, lengthwise, and stick half on each side. You can do this for all of them to conserve tabs if you wish.
            </Text>

        {/*Mounting Tabs Image*/}
            <Pressable onPress={() => setMountingTabsVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/mountingTabs.jpg')}
                />
            </Pressable>
            <Modal 
                visible={mountingTabsVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={mountingTabs} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setMountingTabsVisible(false)}
                    onClick={() => setMountingTabsVisible(false)}
                />
            </Modal>

        {/*Paragraph 11*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="4. Position one of your chips."
                accessibilityRole="text"
            >
                4. Position one of your chips.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="At this point your should put on cotton gloves. I recommend this procedure:" 
                accessibilityRole="text"
            >
                At this point your should put on cotton gloves. I recommend this procedure:
            </Text>

        {/*Paragraph 12*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(a) Choose either the top of bottom of the slide to be your reference edge. The other one will get partially masked (how much depends on which slide mount you’re using). For instance, if your photo is a portrait and you like the headroom, choose the top as your reference edge. If your subject is near the ground and the top of your image is a lot of sky, choose the bottom as your reference edge, etc."
                accessibilityRole="text"
            >
                (a) Choose either the top of bottom of the slide to be your reference edge. The other one will get partially masked (how much depends on which slide mount you’re using). For instance, if your photo is a portrait and you like the headroom, choose the top as your reference edge. If your subject is near the ground and the top of your image is a lot of sky, choose the bottom as your reference edge, etc.
            </Text>

        {/*Paragraph 13*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(b) When mounting the right chip, use the left edge as your second reference edge. When mounting the left chip, use the right edge as your second reference. In other words, the edge near the center of the slide mount is your automatic reference."
                accessibilityRole="text"
            >
                (b) When mounting the right chip, use the left edge as your second reference edge. When mounting the left chip, use the right edge as your second reference. In other words, the edge near the center of the slide mount is your automatic reference.
            </Text>

        {/*Paragraph 14*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(c) Now that you have two reference edges, line up the corner where they meet on your slide with the corresponding corner of the slide mount’s window. Use your reference edges to match the edges of the window, allowing your slide to be completely straight (no rotation/slant)."
                accessibilityRole="text"
            >
                (c) Now that you have two reference edges, line up the corner where they meet on your slide with the corresponding corner of the slide mount’s window. Use your reference edges to match the edges of the window, allowing your slide to be completely straight (no rotation/slant).
            </Text>

        {/*Paragraph 15*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(d) Holding down the slide at two different points to keep it steady, use a finger on your other hand to push the slide down over all of the adhesive tabs, affixing it (somewhat) in place."
                accessibilityRole="text"
            >
                (d) Holding down the slide at two different points to keep it steady, use a finger on your other hand to push the slide down over all of the adhesive tabs, affixing it (somewhat) in place.
            </Text>

        {/*Paragraph 16*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="(e) Do the same to the other chip. You now have a preliminary slide position."
                accessibilityRole="text"
            >
                (e) Do the same to the other chip. You now have a preliminary slide position.
            </Text>

        {/*Paragraph 17*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="5. Measure your near and far homologs."
                accessibilityRole="text"
            >
                5. Measure your near and far homologs.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="These are two points that are visible and identical in both chips. One should be at or close to the nearest point in the foreground, and one should be as far away as possible (near or at infinity)." 
                accessibilityRole="text"
            >
                These are two points that are visible and identical in both chips. One should be at or close to the nearest point in the foreground, and one should be as far away as possible (near or at infinity).
            </Text>

        {/*Paragraph 18*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Your near homologs should be at least 62mm apart. Your far homologs should be no more than 65mm apart. If both of these are true, and your images are properly vertically aligned, without rotation/slant, you have a slide that’s ready to be comfortably viewed!"
                accessibilityRole="text"
            >
                Your near homologs should be at least 62mm apart. Your far homologs should be no more than 65mm apart. If both of these are true, and your images are properly vertically aligned, without rotation/slant, you have a slide that’s ready to be comfortably viewed!
            </Text>

        {/*Paragraph 19*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If your preliminary mount doesn’t satisfy these conditions, you’ll need to reposition both of your chips. Let’s say that your near homologs only measured 60mm apart. Unless you want the object you’re measuring to pop in front of the stereo window (i.e., come “out of the slide” at your viewer), you’ll need to move your right chip 1mm to the right, and your left chip 1mm to the left. You can do this easily. Of course, sometimes it works just fine to have an object come out of the slide, especially if it doesn’t touch any of the borders of the image."
                accessibilityRole="text"
            >
                If your preliminary mount doesn’t satisfy these conditions, you’ll need to reposition both of your chips. Let’s say that your near homologs only measured 60mm apart. Unless you want the object you’re measuring to pop in front of the stereo window (i.e., come “out of the slide” at your viewer), you’ll need to move your right chip 1mm to the right, and your left chip 1mm to the left. You can do this easily. Of course, sometimes it works just fine to have an object come out of the slide, especially if it doesn’t touch any of the borders of the image.
            </Text>

        {/*Paragraph 20*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="6. View your slide"
                accessibilityRole="text"
            >
                6. View your slide
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="with a map viewer, prismatic viewing glasses, or an Owl viewer (while the slide is still on your illuminated light table). Make sure that it is easy and comfortable to view, and looks good to you." 
                accessibilityRole="text"
            >
                with a map viewer, prismatic viewing glasses, or an Owl viewer (while the slide is still on your illuminated light table). Make sure that it is easy and comfortable to view, and looks good to you.
            </Text>

        {/*Paragraph 21*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="7. Tape down your chips with mylar tape."
                accessibilityRole="text"
            >
                7. Tape down your chips with mylar tape.
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Wsilver mylar tape is extremely thin, extremely strong, and archival. Use ¼ inch tape to secure your chips to the mount." 
                accessibilityRole="text"
            >
                Wsilver mylar tape is extremely thin, extremely strong, and archival. Use ¼ inch tape to secure your chips to the mount.
            </Text>

        {/*Mylar Tape Image*/}
            <Pressable onPress={() => setMylarTapeVisible(true)}>
                <Image
                    style={guideStyle.image}
                    source={require('../assets/images/mylarTape.jpg')}
                />
            </Pressable>
            <Modal 
                visible={mylarTapeVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={mylarTape} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setMylarTapeVisible(false)}
                    onClick={() => setMylarTapeVisible(false)}
                />
            </Modal>

        {/*Paragraph 22*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Once your slide is “legal” with regard to its near and far homologs, or you are aware of what is violating the law and are happy with the effect, you can glue your slide."
                accessibilityRole="text"
            >
                Once your slide is “legal” with regard to its near and far homologs, or you are aware of what is violating the law and are happy with the effect, you can glue your slide.
            </Text>

        {/*Paragraph 23*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="We recommend using "
                accessibilityRole="text"
            >
                We recommend using 
            </Text>
            <View>
                <OpenURLLink url={glueURL}>Neutral pH (archival) PVA glue</OpenURLLink>
            </View>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Apply in an “I” pattern. Make sure that you apply plenty of glue to the upper “memo” portion of the slide mount (above your chips). Then draw a line of glue down the center septum of the mount, and across the bottom, left edge to right edge. Try not to get glue directly on your chips. Also note that if your chips come too close to one or more of the edges of the mount, you’ll need to further trim your chips to prevent them protruding from the mount, and to keep a “lane” clear for glue. When mounting in a mount with 50mm or larger windows, your septum will be very small, and it is best to keep it free from glue. Note that very wide slides such as these will not be as strong or rigid."
                accessibilityRole="text"
            >
                Apply in an “I” pattern. Make sure that you apply plenty of glue to the upper “memo” portion of the slide mount (above your chips). Then draw a line of glue down the center septum of the mount, and across the bottom, left edge to right edge. Try not to get glue directly on your chips. Also note that if your chips come too close to one or more of the edges of the mount, you’ll need to further trim your chips to prevent them protruding from the mount, and to keep a “lane” clear for glue. When mounting in a mount with 50mm or larger windows, your septum will be very small, and it is best to keep it free from glue. Note that very wide slides such as these will not be as strong or rigid. 
            </Text>

        {/*Paragraph 24*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Alternately, for a less permanent slide, you can forego glue and simply tape the bottom and sides of the mount closed. This will create an aesthetically less pleasing slide that will be in danger of popping open over time."
                accessibilityRole="text"
            >
                Alternately, for a less permanent slide, you can forego glue and simply tape the bottom and sides of the mount closed. This will create an aesthetically less pleasing slide that will be in danger of popping open over time.
            </Text>

        {/*Paragraph 25*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="If you glued your mount, place it on top of a pre-folded piece of wax paper, fold the slide closed, fold into the piece of wax paper, and insert into a book. Immediately place several other heavy books or other objects on top of it. Let dry for at least several hours (overnight to be extremely careful)."
                accessibilityRole="text"
            >
                If you glued your mount, place it on top of a pre-folded piece of wax paper, fold the slide closed, fold into the piece of wax paper, and insert into a book. Immediately place several other heavy books or other objects on top of it. Let dry for at least several hours (overnight to be extremely careful).
            </Text>

        {/*Paragraph 26*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="8. Test your slide out"
                accessibilityRole="text"
            >
                8. Test your slide out
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="in a Mercury Parlorscope or other MF3D viewer and bask in its glory!" 
                accessibilityRole="text"
            >
                in a Mercury Parlorscope or other MF3D viewer and bask in its glory!
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="All Mercury Parlorscopes are designed to view physical slides. This is accomplished by inserting a “slide carrier” into the top slot of the viewer. All Parlorscopes accept the same universal set of carriers. The only difference is that Parlorscopes that use available light (“Steal the Light” versions) should have the white translucent frame removed from their slide carriers to brighten the image. Parlorscopes with build-in lighting sources should be used with the white translucent frame in place. This serves to further diffuse the light and to contain any dust and debris deposited into the carrier as a result of swapping slides."
                accessibilityRole="text"
            >
                All Mercury Parlorscopes are designed to view physical slides. This is accomplished by inserting a “slide carrier” into the top slot of the viewer. All Parlorscopes accept the same universal set of carriers. The only difference is that Parlorscopes that use available light (“Steal the Light” versions) should have the white translucent frame removed from their slide carriers to brighten the image. Parlorscopes with build-in lighting sources should be used with the white translucent frame in place. This serves to further diffuse the light and to contain any dust and debris deposited into the carrier as a result of swapping slides.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="As dust and debris build up inside the slide carrier, it can be cleaned with a lens-cleaning cloth or (recommended) an anti-static cloth."
                accessibilityRole="text"
            >
                As dust and debris build up inside the slide carrier, it can be cleaned with a lens-cleaning cloth or (recommended) an anti-static cloth.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works makes a number of slide carriers, for different types of slides:"
                accessibilityRole="text"
            >
                Mercury Works makes a number of slide carriers, for different types of slides:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* 80x132mm cardboard slides: the standard MF3D slide mount. These mounts are available from Mercury Works and other companies and individuals online."
                accessibilityRole="text"
            >
                * 80x132mm cardboard slides: the standard MF3D slide mount. These mounts are available from Mercury Works and other companies and individuals online.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* 3D World plastic slides: this defunct format utilizes snap-together plastic mounts"
                accessibilityRole="text"
            >
                * 3D World plastic slides: this defunct format utilizes snap-together plastic mounts
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Thin Glass Slides: up to 1.5mm thick, up to 131mm wide"
                accessibilityRole="text"
            >
                * Thin Glass Slides: up to 1.5mm thick, up to 131mm wide
            </Text>

        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Thick Glass Slides: 2-3mm thick, up to 131mm wide"
                accessibilityRole="text"
            >
                * Thick Glass Slides: 2-3mm thick, up to 131mm wide
            </Text>

        {/*Bullet 5*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Realist: The standard mount for 135 format slides"
                accessibilityRole="text"
            >
                * Realist: The standard mount for 135 format slides
            </Text>

        {/*Paragraph 4*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="All slide carriers work in all of our Parlorscopes."
                accessibilityRole="text"
            >
                All slide carriers work in all of our Parlorscopes.
            </Text>

        {/*Paragraph 5*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="In our Dual Format Parlorscopes, which work for both slides and digital viewing via 4K phones, you will need to first insert a Phone Plug Tray into the phone slot on the side of the viewer. This blocks light from the side and provides the proper path for the slide carrier to insert from the top of the viewer."
                accessibilityRole="text"
            >
                In our Dual Format Parlorscopes, which work for both slides and digital viewing via 4K phones, you will need to first insert a Phone Plug Tray into the phone slot on the side of the viewer. This blocks light from the side and provides the proper path for the slide carrier to insert from the top of the viewer.
            </Text>

        {/*Paragraph 6*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The standard cardboard slide carrier, once inserted, does not need to be removed in order to change slides. Simply grasp the top of the slide mount and pull it out, and drop another slide in. You may, however, remove or partially remove the slide carrier if a slide becomes stuck or it makes it easier for you to grasp. All other slide carriers require you to remove the carrier to change slides. Each slide carrier has to tabs or “ears” that stick above the body of the Parlorscope to make this an easy, instantaneous process."
                accessibilityRole="text"
            >
                The standard cardboard slide carrier, once inserted, does not need to be removed in order to change slides. Simply grasp the top of the slide mount and pull it out, and drop another slide in. You may, however, remove or partially remove the slide carrier if a slide becomes stuck or it makes it easier for you to grasp. All other slide carriers require you to remove the carrier to change slides. Each slide carrier has to tabs or “ears” that stick above the body of the Parlorscope to make this an easy, instantaneous process.
            </Text>

        {/*Paragraph 7*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For Parlorscope optical adjustments, see Part IV of this Guide, above."
                accessibilityRole="text"
            >
                For Parlorscope optical adjustments, see Part IV of this Guide, above.
            </Text>



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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Mercury Works publishes a list of recommended lenses for your Stereo 12 at "
                accessibilityRole="text"
            >
                Mercury Works publishes a list of recommended lenses for your Stereo 12 at
            </Text>
            <View>
                <OpenURLLink url={mercuryStereoURL}>www.mercurystereo.com</OpenURLLink>
            </View>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="but the camera is compatible with many more lenses that either fall outside of our recommended guidelines or simply haven’t been tested by us. You can use any compatible lens with a bit of testing. Here are the requirements for a lens to be compatible with the Stereo 12:"
                accessibilityRole="text"
            >
                but the camera is compatible with many more lenses that either fall outside of our recommended guidelines or simply haven’t been tested by us. You can use any compatible lens with a bit of testing. Here are the requirements for a lens to be compatible with the Stereo 12:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* It fits into a shutter model officially supported by the camera (see next section) or a shutter no larger than our supported shutters."
                accessibilityRole="text"
            >
                * It fits into a shutter model officially supported by the camera (see next section) or a shutter no larger than our supported shutters.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Neither its front element nor its rear element is larger in diameter than 60mm. In practice, this generally means a 58mm filter thread."
                accessibilityRole="text"
            >
                * Neither its front element nor its rear element is larger in diameter than 60mm. In practice, this generally means a 58mm filter thread.
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Its flange focal distance is at least 52mm. That’s at the extreme end and will come with a number of restrictions on use; 60mm or more is recommended for more focal and mounting flexibility. The shutter it is mounted in can also impact this number. Flange focal distance can be found in the official datasheets of major lens manufacturers, or measured carefully; it’s the distance between the back of the shutter (the surface that rests against the front of the lensboard) and the film plane when the lens is focused at infinity."
                accessibilityRole="text"
            >
                * Its flange focal distance is at least 52mm. That’s at the extreme end and will come with a number of restrictions on use; 60mm or more is recommended for more focal and mounting flexibility. The shutter it is mounted in can also impact this number. Flange focal distance can be found in the official datasheets of major lens manufacturers, or measured carefully; it’s the distance between the back of the shutter (the surface that rests against the front of the lensboard) and the film plane when the lens is focused at infinity.
            </Text>

        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* An image circle of at least 60mm. This is the bare minimum, and won’t fully cover your frame at infinity. But because ordinary stereo photos are taken at hyperfocal distances or (more commonly) much closer distances, a 60mm image circle will cover your frame for focal distances 10ft and closer. A 75mm image circle will fully cover infinity focus at hyperfocal distances, and a 79mm image circle will cover at all focal distances (not necessary except for specialty hyperstereo shooting)."
                accessibilityRole="text"
            >
                * An image circle of at least 60mm. This is the bare minimum, and won’t fully cover your frame at infinity. But because ordinary stereo photos are taken at hyperfocal distances or (more commonly) much closer distances, a 60mm image circle will cover your frame for focal distances 10ft and closer. A 75mm image circle will fully cover infinity focus at hyperfocal distances, and a 79mm image circle will cover at all focal distances (not necessary except for specialty hyperstereo shooting).
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="For optimal stereo results we recommend that the focal length of your lenses be no longer than 105mm. However, this is not a strict requirement. You can use longer focal lengths for unique results, hyperstereo photography, and mono photography."
                accessibilityRole="text"
            >
                For optimal stereo results we recommend that the focal length of your lenses be no longer than 105mm. However, this is not a strict requirement. You can use longer focal lengths for unique results, hyperstereo photography, and mono photography.
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="While Mercury makes lensboards for most common shutters (see table below), there are many vintage shutters that we haven’t tested with the Stereo 12 but which would work just fine. A shutter will generally be compatible if it isn’t larger in diameter (including controls and ports) than 60mm, but sometimes even longer levers are okay as long as they can be oriented away from the center of the lensboard."
                accessibilityRole="text"
            >
                While Mercury makes lensboards for most common shutters (see table below), there are many vintage shutters that we haven’t tested with the Stereo 12 but which would work just fine. A shutter will generally be compatible if it isn’t larger in diameter (including controls and ports) than 60mm, but sometimes even longer levers are okay as long as they can be oriented away from the center of the lensboard.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Only set-and-release shutters are compatible with electronic actuation. Also, some shutters may be physically compatible with the Stereo 12 but you won’t be able to orient their actuation levers in a way that makes them electronically triggerable. In either of these cases, the shutters can still be used without electronic actuation. We make a double-cable release adapter for these lenses, and they can be manually triggered via a simultaneous plunger press in that configuration. Note, however, that the shutters won’t be in perfect sync, and thus this isn’t a viable setup for rapidly moving subjects."
                accessibilityRole="text"
            >
                Only set-and-release shutters are compatible with electronic actuation. Also, some shutters may be physically compatible with the Stereo 12 but you won’t be able to orient their actuation levers in a way that makes them electronically triggerable. In either of these cases, the shutters can still be used without electronic actuation. We make a double-cable release adapter for these lenses, and they can be manually triggered via a simultaneous plunger press in that configuration. Note, however, that the shutters won’t be in perfect sync, and thus this isn’t a viable setup for rapidly moving subjects.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Let us know if you have a pair of shutters that you believe to be compatible but aren’t recommended. We can create a lensboard for you. We just need to know the diameter of the rear threads and the diameter of the retaining ring/flange."
                accessibilityRole="text"
            >
                Let us know if you have a pair of shutters that you believe to be compatible but aren’t recommended. We can create a lensboard for you. We just need to know the diameter of the rear threads and the diameter of the retaining ring/flange.
            </Text>


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

        {/*Supported Shutters Table Image*/}
            <Pressable onPress={() => setSupportedShuttersTableVisible(true)}>
                <Image
                    style={guideStyle.imageTableSmall}
                    source={require('../assets/images/supportedShuttersTable.png')}
                />
            </Pressable>
            <Modal 
                visible={supportedShuttersTableVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={supportedShuttersTable} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setSupportedShuttersTableVisible(false)}
                    onClick={() => setSupportedShuttersTableVisible(false)}
                />
            </Modal>

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

        {/*Electronic Lensboards Table Image*/}
            <Pressable onPress={() => setElectronicLensboardsTableVisible(true)}>
                <Image
                    style={guideStyle.imageTableSmall}
                    source={require('../assets/images/electronicLensboardsTable.png')}
                />
            </Pressable>
            <Modal 
                visible={electronicLensboardsTableVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={electronicLensboardsTable} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setElectronicLensboardsTableVisible(false)}
                    onClick={() => setElectronicLensboardsTableVisible(false)}
                />
            </Modal>

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

            {/*Manual Lensboards Table Image*/}
            <Pressable onPress={() => setManualLensboardsTableVisible(true)}>
                <Image
                    style={guideStyle.imageTableSmall}
                    source={require('../assets/images/manualLensboardsTable.png')}
                />
            </Pressable>
            <Modal 
                visible={manualLensboardsTableVisible} 
                transparent={true}
            >
                <ImageViewer 
                    imageUrls={manualLensboardsTable} 
                    enableSwipeDown={true}
                    onSwipeDown={() => setManualLensboardsTableVisible(false)}
                    onClick={() => setManualLensboardsTableVisible(false)}
                />
            </Modal>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="See separate document, “Lens and Shutter Assembly”" 
                accessibilityRole="text"
            >
                See separate document, “Lens and Shutter Assembly”
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="To protect the surface finish of your camera, we recommend using a folding, velcro-secured, padded gear cover." 
                accessibilityRole="text"
            >
                To protect the surface finish of your camera, we recommend using a folding, velcro-secured, padded gear cover.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="The most delicate aspect of the Stereo 12 system is its electronic lensboard. When traveling with the camera in a backpack of suitcase we highly recommend protecting your lensboard with a Mercury Lensboard Shell (see Advanced Accessories section of this Guide for details)." 
                accessibilityRole="text"
            >
                The most delicate aspect of the Stereo 12 system is its electronic lensboard. When traveling with the camera in a backpack of suitcase we highly recommend protecting your lensboard with a Mercury Lensboard Shell (see Advanced Accessories section of this Guide for details).
            </Text>


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

        {/*Paragraph 1*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Symptom: Electronic Lensboard Won’t Trigger"
                accessibilityRole="text"
            >
                Symptom: Electronic Lensboard Won’t Trigger
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Possible Problems:" 
                accessibilityRole="text"
            >
                Possible Problems:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* No batteries or drained batteries." 
                accessibilityRole="text"
            >
                * No batteries or drained batteries.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Blown fuse. Check fuse when back is removed and replace with 20mm 1.5amp slow blow fuse if necessary." 
                accessibilityRole="text"
            >
                * Blown fuse. Check fuse when back is removed and replace with 20mm 1.5amp slow blow fuse if necessary.
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Lensboard not properly plugged in. Check to make sure that cable is fully plugged in to both lensboard and camera port. Especially the first few times, this plug may meet resistance and feel like it is plugged all the way in, when it isn’t. Only when the metal part of the plug has nearly fully disappeared into the port is it all the way plugged in." 
                accessibilityRole="text"
            >
                * Lensboard not properly plugged in. Check to make sure that cable is fully plugged in to both lensboard and camera port. Especially the first few times, this plug may meet resistance and feel like it is plugged all the way in, when it isn’t. Only when the metal part of the plug has nearly fully disappeared into the port is it all the way plugged in.
            </Text>

        {/*Paragraph 2*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Symptom: Electronic Lensboard triggers but one or both of my shutters does not"
                accessibilityRole="text"
            >
                Symptom: Electronic Lensboard triggers but one or both of my shutters does not
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Possible Problems:" 
                accessibilityRole="text"
            >
                Possible Problems:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Batteries are weak or old. Check that they are within their usable dates and not drained. Test with fresh batteries." 
                accessibilityRole="text"
            >
                * Batteries are weak or old. Check that they are within their usable dates and not drained. Test with fresh batteries.
            </Text>

        {/*Bullet 2*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Solenoid connecting wire is not properly tensioned. The wire must be wrapped tightly around both the shutter release lever and the solenoid piston, and the length must be such that when the piston is released the shutter lever can return fully to its rest position (if it doesn’t, lengthen the wire between the two), and the shutter trigger can be tripped within the piston’s range of motion (if it can’t, shorten the wire between the two)." 
                accessibilityRole="text"
            >
                * Solenoid connecting wire is not properly tensioned. The wire must be wrapped tightly around both the shutter release lever and the solenoid piston, and the length must be such that when the piston is released the shutter lever can return fully to its rest position (if it doesn’t, lengthen the wire between the two), and the shutter trigger can be tripped within the piston’s range of motion (if it can’t, shorten the wire between the two).
            </Text>

        {/*Bullet 3*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* Shutter has become loose in its mount and is turning slightly when you put pressure on it to cock it. This small rotation of the shutter and mis-tension the wire connection. To fix, reposition the shutter and tighten down the retaining ring on the back of the lensboard. Then consider adding some hot glue to the back of the retaining ring (not touching the shutter’s threads) as explained in the lens and shutter assembly guide and online video." 
                accessibilityRole="text"
            >
                * Shutter has become loose in its mount and is turning slightly when you put pressure on it to cock it. This small rotation of the shutter and mis-tension the wire connection. To fix, reposition the shutter and tighten down the retaining ring on the back of the lensboard. Then consider adding some hot glue to the back of the retaining ring (not touching the shutter’s threads) as explained in the lens and shutter assembly guide and online video.
            </Text>

        {/*Bullet 4*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* The shutter is not tripping as smoothly as it should. It may require a CLA from a skilled shutter repairer." 
                accessibilityRole="text"
            >
                * The shutter is not tripping as smoothly as it should. It may require a CLA from a skilled shutter repairer.
            </Text>

        {/*Paragraph 3*/}
            <Text 
                style={guideStyle.textSubSubtitle}
                accessible={true} 
                accessibilityLabel="Symptom: Electronic actuator (solenoid) detached from lensboard"
                accessibilityRole="text"
            >
                Symptom: Electronic actuator (solenoid) detached from lensboard
            </Text>
            <Text 
                style={guideStyle.textBody}
                accessible={true} 
                accessibilityLabel="Possible Problems:" 
                accessibilityRole="text"
            >
                Possible Problems:
            </Text>

        {/*Bullet 1*/}
            <Text 
                style={guideStyle.textBullet}
                accessible={true} 
                accessibilityLabel="* We always recommend that you protect your lensboards with our Lensboard Shells, as the most vulnerable components are their actuators. An impact or great deal of pressure against them can in some cases snap them off the lensboard. If this happens, you can glue them back together. We recommend using rubber cement or E6000: glues with some flex. Hard glues are far more likely to fail under the conditions that pertain to shooting this camera. Hold the actuator in place with blue painter’s tape or other tape until the glue cures. In an emergency, tape alone can be used to hold the actuator firmly in place." 
                accessibilityRole="text"
            >
                * We always recommend that you protect your lensboards with our Lensboard Shells, as the most vulnerable components are their actuators. An impact or great deal of pressure against them can in some cases snap them off the lensboard. If this happens, you can glue them back together. We recommend using rubber cement or E6000: glues with some flex. Hard glues are far more likely to fail under the conditions that pertain to shooting this camera. Hold the actuator in place with blue painter’s tape or other tape until the glue cures. In an emergency, tape alone can be used to hold the actuator firmly in place.
            </Text>

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
        marginTop: 55,
        margin: 5,
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
        color: 'red',
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
    buttonLevel1: {
      margin: 8,
      topMargin: 15,
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
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: 10,
    },
    imageTable: {
        width: 300,
        height: 850,
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: 10,
    },
    imageTableSmall: {
        width: 300,
        height: 550,
        resizeMode: 'contain',
        alignSelf: 'center',
        margin: 10,
    },
    link: { 
        color: '#007AFF', 
        alignSelf: 'center',
        fontSize: 14, 
    },
    table: {
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    tableHeader: {
        backgroundColor: 'lightgray',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footer: {
        backgroundColor: 'black',
        position: 'fixed',
    },
  });

export default UserGuideScreen;