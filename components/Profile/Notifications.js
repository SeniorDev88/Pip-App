import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ListView,
  Image,
  StatusBar
} from 'react-native';
import moment from 'moment';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';
import ScrollableTabBarWithTitle from '../ScrollableTabBarWithTitle';
import Tag from '../Tag';

import EmptyScreen from '../EmptyScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollableTab: {
    backgroundColor: Colors.tertiary,
    flexGrow: 1,
  },
  scrollableTabActiveLine: {
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.interaction2,
  },
  listView: {
    flex: 1,
    backgroundColor: Colors.boxBGColor
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(50),
    height: scale(100),
    backgroundColor: Colors.quadrary,
  },
  rowTextContainer: {
    flex: 1,
  },
  rowText: {
    fontFamily: 'Avenir',
    fontSize: scaleByVertical(26),
    color: Colors.headline,
  },
  rowSideView: {
    flex: 0.4
  },
  rowTag: {
    borderColor: Colors.titleSmall,
    color: Colors.titleSmall
  },
  rowImage: {
    height: scale(80),
    width: scale(80),
  },
  sectionHeaderContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(50),
    height: scale(100),
    backgroundColor: Colors.boxBGColor,
    borderColor: "#E6EDF3",
    borderWidth: 1,
  },
  sectionHeaderText: {
    fontFamily: 'Avenir',
    fontSize: scaleByVertical(24),
    color: Colors.heading,
  },
  separator: {
    height: 1,
    borderColor: "#E6EDF3",
    borderWidth: 0.5,
  }
});


/**
 * Returns Array of notifications:
 * {
 *   date: Date
 *   text: String
 *   tag (optional): String
 *   image (optional): required image,
 * }
 */
function getMockData(type) {
  const dates = [new Date(2017, 3, 11), new Date(2017, 3, 10), new Date(2017, 3, 9)];
  const notificationsGenerator = date => [
    {
      date,
      text: type === "news" ? "New article matching interest " : "New opp. matching interest",
      tag: "Fintech",
    },
    {
      date,
      text: type === "news" ? "New article matching interest " : "Saved opp. ending soon",
      tag: type === "news" ? "Auto" : "",
      image: type === "news" ? null : require('../../assets/images/Profile/ICON_View.png'),
    },
    {
      date,
      text: type === "news" ? "New article matching interest " : "New opp. matching interest",
      tag: "ISA",
    },
    {
      date,
      text: type === "news" ? "New article matching interest " : "Saved opp. ending soon",
      image: type === "news" ? null : require('../../assets/images/Profile/ICON_View.png'),
      tag: type === "news" ? "Alcogol" : "",
    },
  ];
  return dates.map(notificationsGenerator).reduce((acc, current) => [...acc, ...current]);
}

function getDataWithSections(notifications) {
  const oppWithSections = {};
  notifications.forEach((notification) => {
    Array.isArray(oppWithSections[notification.date]) ?
      oppWithSections[notification.date].push(notification) :
      oppWithSections[notification.date] = [notification];
  });
  return oppWithSections;
}

const NotificationRow = ({ text, tag, image }) => (
  <View style={styles.rowContainer}>
    <View style={styles.rowTextContainer}>
      <Text style={styles.rowText}>
        {text}
      </Text>
    </View>
    {
      tag ?
        <View style={styles.rowSideView}>
          <Tag
            text={tag}
            style={styles.rowTag}
          />
        </View>
        : null
    }
    {
      image ?
        <View style={styles.rowSideView}>
          <Image
            resizeMode="stretch"
            source={image}
            style={styles.rowImage}
          />
        </View>
        : null
    }
  </View>
  );

NotificationRow.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string,
  image: PropTypes.number,
};

NotificationRow.defaultProps = {
  tag: null,
  image: null,
};

const SectionHeader = ({ sectionID }) => (
  <View style={styles.sectionHeaderContainer}>
    <Text style={styles.sectionHeaderText}>
      {moment(new Date(sectionID)).format('D MMMM')}
    </Text>
  </View>
);

SectionHeader.propTypes = {
  sectionID: PropTypes.string.isRequired // Actually it's a timestamp in string representation
};

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

const Notifications = ({ notifications }) => notifications.length === 0 ?
  <EmptyScreen
    icon="icon-empty"
    textTop="It’s a bit empty in here…"
    textBottom={`Tap the ‘+’ icon inside an opportunity to \n add it to your briefcase and recieve notifications.`}
  /> :
  <ListView
    style={styles.listView}
    dataSource={ds.cloneWithRowsAndSections(getDataWithSections(notifications))}
    renderRow={rowData => <NotificationRow key={rowData} {...rowData} />}
    renderSeparator={(a, b) => <View key={a + b} style={styles.separator} />}
    renderSectionHeader={(_, id) => <SectionHeader key={id} sectionID={id} />}
  />;

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.instanceOf(Date).isRequired,
      text: PropTypes.string.isRequired,
      tag: PropTypes.string,
      image: PropTypes.number,
    })
  )
};

Notifications.defaultProps = {
  notifications: [],
};

export default class NotificationsTabView extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "NOTIFICATIONS",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <ScrollableTabView
          renderTabBar={() => (
            <ScrollableTabBarWithTitle
              underlineStyle={styles.scrollableTabActiveLine}
            />
          )}
        >
          <View tabLabel="News" style={styles.scrollableTab}>
            <Notifications notifications={getMockData("news")} />
          </View>
          <View tabLabel="Opportunities" style={styles.scrollableTab}>
            <Notifications notifications={getMockData("notifications")} />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
