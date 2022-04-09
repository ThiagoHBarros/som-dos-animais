import React from "react";
import { styles } from "./styles";
import { Text, View, StyleSheet, Button} from "react-native";
import * as Animatable from 'react-native-animatable'; //Import
import { Leao } from "../../components/Leao";
import { Botao } from "../../components/Botao";
import { Audio } from 'expo-av';

export default function SomLeao()
{
   const [som, setSom] = React.useState();

   async function tocarSom() {
  
     const { sound: SomLeao } = await Audio.Sound.createAsync(
        require('../../../assets/Leaosom.mp3')
     );
     setSom(SomLeao);
 
 
     await SomLeao.playAsync(); }
 
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
    Leão</Animatable.Text>
    <Leao/>
    <Botao/>
    <Button title="Escutar" onPress={tocarSom} />
    </View>
 );
}
