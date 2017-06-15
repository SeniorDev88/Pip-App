import React, { PropTypes } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

export default function DealDetailCollapsibleHeader({ headerText, iconPath, handlePress }) {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15
      }}
      onPress={handlePress}
    >
      <Image
        style={{
          width: 39,
          height: 39
        }}
        source={iconPath}
      />
      <Text
        style={{
          fontFamily: "Avenir-Book",
          fontSize: 12,
          lineHeight: 14,
          color: "rgba(0, 0, 0, 0.44)",
          textAlign: "center",
          letterSpacing: 1.05,
          marginTop: 4
        }}
      >
        {headerText}
      </Text>
    </TouchableOpacity>
  );
}

DealDetailCollapsibleHeader.propTypes = {
  headerText: PropTypes.string,
  handlePress: PropTypes.func
};
