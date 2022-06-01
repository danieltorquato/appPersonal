import React, { useContext } from 'react';
import { AuthContext } from '../src/contexts/auth';
import AppRoutes from './app_routes';

import AuthRoutes from './auth_routes';


function Routes(){
    const {signed} = useContext(AuthContext);
    return(
       signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;