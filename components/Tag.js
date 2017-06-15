import React, { PropTypes } from "react";
import { Text, StyleSheet, View } from 'react-native';
import { scale } from '../constants/Layout';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: scale(320),
  },
  text: {
    fontFamily: "GothamRounded-Medium",
    fontSize: 12,
    textAlign: 'center',
    color: "white",
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 4,
    paddingTop: 5,
    paddingHorizontal: 8,
    overflow: 'hidden'
  }
});
const Tag = ({ text, style }) => (
  <View style={styles.container}>
    <Text
      style={[styles.text, style]}
      numberOfLines={1}
    >
      {text}
    </Text>
  </View>
);

Tag.propTypes = {
  text: PropTypes.string.isRequired,
  style: Text.propTypes.style
};

Tag.defaultProps = {
  style: {}
};

export default Tag;
