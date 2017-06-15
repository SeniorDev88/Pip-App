import React, { PropTypes } from "react";
import { Image } from "react-native";

export default function PlatformLogo({ logoPath, style }) {
  return (
    <Image
      style={{
        height: 25,
        marginBottom: 60,
        resizeMode: "contain",
        ...style
      }}
      source={{ uri: logoPath }}
    />
  );
}

PlatformLogo.propTypes = {
  logoPath: PropTypes.string,
  style: Image.propTypes.style
};

PlatformLogo.defaultProps = {
  logoPath: "banter",
  style: {}
};
