import React from "react";
import { styles } from "./styles";
import { View, Button} from "react-native";
import * as Animatable from 'react-native-animatable'; //Importe para realizar a animação no texto
import { Cachorro } from "../../components/Cachorro";
import { Audio } from 'expo-av';

export default function SomCachorro()
{
   const [som, setSom] = React.useState();

   async function tocarSom() {
  
     const { sound: SomCachorro } = await Audio.Sound.createAsync(
        require('../../../assets/cachorrosom.mp3')
     );
     setSom(SomCachorro);
 
 
     await SomCachorro.playAsync(); }
 
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
    Cachorro</Animatable.Text>
    <Cachorro/>
    <Button title="Escutar" onPress={tocarSom} />
    </View>
 );
}
