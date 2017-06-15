import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import { scale } from '../../constants/Layout';

import NavBarLeft from '../NavBarLeft';
import DealTileVanilla from "./DealTileVanilla";


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

export default class MostViewed extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'MOST VIEWED',
      renderLeft: (route, props) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('exitPressed');
        };
        return <NavBarLeft routeName={route.routeName} actionIcon={'icon-exit'} onActionPress={buttonPress} />;
      },
    },
  };
  componentWillMount() {
    this._buttonPressSubscriptionExit = this.props.route.getEventEmitter().addListener('exitPressed', this.pressedEventCallbackExit);
  }
  componentWillUnmount() {
    this._buttonPressSubscriptionExit.remove();
  }
  pressedEventCallbackExit = () => this.props.navigator.pop();

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {opportunities.map(item => (
            <DealTileVanilla key={Math.random()} deal={item} onPress={() => {}} />
          ))}
        </View>
      </ScrollView>
    );
  }
}
