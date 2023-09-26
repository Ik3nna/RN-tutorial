import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';
import AuthNavigator from "./auth-navigator";
import { useGlobalContext } from '../context/provider';

export default function AppNavContainer() {
  const { authState } = useGlobalContext();

  return (
   <NavigationContainer>
    {authState.isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
   </NavigationContainer>
  )
}
