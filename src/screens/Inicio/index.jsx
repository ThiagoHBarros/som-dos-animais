import React, {useState} from "react";
import { Text, View, Animated } from "react-native";
import { Botao } from "../../components/Botao";
import { Logo } from "../../components/Logo";
import * as Animatable from 'react-native-animatable'; //Importe para realizar a animação no texto

import { styles } from "./styles";

export default function Inicio()
{
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
    <Botao />
    </View>
    )
}