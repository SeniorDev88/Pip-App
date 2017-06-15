import React, { Component, PropTypes } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal } from "react-native";
import Colors from '../../constants/Colors';
import { scale } from '../../constants/Layout';
import Icon from '../Icon';

const styles = StyleSheet.create({
  button: {
    height: scale(110),
    width: scale(710),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBorders: {
    borderBottomColor: Colors.boxBGBorderColor,
    borderBottomWidth: scale(2)
  },
  actionsheetButtonTitle: {
    backgroundColor: Colors.transparent,
    color: Colors.linkColor,
    fontFamily: 'GothamRounded-Book',
    fontSize: scale(36),
  },
  select: {
    color: Colors.primary
  },
  icon: {
    position: 'absolute',
    right: scale(50),
    top: scale(30)
  }
});

export default class ActionSheetButton extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onpress: PropTypes.func.isRequired,
    lastButton: PropTypes.bool
  };
  render() {
    const { active, title, onpress, lastButton } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, !lastButton && styles.buttonBorders]}
        onPress={onpress}
        underlayColor={Colors.boxBGColor}
      >
        <Text
          style={[styles.actionsheetButtonTitle, active && styles.select]}
        >
          {title}
        </Text>
        {active && <Icon
          name={'icon-tick'}
          size={scale(36)}
          color={Colors.primary}
          style={styles.icon}
        />}
      </TouchableOpacity>
    );
  }
}
