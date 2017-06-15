import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import Colors from '../constants/Colors';
import { scale } from '../constants/Layout';
import Icon from './Icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.boxBGColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: scale(30),
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
    fontSize: scale(24),
    textAlign: 'center'
  },
  textContainer: {
    marginTop: scale(40),
  }
});

export default class EmptyScreen extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    textTop: PropTypes.string.isRequired,
    textBottom: PropTypes.string
  };

  static defaultProps = {
    textBottom: ''
  };

  render() {
    const { icon, textTop, textBottom } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <Icon
          name={icon}
          color="gray"
          size={scale(180)}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{textTop}</Text>
          <Text style={styles.text}>{textBottom}</Text>
        </View>
      </View>
    );
  }
}
