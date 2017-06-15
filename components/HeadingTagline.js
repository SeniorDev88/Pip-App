import React from "react";
import { Text } from "react-native";

export default function HeadingTagline(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: 'GothamRounded-Book',
          fontSize: 12,
          lineHeight: 29,
          color: '#388ba7',
          textAlign: "center",
        }
      ]}
    />
  );
}
