import React, { PropTypes } from "react";
import { Image, TouchableOpacity } from "react-native";

export default function PersonLinkWeb({ handlePress }) {
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
        source={require('../../../assets/images/DealDetail/icon-linkweb.png')}
      />
    </TouchableOpacity>
  );
}

PersonLinkWeb.PropTypes = {
  handlePress: PropTypes.string
};
