import React, { Component, PropTypes } from "react";
import { TouchableOpacity, ListView, View, Text, Image, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';
import { Components } from "exponent";
import { generate } from "shortid";
import { scale } from '../../constants/Layout';
import Tag from "../Tag";
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: Colors.dirtyWhite,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 15,
    borderRadius: 5,
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
    height: 140
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
    this.state = {};
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
      <View style={styles.container} >
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
          <View style={styles.bgContainer} >
            <Image
              source={{ uri: dealBgUrl }}
              style={styles.bgImg}
              resizeMode="cover"
            />
          </View>
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
    );
  }
}
