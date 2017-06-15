import React, { PropTypes } from "react";
import { View, Image } from "react-native";

export default function PersonAvatar({ imageUrl }) {
  return (
    <View
      style={{
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
      }}
    >
      <Image
        source={{
          uri: imageUrl
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 4,
          borderColor: "#fff"
        }}
      />
    </View>
  );
}

PersonAvatar.propTypes = {
  imageUrl: PropTypes.string.isRequired
};
