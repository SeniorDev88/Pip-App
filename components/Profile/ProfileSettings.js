import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
  Button,
  Switch,
  Slider,
  StatusBar,
  Platform
} from 'react-native';
import { scale, scaleByVertical } from '../../constants/Layout';
import NavBarLeft from '../NavBarLeft';
import NavBarRight from '../NavBarRight';
import NavigationBarTitle from '../NavigationBarTitle';
import Icon from '../Icon';
import Color from '../../constants/Colors';
import NavigatorButton from '../NavigatorButton';

const styles = StyleSheet.create({
  iconSettings: {
    color: 'white',
  },
  sectionHeader: {
    paddingTop: scaleByVertical(50),
    paddingBottom: scaleByVertical(29),
    borderTopWidth: Platform.OS === 'ios' ? 0.5 : 1,
    borderTopColor: Color.separator,
    borderBottomWidth: Platform.OS === 'ios' ? 0.5 : 1,
    borderBottomColor: Color.separator,
    paddingHorizontal: scale(35),
    backgroundColor: 'white',
    marginTop: scaleByVertical(32),
    marginBottom: scaleByVertical(20),
  },
  sectionHeaderText: {
    color: Color.heading,
    fontSize: scaleByVertical(36),
    fontFamily: "GothamRounded-Book"
  },
  firstHeader: {
    marginTop: 0
  },
  scrollBg: {
    backgroundColor: Color.boxBGColor,
  },
  userDetails: {
    paddingVertical: scaleByVertical(10),
  },
  userDetailsTitle: {
    fontSize: scaleByVertical(32),
    color: Color.dirtyBlue,
  },
  investorStatusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  informationImage: {
    width: scale(34),
    height: scale(34),
    marginLeft: scale(23),
  },
  centerEdit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsRow: {
    paddingHorizontal: scale(50),
  },
  sliderRow: {
    paddingTop: scale(30),
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaleByVertical(15),
  },
  sliderValue: {
    color: Color.tintColor,
    textAlign: 'center',
    fontSize: scaleByVertical(50),
    flex: 2,
  },
  rowText: {
    fontSize: scaleByVertical(27),
    color: Color.grayBlue,
  },
  switchText: {
    flexGrow: 0,
    flexShrink: 1
  },
  sliderText: {
    flex: 8
  },
  buttonsGroup: {
    backgroundColor: 'white',
    paddingTop: scaleByVertical(60),
    paddingBottom: scaleByVertical(60),
  },
  logoutButton: {
    backgroundColor: Color.titleColor,
    marginTop: scaleByVertical(60),
  },
  separator: {
    height: 1,
    backgroundColor: Color.separator
  }
});

const SectionHeader = props =>
  <View style={[styles.sectionHeader, props.style]}>
    <Text style={styles.sectionHeaderText}>{props.children}</Text>
  </View>;
SectionHeader.defaultProps = {
  style: {},
};
SectionHeader.propTypes = {
  style: React.PropTypes.any,
  children: React.PropTypes.node.isRequired,
};

const UserDetailsRow = props =>
  <View style={[styles.userDetails, props.style]}>
    <Text style={styles.userDetailsTitle}>{props.title}</Text>
    {props.children}
  </View>;
UserDetailsRow.defaultProps = {
  style: {},
};
UserDetailsRow.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
};

const UserDetailsSign = props =>
  <Text style={styles.rowText}>{props.children}</Text>;
UserDetailsSign.propTypes = {
  children: React.PropTypes.node.isRequired,
};

const IconEdit = ({ onPress }) =>
  <TouchableOpacity onPress={onPress}>
    <Image source={require('../../assets/images/Profile/icon-edit.png')} style={{ width: scale(34), height: scale(50) }} />
  </TouchableOpacity>;

const SwitchRow = props =>
  <View style={[styles.switchRow, styles.detailsRow]}>
    <Text style={[styles.rowText, styles.switchText]}>{props.title}</Text>
    <Switch
      value={props.value}
      onValueChange={props.onValueChange}
      onTintColor={Color.tintColor}
    />
  </View>;
SwitchRow.propTypes = {
  title: React.PropTypes.string.isRequired,
};

const SliderRow = props =>
  <View style={[styles.detailsRow, styles.sliderRow]}>
    <View style={styles.switchRow}>
      <Text style={[styles.rowText, styles.sliderText]}>{props.title}</Text>
      <Text style={[styles.sliderValue]}>{props.visibleValue}</Text>
    </View>
    <Slider
      onValueChange={props.onValueChange}
      maximumValue={props.maximumValue}
      value={props.value}
      onSlidingComplete={props.onSlidingComplete}
      minimumTrackTintColor={Color.tintColor}
    />
  </View>;
SliderRow.propTypes = {
  onValueChange: React.PropTypes.func.isRequired,
  maximumValue: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  visibleValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
};

