import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scale, scaleByVertical } from '../../constants/Layout';
import Icon from '../Icon';
import Colors from '../../constants/Colors';
import NavBarLeft from '../NavBarLeft';
import NavBarRight from '../NavBarRight';
import NavigationBarTitle from '../NavigationBarTitle';
import NavigatorButton from '../NavigatorButton';

import CustomTextInput from '../FormsInput/CustomTextInput';
import Selector from '../FormsInput/Selector';


const styles = StyleSheet.create({
  iconSettings: {
    color: 'white',
  },
  screenContainer: {
    flexGrow: 1
  },
  bottomButton: {
    marginTop: scaleByVertical(60),
    marginBottom: scaleByVertical(100)
  },
  header: {
    color: Colors.titleColor,
    fontSize: scaleByVertical(46),
    textAlign: 'center',
    marginTop: scaleByVertical(50),
    marginBottom: scaleByVertical(80),
    fontFamily: 'GothamRounded-Book'
  },
  inputsScrollView: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 0,
    paddingBottom: scaleByVertical(150)
  },
  textInputs: {
    paddingHorizontal: scale(65),
  },
  selector: {
    marginTop: scaleByVertical(75)
  },
});

const getAges = (minAge, maxAge) => {
  const ages = [];
  for (let i = minAge; i < maxAge; i += 1) {
    ages.push({ key: `${i}`, value: i });
  }
  return ages;
};


export default class ProfileDetails extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      renderTitle: () =>
        <NavigationBarTitle>
          <Icon name="icon-settings" size={25} style={styles.iconSettings} />
        </NavigationBarTitle>,
      renderLeft: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('exitPressed');
        };
        return <NavBarLeft routeName={route.routeName} actionIcon={'icon-exit'} onActionPress={buttonPress} />;
      },
      renderRight: () => <NavBarRight />
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
    };
  }

  componentWillMount() {
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('exitPressed', this.pressedEventCallback);
  }
  pressedEventCallback = () => {
    this.props.navigator.pop();
  };
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
  }

  ages = getAges(16, 100);

  render() {
    const { firstName, lastName, email, address } = this.state;

    return (
      <View style={styles.screenContainer}>
        <StatusBar
          translucent={true}
          hidden={true}
        />
        <Text style={styles.header}>Change your Details</Text>
        <KeyboardAwareScrollView
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          contentContainerStyle={styles.inputsScrollView}
          extraHeight={scaleByVertical(360)}
        >
          <View style={styles.textInputs}>
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
              isValid={address.length > 2}
              onChangeText={(text) => { this.setState({ address: text }); }}
              value={address}
              placeholder={'address'}
              autoCapitalize={'none'}
            />

            <Selector
              placeholder="age"
              items={this.ages}
              onValueChange={() => { }}
              style={styles.selector}
            />
          </View>
          <NavigatorButton
            buttonText="Save"
            style={styles.bottomButton}
            onPress={() => { }}
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
