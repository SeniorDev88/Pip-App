import React, { PropTypes } from "react";
import { View, Text } from "react-native";

const PageTitle = ({ style, children }) => (
  <View
    style={{
      borderColor: '#E4E7EA',
      borderStyle: 'solid',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'white',
      ...style
    }}
  >
    <View
      style={{
        paddingHorizontal: 15
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          lineHeight: 40,
          color: '#607D8B',
          fontSize: 15,
          fontFamily: 'Avenir-Medium',
          paddingBottom: 8
        }}
      >{children}</Text>
      <View
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: 4,
          borderRadius: 4,
          backgroundColor: '#00FFB9',
        }}
      />
    </View>
  </View>
);

PageTitle.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.string.isRequired
};

PageTitle.defaultProps = {
  style: {}
};

export default PageTitle;
