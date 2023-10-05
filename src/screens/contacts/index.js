import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from '../../components/common/icon'; 
import ContactComponent from '../../components/contactsComponent';
import { useGlobalContext } from "../../context/provider"
import getContacts from '../../context/actions/getContacts';

export default function Contacts () {
  const { setOptions, toggleDrawer } = useNavigation();
  const [visible, setVisible] = useState(false);
  const {
    contactsState: {
      getContacts: { data, loading }
    }, contactsDispatch
  } = useGlobalContext();

  useEffect(()=>{
    setOptions({
      headerLeft: ()=> 
      <TouchableOpacity onPress={()=>toggleDrawer()}>
        <Icon type="mi" style={{ padding: 10 }} name="menu" size={25} color="black" />
      </TouchableOpacity>
    })
  },[]);

  useEffect(()=>{
    getContacts()(contactsDispatch)
  },[]);

  return (
    <ContactComponent 
      visible={visible} 
      setVisible={setVisible} 
      data={data}
      loading={loading}
    />
  ) 
}

const styles = StyleSheet.create({})