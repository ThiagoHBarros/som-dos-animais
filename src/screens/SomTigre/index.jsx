import React from "react";
import { styles } from "./styles";
import {  View, Button} from "react-native";
import * as Animatable from 'react-native-animatable'; //Importe para realizar a animação no texto
import { Tigre } from "../../components/Tigre";
import { Audio } from 'expo-av'; //Importe do SDK de AUDIO

export default function SomTigre()
{
   const [som, setSom] = React.useState();

   async function tocarSom() {
  
     const { sound: SomTigre } = await Audio.Sound.createAsync(
        require('../../../assets/tigremsom.mp3')
     );
     setSom(SomTigre);
 
 
     await SomTigre.playAsync(); }
 
   React.useEffect(() => {
     return som
       ? () => {
           som.unloadAsync(); }
       : undefined;
   }, [som]);
   
   
   return (
    <View style={styles.container}> 
    <Animatable.Text 
    style={styles.texto}
    //Abaixo está o controle do comportamento da animação
    animation="shake"
    useNativeDriver
    duration={3000}
    iterationCount={Infinity}
    >
    Tigre</Animatable.Text>
    <Tigre/>
    <Button title="Escutar" onPress={tocarSom} /> 
    </View>
 );
}
