import React from "react";
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions, Linking, StatusBar } from "react-native";
import { scale, scaleByVertical } from '../constants/Layout';
import Tag from '../components/Tag';
import Colors from '../constants/Colors';
import NavigatorButton from '../components/NavigatorButton';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: window.width,
    height: scaleByVertical(643),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: 'transparent'
  },
  mainImageTextCont: {
    alignSelf: 'center'
  },
  mainImageText: {
    color: Colors.titleSmall,
    borderColor: Colors.titleSmall,
    width: scale(196),
    alignSelf: 'center',
    marginTop: scaleByVertical(50),
    fontSize: scale(26),
    fontFamily: 'GothamRounded-Medium',
  },
  backArrow: {
    width: scale(17),
    height: scaleByVertical(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  backArrowCont: {
    padding: 20,
    position: 'absolute',
    top: scaleByVertical(40),
    left: scale(10),
  },
  bookmarkCont: {
    position: 'absolute',
    top: scaleByVertical(80),
    right: scale(45),
  },
  iconBookmark: {
    width: scale(33),
    height: scaleByVertical(48)
  },
  headerTextContainer: {
    width: scale(690),
    height: scaleByVertical(225),
    marginLeft: scale(10),
    marginTop: scaleByVertical(40),
  },
  headerText: {
    fontSize: scale(55),
    color: Colors.dirtyBlue,
    fontFamily: 'GothamRounded-Book',
    textAlign: 'center',
    marginHorizontal: scale(30),
    marginTop: scaleByVertical(40)
  },
  category: {
    alignSelf: 'center',
    color: Colors.grayBlue,
    fontSize: scale(24),
    marginTop: scaleByVertical(30),
    fontFamily: 'Avenir-Book'
  },
  hours: {
    alignSelf: 'center',
    marginTop: scaleByVertical(20),
    fontSize: scale(26),
    fontFamily: 'GothamRounded-Medium',
    color: Colors.dirtyBlue
  },
  textBlockCont1: {
    marginHorizontal: scale(50),
    marginTop: scaleByVertical(25)
  },
  textBlockCont2: {
    marginTop: scale(50),
    marginHorizontal: scale(50)
  },
  textBlock: {
    color: Colors.boxTextColor,
    fontSize: scale(26),
    fontFamily: 'Avenir-Book'
  },
  logoImage: {
    width: scale(406),
    height: scaleByVertical(500),
    alignSelf: 'center',
    marginTop: scale(52)
  },
  button: {
    width: scale(591),
    height: scaleByVertical(77),
    backgroundColor: Colors.linkColor,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: Colors.linkColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: scaleByVertical(170),
    marginBottom: scaleByVertical(255)
  },
  buttonText: {
    color: Colors.white,
    fontSize: scale(28)
  }
});


export default class FullNews extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };


  onPressBackArrow = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <Image
          source={require('../assets/images/NewsFeed/main-article-img.png')}
          resizeMode="cover"
          style={styles.headerImage}
        >
          <TouchableOpacity onPress={this.onPressBackArrow} style={styles.backArrowCont}>
            <Image
              source={require('../assets/images/NewsFeed/back-arrow.png')}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.bookmarkCont}>
            <Image
              source={require('../assets/images/NewsFeed/icon-bookmark.png')}
              style={styles.iconBookmark}
            />
          </TouchableOpacity>
        </Image>
        <View style={styles.mainImageTextCont}>
          <Tag text="Regulations" style={styles.mainImageText} />
        </View>

        <Text style={styles.headerText}>Crowdfunding Julia Groves: “FCA Review Is Most Welcome”</Text>

        <Text style={styles.category}>Crowdfunding Insider</Text>
        <Text style={styles.hours}>3h</Text>
        <View style={styles.textBlockCont1}>
          <Text style={styles.textBlock}>Julia Groves, Downing Partner and Head of Crowdfunding, is a
            respected pioneer and force behind many successful digital
            businesses and fintech groups. Since founding ba.com for British
            Airways in 1994, she has instigated disruptive customer-led
            propositions across online retail, renewable energy and financial
            services market sectors. </Text>
        </View>
        <Image
          source={require('../assets/images/NewsFeed/UKCF-logo.png')}
          resizeMode="cover"
          style={styles.logoImage}
        />
        <View style={styles.textBlockCont2}>
          <Text style={styles.textBlock}>She also developed the crowdfunding
           platform Trillion Fund, co-founded the UK Crowdfunding Association
            (UKCFA) which represents over 40 operating equity, loans and rewards
             crowdfunding platforms, before recently landing at Downing.
              In addition, Groves is a Senior Fellow of the Finance Innovation
               Lab, a Founding 50 member of Innovate Finance and recently
                completed a Non-executive Director position with Move your Money.{"\n\n"}
                As a “straight-talking and passionate
                 about making finance more democratic and energy more sustainable,”
                  Groves works to connect innovators, platforms and investors more
                   efficiently to originate change and induce financial reward. I
                    recently had the pleasure of connecting with Groves via email to
                     learn more about her views on crowdfunding regulation, Brexit,
                      the FCA-CCAF partnership and her new role at Downing.
                </Text>
        </View>
        <NavigatorButton
          buttonText="Go to Article"
          onPress={() => Linking.openURL('http://example.com')}
          style={styles.button}
        />
      </ScrollView>
    );
  }
}
