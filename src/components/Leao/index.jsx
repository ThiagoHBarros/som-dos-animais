import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import ImgLeao from '../../../assets/leao.png'
import { MotiImage } from 'moti'

export function Leao() {
  
  return (
    <MotiImage 
      style={styles.imagem}
      source={ImgLeao}
      resizeMode="center"
    />
  );
}