import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text, Dimensions, TouchableOpacity, Animated } from "react-native";
import { scale, scaleByVertical } from '../constants/Layout';
import Router from '../navigation/Router';
import RelatedArticles from './RelatedArticles';
import Tag from './Tag';
import Colors from '../constants/Colors';

import PipEventEmitter from '../services/PipEventEmitter';
import FullNews from './FullNews';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  headerImage: {
    height: 250,
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: 'transparent'
  },
  mainImageTextCont: {
    position: 'absolute',
    bottom: scaleByVertical(20),
    left: scale(20),
    backgroundColor: Colors.transparent,
  },
  mainImageText: {
    width: scale(196),
    fontSize: scale(26),
    fontFamily: 'GothamRounded-Medium'
  },
  headerText: {
    fontSize: scale(55),
    color: Colors.dirtyBlue,
    fontFamily: 'GothamRounded-Book',
    marginLeft: scale(30)
  },
  subHeaderTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: scale(30),
    marginRight: scale(47),
    marginTop: scale(20)
  },
  subHeaderSource: {
    color: Colors.grayBlue,
    fontSize: scale(24),
    fontFamily: 'Avenir-Book'
  },
  subHeaderHours: {
    fontSize: scale(26),
    fontFamily: 'GothamRounded-Medium',
    color: Colors.dirtyBlue
  },
  articles: {
    marginTop: scale(60)
  }
});


export default class NewsList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      hideOthers: false,
      hideDetail: true,
      headerPadding: new Animated.Value(15),
      contentMarginTop: new Animated.Value(0),
      headerImageWidth: new Animated.Value(window.width - 30),
      headerContentOpacity: new Animated.Value(1)
    }
    this.openDeal = this.openDeal.bind(this);
    PipEventEmitter.addListener('hideDetail', (data) => {
      if(data.from != 'news') { return; }
      this.setState({ 
        hideOthers: false,
        hideDetail: true 
      }, () => {
        Animated.parallel([
          Animated.timing( this.state.headerPadding, {
            toValue: 15,
            duration: 300
          }),
          Animated.timing( this.state.headerImageWidth, {
            toValue: window.width - 30,
            duration: 300
          }),
          Animated.timing( this.state.headerContentOpacity, {
            toValue: 1,
            duration: 300
          }),
          Animated.timing( this.state.contentMarginTop, {
            toValue: 0,
            duration: 300
          })
        ]).start( () => {
          this.setState({ showDetail: false });
        });
      });
    });
  }
  
  openDeal = (id) => {    
    this.setState({
      dealId: id,
      showDetail: true,
      hideDetail: false,
    },() => {
      this.refs.scrollView.scrollTo({y: 0});
      PipEventEmitter.emit('hideNavBar');
      PipEventEmitter.emit('navUp');
      setTimeout( () => {
        PipEventEmitter.emit('hideTabBar');
        PipEventEmitter.emit('tabDown');
        this.setState({ hideOthers: true });
      }, 300);
      Animated.parallel([
        Animated.timing( this.state.headerPadding, {
          toValue: 0,
          duration: 300
        }),
        Animated.timing( this.state.headerImageWidth, {
          toValue: window.width,
          duration: 300
        }),
        Animated.timing( this.state.headerContentOpacity, {
          toValue: 0,
          duration: 300
        }),
        Animated.timing( this.state.contentMarginTop, {
          toValue: 300,
          duration: 300
        })
      ]).start();
    });
  };

  render() {
    return (
      <ScrollView ref='scrollView'>
        {this.state.hideOthers? null : 
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <Animated.View style={{padding: this.state.headerPadding}}>
              <TouchableOpacity onPress={this.openDeal}>
                <Animated.Image
                  source={require('../assets/images/NewsFeed/main-article-img.png')}
                  resizeMode="cover"
                  style={[styles.headerImage, {width: this.state.headerImageWidth}]}
                >
                  <View style={styles.mainImageTextCont}>
                    <Tag text="Regulations" style={styles.mainImageText} />
                  </View>
                </Animated.Image>
              </TouchableOpacity>
            </Animated.View>

            
            <Animated.View style={{flex: 1, opacity: this.state.headerContentOpacity}}>
              <Text style={styles.headerText}>Crowdfunding Julia Groves: “FCA Review Is Most Welcome”</Text>

              <View style={styles.subHeaderTextCont}>
                <Text style={styles.subHeaderSource}>Crowdfunding Insider</Text>
                <Text style={styles.subHeaderHours}>3h</Text>
              </View>
            </Animated.View>

          </View>
          <Animated.View style={[styles.articles, {marginTop: this.state.contentMarginTop} ]}>
            <RelatedArticles
              articles={this.props.list}
              onPress={this.openDeal}
            />
          </Animated.View>
        </View>}
        {this.state.showDetail ? <FullNews hideDetail={this.state.hideDetail} /> : null}
      </ScrollView>
    );
  }
}

