import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/common/container';
import Input from '../../components/common/input';
import { StatusBar } from 'expo-status-bar';

export default function Login () {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style='auto' />
        <Input 
          label="Username"
          value={text} 
          onChangeText={(value)=>onChangeText(value)} 
          // error="This field is required"
        />

        <Input 
          label="Password"
          icon={<Text>HIDE</Text>}
          iconPosition="right"
          value={text} 
          onChangeText={(value)=>onChangeText(value)} 
        />
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
})