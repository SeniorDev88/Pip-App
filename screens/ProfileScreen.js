import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
  StatusBar
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Components } from "exponent";
import Router from '../navigation/Router';
import { scale, scaleByVertical } from '../constants/Layout';
import Colors, { boxBGColor } from '../constants/Colors';
import ScrollableTabBarWithTitle from '../components/ScrollableTabBarWithTitle';
import NavBarRight from '../components/NavBarRight';
import NavigatorButton from '../components/NavigatorButton';
import ActivityRow from '../components/Profile/ActivityRow';
import Tag from '../components/Tag';
import Stat from '../components/Profile/Stat';
import TagCloud from '../components/TagCloud';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: scale(30),
  },
  profileImage: {
    width: scale(160),
    height: scale(160),
    borderRadius: scale(80),
  },
  profileName: {
    marginTop: 20,
    marginBottom: 10,
    color: Colors.grayBlue,
    fontFamily: 'Avenir-Book',
    fontSize: scale(24)
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeImage: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  informationButton: {
    position: 'absolute',
    right: scale(-58),
    top: scaleByVertical(-15),
    padding: scale(15)
  },
  informationImage: {
    width: scale(34),
    height: scale(34),
  },
  profileTab: {
    backgroundColor: boxBGColor,
    flexGrow: 1,
  },
  scrollableTabActiveLine: {
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.tintColor,
  },
  activityList: {
    flex: 1,
    backgroundColor: Colors.boxBGColor,
    marginVertical: scaleByVertical(0),
  },
  activityContentContainer: {
    paddingVertical: scaleByVertical(50)
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: scaleByVertical(46),
  },
  statPopularTag: {
    borderColor: Colors.tintColor,
    backgroundColor: 'transparent',
    color: Colors.tintColor,
  },
  fadeOutToBottom: {
    height: scaleByVertical(138),
    backgroundColor: Colors.boxBGColor
  },
  topShadow: {
    shadowOffset: { height: scaleByVertical(-25) },
    shadowColor: Colors.boxBGColor,
    shadowOpacity: 0.6,
  },
  tagScroll: {
    flex: 1,
    backgroundColor: Colors.boxBGColor
  },
  moreInterests: {
    marginBottom: scaleByVertical(50)
  },
  acceptButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scaleByVertical(110),
  },
  tagScrollBottomPadding: {
    paddingBottom: scaleByVertical(92),
  },
  acceptButton: {
    width: scale(88),
    height: scaleByVertical(88),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  acceptButtonTouchable: {
    marginBottom: scaleByVertical(30),
    justifyContent: 'center'
  },
  selectPlaceholder: {
    fontFamily: 'Avenir-Book',
    fontSize: scaleByVertical(26),
    textAlign: 'center',
    marginTop: scaleByVertical(40),
    color: Colors.headline,
  },
  investorType: {
    fontSize: scale(32),
    color: Colors.titleSmall,
    fontFamily: 'GothamRounded-Book'
  }
});


const opportunities =
  {
    displayName: 'Tom',
    photoURL: 'https://relayfm.s3.amazonaws.com/uploads/user/avatar/4/user_avatar_mykehurley_artwork.png',
    level: 'Sophisticated investor',
    sampleActivities: [
      {
        date: new Date(2016, 12, 7),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: true,
      },
      {
        date: new Date(2016, 12, 7),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: true,
      },
      {
        date: new Date(2016, 12, 7),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: false,
      },
      {
        date: new Date(2016, 12, 5),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: true,
      },
      {
        date: new Date(2016, 12, 5),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: true,
      },
      {
        date: new Date(2016, 12, 5),
        title: 'Viewed and Added Raw Press To Briefcase',
        type: 'View',
        threaded: false,
      },
    ],
  };

