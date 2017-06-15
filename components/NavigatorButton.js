import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import Colors from "../constants/Colors";
import { scale, scaleByVertical } from '../constants/Layout';

const styles = StyleSheet.create({
  defaultProps: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 2.5,
    height: scaleByVertical(90),
    marginHorizontal: scale(40),
    justifyContent: "center"
  }
});

export default function NavigatorButton({ buttonText, style, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.defaultProps, style]}
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

NavigatorButton.propTypes = {
  buttonText: React.PropTypes.string,
  onPress: React.PropTypes.func
};


NavigatorButton.defaultProps = {
  buttonText: "",
  onPress: () => {}
};
