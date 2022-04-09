import React from 'react'
import AppLoading from 'expo-app-loading'
import { 
  useFonts,
  Ubuntu_400Regular, 
  Ubuntu_500Medium, 
  Ubuntu_700Bold  
} from '@expo-google-fonts/ubuntu'
import { Botao } from './src/components/Botao'
import { Logo } from './src/components/Logo'
import Inicio from './src/screens/Inicio'
import Animais from './src/screens/SomMacaco'
import SomMacaco from './src/screens/SomMacaco'
import SomTigre from './src/screens/SomTigre'
import SomCachorro from './src/screens/SomCachorro'


export default function App() {
  const [fontsCarregada] = 
  useFonts({ Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium })
    if(!fontsCarregada) {
    return <AppLoading />
  }
  return (
   <SomCachorro/>
  )
}



