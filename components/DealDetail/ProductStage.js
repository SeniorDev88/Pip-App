import React, { PropTypes } from "react";
import { Image, View, Text } from "react-native";

const ProductStage = ({ growthStage }) => {
  switch (growthStage) {
    case "growth":
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 60
          }}
        >
          <Image
            style={{
              marginBottom: 15,
              height: 100,
              resizeMode: 'contain',
            }}
            source={require('../../assets/images/DealDetail/icon-growth.png')}
          />
          <Text
            style={{
              fontFamily: 'GothamRounded-Book',
              fontSize: 24,
              color: '#00ebc2'
            }}
          >Growth</Text>
        </View>
      );
    default:
      return null;
  }
};

ProductStage.propTypes = {
  growthStage: PropTypes.string.isRequired
};

export default ProductStage;

