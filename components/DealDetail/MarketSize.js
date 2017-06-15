import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const Item = ({ size, opacity, text, title }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size/2,
        backgroundColor: `rgba(0, 235, 194, ${opacity})`,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 14,
          backgroundColor: 'transparent',
        }}
      >
        {text}
      </Text>
    </View>
    <Text
      style={{
        marginTop: 15,
        fontFamily: 'GothamRounded-Book',
        fontSize: 24,
        color: '#00ebc2'
      }}
    >
      {title}
    </Text>
  </View>
);

Item.propTypes = {
  size: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const MarketSize = ({ som, sam, tam }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginHorizontal: 10,
      marginBottom: 60
    }}
  >
    <Item
      size={50}
      opacity={0.4}
      text="SOM"
      title={som}
    />
    <Item
      size={60}
      opacity={0.6}
      text="SAM"
      title={sam}
    />
    <Item
      size={80}
      opacity={1}
      text="TAM"
      title={tam}
    />
  </View>
);

MarketSize.propTypes = {
  som: PropTypes.string.isRequired,
  sam: PropTypes.string.isRequired,
  tam: PropTypes.string.isRequired
};

export default MarketSize;
