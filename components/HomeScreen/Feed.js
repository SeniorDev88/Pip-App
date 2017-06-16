import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Animated,
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
    flex: 1,
    borderBottomWidth: scale(1),
    borderColor: '#A2B7C0'
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

  constructor(props) {
    super(props);
    this.state = {
      dealId: '',
      showDetail: false,
      hideOthers: false,
    }
    this.dealTiles = [];
  }

  openDeal = (id) => {    
    this.setState({
      dealId: id,
      showDetail: true
    },() => {
      PipEventEmitter.emit('hideTabBar');
      PipEventEmitter.emit('tabDown');
      PipEventEmitter.emit('hideNavBar');
      PipEventEmitter.emit('navUp');
      this.dealTiles[id].measure( (fx, fy, width, height, px, py) => {
        this.refs.scrollView.scrollTo({y: fy});
      });

      Animated.delay(300).start(() => {
        this.setState({ hideOthers: true });
        this.refs.scrollView.scrollTo({y: 0, animated: false});
      })
    });
  };
  openAddTag = () => this.props.navigator.push('addTag');
  openAllPips = () => this.props.navigator.push('mostViewed');
  openYouPips = () => {
    this.props.navigator.push('yourPips');
  };

  render() {
    return (
      <ScrollView ref='scrollView'>
        <View style={styles.container}>
          <StatusBar
            translucent={false}
            hidden={false}
          />
          {this.state.hideOthers ? null : <HeadersFeed title={'PIP OF THE DAY'} /> }
          {this.state.hideOthers && this.state.dealId != 1 ? null :
          <View style={styles.dealContainer} ref={ (c) => { this.dealTiles[1] = c; } }>
            <DealTileVanilla
              deal={opportunities}
              onPress={() => this.openDeal(1)}
              showDetail={this.state.showDetail && this.state.dealId == 1}
              from='feed'
            />
          </View>}
          {this.state.hideOthers ? null : <HeadersFeed title={'MOST VIEWED'} onPress={() => this.openAllPips()} />}
          {this.state.hideOthers && this.state.dealId != 2 ? null :
          <View style={styles.dealContainer} ref={ (c) => { this.dealTiles[2] = c; } }>
            <DealTileVanilla 
              deal={opportunities} 
              onPress={() => this.openDeal(2)} 
              showDetail={this.state.showDetail && this.state.dealId == 2}
              from='feed'
              />
          </View>}
          {this.state.hideOthers ? null : <HeadersFeed title={'TODAY’S NEWS PIP'} />}
          {this.state.hideOthers ? null :
          <View style={styles.dealContainer}>
            <RelatedArticles
              articles={relatedArticles}
            />
          </View>}
          {this.state.hideOthers ? null: <HeadersFeed title={'TAG OF THE WEEK:'} tag={'Technology'} onPress={() => this.openAddTag()} />}
          {this.state.hideOthers && this.state.dealId != 3 ? null :
          <View style={styles.dealContainer} ref={ (c) => { this.dealTiles[3] = c; } }>
            <DealTileVanilla 
              deal={opportunities} 
              onPress={() => this.openDeal(3)} 
              showDetail={this.state.showDetail && this.state.dealId == 3}
              from='feed'
              />
          </View>}
          {this.state.hideOthers ? null : <HeadersFeed title={'YOUR PIPS'} onPress={() => this.openYouPips()}/>}
          {this.state.hideOthers && this.state.dealId != 4 ? null :
          <View style={styles.dealContainer} ref={ (c) => { this.dealTiles[4] = c; } }>
            <DealTileVanilla 
              deal={opportunities} 
              onPress={() => this.openDeal(4)} 
              showDetail={this.state.showDetail && this.state.dealId == 4}
              from='feed'
              />
          </View>}
          {this.state.hideOthers ? null : <RiskWarning />}
        </View>
      </ScrollView>
    );
  }
}
