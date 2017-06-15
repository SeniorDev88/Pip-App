import React from "react";
import GenericLoginSignup from './GenericLoginSignup';

const Login = ({ navigator }) => (
  <GenericLoginSignup
    title="Welcome Back"
    description="To log in either"
    type="Log in"
    bottomText="Don’t have an account?"
    onTypePress={() => navigator.push('loginEmail')}
    onBottomTextPress={() => navigator.push('signUpChooseOptions')}
  />
);

export default Login;
