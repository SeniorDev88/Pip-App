import React, { PropTypes } from "react";
import { Text } from "react-native";

const HeadingData = ({ children, style }) => (
  <Text
    style={{
      fontFamily: "GothamRounded-Book",
      fontSize: 24,
      color: "#00ebc2",
      marginBottom: 15,
      ...style
    }}
  >{children}</Text>
);

HeadingData.propTypes = {
  children: PropTypes.string.isRequired,
  style: Text.propTypes.style
};

HeadingData.defaultProps = {
  style: {}
};

export default HeadingData;
