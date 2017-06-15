import React from "react";
import { StyleSheet, Image } from "react-native";
import { StackNavigation, TabNavigation, TabNavigationItem } from "../components/ex-navigation";

import HomeScreen from "../screens/HomeScreen";
import BriefcaseScreen from "../screens/BriefcaseScreen";

import NavBarLeft from '../components/NavBarLeft';
import NavBarRight from '../components/NavBarRight';
import { scale, scaleByVertical } from '../constants/Layout';
import Icon from '../components/Icon';

function getColor(isSelected) {
  return isSelected ? '#00EBC2' : '#00EBC2';
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  selectedTab: {
    borderStyle: 'solid',
    borderTopColor: '#00EBC2',
    borderTopWidth: 3,
    borderBottomColor: 'white',
    borderBottomWidth: 3
  },
  screen: {
    backgroundColor: '#F9F9FC',
    flex: 1
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  ico: {
    width: scale(44),
    height: scaleByVertical(40),
    resizeMode: 'contain'
  },
});

export default class RootNavigation extends React.Component {

  render() {
    return (
      <TabNavigation
        tabBarHeight={56}
        initialTab="home"
        tabBarStyle={{
          borderTopColor: '#E4E7EA',
          borderTopWidth: 1
        }}
      >
        <TabNavigationItem
          id="home"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => {
            if (isSelected) {
              return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-home-active.png')} />);
            }
            return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-home-inactive.png')} />);
          }}
        >
          <HomeScreen />
        </TabNavigationItem>

        <TabNavigationItem
          id="briefcase"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => {
            if (isSelected) {
              return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-briefcase-active.png')} />);
            }
            return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-briefcase-inactive.png')} />);
          }}
        >
          <BriefcaseScreen />
        </TabNavigationItem>

        <TabNavigationItem
          id="news"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => {
            if (isSelected) {
              return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-news-active.png')} />);
            }
            return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-news-inactive.png')} />);
          }}
        >
          <StackNavigation
            initialRoute="news"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#00EBC2',
                tintColor: '#fff',
                borderBottomWidth: 0,
                titleStyle: {
                  fontSize: scaleByVertical(26),
                  fontFamily: 'Avenir-Black',
                  fontWeight: '900',
                  textAlign: 'center'
                },
              }
            }}
          />
        </TabNavigationItem>

        <TabNavigationItem
          id="profile"
          selectedStyle={styles.selectedTab}
          renderIcon={isSelected => {
            if (isSelected) {
              return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-profile-active.png')} />);
            }
            return (<Image style={styles.ico} source={require('../assets/images/additional_material/icon-profile-inactive.png')} />);
          }}
        >
          <StackNavigation
            initialRoute="profile"
            defaultRouteConfig={{
              navigationBar: {
                backgroundColor: '#00EBC2',
                tintColor: '#fff',
                borderBottomWidth: 0,
                titleStyle: {
                  fontSize: scaleByVertical(26),
                  fontFamily: 'Avenir-Black',
                  fontWeight: '900',
                  textAlign: 'center'
                },
                renderLeft: ({ routeName }) => <NavBarLeft routeName={routeName} />,
                renderRight: ({ routeName }) => <NavBarRight routeName={routeName} />,
              }
            }}
          />
        </TabNavigationItem>

      </TabNavigation>
    );
  }

}
