import React, { Component, PropTypes } from "react";
import { TouchableOpacity, ListView, View, Text, Image, StyleSheet, Animated, Dimensions } from "react-native";
import Swiper from 'react-native-swiper';
import { Components } from "exponent";
import { generate } from "shortid";
import { scale } from '../../constants/Layout';
import Tag from "../Tag";
import Colors from '../../constants/Colors';

import DealDetailAll from '../DealDetail/DealDetailAll';

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.dirtyWhite,
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden'
  },
  topContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15
  },
  name: {
    color: Colors.dirtyBlue,
    fontSize: 16,
    fontFamily: 'GothamRounded-Book',
    flex: 1
  },
  platformLogo: {
    width: 25,
    height: 25,
    marginLeft: 15
  },
  bgContainer: {
    zIndex: 1,
  },
  bgImg: {
    flex: 1
  },
  bottomContainer: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 40,
  },
  slide1: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: scale(650)
  },
  tag: {
    marginRight: 5
  },
  textCategory: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Avenir-Medium'
  },
  slide2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: scale(650),
    paddingRight: 10
  },
  progressContainer: {
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
    width: scale(240),
    borderRightColor: Colors.tintLightBlue,
    borderRightWidth: 3
  },
  risedText: {
    color: 'white',
    fontSize: scale(26),
    fontFamily: 'Avenir-Medium'
  },
  targetText: {
    color: 'white',
    fontSize: scale(26),
    fontFamily: 'Avenir-Medium',
    position: 'absolute',
    zIndex: 2,
    right: 0,
    top: scale(28)
  }
});

export default class DealTileVanilla extends Component {
  static propTypes = {
    deal: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      showDetail: false,
      margin: new Animated.Value(15),
      height: new Animated.Value(200),
      tileBottomTop: new Animated.Value(140),
      borderRadius: new Animated.Value(5),
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.showDetail != this.state.showDetail) {
      this.setState({ showDetail: nextProps.showDetail}, () => {
        if(nextProps.showDetail) {
          Animated.parallel([
            Animated.timing(this.state.margin, {
              toValue: 0,
              duration: 300
            }),
            Animated.timing( this.state.tileBottomTop, {
              toValue: 158,
              duration: 300
            }),
            Animated.timing( this.state.height, {
              toValue: Dimensions.get('window').height,
              duration: 300
            }),
            Animated.timing(this.state.borderRadius, {
              toValue: 0,
              duration: 300
            })
          ]).start();
        } else {
          Animated.parallel([
            Animated.timing(this.state.margin, {
              toValue: 15,
              duration: 300
            }),
            Animated.timing( this.state.tileBottomTop, {
              toValue: 140,
              duration: 300
            }),
            Animated.timing( this.state.height, {
              toValue: 200,
              duration: 300
            }),
            Animated.timing(this.state.borderRadius, {
              toValue: 5,
              duration: 300
            })
          ]).start();
        }
      });
    }
  }

  render() {
    const { deal, onPress } = this.props
    const {
      dealLogo,
      dealName,
      dealPlatformLogo,
      dealBgUrl,
      dealTags,
      dealCategory,
      dealRaised,
      dealTarget
    } = deal;
    return (
      <Animated.View style={[styles.container, {margin: this.state.margin, height: this.state.height, borderRadius: this.state.borderRadius }]} >
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.topContainer} >
              <Image
                source={{ uri: dealLogo }}
                style={styles.logo}
              />
              <Text style={styles.name} >{dealName}</Text>
              <Image
                source={{ uri: dealPlatformLogo }}
                style={styles.platformLogo}
              />
            </View>
            <Animated.View style={[styles.bgContainer, {height: this.state.tileBottomTop}]} >
              <Image
                source={{ uri: dealBgUrl }}
                style={styles.bgImg}
                resizeMode="cover"
              />
            </Animated.View>
          </TouchableOpacity>
          <Components.BlurView
            tint="default"
            intensity={100}
            style={styles.bottomContainer}
          >
            <Swiper loop={false} >
              <View style={styles.slide1} >
                <View>
                  {dealTags.map(item => (
                    <Tag
                      text={item}
                      key={generate()}
                      style={styles.tag}
                    />
                  ))}
                </View>
                <Text style={styles.textCategory} >{dealCategory}</Text>
              </View>
              <View style={styles.slide2} >
                <Components.LinearGradient
                  colors={[Colors.darkTintColor, Colors.tintColor]}
                  style={styles.progressContainer}
                >
                  <Text style={styles.risedText} >{`${dealRaised} raised`}</Text>
                </Components.LinearGradient>
                <Text style={styles.targetText} >{`${dealTarget} Target`}</Text>
              </View>
            </Swiper>
          </Components.BlurView>
        </View>
        {this.state.showDetail ? <DealDetailAll from={this.props.from}/> : null}
      </Animated.View>
    );
  }
}