export default class ProfileScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "PROFILE",
      renderRight: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('settingsPressed');
        };
        return <NavBarRight routeName={route.routeName} actionIcon={'icon-settings'} onActionPress={buttonPress} />;
      },
    }
  };

  constructor(props) {
    super(props);
    // Saved deals in here
    this.state = {
      displayName: opportunities.displayName,
      photoURL: opportunities.photoURL,
      isInterestsEditing: false,
      showInfo: false,
      userTags: [
        {
          name: 'Regulations',
          follow: true,
        },
        {
          name: 'Food',
          follow: true,
        },
        {
          name: 'Healthy',
          follow: true,
        },
        {
          name: 'Eco-Project',
          follow: true,
        },
        {
          name: 'Fintech',
          follow: true,
        },
        {
          name: 'Investing',
          follow: true,
        },
        {
          name: 'Alcohol',
          follow: true,
        },
        {
          name: 'Auto',
          follow: true,
        },
        {
          name: 'Banking',
          follow: true,
        },
        {
          name: 'Tech',
          follow: true,
        },
        {
          name: 'Equine',
          follow: true,
        },
      ],
      popularTags: [
        {
          name: 'Regulations',
          follow: false,
        },
        {
          name: 'Food',
          follow: false,
        },
        {
          name: 'Healthy',
          follow: false,
        },
        {
          name: 'Eco-Project',
          follow: false,
        },
        {
          name: 'Fintech',
          follow: false,
        },
        {
          name: 'Investing',
          follow: false,
        },
      ],
    };
  }

  componentWillMount() {
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('settingsPressed', this.pressedEventCallback);
  }
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
  }

  onTagPress(tagIndex, groupId) {
    const { userTags, popularTags, isInterestsEditing } = this.state;
    if (!isInterestsEditing) return;
    if (groupId === 0) {
      userTags[tagIndex].follow = !userTags[tagIndex].follow;
      this.setState({ userTags });
    } else {
      popularTags[tagIndex].follow = !popularTags[tagIndex].follow;
      this.setState({ popularTags });
    }
  }

  pressedEventCallback = () => this.props.navigation.getNavigator('master').push(Router.getRoute('settings'));

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  interestEditing = () => this.setState({ isInterestsEditing: !this.state.isInterestsEditing });

  render() {
    const { showInfo, popularTags, userTags } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <View style={styles.profileInfoContainer}>
          <Image
            source={{ uri: this.state.photoURL }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{this.state.displayName.toUpperCase()}</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.investorType}>{opportunities.level}</Text>
            <TouchableOpacity
              style={styles.informationButton}
              onPress={() => this.setState({ showInfo: !showInfo })}
            >
              <Image source={require('../assets/images/Profile/ICON_Info.png')} style={styles.informationImage} />
            </TouchableOpacity>
          </View>
          {
            showInfo === true ?
              <Stat favouriteTag={<Tag text={'Food'} style={[styles.userFollow, styles.statPopularTag]} />} views={40} followingTagsCount={13} />
              : null
          }
        </View>
        <ScrollableTabView
          locked
          renderTabBar={() => (
            <ScrollableTabBarWithTitle
              underlineStyle={styles.scrollableTabActiveLine}
            />
          )}
        >
          <ListView
            contentContainerStyle={styles.activityContentContainer}
            tabLabel="Activity"
            style={styles.activityList}
            dataSource={this.ds.cloneWithRows(opportunities.sampleActivities)}
            renderRow={rowData =>
              <ActivityRow
                title={rowData.title}
                threaded={rowData.threaded}
                date={rowData.date}
              />}
          />
          <View tabLabel="Interests" style={styles.profileTab}>
            <ScrollView
              style={styles.tagScroll}
              contentContainerStyle={this.state.isInterestsEditing ?
                styles.tagScrollBottomPadding
                : null}
            >
              {
                this.state.isInterestsEditing ?
                  <Text
                    style={styles.selectPlaceholder}
                  >
                    Select or deselect the tags you follow
                  </Text>
                  : null
              }
              <TagCloud tags={userTags} onPress={i => this.onTagPress(i, 0)} />
              { this.state.isInterestsEditing ?
                <View style={{ marginTop: scaleByVertical(-50) }}>
                  <TagCloud tags={popularTags} onPress={i => this.onTagPress(i, 1)} />
                </View>
                : null
              }
            </ScrollView>
            { this.state.isInterestsEditing === false ?
              <View
                style={[styles.fadeOutToBottom, styles.topShadow]}
              >
                <NavigatorButton
                  buttonText="Add more interests"
                  style={styles.moreInterests}
                  onPress={this.interestEditing}
                />
              </View>
              :
              <View style={[styles.acceptButtonContainer, styles.topShadow]}>
                <TouchableOpacity
                  onPress={this.interestEditing}
                  style={styles.acceptButtonTouchable}
                >
                  <Image
                    source={require('../assets/images/Profile/icon-accept.png')}
                    style={styles.acceptButton}
                  />
                </TouchableOpacity>
              </View>
            }
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
