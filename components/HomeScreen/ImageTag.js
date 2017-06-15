import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { Components } from "exponent";
import { scale } from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import Tag from "../Tag";
import Icon from '../Icon';

const styles = StyleSheet.create({
  container: {
    width: scale(210),
    height: scale(300),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: Colors.boxBGBorderColor,
    overflow: 'hidden'
  },
  img: {
    width: scale(210),
    height: scale(300)
  },
  bottom: {
    height: scale(78),
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAdd: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: scale(11),
    right: scale(12)
  },
  tag: {
    fontSize: scale(26)
  }
});

export default class ImageTag extends Component {
  static propTypes = {
    image: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  };

  render() {
    const { image, tag, onPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            style={styles.img}
          />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={onPress}
          >
            <Icon
              name="icon-add"
              size={scale(36)}
              color={Colors.boxBGBorderColor}
            />
          </TouchableOpacity>
          <Components.BlurView
            tint="default"
            intensity={80}
            style={styles.bottom}
          >
            <Tag
              text={tag}
              style={styles.tag}
            />
          </Components.BlurView>
        </TouchableOpacity>
      </View>
    );
  }
}
