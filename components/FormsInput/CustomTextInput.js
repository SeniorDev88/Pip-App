import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image
} from 'react-native';
import { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    height: scaleByVertical(130),
    flexDirection: 'row'
  },
  textInput: {
    justifyContent: 'flex-end',
    flex: 1,
    marginTop: scaleByVertical(50),
    fontFamily: 'Avenir',
    fontSize: scaleByVertical(26),
    color: Colors.boxTextColor,
    marginLeft: scale(10)
  },
  icoContainer: {
    marginTop: scaleByVertical(50),
    justifyContent: 'center',
    width: scale(50),
    alignItems: 'center'
  },
  ico: {
    height: scaleByVertical(42),
    width: scale(42)
  },
  separator: {
    backgroundColor:
    Colors.tintColor,
    height: 1
  }

});

/* Example.
 *
 * <CustomTextInput
 isValid={firstName.length > 3}
 onChangeText={(text) => { this.setState({ firstName: text }); }}
 value={firstName}
 placeholder={'first name1'}
 />
 * */

export default class CustomTextInput extends React.Component {

  render() {
    const {
      isValid,
      value,
      onChangeText,
      placeholder,
      autoCapitalize,
      secureTextEntry,
      keyboardType
    } = this.props;
    return (
      <View>
        <View style={styles.container}>

          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.textInput}
            value={value}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            underlineColorAndroid={'transparent'}
          />

          <View style={styles.icoContainer}>
            {isValid &&
            <Image
              source={require('../../assets/images/Onboarding/ico_tick.png')}
              style={styles.ico}
            />}
          </View>

        </View>
        <View style={styles.separator} />
      </View>
    );
  }
}

CustomTextInput.propTypes = {
  isValid: React.PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  autoCapitalize: React.PropTypes.string,
  keyboardType: React.PropTypes.string,
  secureTextEntry: React.PropTypes.bool
};

CustomTextInput.defaultProps = {
  isValid: false,
  placeholder: "",
  autoCapitalize: 'sentences',
  keyboardType: 'default',
  secureTextEntry: false
};
