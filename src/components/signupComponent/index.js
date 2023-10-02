import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Container from '../common/container';
import Input from '../common/input';
import CustomButton from '../common/customButton';
import { StatusBar } from 'expo-status-bar';
import { useForm, Controller } from "react-hook-form";
import register from "../../context/actions/authRegister";
import { clearAuthState } from '../../context/actions/authRegister';

// Images
import logo from "../../assets/images/logo.png"
import { LOGIN } from '../../constants/routeName';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../../assets/themes/colors';
import { useGlobalContext } from '../../context/provider';
import Message from '../common/message';

const SignupComponent = () => {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
  })
  const { authDispatch, authState:{ error, loading, data} } = useGlobalContext();

  const onSubmit = (data) => {
    register(data)(authDispatch);
  }

  console.log(data);
  
  useEffect(()=>{
    if (data) {
      navigate(LOGIN);
    }
  },[data]);

  useFocusEffect(
    React.useCallback(()=>{
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [data, error]) 
  )

  return (
    <SafeAreaView>
      <Container>
        <StatusBar style='auto' />

        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={"position"}
          keyboardVerticalOffset={-100}
        >
          <Image style={styles.img} source={logo} alt="logo" />

          <View>
            <Text style={styles.title}>Welcome to Contacts</Text>
            <Text style={styles.subTitle}>Create a free account</Text>
            
            <Message 
              retry 
              retryFn={()=>{}} 
              primary 
              onDismiss={()=>{}}
              message="Invalid credentials" 
            />

            <View style={styles.form}>
              {error?.error && <Text>{error.error}</Text>}
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
                error={errors.userName && "Please enter a user name" || error?.username?.[0]}
              />
              )}
              name="userName"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
              <Input 
                label="Firstname"
                placeholder="Firstname"
                value={value}
                onChangeText={onChange}
                error={errors.firstName && "Please enter a first name" || error?.firstname?.[0]}
              />
              )}
              name="firstName"
            />

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
              <Input 
                label="Lastname"
                placeholder="Lastname"
                value={value}
                onChangeText={onChange}
                error={errors.lastName && "Please enter a last name" || error?.lastname?.[0]}
              />
              )}
              name="lastName"
            />

            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                }
              }}
              render={({ field: { onChange, value } }) => (
              <Input 
                label="Email"
                placeholder="Email address"
                value={value}
                onChangeText={onChange}
                error={errors.email && "Please enter a valid email address" || error?.email?.[0]}
              />
              )}
              name="email"
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
                secureTextEntry={true}
                icon={<Text>Show</Text>}
                iconPosition="right" 
                value={value}
                onChangeText={onChange}
                error={errors.password && "Password must be 6 characters or more" || error?.password?.[0]}
              />
              )}
              name="password"
            />

            <CustomButton 
              title="Submit" 
              primary
              onPress={handleSubmit(onSubmit)}
              loading={loading}
              disabled={loading}
            />

            <View style={styles.create}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity onPress={()=>navigate(LOGIN)}>
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Container>
  </SafeAreaView>
  )
}

export default SignupComponent;

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