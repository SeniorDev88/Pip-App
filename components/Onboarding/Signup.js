import React from "react";
import GenericLoginSignup from './GenericLoginSignup';

const Signup = ({ navigator }) => (
  <GenericLoginSignup
    title="Join Pip"
    description="To get started you can either"
    type="Sign up"
    bottomText="Have an account?"
    onTypePress={() => navigator.push('signUp')}
    onBottomTextPress={() => navigator.pop()}
  />
);

export default Signup;
