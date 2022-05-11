import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/home';
import Perfil from './pages/account';


const Stack = createNativeStackNavigator();

export default function App(){

    return(



<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
    name="Home" component={Home}/>
    <Stack.Screen 
    name="Perfil" component={Perfil}/>
  
  
  </Stack.Navigator>
</NavigationContainer>

    )
  }


