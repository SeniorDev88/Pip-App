import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Layout, { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  descriptionText: {
    fontSize: scaleByVertical(26),
    color: Colors.boxTextColor,
    textAlign: 'center',
    width: scale(600),
    fontFamily: 'Avenir-Book',
    lineHeight: Math.ceil(scaleByVertical(45))
  },
  descriptionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(50)
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: scaleByVertical(50),
    color: Colors.titleColor,
    textAlign: 'center',
    width: scale(500),
    fontFamily: 'GothamRounded-Book'
  },
  logoImage: {
    height: scaleByVertical(70),
    width: scale(53),
    marginLeft: scale(40),
    resizeMode: 'contain'
  },
  logoAndLoginContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  loginContainer: {
    flexDirection: 'row',
    marginRight: scale(40)
  },
  haveAnAccountText: {
    fontFamily: "Avenir-Book",
    fontSize: scaleByVertical(24),
    color: Colors.grayBlue
  },
  loginText: {
    fontSize: scaleByVertical(26),
    color: Colors.linkColor
  },
  mainImage: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
});

export default class Intro extends React.Component {

  renderLogoAndLogIn() {
    const { isLogo, onLoginPress } = this.props;
    return (
      <View style={styles.logoAndLoginContainer}>
        {!isLogo ?
          <Image
            style={styles.logoImage}
            source={require('../../assets/images/Onboarding/Pip.png')}
          /> : <View style={{ height: scaleByVertical(70) }} />}

        <View style={styles.loginContainer}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={styles.haveAnAccountText}>
              Have an account?
              </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity
              style={{ marginLeft: scale(5) }}
              onPress={onLoginPress}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }

  renderMainImage() {
    const { img, isLogo } = this.props;
    return (
      <View style={{ justifyContent: 'center', marginTop: isLogo ? scaleByVertical(350) : scaleByVertical(210) }}>
        <Image
          style={[{ height: isLogo ? scaleByVertical(250) : scaleByVertical(450), width: isLogo ? scale(300) : scale(450) }, styles.mainImage]}
          source={img}
        />
      </View>
    );
  }

  renderTitle() {
    const { title, isLogo } = this.props;
    return (
      <View
        style={[styles.titleView,
            { marginTop: isLogo ? scaleByVertical(230) : scaleByVertical(100) }]}
      >
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    );
  }

  renderDescription() {
    const { description } = this.props;
    return (
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          {description}
        </Text>
      </View>
    );
  }

  render() {
    const { description } = this.props;
    return (
      <View style={{ width: Layout.window.width }}>

        {this.renderLogoAndLogIn()}

        {this.renderMainImage()}

        {this.renderTitle()}

        {description && this.renderDescription()}

      </View>
    );
  }
}

Intro.propTypes = {
  isLogo: React.PropTypes.bool,
  description: PropTypes.string,
  title: PropTypes.string,
  img: React.PropTypes.number.isRequired,
  onLoginPress: React.PropTypes.func.isRequired
};

Intro.defaultProps = {
  description: "",
  isLogo: false,
  title: ""
};
