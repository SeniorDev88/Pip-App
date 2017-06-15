import React, { Component, PropsType } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, StatusBar } from "react-native";
import HeadersFeed from "../HomeScreen/HeadersFeed";
import StyledTextInput from "../StyledTextInput";
import ReadMoreCard from "../ReadMoreCard";
import { scale } from "../../constants/Layout";
import Colors from "../../constants/Colors";
import Icon from '../Icon';

const recents = [
  'SOM', 'SOM', 'CLASS B', 'PREFERENCE'
];

const card = {
  marginBottom: scale(50),
  borderRadius: 0,
  marginHorizontal: 0,
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topTitleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingVertical: scale(50),
    paddingHorizontal: scale(30)
  },
  topTitle: {
    fontFamily: 'GothamRounded-Book',
    color: Colors.grayBlue,
    fontSize: scale(36)
  },
  titleContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: scale(37),
    borderBottomWidth: scale(2),
    borderColor: Colors.boxBGBorderColor
  },
  title: {
    fontFamily: 'GothamRounded-Book',
    color: Colors.linkColor,
    fontSize: scale(30)
  },
  bottomTitleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: scale(30),
    paddingBottom: scale(52)
  },
  heading: {
    fontFamily: 'GothamRounded-Book',
    color: Colors.tintColor,
    fontSize: scale(30),
    textAlign: 'center',
    paddingBottom: scale(58),
  },
  searchBar: {
    backgroundColor: Colors.tintColor,
    paddingHorizontal: scale(30),
    paddingVertical: scale(20)
  },
  searchInput: {
    color: Colors.quadrary,
    height: scale(60),
    backgroundColor: Colors.search,
    borderRadius: scale(30),
    paddingLeft: scale(80)
  },
  icon: {
    backgroundColor: Colors.transparent,
    position: 'absolute',
    left: scale(35),
    top: scale(24)
  }
});

export default class Glossary extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "GLOSSARY"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <View style={styles.searchBar}>
          <TextInput
            {...this.props}
            style={styles.searchInput}
            placeholder=""
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
            autoCorrect={false}
            keyboardType={'web-search'}
            underlineColorAndroid={Colors.transparent}
          />
          <Icon
            name={'icon-search'}
            color={Colors.boxBGColor}
            size={scale(54)}
            style={styles.icon}
          />
        </View>
        <ScrollView>

          <View style={styles.topTitleContainer}>
            <Text style={styles.topTitle}>DEFINITION OF THE DAY</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>PREFERENCE SHARE</Text>
          </View>
          <ReadMoreCard
            style={card}
            linesShown={5}
            cardText={`Cocoon makes home security simple &amp; affordable for everyone. Founded by security experts, its unique Subsound® technology is named “the future of home security”. Backed by Aviva, it's had continual monthly growth &amp; protects homes around the world. Join the home security revolution!`}
          />
          <View style={styles.bottomTitleContainer}>
            <Text style={styles.topTitle}>RECENT</Text>
          </View>
          <View>
            {recents.map((item, i) => (
              <Text key={i} style={styles.heading}>EXIT</Text>
            ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
