import React, { PropTypes } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, scaleByVertical } from '../constants/Layout';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  loginButtonStyle: {
    width: scale(150),
    height: scaleByVertical(10),
    marginLeft: scale(5),
    marginTop: scaleByVertical(-12)
  },
  haveAccountText: {
    fontFamily: "Avenir",
    fontSize: scaleByVertical(24),
    color: Colors.grayBlue
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
    marginRight: scale(10)
  },
  bottomBoxRightText: {
    color: Colors.linkColor,
    fontSize: scale(26),
  }
});

const TextAndLinkedText = ({ text, linkedText, onPress, customStyle }) => {
  return (
    /*<Text style={[styles.haveAccountText, customStyle]}>
      {text}
      <TouchableOpacity style={styles.loginButtonStyle} onPress={onPress}>
        <Text style={{ fontSize: scaleByVertical(26), color: Colors.linkColor }}>{linkedText}</Text>
      </TouchableOpacity>
    </Text>*/
    <View style={styles.bottomBox}>
      <Text style={styles.bottomBoxLeftText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.bottomBoxRightText}>{linkedText}</Text>
      </TouchableOpacity>
    </View>
  );
};

TextAndLinkedText.propTypes = {
  text: PropTypes.string.isRequired,
  linkedText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  customStyle: Text.propTypes.style
};

TextAndLinkedText.defaultProps = {
  onPress: null,
  customStyle: {}
};

export default TextAndLinkedText;
