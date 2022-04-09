import React from "react";
import { styles } from "./styles";
import { Text, View, StyleSheet, Button} from "react-native";
import * as Animatable from 'react-native-animatable'; //Import
import { Tigre } from "../../components/Tigre";
import { Botao } from "../../components/Botao";
import { Audio } from 'expo-av';

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
    <Botao/>
    <Button title="Escutar" onPress={tocarSom} />
    </View>
 );
}
