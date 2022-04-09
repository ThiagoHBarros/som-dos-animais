import React from "react";
import { View, Button } from "react-native";
import { Logo } from "../../components/Logo";
import * as Animatable from 'react-native-animatable'; //Importe para realizar a animação no texto
import { Audio } from 'expo-av';

import { styles } from "./styles";

export default function Inicio()
{
  const [som, setSom] = React.useState();

   async function tocarSom() {
  
     const { sound: SomGirafa } = await Audio.Sound.createAsync(
        require('../../../assets/girafasom.mp3')
     );
     setSom(SomGirafa);
 
 
     await SomGirafa.playAsync(); }
 
   React.useEffect(() => {
     return som
       ? () => {
           som.unloadAsync(); }
       : undefined;
      }, [som]);

    return(
    <View style={styles.container}>
    <Animatable.Text 
    style={styles.texto}
    //Abaixo está o controle do comportamento da animação
    animation="fadeIn"
    useNativeDriver
    duration={3000}
    iterationCount={Infinity}
    >
      Som dos Animais</Animatable.Text> 
    <Logo/>
    <View style={styles.teste}>
    <Button title="Escutar" onPress={tocarSom} />
    </View>
    </View>
    )
}