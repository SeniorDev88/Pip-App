import React from "react";
import { View, Text } from "react-native";

const DealDetailDescription = () => (
// Margin to offset the negative margin of the logo,
// includes additional margin to space the logo and title
  <View
    style={{
      alignItems: 'center',
      paddingHorizontal: 20,
      marginBottom: 20
    }}
  >
    <Text
      style={{
        fontFamily: 'Avenir-Book',
        fontSize: 13,
        lineHeight: 23,
        textAlign: 'center',
        color: '#60708B'
      }}
    >Cocoon makes home security simple & affordable for everyone.</Text>
  </View>
);

export default DealDetailDescription;
