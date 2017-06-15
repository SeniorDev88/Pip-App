import React, { PropTypes } from "react";
import { Text } from "react-native";

const PersonPosition = ({ style, children }) => (
  <Text
    style={{
      fontFamily: 'GothamRounded-Book',
      fontSize: 12,
      lineHeight: 29,
      color: '#388ba7',
      textAlign: "center",
      marginBottom: 15,
      ...style
    }}
  >{children}</Text>
);

PersonPosition.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.string.isRequired
};

PersonPosition.defaultProps = {
  style: {}
};

export default PersonPosition;
