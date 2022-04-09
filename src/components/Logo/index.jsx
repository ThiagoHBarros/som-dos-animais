import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import fotoLogo from '../../../assets/girafa.png';

export function Logo() {
  return (
    <Image
      style={styles.logo}
      source={fotoLogo}
      resizeMode="center"
    />
  );
}