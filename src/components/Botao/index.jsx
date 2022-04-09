import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../styles/theme';


export function Botao() {
  
  return (
    <TouchableOpacity
      style={styles.botao}
      activeOpacity={.8}  
    >     
      <AntDesign
        name="arrowup"
        size={24}
        color={theme.colors.cor5}
      />
    </TouchableOpacity>
  );
}