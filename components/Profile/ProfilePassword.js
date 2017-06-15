import React from 'react';
import ReactNative, {
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

const SCROLL_VIEW_REF = "scrollView";

const styles = StyleSheet.create({
  iconSettings: {
    color: 'white',
  },
  screenContainer: {
    flexGrow: 1
  },
  bottomButton: {
    marginVertical: scaleByVertical(30),
  },
  header: {
    color: Colors.titleColor,
    fontSize: scaleByVertical(46),
    textAlign: 'center',
    marginTop: scaleByVertical(50),
    marginBottom: scaleByVertical(111),
    fontFamily: 'GothamRounded-Book'
  },
  inputsScrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  textInputs: {
    paddingHorizontal: scale(65),
    flexGrow: 1,
  },
  selector: {
    marginTop: scaleByVertical(75)
  },
});

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
      curPassword: '',
      newPassword: '',
      confirmPassword: '',
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
  

  render() {
    const { curPassword, newPassword, confirmPassword } = this.state;

    return (
      <View style={styles.screenContainer}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <Text style={styles.header}>Change your Password</Text>
        <KeyboardAwareScrollView
          ref={SCROLL_VIEW_REF}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          contentContainerStyle={styles.inputsScrollView}
        >
          <View style={styles.textInputs}>
            <CustomTextInput
              onChangeText={(text) => { this.setState({ curPassword: text }); }}
              value={curPassword}
              placeholder={'current password'}
              autoCapitalize={'none'}
              secureTextEntry
            />

            <CustomTextInput
              onChangeText={(text) => { this.setState({ newPassword: text }); }}
              value={newPassword}
              placeholder={'new password'}
              autoCapitalize={'none'}
              secureTextEntry
            />

            <CustomTextInput
              onChangeText={(text) => { this.setState({ confirmPassword: text }); }}
              value={confirmPassword}
              placeholder={'confirm password'}
              autoCapitalize={'none'}
              secureTextEntry
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
