import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Account from '../pages/account';
import exerciseDetails from '../pages/exerciseDetails';
import History from '../pages/history';
import Schedule from '../pages/schedule';
const AppStack = createNativeStackNavigator();

function AppRoutes(){
    return(
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home}
        options={
           { headerShown:false}
        }/>
         <AppStack.Screen name="Perfil" component={Account}
        options={
           { headerShown:false}
        }/>
         <AppStack.Screen name="Detalhes" component={exerciseDetails}
        options={
           { headerShown:false}
        }/>
         <AppStack.Screen name="Historico" component={History}
        options={
           { headerShown:false}
        }/>
         <AppStack.Screen name="Agenda" component={Schedule}
        options={
           { headerShown:false}
        }/>
    </AppStack.Navigator>
    );
}

export default AppRoutes;
