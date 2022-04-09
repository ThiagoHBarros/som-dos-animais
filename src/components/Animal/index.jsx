import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import ImgMacaco from '../../../assets/macaco.png'


export function Animal() {
  
  return (
    <Image 
      style={styles.imagem}
      source={ImgMacaco}
      resizeMode="center"
    />
  );
}