import React, { PropTypes } from "react";
import { Image, TouchableOpacity, Linking } from "react-native";

export default function LinkWeb({ link }) {
  
  function pressLinkedButton(url) {
    Linking.openURL(url);
  }
  
  return (
    <TouchableOpacity
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 15
      }}
      onPress={() => pressLinkedButton(link)}
    >
      <Image
        style={{
          width: 39,
          height: 39
        }}
        source={require('../assets/images/DealDetail/icon-linkweb.png')}
      />
    </TouchableOpacity>
  );
}

LinkWeb.PropTypes = {};
