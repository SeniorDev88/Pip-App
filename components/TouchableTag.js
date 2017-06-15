import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import { scale, scaleByVertical } from '../constants/Layout';
import Tag from './Tag';

const styles = StyleSheet.create({
  tag: {
    marginHorizontal: scale(16),
    marginVertical: scaleByVertical(24),
    backgroundColor:'blue'
  },
  userFollow: {
    borderColor: Colors.tintColor,
    backgroundColor: Colors.tintColor,
    color: 'white',

  },
  userNOTFollow: {
    borderColor: Colors.boxTextColor,
    backgroundColor: 'transparent',
    color: Colors.boxTextColor,
  },
});
const TouchableTag = props =>
  <TouchableOpacity onPress={props.onPress}>
    <Tag
      text={props.text}
      style={[styles.tag, props.userFollow ? styles.userFollow : styles.userNOTFollow]}
    />
  </TouchableOpacity>;
TouchableTag.propTypes = {
  userFollow: React.PropTypes.bool,
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};
TouchableTag.defaultProps = { userFollow: false };

export default TouchableTag;
