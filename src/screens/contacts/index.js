import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import Container from '../../components/common/container'
import { useNavigation } from '@react-navigation/native'

export default function Contacts () {
  const { setOptions, toggleDrawer } = useNavigation();

  useEffect(()=>{
    setOptions({
      headerLeft: ()=> 
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Text style={{padding:10}}>Nav</Text>
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