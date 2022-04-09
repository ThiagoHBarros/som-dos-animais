import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.colors.cor3,
      alignContent: 'center'
      
    },
  
    texto: {
        fontFamily: theme.fonts.primary700,
        fontSize: 48,
        color: theme.colors.cor2,       
        textAlign: 'center'
    },

  });