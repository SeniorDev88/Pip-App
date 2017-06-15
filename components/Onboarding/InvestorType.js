import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Layout, { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  logoImage: {
    height: scaleByVertical(70),
    width: scale(53),
    marginLeft: scale(40),
    resizeMode: 'contain'
  },
  mainImageContainer: {
    justifyContent: 'center',
    marginTop: scaleByVertical(90)
  },
  mainImage: {
    height: scaleByVertical(320),
    width: scale(320),
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  titleConatiner: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: scaleByVertical(50),
    color: Colors.titleColor,
    textAlign: 'center',
    width: scale(550),
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
    width: scale(650),
    fontFamily: 'Avenir',
    lineHeight: Math.ceil(scaleByVertical(45))
  },
  okButtonImage: {
    width: scale(62),
    height: scaleByVertical(62),
    position: 'absolute',
    right: scale(15),
    bottom: scaleByVertical(15),
    resizeMode: 'contain'
  }
});

export default class InvestorType extends React.Component {


  renderLogo() {
    return (
      <View style={{ justifyContent: 'flex-start' }}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/Onboarding/Pip.png')}
        />

      </View>
    );
  }

  renderMainImage() {
    const { img, isChecked, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.mainImageContainer} onPress={onPress}>
        <Image
          style={styles.mainImage}
          source={img}
        >
          {isChecked &&
          <Image
            style={styles.okButtonImage}
            source={require('../../assets/images/InvestorType/icon_ok.png')}
          />}
        </Image>
      </TouchableOpacity>
    );
  }

  renderTitle(title) {
    const { isRenderLogo } = this.props;
    return (
      <View style={[styles.titleConatiner, { marginTop: isRenderLogo ? scaleByVertical(70) : scaleByVertical(20) }]}>
        <Text style={styles.titleText}>
          {title}
        </Text>
      </View>
    );
  }

  renderDescription(text) {
    const { isRenderLogo } = this.props;
    return (
      <View style={[styles.descriptionContainer, { marginTop: isRenderLogo ? scaleByVertical(50) : scaleByVertical(30) }]}>
        <Text style={styles.descriptionText}>
          {text}
        </Text>
      </View>
    );
  }

  render() {
    const { description, title, isRenderLogo } = this.props;
    return (
      <View style={{ width: Layout.window.width }}>

        {isRenderLogo && this.renderLogo()}

        {this.renderTitle("Investor Type")}

        {this.renderDescription("Which best describes you?")}

        {this.renderMainImage()}

        {this.renderTitle(title)}

        {this.renderDescription(description)}

      </View>
    );
  }
}

InvestorType.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  img: React.PropTypes.number.isRequired,
  onPress: React.PropTypes.func.isRequired,
  isChecked: React.PropTypes.bool,
  isRenderLogo: React.PropTypes.bool
};

InvestorType.defaultProps = {
  description: "",
  title: "",
  isChecked: false,
  isRenderLogo: false
};

