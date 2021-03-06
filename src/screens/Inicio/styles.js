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

    botao: {
      backgroundColor: theme.colors.cor1,
      height: 50,
      width: 10,
      borderRadius: 20,
      paddingHorizontal: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 60, 
    },

  });