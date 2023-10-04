import { Image, SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../common/container';
import Input from '../common/input';
import CustomButton from '../common/customButton';
import { StatusBar } from 'expo-status-bar';
import { useForm, Controller } from "react-hook-form";
import { useGlobalContext } from '../../context/provider';
import Message from '../common/message';
import login from "../../context/actions/loginUser";

// Images
import logo from "../../assets/images/logo.png"
import { CONTACT_LIST, REGISTER } from '../../constants/routeName';
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/themes/colors';

const LoginComponent = () => {
  const { navigate } = useNavigation();
  const [showPassword, setShowPassword] = useState(true);

  const { authDispatch, setIsLoggedIn, authState:{ error, loading, data} } = useGlobalContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: ""
    },
  })

  const onSubmit = (data)=> {
    login(data)(authDispatch);
    setIsLoggedIn(true);
  } 

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style='auto' />

        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={"position"}
          keyboardVerticalOffset={100}
        >
          <Image style={styles.img} source={logo} alt="logo" />

          <View>
            <Text style={styles.title}>Welcome to Contacts</Text>
            <Text style={styles.subTitle}>Please login here</Text>

            <View style={styles.form}>
              {error && !error.error &&  
                <Message 
                  retry 
                  danger
                  onDismiss={()=>{}}
                  message="Invalid credentials" 
                />
              }

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                <Input 
                  label="Username"
                  placeholder="Enter Username"
                  value={value}
                  onChangeText={onChange}
                  error={errors.userName && "Please enter a user name"}
                />
                )}
                name="userName"
              />

              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: {
                    value: 6,
                  }
                }}
                render={({ field: { onChange, value } }) => (
                <Input 
                  label="Password"
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  icon={<Text onPress={()=>setShowPassword(!showPassword)}>{showPassword ? "Show" : "Hide"}</Text>}
                  iconPosition="right" 
                  value={value}
                  onChangeText={onChange}
                  error={errors.password && "Password must be 6 characters or more"}
                />
                )}
                name="password"
              />

              <CustomButton 
                title="Submit" 
                primary
                disabled={loading}
                loading={loading}
                onPress={handleSubmit(onSubmit)}
              />

              <View style={styles.create}>
                <Text style={styles.infoText}>Need a new account?</Text>
                <TouchableOpacity onPress={()=>navigate(REGISTER)}>
                  <Text style={styles.linkBtn}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
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