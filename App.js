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
import SomLeao from './src/screens/SomLeao'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

function Telas() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Girafa" component={Inicio} />
      <Tab.Screen name="Cachorro" component={SomCachorro} />
      <Tab.Screen name="Leao" component={SomLeao} />
      <Tab.Screen name="Macaco" component={SomMacaco} />
      <Tab.Screen name="Tigre" component={SomTigre} />
    </Tab.Navigator>
  );
}
export default function App() {
  const [fontsCarregada] = 
  useFonts({ Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium })
    if(!fontsCarregada) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <Telas />
    </NavigationContainer>
  )
}



