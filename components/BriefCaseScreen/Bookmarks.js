import React, { Component, PropsType } from "react";
import { View, StyleSheet, ScrollView, StatusBar } from "react-native";
import { scale } from "../../constants/Layout";
import Colors from "../../constants/Colors";
import Stat from '../Profile/Stat';
import Tag from '../Tag';
import RelatedArticles from "../RelatedArticles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.boxBGColor,
  },
  topContainer: {
    height: scale(271),
    backgroundColor: 'white',
    paddingHorizontal: scale(30),
    borderBottomWidth: scale(2),
    borderColor: Colors.boxBGBorderColor,
    paddingBottom: scale(40)
  },
  tag: {
    marginTop: scale(7),
    borderColor: Colors.tintColor,
    color: Colors.tintColor
  },
  subText: {
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
    fontSize: scale(24)
  }
});

const relatedArticles = [
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology',
    raised: '$130000',
    target: '$1M'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology',
    raised: '$130000',
    target: '$1M'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology',
    raised: '$130000',
    target: '$1M'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology',

  }
];

export default class Bookmarks extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "BOOKMARKS"
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <View style={styles.topContainer}>
          <Stat
            favouriteTag={<Tag text={'Food'} style={styles.tag} />}
            views={8}
            followingTagsCount={1}
            styleTitle={styles.subText}
            title1={'Article Read'}
            title2={'Bookmarks'}
          />
        </View>
        <ScrollView>
          <RelatedArticles articles={relatedArticles} />
        </ScrollView>
      </View>
    );
  }
}
