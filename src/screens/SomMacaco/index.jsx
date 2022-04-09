import React from "react";
import { styles } from "./styles";
import { Text, View, StyleSheet, Button} from "react-native";
import * as Animatable from 'react-native-animatable'; //Import
import { Macaco } from "../../components/Macaco";
import { Botao } from "../../components/Botao";
import { Audio } from 'expo-av';

export default function SomMacaco()
{
   const [som, setSom] = React.useState();

   async function tocarSom() {
  
     const { sound: SomMacaco } = await Audio.Sound.createAsync(
        require('../../../assets/macacosom.mp3')
     );
     setSom(SomMacaco);
 
 
     await SomMacaco.playAsync(); }
 
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
    Macaco</Animatable.Text>
    <Macaco/>
    <Botao/>
    <Button title="Escutar" onPress={tocarSom} />
    </View>
 );
}
