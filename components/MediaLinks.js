import React, { PropTypes } from "react";
import { Text, View, TouchableHighlight, Linking } from "react-native";
import { generate } from 'shortid';

import Icon from "./Icon";

const MediaLinks = ({ links }) => (
  <View
    style={{
      paddingHorizontal: 50,
      marginBottom: 60
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
      }}
    >
      {links.map(({ icon, link }) => (
        <TouchableHighlight
          onPress={() => Linking.openURL(link)}
          underlayColor="transparent"
          key={generate()}
        >
          <Icon
            name={icon}
            size={23}
            style={{
              color: '#14CFFE'
            }}
          />
        </TouchableHighlight>
      ))}
    </View>
    <Text
      style={{
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Avenir-Book',
        color: '#607D8B'
      }}
    >View related web pages</Text>
  </View>
);

MediaLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object)
};

MediaLinks.defaultProps = {
  links: []
};

export default MediaLinks;
