import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar, LogBox } from 'react-native';
import firebase from './src/services/firebaseConnection';

import Routes from './routes/index';
import AuthProvider from './src/contexts/auth';


export default function App() {
 return (
  <NavigationContainer>
  <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes/>
  </AuthProvider>
  </NavigationContainer>
  );
}