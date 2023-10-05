import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../../components/common/container'
import { useNavigation } from '@react-navigation/native'
import Icon from '../../components/common/icon'; 

export default function Contacts () {
  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(()=>{
    setOptions({
      headerLeft: ()=> 
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Icon type="mi" style={{ padding: 10 }} name="menu" size={25} color="black" />
      </TouchableOpacity>
    })
  },[]);

  return (
    <Container>
      <Text>Contacts</Text>
    </Container>
  ) 
}

const styles = StyleSheet.create({})