const UserDetails = props =>
  <View>
    <SectionHeader style={styles.firstHeader}>USER DETAILS</SectionHeader>
    <View style={[styles.centerEdit, styles.detailsRow]}>
      <View>
        <UserDetailsRow title="Email:">
          <UserDetailsSign>tjthomsonjones@gmail.com</UserDetailsSign>
        </UserDetailsRow>
        <UserDetailsRow title="Password:">
          <UserDetailsSign>****************</UserDetailsSign>
        </UserDetailsRow>
      </View>
      <IconEdit onPress={props.openProfilePassword} />
    </View>
    <View style={styles.detailsRow}>
      <UserDetailsRow title="First name:">
        <UserDetailsSign>Tom</UserDetailsSign>
      </UserDetailsRow>
      <View style={styles.centerEdit}>
        <UserDetailsRow title="Last name:">
          <UserDetailsSign>Thompson Jones</UserDetailsSign>
        </UserDetailsRow>
        <IconEdit onPress={props.openProfileEdit} />
      </View>
      <UserDetailsRow title="Address:">
        <UserDetailsSign>116A Broughton Road, Fulfam, Cool Town, SW33 T13</UserDetailsSign>
      </UserDetailsRow>
    </View>
    <UserDetailsRow title="Age:" style={styles.detailsRow}>
      <UserDetailsSign>25-35</UserDetailsSign>
    </UserDetailsRow>
  </View>;

const InvestorDetails = props =>
  <View>
    <SectionHeader>INVESTOR DETAILS</SectionHeader>
    <View style={[styles.centerEdit, styles.detailsRow]}>
      <View style={styles.userDetails}>
        <View style={styles.investorStatusHeader}>
          <Text style={styles.sectionHeaderText}>Investor status</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/images/Profile/ICON_Info.png')} style={styles.informationImage} />
          </TouchableOpacity>
        </View>
        <UserDetailsSign>Self-certified Sophisticated</UserDetailsSign>
      </View>
      <IconEdit onPress={props.openInvestorTypes} />
    </View>
  </View>;

const Notifications = props =>
  <View>
    <SectionHeader>NOTIFICATIONS</SectionHeader>
    <SwitchRow
      title="Push notifications"
      value={props.isPushActive}
      onValueChange={props.onIsPushChange}
    />
    <SwitchRow
      title="Notify me of newly added opportunities"
      value={props.isAddedOpportunitiesNotice}
      onValueChange={props.onIsAddedOpportunitiesNoticeChange}
    />
    <SwitchRow
      title="Notify me of new opportunities matching my interests"
      value={props.isOpportunitiesByInterestNotice}
      onValueChange={props.onIsOpportunitiesByInterestNoticeChange}
    />
    <SliderRow
      title="Notify me when followed opportunities reach of target"
      onValueChange={props.onOpportunityGoalChange}
      value={props.opportunityGoal}
      visibleValue={`${Math.round(props.opportunityGoal)}%`}
      maximumValue={100}
      onSlidingComplete={props.opportunityGoalComlplete}
    />
    <SliderRow
      title="Notify me when followed opportunities close in days"
      onValueChange={props.onOpportunityCloseChange}
      value={props.opportunityClose}
      visibleValue={Math.round(props.opportunityClose)}
      maximumValue={6}
      onSlidingComplete={props.opportunityCloseComlplete}
    />
  </View>;

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      renderTitle: () =>
        <NavigationBarTitle>
          <Icon name="icon-settings" size={25} style={styles.iconSettings} />
        </NavigationBarTitle>,
      renderLeft: (route, props) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('settingsPressed');
        };
        return <NavBarLeft routeName={route.routeName} actionIcon={'icon-exit'} onActionPress={buttonPress} />;
      },
      renderRight: () => <NavBarRight />
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      opportunityGoal: 50,
      opportunityClose: 3,
      isOpportunitiesByInterestNotice: false,
      isAddedOpportunitiesNotice: false,
      isPushActive: false
    };
  }

  componentWillMount() {
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('settingsPressed', this.pressedEventCallback);
  }
  pressedEventCallback = () => {
    this.props.navigator.pop();
  };
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
  }

  render() {
    const openProfileEdit = () => this.props.navigator.push('profileDetails');
    const openProfilePassword = () => this.props.navigator.push('profilePassword');
    const openInvestorTypes = () => this.props.navigator.push('profileInvestor');
    let val1 = this.state.opportunityGoal;
    let val2 = this.state.opportunityClose;
    return (
      <ScrollView>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <View style={styles.scrollBg}>
          <UserDetails
            openProfileEdit={openProfileEdit}
            openProfilePassword={openProfilePassword}
          />
          <InvestorDetails openInvestorTypes={openInvestorTypes} />
          <Notifications
            isPushActive={this.state.isPushActive}
            onIsPushChange={value => this.setState({ isPushActive: value })}
            isAddedOpportunitiesNotice={this.state.isAddedOpportunitiesNotice}
            onIsAddedOpportunitiesNoticeChange={value => this.setState({ isAddedOpportunitiesNotice: value })}
            isOpportunitiesByInterestNotice={this.state.isOpportunitiesByInterestNotice}
            onIsOpportunitiesByInterestNoticeChange={value => this.setState({ isOpportunitiesByInterestNotice: value })}
            opportunityGoal={this.state.opportunityGoal}
            onOpportunityGoalChange={(value) => { val1 = value; }}
            opportunityGoalComlplete={() => this.setState({ opportunityGoal: val1 })}
            opportunityClose={this.state.opportunityClose}
            onOpportunityCloseChange={(value) => { val2 = value; }}
            opportunityCloseComlplete={() => this.setState({ opportunityClose: val2 })}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.buttonsGroup}>
          <NavigatorButton buttonText="Save" />
          <NavigatorButton buttonText="Logout" style={styles.logoutButton} />
        </View>
      </ScrollView>
    );
  }
}
