import React from 'react';
import { View, Text } from 'react-native';

const titleStyle = {
  fontFamily: 'GothamRounded-Book',
  fontSize: 24,
  color: '#00ebc2',
};

const textStyle = {
  fontFamily: 'Avenir-Book',
  fontSize: 12,
  color: '#388BA7',
};

const containerStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const FundingStatistics = () => (
  <View
    style={{
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 35,
    }}
  >
    {/* Raised */}
    <View style={containerStyle}>
      <Text style={titleStyle}>$410K</Text>
      <Text style={textStyle}>Raised</Text>
    </View>

    {/* Target*/}
    <View style={containerStyle}>
      <Text style={titleStyle}>$1M</Text>
      <Text style={textStyle}>Target</Text>
    </View>

    {/* Days Left*/}
    <View style={containerStyle}>
      <Text style={titleStyle}>23 days</Text>
      <Text style={textStyle}>Remaining</Text>
    </View>
  </View>
);

export default FundingStatistics;
