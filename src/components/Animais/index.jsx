import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/theme';
import ImgMacaco from '../../../assets/macaco.png'
import ImgCachorro from '../../../assets/cachorro.png'
import ImgTigre from '../../../assets/tigre.png'
import ImgLeao from '../../../assets/leao.png'


export function ListaAnimais() {
  
  return (

<Image 
      style={styles.logo}
      source={ImgCachorro}
      resizeMode="center"
    />


  );
}