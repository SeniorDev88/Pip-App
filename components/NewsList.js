import React from "react";
import { ScrollView, View, StyleSheet, Image, Text, Dimensions, TouchableOpacity } from "react-native";
import { scale, scaleByVertical } from '../constants/Layout';
import Router from '../navigation/Router';
import RelatedArticles from './RelatedArticles';
import Tag from './Tag';
import Colors from '../constants/Colors';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  headerImageCont: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  headerImage: {
    width: window.width - 30,
    height: 250,
    marginTop: scaleByVertical(50),
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

const onPressImage = (props) => {
  props.navigation.getNavigator('master').push(Router.getRoute('fullNews'));
};

const NewsList = (props) => {
  const onPress = onPressImage.bind(this, props);
  return (
    <ScrollView>
      <View style={styles.headerContainer}>

        <View style={styles.headerImageCont}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={require('../assets/images/NewsFeed/main-article-img.png')}
              resizeMode="cover"
              style={styles.headerImage}
            >
              <View style={styles.mainImageTextCont}>
                <Tag text="Regulations" style={styles.mainImageText} />
              </View>
            </Image>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerText}>Crowdfunding Julia Groves: “FCA Review Is Most Welcome”</Text>


        <View style={styles.subHeaderTextCont}>
          <Text style={styles.subHeaderSource}>Crowdfunding Insider</Text>
          <Text style={styles.subHeaderHours}>3h</Text>
        </View>

      </View>
      <View style={styles.articles}>
        <RelatedArticles
          articles={props.list}
          onPress={onPress}
        />
      </View>
    </ScrollView>
  );
};

export default NewsList;
