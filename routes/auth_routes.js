import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../pages/login';
import Register from '../pages/register';
const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen 
        name="Login" 
        component={LogIn}
        options={{headerShown: false}}
        />
         <AuthStack.Screen 
        name="Cadastro" 
        component={Register}
        options={{headerShown: false}}
        />
    </AuthStack.Navigator>
    );
}

export default AuthRoutes;
