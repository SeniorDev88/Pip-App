import React, { PropTypes } from "react";
import { Text } from "react-native";

const HeadingGreenLg = ({ style, children }) => (
  <Text
    style={{
      fontFamily: "GothamRounded-Book",
      fontSize: 24,
      color: "#00ebc2",
      textAlign: "center",
      marginBottom: 30,
      ...style
    }}
  >{children}</Text>
);

HeadingGreenLg.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.string.isRequired
};

HeadingGreenLg.defaultProps = {
  style: {}
};

export default HeadingGreenLg;
