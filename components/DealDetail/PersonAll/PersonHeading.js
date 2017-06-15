import React, { PropTypes } from "react";
import { Text } from "react-native";

const PersonHeading = ({ style, children }) => (
  <Text
    style={{
      fontFamily: "GothamRounded-Book",
      fontSize: 24,
      color: '#00ebc2',
      textAlign: "center",
      ...style
    }}
  >{children}</Text>
);

PersonHeading.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.string.isRequired
};

PersonHeading.defaultProps = {
  style: {}
};

export default PersonHeading;
