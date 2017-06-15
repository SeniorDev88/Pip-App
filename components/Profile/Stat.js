import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Colors from '../../constants/Colors';
import { scale, scaleByVertical } from '../../constants/Layout';
import Tag from '../Tag';

const styles = StyleSheet.create({
  informationFrame: {
    flexDirection: 'row',
    backgroundColor: Colors.boxBGColor,
    borderColor: Colors.boxBGBorderColor,
    borderWidth: 1,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: scaleByVertical(60),
    marginBottom: scale(30),
    paddingVertical: scale(30),
    alignItems: 'stretch'
  },
  informationBigText: {
    color: Colors.tintColor,
    fontSize: scaleByVertical(56),
  },
  subText: {
    fontSize: scaleByVertical(28),
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
  },
  informationCell: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

const Stat = props =>
  <View style={styles.informationFrame}>
    <View style={styles.informationCell}>
      <Text style={styles.informationBigText}>{props.views}</Text>
      <Text style={[styles.subText, props.styleTitle]}>{props.title1 ? props.title1 : 'Viewed'}</Text>
    </View>
    <View style={styles.informationCell}>
      {props.favouriteTag}
      <Text style={[styles.subText, props.styleTitle]}>Favourite Tag</Text>
    </View>
    <View style={styles.informationCell}>
      <Text style={styles.informationBigText}>{props.followingTagsCount}</Text>
      <Text style={[styles.subText, props.styleTitle]}>{props.title2 ? props.title2 : 'Tags Following'}</Text>
    </View>
  </View>;
Stat.propTypes = {
  views: React.PropTypes.number,
  favouriteTag: React.PropTypes.objectOf(Tag).isRequired,
  followingTagsCount: React.PropTypes.number,
  styleTitle: Text.propTypes.style,
  title1: React.PropTypes.string,
  title2: React.PropTypes.string,
};
Stat.defaultProps = {
  views: 0,
  followingTagsCount: 0,
  styleTitle: {},
  title1: '',
  title2: ''
};

export default Stat;
