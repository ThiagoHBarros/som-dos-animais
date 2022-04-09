import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import fotoLogo from '../../../assets/girafa.png';
import { MotiImage } from 'moti'

export function Logo() {
  return (
    <MotiImage
      style={styles.logo}
      source={fotoLogo}
      resizeMode="center"
      from={{
        opacity: 0,
        translateX: 64
      }}
      animate={{
        opacity: 1,
        translateX: 4
      }}
      transition={{
        type: 'timing',
        duration: 1000
      }}
    />
  );
}