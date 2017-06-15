import React, { Component } from "react";
import Exponent, { Font, Components } from "exponent";
import { TouchableOpacity, StyleSheet, StatusBar, Text, View} from "react-native";
import * as firebase from "firebase";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log("We are authenticated now!");
        this.props.navigator.push('rootNavigation');
        // this.setState({
        //   loading: false
        // })
      } else {
        console.log("Not Authenticated!")

      }
    });
  }


  static route = {
    navigationBar: {
      title: 'Login',
      visible: false
    }
  };

  signInWithGoogleAsync = async() => {
    try {
      const result = await Exponent.Google.logInAsync({
        androidClientId: '1038777756562-9h1hlo8bisoeo6ag263a312aea6j40sm.apps.googleusercontent.com',
        iosClientId: '1038777756562-gvtsd7sbkviq5p0cmqetm6non94npvta.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      console.log(result);
      if (result.type === 'success') {
        // Build Firebase credential with the Google access token.
        const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
        // Sign in with credential from the Facebook user.
        // Does it make it here?
        firebase.auth().signInWithCredential(credential)
            .then((data) => console.log('SUCCESS'), data)
            .catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              const credential = error.credential;
              if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('Email already associated with another account.');
                // Handle account linking here, if using.
              } else {
                console.error(error);
              }
            });
      } else {
        return {cancelled: true};
      }
    } catch (e) {
      return {error: true};
    }
  }

  render() {

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.signInWithGoogleAsync}>
            <Text>Login With Google</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
