import React, { Component, PropTypes } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View
} from "react-native";
import Icon from '../Icon';
import Tag from '../Tag';
import { scale, scaleByVertical } from '../../constants/Layout';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9FC',
  },
  formBar: {
    paddingTop: scale(20),
    backgroundColor: 'white',
    height: scale(116),
    borderBottomWidth: scale(1),
    borderColor: '#A2B7C0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: scale(28.5),
    paddingRight: scale(50)
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingTop: scale(10),
    color: '#388AA6',
    fontFamily: 'GothamRounded-Book',
    fontSize: scale(36)
  },
  tag: {
    marginLeft: scale(30),
    fontFamily: "GothamRounded-Medium",
    fontSize: 12,
    color: "#215060",
    borderWidth: 1.5,
    borderColor: "#215060",
    borderRadius: 4,
    paddingTop: 5,
    paddingHorizontal: 8,
  }
});

export default class HeadersFeed extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string,
    onPress: PropTypes.func,
  };
  static defaultProps = {
    onPress: null,
    tag: null
  };
  render() {
    const { title, onPress, tag } = this.props;
    return (
      <TouchableOpacity
        style={styles.formBar}
        disabled={!onPress}
        onPress={onPress}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {tag && <Text
            style={styles.tag}
          >
            {tag}
          </Text> }
        </View>
        {onPress && <Icon
          name="chevron-right"
          size={30}
          color="#00CCFF"
        />}
      </TouchableOpacity>
    );
  }
}
