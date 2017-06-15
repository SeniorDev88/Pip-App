import React, { Component, PropTypes } from "react";
import { View, Image, Text } from 'react-native';

export default class DealTile extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#d6d7da' }}
        >
          <View>
            <Image
              source={{ uri: this.props.deal.dealLogo }}
            />
            <Text>{this.props.deal.dealName}</Text>
            <Image
              source={{ uri: this.props.deal.dealPlatformLogo }}
            />
          </View>
          <Image
            source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-7.png' }}
          />
          <View>
            <View>
              <View>{this.props.deal.dealCategory}</View>
              <View>15:34</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
