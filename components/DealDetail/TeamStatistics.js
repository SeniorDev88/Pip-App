import React, { PropTypes } from 'react';
import { Image, View, Text } from 'react-native';

const Stat = ({ imageSrc, text }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Image
      source={imageSrc}
      style={{
        height: 25,
        resizeMode: 'contain'
      }}
    />
    <Text
      style={{
        marginTop: 15,
        fontFamily: 'GothamRounded-Book',
        fontSize: 24,
        color: '#00ebc2'
      }}
    >{text}</Text>
  </View>
);

Stat.propTypes = {
  imageSrc: Image.propTypes.source.isRequired,
  text: PropTypes.string.isRequired
};

const TeamStatistics = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 27,
      marginBottom: 60
    }}
  >
    {/* Raised */}
    <Stat
      imageSrc={require('../../assets/images/additional_material/icon-start.png')}
      text={"2014"}
    />

    {/* Target*/}
    <Stat
      imageSrc={require('../../assets/images/DealDetail/icon-hq.png')}
      text="Delaware"
    />

    {/* Days Left*/}
    <Stat
      imageSrc={require('../../assets/images/additional_material/icon-people.png')}
      text="6-10"
    />
  </View>
);

export default TeamStatistics;
