import React, { PropTypes } from "react";
import { Text } from "react-native";

const Heading = ({ children, style, uppercase }) => (
  <Text
    style={{
      fontFamily: "GothamRounded-Book",
      fontSize: 18,
      color: "#388AA6",
      textAlign: "center",
      marginBottom: 25,
      ...style
    }}
  >{uppercase ? children.toUpperCase() : children}</Text>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  style: Text.propTypes.style,
  uppercase: PropTypes.bool
};

Heading.defaultProps = {
  style: {},
  uppercase: true
};

export default Heading;
