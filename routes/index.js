import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../src/contexts/auth';
import AppRoutes from './app_routes';

import AuthRoutes from './auth_routes';


function Routes(){
    const {signed, load} = useContext(AuthContext);

    if(load){
            return(
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <ActivityIndicator size="large"
    
    color="#131313"/>

    
</View>

            )
    }
    return(
     
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;