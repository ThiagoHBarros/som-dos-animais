import React from "react";
import { styles } from "./styles";
import { Text, View} from "react-native";
import * as Animatable from 'react-native-animatable'; //Import
export default function Animais()
{
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
    Animais
    </Animatable.Text>
    </View>
 )

}