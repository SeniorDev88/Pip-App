import React from "react";
import { Image, View, Text } from "react-native";

const DealDetailLocation = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25
    }}
  >
    <Image
      style={{
        height: 10,
        width: 6.5,
        marginRight: 6,
        marginTop: -2
      }}
      source={require('../../assets/images/DealDetail/location-pin.png')}
    />
    <Text
      style={{
        fontFamily: 'Avenir-Book',
        fontSize: 12,
        color: '#388BA7'
      }}
    >
      Delaware, USA
    </Text>
  </View>
);

export default DealDetailLocation;
