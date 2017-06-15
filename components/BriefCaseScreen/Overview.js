import React, { Component, PropsType } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import EmptyScreen from '../EmptyScreen';

import SmallDeal from './SmallDeal';
import { scale } from '../../constants/Layout';
import Colors from '../../constants/Colors';
import NavBarRight from '../NavBarRight';
import ActionSheet from '../HomeScreen/ActionSheet';
import Table from './Table';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    paddingHorizontal: scale(30),
    backgroundColor: Colors.boxBGColor,
    paddingBottom: scale(110)
  }
});

const opportunities = [
  {
    dealName: 'Raw Press',
    dealCategory: 'EQUITY',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Food'],
    dealLogo: 'http://static1.squarespace.com/static/530ccb15e4b00f4777136e68/t/53e109c5e4b029fbee5a7555/1491206319439/',
    dealPlatformLogo: 'https://pbs.twimg.com/profile_images/418697698703704065/RQAzmoaV_400x400.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  },
  {
    dealName: 'Qrowded',
    dealCategory: 'EQUITY',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Fintech'],
    dealLogo: 'https://pbs.twimg.com/profile_images/745621019549896704/qYuXXY04.jpg',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  },
  {
    dealName: 'Monzo',
    dealCategory: 'EQUITY',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Fintech'],
    dealLogo: 'http://d2fzjegv0xpec1.cloudfront.net/thumbnail/039f68e9-efe8-4156-b443-9234b9b43367.png',
    dealPlatformLogo: 'https://pbs.twimg.com/profile_images/418697698703704065/RQAzmoaV_400x400.png',
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
  }
];


export default class Overview extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "OVERVIEW",
      renderRight: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('filter');
        };
        return <NavBarRight routeName={route.routeName} actionIcon={'icon-filter'} onActionPress={buttonPress} />;
      }
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  componentWillMount() {
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('filter', this.pressedEventCallback);
  }
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
  }
  onCancel() {
    this.setState({ modalVisible: false });
  }
  openDeal = () => {
    this.props.navigation.getNavigator('master').push('dealDetailAll',
      {
        dealId: 1,
        dealName: opportunities.dealName
      });
  };
  pressedEventCallback = () => this.setState({ modalVisible: true });
  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <Table items={['8', '12', '1']} titles={['Ending Soon', 'Opportunities Added', 'Near Target']} />
        <ScrollView style={styles.container}>
          {opportunities.map(item => (
            <SmallDeal deal={item} key={Math.random()} onPress={() => this.openDeal()} />
          ))}
        </ScrollView>
        <ActionSheet show={this.state.modalVisible} onCancel={() => this.onCancel()} />
      </View>
    );
  }
}
