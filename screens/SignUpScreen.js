import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale, scaleByVertical } from '../constants/Layout';
import NavigatorButton from '../components/NavigatorButton';
import Colors from '../constants/Colors';
import CustomTextInput from '../components/FormsInput/CustomTextInput';


const styles = StyleSheet.create({
  logoImage: {
    height: scaleByVertical(70),
    width: scale(53),
    resizeMode: 'contain'
  },
  titleConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? scaleByVertical(85) : scaleByVertical(55)
  },
  titleText: {
    fontSize: scaleByVertical(50),
    color: Colors.titleColor,
    textAlign: 'center',
    width: scale(500),
    fontFamily: 'GothamRounded-Book'
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(50)
  },
  descriptionText: {
    fontSize: scaleByVertical(26),
    color: Colors.boxTextColor,
    textAlign: 'center',
    width: scale(600),
    fontFamily: 'Avenir',
    lineHeight: Math.ceil(scaleByVertical(45))
  },
  container: {
    flex: 1,
    marginTop: scaleByVertical(55),
    marginBottom: scaleByVertical(50),
    marginHorizontal: scale(40)
  },
  notEnoughContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { height: scaleByVertical(-100) },
    shadowOpacity: 0.5,
    shadowColor: "white",
    height: 40,
    marginBottom: scaleByVertical(-30)
  },
  notEnoughText: {
    alignSelf: 'center',
    fontSize: scaleByVertical(26),
    fontFamily: 'Avenir',
    color: Colors.tintColor
  },
  continueButtonContainer: {
    height: scaleByVertical(125),
  },
  continueButton: {
    marginTop: scaleByVertical(20),
  }
});

export default class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      pass: '',
      repeatPass: ''
    };
  }
  

  checkEmail(str) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
  }

  renderLogo() {
    return (
      <View style={{ justifyContent: 'flex-start' }}>
        <Image
          style={styles.logoImage}
          source={require('../assets/images/Onboarding/Pip.png')}
        />

      </View>
    );
  }

  renderTitle(title) {
    return (
      <View style={styles.titleConatiner}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    );
  }

  renderDescription(text) {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {text}
        </Text>
      </View>
    );
  }

  renderInputFieldsContainer() {
    const { firstName, lastName, email, pass, repeatPass } = this.state;
    return (
      <View style={{ marginTop: scaleByVertical(35), marginHorizontal: scale(40) }}>
        <CustomTextInput
          isValid={firstName.length > 2}
          onChangeText={(text) => { this.setState({ firstName: text }); }}
          value={firstName}
          placeholder={'first name'}
          autoCapitalize={'words'}
        />

        <CustomTextInput
          isValid={lastName.length > 2}
          onChangeText={(text) => { this.setState({ lastName: text }); }}
          value={lastName}
          placeholder={'last name'}
          autoCapitalize={'words'}
        />

        <CustomTextInput
          isValid={email.length > 2}
          onChangeText={(text) => { this.setState({ email: text }); }}
          value={email}
          placeholder={'email address'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
        />

        <CustomTextInput
          isValid={pass.length > 3}
          onChangeText={(text) => { this.setState({ pass: text }); }}
          value={pass}
          placeholder={'password'}
          secureTextEntry={true}
        />

        <CustomTextInput
          isValid={repeatPass.length > 3 && repeatPass === pass}
          onChangeText={(text) => { this.setState({ repeatPass: text }); }}
          value={repeatPass}
          placeholder={'confirm password'}
          secureTextEntry={true}
        />

      </View>
    );
  }

  renderContinueButton() {
    return (
      <View style={[styles.continueButtonContainer]}>
        <NavigatorButton
          buttonText="Continue"
          style={styles.continueButton}
          onPress={() => this.props.navigator.push('demographic')}
        />
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          hidden={true}
        />
        {this.renderLogo()}


        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={{ flex: 10 }}>
            {this.renderTitle("Join Pip")}

            {this.renderDescription("To get your sweet, fruity financial fix")}

            {this.renderInputFieldsContainer()}
          </View>
          <View>
            {this.renderContinueButton()}
          </View>
        </View>

        
      </View>
    );
  }
}

