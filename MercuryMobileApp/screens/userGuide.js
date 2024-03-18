import * as React from 'react';
import { StyleSheet, View , Text, SafeAreaView, TextInput, Button, ScrollView, Modal, Image, Pressable} from 'react-native';

import {wrapScrollView, useScrollIntoView,} from 'react-native-scroll-into-view';
import ImageViewer from 'react-native-image-zoom-viewer';


const CustomScrollView = wrapScrollView(ScrollView);

const UserGuideContent = () => {
    const scrollIntoView = useScrollIntoView();

    //references for jumping down page from table of contents
    const introRef = React.useRef();
    const partIRef = React.useRef();
    const gettingToKnowRef = React.useRef();

    //state variable for Modals, which will be used to open and close the images
    const [modal1Visible, setModal1Visible] = React.useState(false);
    const [modal2Visible, setModal2Visible] = React.useState(false);


    //image references
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

    return(
        <SafeAreaView>
            <Text style={guideStyle.textTitle} accessible={true} accessibilityLabel="Stereo System User Guide" accessibilityRole="text">Stereo System User Guide</Text>
            <Text style={guideStyle.noteText} accessible={true} accessibilityLabel="Version 0.8" accessibilityRole="text">Version 0.8</Text>


            <Text style={guideStyle.textSubtitle} accessible={true} accessibilityLabel="Table of contents" accessibilityRole="text">Table of Contents</Text>
            

            {/*CHANGE BUTTON STYLING BACK TO BLUE */}
            <View style={guideStyle.button} accessible={true} accessibilityLabel="Introduction to Medium Format Stereo Photography" accessibilityHint="Jump to the introduction section" accessibilityRole="button">
                <Button 
                    title= "Introduction to Medium Format Stereo Photography"
                    onPress={() => scrollIntoView(introRef.current)}
                    color="#000000"
                />
            </View>

            <View style={guideStyle.button} accessible={true} accessibilityLabel="PART I: CAMERA BASICS" accessibilityHint="Jump to PART I: CAMERA BASICS" accessibilityRole="button">
                <Button 
                    title= "PART I: CAMERA BASICS"
                    onPress={() => scrollIntoView(partIRef.current)}
                    color="#000000"
                />
            </View>
            <View style={guideStyle.buttonLevel2} accessible={true} accessibilityLabel="Getting to Know Your Camera" accessibilityHint="Jump to Getting to Know Your Camera in Part I" accessibilityRole="button">
                <Button 
                    title= "Getting to Know Your Camera"
                    onPress={() => scrollIntoView(partIRef.current)}
                    color="#000000"
                />
            </View>

            <View ref={introRef}>
                <Text 
                    style={guideStyle.textSubtitle}
                    accessible={true} 
                    accessibilityLabel="Introduction to Medium Format Stereo Photography" 
                    accessibilityRole="text"
                >
                    Introduction to Medium Format Stereo Photography
                </Text>
            </View>

                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="Stereo (3D) imagery was invented, in drawn form, before photography, and immediately upon the invention of photography, photographers began making stereo images. For decades in the UK, stereo photography was more popular than the mono, or flat, form. There was a large market for it: photographers produced stereographs (prints of stereo images) in standardized forms, as the Victorians would purchase new sets constantly as entertainment. This was an early form of of immersive 3D media. The popularity of stereo photography continued into the 1930s, having spread to the United States. By this time, most major camera manufacturers in Europe were producing various stereo cameras, first for shooting on glass plates, and later, after Kodak developed roll film, on that format." 
                    accessibilityRole="text"
                >
                    Stereo (3D) imagery was invented, in drawn form, before photography, and immediately upon the invention of photography, photographers began making stereo images. For decades in the UK, stereo photography was more popular than the mono, or flat, form. There was a large market for it: photographers produced stereographs (prints of stereo images) in standardized forms, as the Victorians would purchase new sets constantly as entertainment. This was an early form of of immersive 3D media. The popularity of stereo photography continued into the 1930s, having spread to the United States. By this time, most major camera manufacturers in Europe were producing various stereo cameras, first for shooting on glass plates, and later, after Kodak developed roll film, on that format.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="Medium format is the ideal stereoscopic format, because two 6x6 views (single images) fit together, almost by magic, at the same distance as the human eyes do from one another. This means that they fill a film strip (negative or positive) without any wasted distance between them, maximize the resolution available for human viewing, and produce a “full field” image that, when reproduced at a 1:1 ratio (without shrinking or enlarging), perfectly fill the human visual field with a minimum of optical distortion. This means that, besides all of the regular benefits of medium format, medium format stereo photos shot on slide film produces an unparalleled viewing experience. Think of how entrancing Viewmaster slides (shot on 16mm film) are. If you've ever seen them mounted in a viewer, think how amazing consumer slides and viewers (shot on half-frame 135 film) are. And now imagine eight times the resolution, and a backlit, cinematic image that does away with the viewing window of these other formats and immerses you in the scene, like an imax film image projected right onto your retina. Once you—and your friends—have seen this, you will never want to shoot flat photos again. And of course, even for viewing as stereographs or as digital images on screens or high-resolution VR displays, medium format images are a world ahead of the other options." 
                    accessibilityRole="text"
                >
                    Medium format is the ideal stereoscopic format, because two 6x6 views (single images) fit together, almost by magic, at the same distance as the human eyes do from one another. This means that they fill a film strip (negative or positive) without any wasted distance between them, maximize the resolution available for human viewing, and produce a “full field” image that, when reproduced at a 1:1 ratio (without shrinking or enlarging), perfectly fill the human visual field with a minimum of optical distortion. This means that, besides all of the regular benefits of medium format, medium format stereo photos shot on slide film produces an unparalleled viewing experience. Think of how entrancing Viewmaster slides (shot on 16mm film) are. If you've ever seen them mounted in a viewer, think how amazing consumer slides and viewers (shot on half-frame 135 film) are. And now imagine eight times the resolution, and a backlit, cinematic image that does away with the viewing window of these other formats and immerses you in the scene, like an imax film image projected right onto your retina. Once you—and your friends—have seen this, you will never want to shoot flat photos again. And of course, even for viewing as stereographs or as digital images on screens or high-resolution VR displays, medium format images are a world ahead of the other options.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="Why is it, then, that so few camera companies have produced serious medium format stereo cameras?" 
                    accessibilityRole="text"
                >
                    Why is it, then, that so few camera companies have produced serious medium format stereo cameras?
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken advantage of it. The German companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!" 
                    accessibilityRole="text"
                >
                    This completely baffled me, as a media historian and as a camera designer. This format is perhaps photographic nirvana, and yet no camera manufacturer has really taken advantage of it. The German companies of the 1920s and '30s (Voightlander, Rollai, Zeiss Ikon) produced medium format glass slide cameras, but those are terribly inconvenient, now as then. Only Rollei went on to produce a version that used 120 film, and this camera, the Rolleidoscope, is insanely overvalued by shooters and collectors today as a result. In any case, WWII devastated the German camera companies, and when they recovered after the war, they focused on smaller, simpler, cheaper cameras with great lenses, and never restarted production on stereo medium format cameras. As a result, the last professional medium format stereo cameras were produced pre-WWII, with built-in lenses that lack anti-reflective coating (one of the most important innovations in photographic lens design ever) and were made using a relatively primitive version of the Tessar design. These were impressive cameras, just lacking in modern film formats and lenses. After WWII the craze was small cameras and small film formats. Lots and lots of stereo cameras were sold, by dozens of manufacturers (the biggest sellers were the Realist Stereo and the Kodak Stereo). And yet no one (to my knowledge) produced a medium format stereo camera during this period!
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="The Soviets, flying high after beating the Americans to space with the first satellite, Sputnik, decided they would be the first to introduce a modern medium format stereo camera as well. The parallel was clear enough for them to name it the Sputnik. Produced in large quantities in the Soviet Union starting in 1960, it remains in use by many medium format stereographers today due to a lack of other options. This is despite some pretty severe limitations: it was produced cheaply, out of poor materials, easily loses synchronization between its shutters, and most importantly, utilizes lenses of poor quality. Nonetheless, kudos to the Soviets for producing something, like the other Sputnik, that no one else could seem to manage." 
                    accessibilityRole="text"
                >
                    The Soviets, flying high after beating the Americans to space with the first satellite, Sputnik, decided they would be the first to introduce a modern medium format stereo camera as well. The parallel was clear enough for them to name it the Sputnik. Produced in large quantities in the Soviet Union starting in 1960, it remains in use by many medium format stereographers today due to a lack of other options. This is despite some pretty severe limitations: it was produced cheaply, out of poor materials, easily loses synchronization between its shutters, and most importantly, utilizes lenses of poor quality. Nonetheless, kudos to the Soviets for producing something, like the other Sputnik, that no one else could seem to manage.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="More recently, in 2006 a fly-by-night Chinese company called “3D World” popped up and ambitiously attempted to create a medium format stereoscopic ecosystem, starting with several slide viewers, and then eventually (in 2008) a camera, the TL-120-1. This camera was aimed at a prosumer market, produced cheaply and in a style very similar to the Sputnik. It is not a high end camera and does not make use of high-end optics, but it was at least a modern attempt at a medium format stereo camera, including reflex viewfinder and in-camera reflected light meter. Unfortunately, as fast as they had appeared, 3D World dissolved, leaving behind about a year's worth of produced cameras. A few years later, Holga made a stereo pinhole camera and slide viewer that were even more dreadful than their mono cameras, and it quickly disappeared. The only other cameras have been one-offs by brilliant machinists who hack together and synchronize two mono cameras, custom large format camera conversions, and novelty pinhole cameras." 
                    accessibilityRole="text"
                >
                    More recently, in 2006 a fly-by-night Chinese company called “3D World” popped up and ambitiously attempted to create a medium format stereoscopic ecosystem, starting with several slide viewers, and then eventually (in 2008) a camera, the TL-120-1. This camera was aimed at a prosumer market, produced cheaply and in a style very similar to the Sputnik. It is not a high end camera and does not make use of high-end optics, but it was at least a modern attempt at a medium format stereo camera, including reflex viewfinder and in-camera reflected light meter. Unfortunately, as fast as they had appeared, 3D World dissolved, leaving behind about a year's worth of produced cameras. A few years later, Holga made a stereo pinhole camera and slide viewer that were even more dreadful than their mono cameras, and it quickly disappeared. The only other cameras have been one-offs by brilliant machinists who hack together and synchronize two mono cameras, custom large format camera conversions, and novelty pinhole cameras.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="As a medium format and large format photographer, I saw a way forward. As the Mercury Camera system developed over the last eight years, adding hundreds of different modules to become the most versatile camera in the history of photography, I realized that it could be extended to fill this hole. In fact, customers have asked me, over the years, for a stereo camera. But let me tell you, it is a real engineering challenge! Not to make one camera, but to design a system flexible enough to be considered professional. We worked for the past seven years, off and on, on what would finally become the Mercury Stereo 12. Certain milestones in the Mercury system, such as our Universal Sync Box and Remote Shutter Actuation system, which enables precise electronic actuation of manual shutters, removed roadblocks to our stereo camera. Finally, in 2022, the biggest obstacles had been crossed and a final design took shape. Most of that year was devoted to prototying and testing the design. I put this camera through more testing than any other Mercury model, partly because there was so much we had to get right, and partly because I've never had more fun with a camera." 
                    accessibilityRole="text"
                >
                    As a medium format and large format photographer, I saw a way forward. As the Mercury Camera system developed over the last eight years, adding hundreds of different modules to become the most versatile camera in the history of photography, I realized that it could be extended to fill this hole. In fact, customers have asked me, over the years, for a stereo camera. But let me tell you, it is a real engineering challenge! Not to make one camera, but to design a system flexible enough to be considered professional. We worked for the past seven years, off and on, on what would finally become the Mercury Stereo 12. Certain milestones in the Mercury system, such as our Universal Sync Box and Remote Shutter Actuation system, which enables precise electronic actuation of manual shutters, removed roadblocks to our stereo camera. Finally, in 2022, the biggest obstacles had been crossed and a final design took shape. Most of that year was devoted to prototying and testing the design. I put this camera through more testing than any other Mercury model, partly because there was so much we had to get right, and partly because I've never had more fun with a camera.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="The key design goals of the Mercury Stereo 12 were these:" 
                    accessibilityRole="text"
                >
                    The key design goals of the Mercury Stereo 12 were these:
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* The camera had to be in a compact, lightweight, 4x5 large format form factor." 
                    accessibilityRole="text"
                >
                    * The camera had to be in a compact, lightweight, 4x5 large format form factor.
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* It had to have exchangeable backs, to enable working with ground glass and multiple film formats simultaneously." 
                    accessibilityRole="text"
                >
                    * It had to have exchangeable backs, to enable working with ground glass and multiple film formats simultaneously.
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* It had to accept industry standard backs that already existed as well as new backs that folks invent. The clear choice here was the Graflok 45 standard used by most modern 4x5 cameras. In particular, the excellent Horseman 6x12 back would, I realized, make the ultimate 120 back. But the camera also had to be compatible with cheaper 6x12 backs, homemade backs, and 4x5 sheet film." 
                    accessibilityRole="text"
                >
                    * It had to accept industry standard backs that already existed as well as new backs that folks invent. The clear choice here was the Graflok 45 standard used by most modern 4x5 cameras. In particular, the excellent Horseman 6x12 back would, I realized, make the ultimate 120 back. But the camera also had to be compatible with cheaper 6x12 backs, homemade backs, and 4x5 sheet film.
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* It had to have interchangeable lenses. This was the most difficult aspect of the design. No medium format stereo camera save for hacked “twin” cameras have ever had interchangeable backs. But this is a must for professional photography." 
                    accessibilityRole="text"
                >
                    * It had to have interchangeable lenses. This was the most difficult aspect of the design. No medium format stereo camera save for hacked “twin” cameras have ever had interchangeable backs. But this is a must for professional photography.
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* The camera had to be able to stop motion precisely, with perfectly synchronized triggers." 
                    accessibilityRole="text"
                >
                    * The camera had to be able to stop motion precisely, with perfectly synchronized triggers.
                </Text>
                <Text 
                    style={guideStyle.textBullet}
                    accessible={true} 
                    accessibilityLabel="* It had to be compatible with the greatest possible numbers of shutters and lenses available from the history of photography. This was a guiding principal of the overall Mercury system, and it carried over into our Stereo system. We don't want to reinvent the wheel when it comes to lenses. The greatest lens makers out there have produced the greatest possible lenses. We needed to make our camera compatible with as many of them as possible." 
                    accessibilityRole="text"
                >
                    * It had to be compatible with the greatest possible numbers of shutters and lenses available from the history of photography. This was a guiding principal of the overall Mercury system, and it carried over into our Stereo system. We don't want to reinvent the wheel when it comes to lenses. The greatest lens makers out there have produced the greatest possible lenses. We needed to make our camera compatible with as many of them as possible.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="The result was the Mercury Stereo 12, a full system that can make use of ground glass (with a full range of accessories), many different film formats (4x5 sheet film, 120 film, 70mm film, and even, experimentally, 135 film in a panoramic format), instantly interchangeable backs (switch from slow film to fast, BW to slide, etc.), and an interchangeable lens system that allows you to use 23 different recommended, legendary lenses, with compatibility with many more to be discovered." 
                    accessibilityRole="text"
                >
                    The result was the Mercury Stereo 12, a full system that can make use of ground glass (with a full range of accessories), many different film formats (4x5 sheet film, 120 film, 70mm film, and even, experimentally, 135 film in a panoramic format), instantly interchangeable backs (switch from slow film to fast, BW to slide, etc.), and an interchangeable lens system that allows you to use 23 different recommended, legendary lenses, with compatibility with many more to be discovered.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="Finally, there is a professional stereo camera for advanced photographers. You don't need to spend thousands of dollars (though you easily can if you want: this camera is compatible with some of the most advanced, expensive lenses ever made). You don't need to scramble for some rare camera from the past with many limitations. If you are a stereographer who no longer wants to be limited by your tools, this camera if for you. If you are a medium format or large format photographer who has never entered the third dimension because no comparable tools were available, this camera is for you. Or if you are a camera tinkerer who would like to build on and innovate with an open platform in the world of stereography, this camera is for you." 
                    accessibilityRole="text"
                >
                    Finally, there is a professional stereo camera for advanced photographers. You don't need to spend thousands of dollars (though you easily can if you want: this camera is compatible with some of the most advanced, expensive lenses ever made). You don't need to scramble for some rare camera from the past with many limitations. If you are a stereographer who no longer wants to be limited by your tools, this camera if for you. If you are a medium format or large format photographer who has never entered the third dimension because no comparable tools were available, this camera is for you. Or if you are a camera tinkerer who would like to build on and innovate with an open platform in the world of stereography, this camera is for you.
                </Text>
                <Text 
                    style={guideStyle.textBody}
                    accessible={true} 
                    accessibilityLabel="I can honestly say that no piece of equipment has ever reinvigorated my love of photography more than this camera. I only hope that it can do half as much for you." 
                    accessibilityRole="text"
                >
                    I can honestly say that no piece of equipment has ever reinvigorated my love of photography more than this camera. I only hope that it can do half as much for you.
                </Text>

            <View ref={partIRef}>
                <Text 
                    style={guideStyle.textSubtitle}
                    accessible={true} 
                    accessibilityLabel="PART I: CAMERA BASICS" 
                    accessibilityRole="text"
                >
                    PART I: CAMERA BASICS
                </Text>
            </View>

                <View ref={gettingToKnowRef}>
                    <Text 
                        style={guideStyle.text}
                        accessible={true} 
                        accessibilityLabel="Getting to Know Your Camera" 
                        accessibilityRole="text"
                    >
                        Getting to Know Your Camera
                    </Text>
                </View>
                    <Text 
                        style={guideStyle.textBody}
                        accessible={true} 
                        accessibilityLabel="The Mercury Stereo 12 is a modular platform, and as such it's difficult to define what a typical, singular camera looks like. But in this section we'll examine an example configuration, noting the most significant features of the camera. Before your camera will look like this and be ready to shoot, you will need to obtain two shutters and lenses, and set up your lensboard. This one-time process is covered in a separate document, Stereo 12 Lens and Shutter Setup." 
                        accessibilityRole="text"
                    >
                        The Mercury Stereo 12 is a modular platform, and as such it's difficult to define what a typical, singular camera looks like. But in this section we'll examine an example configuration, noting the most significant features of the camera. Before your camera will look like this and be ready to shoot, you will need to obtain two shutters and lenses, and set up your lensboard. This one-time process is covered in a separate document, Stereo 12 Lens and Shutter Setup.
                    </Text>

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
                    <Text 
                        style={guideStyle.textAside}
                        accessible={true} 
                        accessibilityLabel="Focus Spacer Information (customizable/optional): Our focus spacers are designed so that a row of a spreadsheet, when printed out and adhered to it, will fit on a flat ridge. This information is the most important thing to a stereographer, and it is customizable to your preferences. Just download our pre-filled spreadsheet with our suggested info for each spacer (particular to each lens), edit it to include or eliminate any info you don't want, then print it out on adhesive paper or vinyl for use with your camera. You can change this info and reprint at any time. Each spacer is reversible, so you can include info for one lens on the top and a different lens on the bottom." 
                        accessibilityRole="text"
                    >
                        Focus Spacer Information (customizable/optional): Our focus spacers are designed so that a row of a spreadsheet, when printed out and adhered to it, will fit on a flat ridge. This information is the most important thing to a stereographer, and it is customizable to your preferences. Just download our pre-filled spreadsheet with our suggested info for each spacer (particular to each lens), edit it to include or eliminate any info you don't want, then print it out on adhesive paper or vinyl for use with your camera. You can change this info and reprint at any time. Each spacer is reversible, so you can include info for one lens on the top and a different lens on the bottom.
                    </Text>
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
                            onClick={() => setModal1Visible(false)}
                        />
                    </Modal>

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
{/*GOT UP TO THIRD IMAGE -- KEEP WORKING HERE */}
            



        </SafeAreaView>
    )
};


