import React, { PropTypes } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagePip: {
    width: scale(53),
    height: scaleByVertical(70),
    marginTop: scaleByVertical(55),
    marginLeft: scale(40),
    resizeMode: 'contain'
  },
  title: {
    marginTop: scaleByVertical(100),
    alignSelf: 'center',
    color: Colors.titleColor,
    fontSize: scale(50),
    fontFamily: 'GothamRounded-Book'
  },
  subTitle: {
    marginTop: scaleByVertical(50),
    alignSelf: 'center',
    color: Colors.boxTextColor,
    fontSize: scale(26)
  },
  facebookLoginSignupCont: {
    marginTop: scale(120),
    alignSelf: 'center',
    width: scale(620),
    height: scaleByVertical(88),
    borderRadius: 5,
    borderColor: Colors.dirtyWhite,
    borderWidth: 0.5,
    flexDirection: 'row'
  },
  googleLoginSignupCont: {
    marginTop: scaleByVertical(60),
    alignSelf: 'center',
    width: scale(620),
    height: scaleByVertical(88),
    borderRadius: 5,
    borderColor: Colors.dirtyWhite,
    borderWidth: 0.5,
    flexDirection: 'row'
  },
  or: {
    marginTop: scaleByVertical(80),
    width: scale(620),
    height: scaleByVertical(38),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  orText: {
    fontSize: scale(28),
    color: Colors.boxTextColor
  },
  orTextContainer: {
    marginHorizontal: scale(20)
  },
  dashLine: {
    height: 1,
    width: scale(250),
    borderColor: Colors.dirtyWhite,
    borderWidth: 1,
    borderStyle: "dashed"
  },
  emailLoginSignupCont: {
    marginTop: scaleByVertical(80),
    alignSelf: 'center',
    width: scale(620),
    height: scaleByVertical(88),
    borderRadius: 5,
    borderColor: Colors.dirtyWhite,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBoxMiddle: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  loginBoxLeft: {
    flex: 0.2,
    justifyContent: 'center',
    paddingLeft: scale(40)
  },
  loginBoxRight: {
    flex: 0.2,
  },
  loginBoxText: {
    color: Colors.boxTextColor,
    fontSize: scale(30)
  },
  facebookIcon: {
    width: scale(48),
    height: scaleByVertical(48)
  },
  googleIcon: {
    width: scale(66),
    height: scaleByVertical(42)
  },
  bottomBox: {
    marginTop: scaleByVertical(122),
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: scaleByVertical(162)
  },
  bottomBoxLeftText: {
    color: Colors.grayBlue,
    fontSize: scale(24),
    marginRight: scale(10),
    fontFamily: 'Avenir-Book'
  },
  bottomBoxRightText: {
    color: Colors.linkColor,
    fontSize: scale(26),
  }
});
const GenericLoginSignup = ({ title, type, bottomText, description, onTypePress, onBottomTextPress }) => (
  <View style={styles.container}>
    <StatusBar
      translucent
      hidden
    />
    <Image
      source={require('../../assets/images/Onboarding/Pip.png')}
      style={styles.imagePip}
    />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subTitle}>{description}</Text>
    <TouchableOpacity style={styles.facebookLoginSignupCont}>
      <View style={styles.loginBoxLeft}>
        <Image
          source={require('../../assets/images/Facebook.png')}
          style={styles.facebookIcon}
        />
      </View>
      <View style={styles.loginBoxMiddle}>
        <Text style={styles.loginBoxText}>{type} with Facebook</Text>
      </View>
      <View style={styles.loginBoxRight} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.googleLoginSignupCont}>
      <View style={styles.loginBoxLeft}>
        <Image
          source={require('../../assets/images/GooglePlus.png')}
          style={styles.googleIcon}
        />
      </View>
      <View style={styles.loginBoxMiddle}>
        <Text style={styles.loginBoxText}>{type} with Google</Text>
      </View>
      <View style={styles.loginBoxRight} />
    </TouchableOpacity>
    <View style={styles.or}>
      <View style={styles.dashLine} />
      <View style={styles.orTextContainer}>
        <Text style={styles.orText}>or</Text>
      </View>
      <View style={styles.dashLine} />
    </View>
    <TouchableOpacity
      style={styles.emailLoginSignupCont}
      onPress={onTypePress}
    >
      <Text style={styles.loginBoxText}>{type} with email</Text>
    </TouchableOpacity>
    <View style={styles.bottomBox}>
      <Text style={styles.bottomBoxLeftText}>{bottomText}</Text>
      <TouchableOpacity onPress={onBottomTextPress}>
        <Text style={styles.bottomBoxRightText}>{type === 'Sign up' ? 'Log in' : 'Sign up'}</Text>
      </TouchableOpacity>
    </View>
  </View>

);

GenericLoginSignup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  onTypePress: React.PropTypes.func.isRequired,
  onBottomTextPress: React.PropTypes.func.isRequired
};

export default GenericLoginSignup;
