import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType
} from 'react-native';

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

const Dice=({imageUrl}: DiceProps): JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  
  return (
    <View>
      <Text>Hey There!</Text>
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
