import React from "react";
import { StyleSheet, View } from 'react-native';
import { scaleByVertical } from '../constants/Layout';
import TouchableTag from '../components/TouchableTag';

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: scaleByVertical(46)
  }
});

const TagCloud = props =>
  <View style={styles.tagsContainer}>
    { props.tags.map((tag, i) =>
      <TouchableTag
        key={tag.name}
        userFollow={tag.follow}
        text={tag.name}
        onPress={() => { props.onPress(i); }}
      />) 
    }
  </View>;

TagCloud.propTypes = {
  tags: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    follow: React.PropTypes.bool
  })).isRequired
};

export default TagCloud;
