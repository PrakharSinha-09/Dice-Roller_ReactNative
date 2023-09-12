import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

//in react-native remember that your image must be resolved like a module and so is the reason I've created index.d.ts file,(the file name is important), where I've specified that the images will come as module!
//These DiceOne till DiceSix should be interpreted like variable, where these images are being stored!... (the typescript way!)
import DiceOne from '../assets/One.png'        
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps=PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice=({imageUrl}: DiceProps): JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)            //don't be overwhelm by that angular brackets, it is just that we are clarifying that we need only image, and not any other stuffs... simple typecscript thing, even if we remove that, it won't affect anything, but its a good practice indeed!

  const rollDiceOnClick=()=>{
    let randomNumber=Math.floor(Math.random()*6)+1

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default: setDiceImage(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={()=>rollDiceOnClick()}>
        <Text style={styles.rollDiceBtnText}>Click To Roll!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
