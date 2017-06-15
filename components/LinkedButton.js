import React from "react";
import {
  Linking,
  TouchableOpacity,
  Text
} from "react-native";
import Colors from "../constants/Colors";

export default function LinkedButton({ buttonText, urlToOpen }) {
  function pressLinkedButton(url) {
    Linking.openURL(url);
  }

  return (
    <TouchableOpacity
      onPress={() => pressLinkedButton(urlToOpen)}
      style={{
        backgroundColor: Colors.lightBlue,
        borderRadius: 2.5,
        height: 44,
        marginBottom: 17,
        marginHorizontal: 32,
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          fontFamily: "Avenir-Black",
          fontSize: 12,
          textAlign: "center",
          color: "#fff"
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

LinkedButton.propTypes = {
  buttonText: React.PropTypes.string,
  urlToOpen: React.PropTypes.string
};

LinkedButton.defaultProps = {
  buttonText: "Go To Platform",
  urlToOpen: "https://google.com"
};
