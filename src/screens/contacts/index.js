import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from '../../components/common/icon'; 
import ContactComponent from '../../components/contactsComponent';

export default function Contacts () {
  const { setOptions, toggleDrawer } = useNavigation();
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    setOptions({
      headerLeft: ()=> 
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Icon type="mi" style={{ padding: 10 }} name="menu" size={25} color="black" />
      </TouchableOpacity>
    })
  },[]);

  return (
    <ContactComponent 
      visible={visible} 
      setVisible={setVisible} 
    />
  ) 
}

const styles = StyleSheet.create({})