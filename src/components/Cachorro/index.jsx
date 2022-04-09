import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import ImgCachorro from '../../../assets/cachorro.png'


export function Cachorro() {
  
  return (
    <Image 
      style={styles.imagem}
      source={ImgCachorro}
      resizeMode="center"
    />
  );
}