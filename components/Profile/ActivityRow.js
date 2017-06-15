import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import moment from 'moment';
import { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  activityRow: {
    flexDirection: 'row',
    paddingHorizontal: scale(50),
    flex: 1,
    minHeight: scaleByVertical(120),
  },
  actionAndThreadContainer: {
    minHeight: scaleByVertical(109),
    flexDirection: 'column',
    alignItems: 'center',
  },
  thread: {
    width: 1,
    backgroundColor: Colors.tintColor,
    flexGrow: 1
  },
  activityDescription: {
    flexGrow: 0,
    flexShrink: 1,
    marginLeft: scale(34)
  },
  activityNameContainer: {
    minHeight: scale(60),
    justifyContent: 'center'
  },
  activityDate: {
    fontSize: scaleByVertical(28),
    fontFamily: 'Avenir-Light',
  },
  activityName: {
    fontSize: scaleByVertical(28),
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
    marginLeft: scale(15),
  },
  viewIcon: {
    width: scale(60),
    height: scale(60)
  }
});

const ActivityRow = props =>
  <View style={styles.activityRow}>
    <View style={styles.actionAndThreadContainer}>
      <Image
        source={require('../../assets/images/Profile/ICON_View.png')}
        style={styles.viewIcon}
      />
      {
        props.threaded ? <View style={styles.thread} /> : null
      }
    </View>
    <View style={styles.activityDescription}>
      <View style={styles.activityNameContainer}>
        <Text style={styles.activityDate}>{moment(props.date).format('D MMMM YYYY')}</Text>
      </View>
      <Text style={styles.activityName}>{props.title}</Text>
    </View>
  </View>;
ActivityRow.propTypes = {
  threaded: React.PropTypes.bool,
  date: React.PropTypes.instanceOf(Date).isRequired,
  title: React.PropTypes.string.isRequired,
};
ActivityRow.defaultProps = {
  threaded: false,
};

export default ActivityRow;
