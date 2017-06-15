import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import {TabNavigation, TabNavigationItem} from "../components/ex-navigation";
import Icon from "../components/Icon";
import HomeScreen from "../components/HomeScreen";
import BriefCaseScreen from "../components/BriefCaseScreen";

function getColor(isSelected) {
  return isSelected ? '#00EBC2' : '#607D8B';
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
  }
});

export default class TabNavigationExample extends Component {
  static route = {
    navigationBar: {
      title: 'OPPORTUNITIES'
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="home"
          tabBarStyle={{
            borderTopColor: '#E4E7EA',
            borderTopWidth: 1
          }}
        >
          <TabNavigationItem
            id="home"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => <Icon name="icon-home" size={20} color={getColor(isSelected)}/>}
          >
            <View style={styles.screen}>
              <HomeScreen />
            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="briefcase"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => <Icon name="icon-briefcase" size={20} color={getColor(isSelected)}/>}
          >
            <View style={styles.screen}>
              <BriefCaseScreen />
            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="news"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => <Icon name="icon-news" size={20} color={getColor(isSelected)}/>}
          >
            <View style={styles.screen}>
              <Text>News</Text>
            </View>
          </TabNavigationItem>
          <TabNavigationItem
            id="profile"
            selectedStyle={styles.selectedTab}
            renderIcon={isSelected => <Icon name="icon-profile" size={20} color={getColor(isSelected)}/>}
          >
            <View style={styles.screen}>
              <Text>Profile</Text>
            </View>
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }
}
