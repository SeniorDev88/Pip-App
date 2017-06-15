import React from "react";
import { Image, View, Text } from "react-native";

import Tag from '../Tag';

const DealDetailLogo = () => (
  <View
    style={{
      height: 40,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: '#00EBC2',
      flexDirection: 'row',
      paddingHorizontal: 25
    }}
  >
    <Tag
      text="Alcohol"
    />
    <Image
      source={{
        uri: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png"
      }}
      style={{
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#fff"
      }}
    />
    <Text
      style={{
        fontFamily: "Avenir-Medium",
        fontSize: 15,
        textAlign: "center",
        color: "#fff"
      }}
    >REVENUE</Text>
  </View>
);

export default DealDetailLogo;
