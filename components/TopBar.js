import React, { PropTypes } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { withNavigation } from '@exponent/ex-navigation';
import Icon from './Icon';

// Uses withNavigation to access this.props.navigator
// https://github.com/exponent/ex-navigation
@withNavigation
class TopBar extends React.Component {

  goBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: 15,
          position: 'relative',
          top: 20
        }}
      >
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.goBack}
        >
          {/* Back Button */}
          <Icon
            name="chevron-left"
            color="white"
            size={24}
          />
        </TouchableHighlight>
        <Text>{this.props.title}</Text>
        <TouchableHighlight
          underlayColor="transparent"
        >
          {/* Add to Deal Button */}
          <Icon
            name="icon-add"
            color="white"
            size={15}
          />
        </TouchableHighlight>
      </View>
    )
  }
}


TopBar.propTypes = {
  title: PropTypes.element
};
TopBar.defaultProps = {
  title: null
};

export default TopBar;