const UserGuideScreen = () =>{
    return(
        <>
        <CustomScrollView style={guideStyle.container}>
            <UserGuideContent />
        </CustomScrollView>
        <SafeAreaView style={guideStyle.footer}>
            <View accessible={true} accessibilityLabel="Click to jump to top" accessibilityRole="button">
                <Button 
                    title= "Back to top"
                    //onPress={() => calculateBaseDist()} FIGURE OUT HOW TO DO THIS PLZZZZZZ
                />
            </View>

            {/*ADD SEARCH FEATURE */}
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
    button: {
      backgroundColor: 'white',
      padding: 5,
      margin: 20,
      borderRadius: 10,
    },
    buttonLevel2: {
        backgroundColor: 'white',
        padding: 5,
        margin: 0,
        marginLeft: 40,
        marginRight: 20,
        borderRadius: 10,
    },
    buttonLevel3: {
        backgroundColor: 'white',
        padding: 5,
        margin: 0,
        marginLeft: 60,
        marginRight: 20,
        borderRadius: 10,
      },
    buttonLevel4: {
        backgroundColor: 'white',
        padding: 5,
        margin: 0,
        marginLeft: 80,
        marginRight: 20,
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
    image: {
        width: 300,
        height: 250,
        resizeMode: 'cover',
        alignSelf: 'center',
        margin: 10,
    },
    footer: {
        backgroundColor: 'black',

    },
  });

export default UserGuideScreen;