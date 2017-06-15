import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { scale, scaleByVertical } from '../../constants/Layout';
import Colors from '../../constants/Colors';
import ScrollableTabBarWithTitle from '../../components/ScrollableTabBarWithTitle';
import NavigatorButton from '../../components/NavigatorButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  profileTab: {
    backgroundColor: Colors.boxBGColor,
    flexGrow: 1,
    paddingBottom: scaleByVertical(50)
  },
  scrollableTabActiveLine: {
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.tintColor,
  },
  descriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleByVertical(50)
  },
  descriptionText: {
    fontSize: scaleByVertical(26),
    color: Colors.boxTextColor,
    textAlign: 'center',
    width: scale(600),
    fontFamily: 'Avenir',
    lineHeight: scaleByVertical(45),
  },
  logoImage: {
    width: scale(300),
    height: scaleByVertical(246),
    marginTop: scaleByVertical(120),
    marginBottom: scaleByVertical(80),
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  phoneInfoText: {
    fontFamily: 'Avenir',
    fontSize: scaleByVertical(24),
    color: Colors.grayBlue,
    alignSelf: 'center'
  }
});


export default class About extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "ABOUT PIP",
    }
  };

  renderDescription(text) {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          {text}
        </Text>
      </View>
    );
  }

  renderButton() {
    return (
      <View style={[{ marginTop: scaleByVertical(30), marginBottom: scaleByVertical(50) }]}>
        <NavigatorButton
          buttonText="Chat to us now"
          style={styles.continueButton}
          onPress={() => console.log('Button pressed')}
        />
      </View>
    );
  }

  renderPhoneInfo() {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: scaleByVertical(60) }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.phoneInfoText}>Device type: iPhone 7 Plus</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.phoneInfoText}>App version: 1.0 (Strawberry)</Text>
          </View>
        </View>
        <View style={{ marginTop: scaleByVertical(20) }}>
          <Text style={styles.phoneInfoText}>iOS version: 10.2.1</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />

        <ScrollView style={{ paddingTop: scaleByVertical(40) }}>

          <View style={{ marginHorizontal: scale(40) }}>


            <Image
              source={require('../../assets/images/Onboarding/Pip_logo.png')}
              style={styles.logoImage}
            />

            {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful markets all in one basket')}
            {this.renderButton()}
          </View>

          <ScrollableTabView
            renderTabBar={() => (
              <ScrollableTabBarWithTitle
                underlineStyle={styles.scrollableTabActiveLine}
              />
          )}
          >
            <View tabLabel="About Pip" style={styles.profileTab}>
              {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful markets all in one basket')}
              {this.renderPhoneInfo()}

            </View>
            <View tabLabel="Risk Warning" style={styles.profileTab}>
              {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful ' +
                'markets all in one basket. The Private Investor Platform allowing you to discover and explore ' +
                'fruitful markets all in one basket')}
            </View>
            <View tabLabel="Privacy Policy" style={styles.profileTab}>
              {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful ' +
                'markets all in one basket. The Private Investor Platform allowing you to discover and explore ' +
                'fruitful markets all in one basket')}
            </View>
            <View tabLabel="Terms & Conditions" style={styles.profileTab}>
              {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful ' +
                'markets all in one basket. The Private Investor Platform allowing you to discover and explore ' +
                'fruitful markets all in one basket')}
            </View>
            <View tabLabel="Cookies Policy" style={styles.profileTab}>
              {this.renderDescription('The Private Investor Platform allowing you to discover and explore fruitful ' +
                'markets all in one basket. The Private Investor Platform allowing you to discover and explore ' +
                'fruitful markets all in one basket')}
            </View>

          </ScrollableTabView>
        </ScrollView>
      </View>
    );
  }
}
