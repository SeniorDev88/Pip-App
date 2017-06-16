import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from "react-native";
import { scale, scaleByVertical } from '../../constants/Layout';
import DealTileVanilla from "./DealTileVanilla";
import HeadersFeed from "./HeadersFeed";
import RelatedArticles from "../RelatedArticles";
import RiskWarning from "../RiskWarning";

import PipEventEmitter from '../../services/PipEventEmitter';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9FC',
  },
  dealContainer: {
    paddingHorizontal: scale(30),
    borderBottomWidth: scale(1),
    borderColor: '#A2B7C0',
    marginTop: scaleByVertical(10)
  }
});

const opportunities =
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  };
const relatedArticles = [
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology'
  }];


export default class Feed extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'FEED',
    }
  };

  openDeal = () => {
    PipEventEmitter.emit('hideTabBar');
    PipEventEmitter.emit('tabDown');
    PipEventEmitter.emit('hideNavBar');
    PipEventEmitter.emit('navUp');
    this.props.navigation.getNavigator('master').push('dealDetailAll',
      {
        dealId: 1,
        dealName: opportunities.dealName
      });
  };
  openAddTag = () => this.props.navigator.push('addTag');
  openAllPips = () => this.props.navigator.push('mostViewed');
  openYouPips = () => {
    this.props.navigator.push('yourPips');
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            hidden={false}
          />
          <HeadersFeed title={'PIP OF THE DAY'} />
          <View style={styles.dealContainer}>
            <DealTileVanilla
              deal={opportunities}
              onPress={() => this.openDeal()}
            />
          </View>
          <HeadersFeed title={'MOST VIEWED'} onPress={() => this.openAllPips()} />
          <View style={styles.dealContainer}>
            <DealTileVanilla deal={opportunities} onPress={() => this.openDeal()} />
          </View>
          <HeadersFeed title={'TODAY’S NEWS PIP'} />
          <View style={styles.dealContainer}>
            <RelatedArticles
              articles={relatedArticles}
            />
          </View>
          <HeadersFeed title={'TAG OF THE WEEK:'} tag={'Technology'} onPress={() => this.openAddTag()} />
          <View style={styles.dealContainer}>
            <DealTileVanilla deal={opportunities} onPress={() => this.openDeal()} />
          </View>
          <HeadersFeed title={'YOUR PIPS'} onPress={() => this.openYouPips()} />
          <View style={styles.dealContainer}>
            <DealTileVanilla deal={opportunities} onPress={() => this.openDeal()} />
          </View>
          <RiskWarning />
        </View>
      </ScrollView>
    );
  }
}
