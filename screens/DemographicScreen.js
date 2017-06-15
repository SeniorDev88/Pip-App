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
import Selector from '../components/FormsInput/Selector';

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
  continueButtonContainer: {
    height: scaleByVertical(125)
  },
  continueButton: {
    marginTop: scaleByVertical(20)
  },
  avocadoImage: {
    marginTop: scaleByVertical(110),
    width: scale(100),
    height: scaleByVertical(100),
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  mainInputsContainer: {
    marginTop: scaleByVertical(35),
    marginHorizontal: scale(40)
  }
});

const countryItems = [
  {
    key: 'United Kingdom',
    value: '1'
  },
  {
    key: 'France',
    value: '2'
  },
  {
    key: 'Germany',
    value: '3'
  }
];

const ageItems = [
  {
    key: '0-17',
    value: '1'
  },
  {
    key: '18-35',
    value: '2'
  },
  {
    key: '36-50',
    value: '3'
  }
];

export default class DemographicScreen extends React.Component {

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
    return (
      <View style={styles.mainInputsContainer}>

        <View style={{ marginTop: scaleByVertical(110) }}>
          <Selector
            placeholder="country"
            items={countryItems}
            onValueChange={(value) => { console.log('val is ', value); }}
          />
        </View>
        <View style={{ marginTop: scaleByVertical(110) }}>
          <Selector
            placeholder="age"
            items={ageItems}
            onValueChange={(value) => { console.log('val is ', value); }}
          />
        </View>

        <Image
          style={styles.avocadoImage}
          source={require('../assets/images/Onboarding/icon-avocado.png')}
        />


      </View>
    );
  }

  renderContinueButton() {
    return (
      <View style={[styles.continueButtonContainer, { marginTop: Platform.OS === 'ios' ? scaleByVertical(130) : scaleByVertical(100) }]}>
        <NavigatorButton
          buttonText="Continue"
          style={styles.continueButton}
          onPress={() => this.props.navigator.push('investorOnboarding')}
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
            {this.renderTitle("Demographic")}

            {this.renderDescription("Tell us more to better personalise your experience.")}

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

