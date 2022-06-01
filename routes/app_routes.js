import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Account from '../pages/account';

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
    </AppStack.Navigator>
    );
}

export default AppRoutes;
