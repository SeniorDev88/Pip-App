import React, { PropTypes } from "react";
import { View } from "react-native";
import Icon from './Icon';

const IconButton = ({ icon, containerStyle }) => {
  let size;
  switch (icon) {
    case 'icon-expand':
      size = 20;
      break;
    case 'icon-www':
      size = 7;
      break;
    default:
      size = 16;
  }
  return (
    <View
      style={{
        width: 30,
        height: 30,
        backgroundColor: '#00CCFF',
        borderRadius: 30,
        ...containerStyle
      }}
    >
      <Icon
        name={icon}
        color="white"
        size={size}
        style={{
          backgroundColor: 'transparent',
          lineHeight: 30,
          textAlign: 'center'
        }}
      />
    </View>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  containerStyle: View.propTypes.style
};

IconButton.defaultProps = {
  containerStyle: {}
};

export default IconButton;
