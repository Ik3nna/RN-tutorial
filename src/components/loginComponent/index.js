import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../common/container';
import Input from '../common/input';
import CustomButton from '../common/customButton';
import { StatusBar } from 'expo-status-bar';

// Images
import logo from "../../assets/images/logo.png"
import { REGISTER } from '../../constants/routeName';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/themes/colors';

const LoginComponent = () => {
  const [text, onChangeText] = useState('');
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style='auto' />
        <Image style={styles.img} source={logo} alt="logo" />

        <View>
          <Text style={styles.title}>Welcome to Contacts</Text>
          <Text style={styles.subTitle}>Please login here</Text>

          <View style={styles.form}>
            <Input 
              label="Username"
              value={text}
              placeholder="Enter Username"
              onChangeText={(value)=>onChangeText(value)} 
              // error="This field is required"
            />

            <Input 
              label="Password"
              placeholder="Please enter a password"
              secureTextEntry={true}
              icon={<Text>Show</Text>}
              iconPosition="right"
              value={text} 
              onChangeText={(value)=>onChangeText(value)} 
            />

            <CustomButton 
              title="Submit" 
              primary
            />

            <View style={styles.create}>
              <Text style={styles.infoText}>Need a new account?</Text>
              <TouchableOpacity onPress={()=>navigate(REGISTER)}>
                <Text style={styles.linkBtn}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  )
}

export default LoginComponent;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    alignSelf: "center",
    paddingTop: 20,
    fontWeight: 700,
    fontSize: 21,
  },
  subTitle: {
    alignSelf: "center",
    paddingVertical: 20,
    fontWeight: 700,
    fontSize: 17,
  },
  form: {
    paddingTop: 20,
  },
  create: {
    flexDirection: "row",
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16
  },
  infoText: {
    fontSize: 17
  }
})