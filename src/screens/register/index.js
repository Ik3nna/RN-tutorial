import React, { useEffect, useState } from 'react'
import SignupComponent from '../../components/signupComponent';
import axiosInstance from '../../helpers/axioxInterceptor';

export default function Register () {
  useEffect(()=>{
    axiosInstance.post("/contacts").catch(err=>{
      console.log(err);
    });
  },[])
  
  return (
    <SignupComponent />
  )
}
