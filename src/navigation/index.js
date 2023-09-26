import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';
import AuthNavigator from "./auth-navigator";

export default function AppNavContainer() {
  const isLoggedIn = false;
  return (
   <NavigationContainer>
    {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
   </NavigationContainer>
  )
}
