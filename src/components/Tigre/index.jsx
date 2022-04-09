import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import ImgTigre from '../../../assets/tigre.png'


export function Tigre() {
  
  return (
    <Image 
      style={styles.imagem}
      source={ImgTigre}
      resizeMode="center"
    />
  );
}