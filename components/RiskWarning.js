import React from "react";
import { View, Text } from "react-native";
import Icon from './Icon';

const RiskWarning = () => (
  <View
    style={{
      padding: 15,
      backgroundColor: '#00EBC2'
    }}
  >
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: 'row',
      }}
    >
      <View
        style={{
          width: 16,
          height: 16,
          backgroundColor: 'white',
          borderRadius: 16,
          marginRight: 10
        }}
      >
        <Icon
          name="icon-info"
          color="#00EBC2"
          size={11}
          style={{
            backgroundColor: 'transparent',
            lineHeight: 16,
            textAlign: 'center'
          }}
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          fontFamily: 'Avenir-Medium'
        }}
      >Risk Warning</Text>
    </View>
    <View
      style={{
        padding: 10
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 13,
          fontFamily: 'Avenir-Roman'
        }}
      >Investing in early stage businesses involves high risks, which may include long-term investment horizons, illiquidity, lack of income and potential dilution. Tax treatment is on a per investor basis and may change in the future. Pip is not the originator of the financial promotions that appear on its site. Pip takes no responsibility for the information or for any recommendations or opinions made by the companies or its users.</Text>
    </View>
    <Text
      style={{
        color: 'white',
        fontSize: 12,
        fontFamily: 'Avenir-Book',
        textAlign: 'center'
      }}
    >
      See full risk warning <Text
        style={{
          fontSize: 13,
          fontFamily: 'GothamRounded-Medium'
        }}
      >here</Text>
    </Text>
  </View>
);

export default RiskWarning;
