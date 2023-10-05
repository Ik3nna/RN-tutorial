import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppModal from '../common/modal'
import { StatusBar } from 'expo-status-bar'
import CustomButton from "../common/customButton"

const ContactComponent = ({ visible, setVisible, title, modalbody, modalfooter }) => {
  return (
    <View>
      <StatusBar style='auto' />
      <AppModal 
        visible={visible} 
        setVisible={setVisible} 
        title="My profile"
        modalfooter={<></>}
        modalbody={
          <View>
            <Text>Hello from the modal</Text>
          </View>
        }
      />
      <CustomButton 
        title="Open Modal"
        secondary
        onPress={()=>{
          setVisible(true)
        }}
      />
    </View>
  )
}

export default ContactComponent

const styles = StyleSheet.create({})