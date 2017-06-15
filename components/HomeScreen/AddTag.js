import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import { scale } from '../../constants/Layout';
import LinkedButton from '../LinkedButton';
import NavBarRight from '../NavBarRight';
import NavBarLeft from '../NavBarLeft';
import DealTileVanilla from "./DealTileVanilla";
import ActionSheet from './ActionSheet';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(50),
    paddingHorizontal: scale(30)
  },
  barTitle: {
    fontFamily: "GothamRounded-Medium",
    fontSize: 12,
    textAlign: 'center',
    color: "white",
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 4,
    paddingTop: 5,
    paddingHorizontal: 8,
    maxWidth: scale(150)
  }
});

const opportunities = [
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  },
];

export default class AddTags extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Alchogol',
      renderLeft: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('exitPressed');
        };
        return <NavBarLeft routeName={route.routeName} actionIcon={'icon-exit'} onActionPress={buttonPress} />;
      },
      renderRight: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('filter');
        };
        return <NavBarRight actionIcon={'icon-filter'} onActionPress={buttonPress} />;
      },
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  componentWillMount() {
    this._buttonPressSubscriptionExit = this.props.route.getEventEmitter().addListener('exitPressed', this.pressedEventCallbackExit);
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('filter', this.pressedEventCallback);
  }
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
    this._buttonPressSubscriptionExit.remove();
  }
  onCancel() {
    this.setState({ modalVisible: false });
  }
  pressedEventCallback = () => this.setState({ modalVisible: true });

  pressedEventCallbackExit = () => this.props.navigator.pop();

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <LinkedButton buttonText={'Add tag to interests'} />
        <View>
          {opportunities.map(item => (
            <DealTileVanilla key={Math.random()} deal={item} onPress={() => {}} />
          ))}
        </View>
        <ActionSheet show={this.state.modalVisible} onCancel={() => this.onCancel()} />
      </ScrollView>
    );
  }
}
