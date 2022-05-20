import React, {useState} from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Progress from "./pages/progress";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './pages/home';
import Account from "./pages/account";
import History from "./pages/history";
import Schedule from "./pages/schedule";

import Hours from "./pages/hours";
import firebase from "./src/services/firebaseConnection";
import Register from "./pages/register";
import LogIn from "./pages/login";
const Stack = createNativeStackNavigator();

export default function App(){
  const [user, setUser] = useState(null);

  if(!user){
    
  
    return( 
    <>
    
    <LogIn changeStatus={ (user) => setUser(user) }/>
    </>
    )
  }
return(

<NavigationContainer>

  <Stack.Navigator>

    
  
    <Stack.Screen 
    name="Home" component={Home}
    options={{ headerShown: false }}/>
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