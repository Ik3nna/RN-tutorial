import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawer-navigator';
import AuthNavigator from "./auth-navigator";
import { useGlobalContext } from '../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNavContainer() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { loggedIn } = useGlobalContext();

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {

    }
  }

  const { authState } = useGlobalContext();

  useEffect(()=>{
    getUser(); 
  },[])

  return (
   <NavigationContainer>
    {authState.isLoggedIn || isAuthenticated || loggedIn ? <DrawerNavigator /> : <AuthNavigator />}
   </NavigationContainer>
  )
}
