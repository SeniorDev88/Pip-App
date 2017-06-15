import React from 'react';
import ReactNative, {
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
import TextAndLinkedText from '../components/TextAndLinkedText';

const SCROLL_VIEW_REF = "scrollView";

const styles = StyleSheet.create({
  logoImage: {
    height: scaleByVertical(70),
    width: scale(53),
    resizeMode: 'contain'
  },
  titleConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(85)
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
    height: scaleByVertical(125)
  },
  continueButton: {
    marginTop: scaleByVertical(20),
  },
  fruitBowlImg: {
    height: scaleByVertical(88),
    width: scale(105),
    alignSelf: 'center',
    marginTop: scaleByVertical(60),
    resizeMode: 'contain'
  }
});

export default class ForgotPasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
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
    const { email, pass } = this.state;
    return (
      <View style={{ marginTop: scaleByVertical(35), marginHorizontal: scale(40) }}>


        <Image
          source={require('../assets/images/Onboarding/icon-fruit-bowl.png')}
          style={styles.fruitBowlImg}
        />

        <View style={{marginTop: scaleByVertical(40)}} />

        <CustomTextInput
          isValid={email.length > 2}
          onChangeText={(text) => { this.setState({ email: text }); }}
          value={email}
          placeholder={'email address'}
          keyboardType={'email-address'}
          autoCapitalize={'none'}
        />


        <TextAndLinkedText
          text={'Just remembered?'}
          linkedText={'Log in'}
          onPress={() => this.props.navigator.replace('loginChooseOptions')}
          customStyle={{ alignSelf: 'center', marginTop: scaleByVertical(80) }}
        />

      </View>
    );
  }

  renderContinueButton() {
    return (
      <View style={[styles.continueButtonContainer, { marginTop: Platform.OS === 'ios' ? scaleByVertical(95) : scaleByVertical(55) }]}>
        <NavigatorButton
          buttonText="Show me the pips"
          style={styles.continueButton}
          onPress={() => this.props.navigator.pop()}
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

            {this.renderTitle("Forgot Password")}

            {this.renderDescription("Enter your email address to recover your fruit picking password")}

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

