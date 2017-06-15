import React from "react";
import { View, Text } from "react-native";

const DealDetailTile = () => (
// Margin to offset the negative margin of the logo
// includes additional margin to space the logo and title
  <View
    style={{
      alignItems: 'center',
      marginTop: 20,
      paddingHorizontal: 20
    }}
  >
    <Text
      style={{
        fontFamily: 'GothamRounded-Book',
        fontSize: 25,
        lineHeight: 30,
        letterSpacing: 1.05,
        textAlign: 'center',
        color: '#215060'
      }}
    >
      {/* Comes in as props and .toUpperCase is applied */}
      {'N1ce Frozen Cocktails'.toUpperCase()}
    </Text>
  </View>
);

export default DealDetailTile;
