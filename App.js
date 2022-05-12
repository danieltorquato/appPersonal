import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/home';
import Account from "./pages/account";
import History from "./pages/history";
import Schedule from "./pages/schedule";
import Progress from "./pages/progress";
import Hours from "./pages/hours";

const Stack = createNativeStackNavigator();

export default function App(){

    return(



<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
    name="Home" component={Home}/>
    <Stack.Screen 
    name="Perfil" component={Account}/>
    <Stack.Screen 
    name="Historico" component={History}/>
    <Stack.Screen 
    name="Agenda" component={Schedule}/>
    <Stack.Screen 
    name="Progresso" component={Progress}/>
    <Stack.Screen 
    name="Horários" component={Hours}/>
  
  
  </Stack.Navigator>
</NavigationContainer>

    )
  }


