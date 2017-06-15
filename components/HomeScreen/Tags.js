import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from "react-native";
import Swiper from 'react-native-swiper';
import { scale } from '../../constants/Layout';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';
import DealTileVanilla from "./DealTileVanilla";
import HeadersFeed from "./HeadersFeed";
import ImageTag from "./ImageTag";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.boxBGColor,
  },
  scrollContainer: {
    flex: 1
  },
  slide: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: scale(40),
    width: scale(690)
  },
  dealContainer: {
    paddingHorizontal: scale(30),
    borderBottomWidth: scale(2),
    marginBottom: scale(34),
    borderColor: Colors.boxBGBorderColor,
  },
  dot: {
    backgroundColor: "white",
    borderColor: Colors.tabIconDefault,
    borderWidth: scale(2)
  },
  paggination: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0
  }
});

const opportunities =
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png',
    dealRaised: '$130000',
    dealTarget: '$1M'
  };
const tags = [
  {
    // image: Images.Placeholder,
    image: require('../../assets/images/tmp/Placeholder.png'),
    tag: 'Te',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/Placeholder.png'),
    tag: 'Tehnology',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/Placeholder.png'),
    tag: 'Tehnology',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/39362308_title.jpg'),
    tag: 'Ice',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/Placeholder.png'),
    tag: 'Tehnology',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/39362308_title.jpg'),
    tag: 'Ice',
    onPress: () => {},
    id: Math.random()
  },
  {
    image: require('../../assets/images/tmp/39362308_title.jpg'),
    tag: 'Ice',
    onPress: () => {},
    id: Math.random()
  }
];

function splitByChunks(arr, n) {
  const splitedArr = [];
  while (arr.length > 0) {
    splitedArr.push(arr.splice(0, n));
  }
  return splitedArr;
}

const splitByThree = arr => splitByChunks(arr, 3);

export default class Tags extends Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "TAGS",
    }
  };
  openDeal = () => {
    this.props.navigation.getNavigator('master').push('dealDetailAll',
      {
        dealId: 1,
        dealName: opportunities.dealName
      });
  };
  renderTags = () => {
    const imageTags = tags.map(({ image, tag, onPress, id }) => (
      <ImageTag
        key={id}
        image={image}
        tag={tag}
        onPress={onPress}
      />
    ));
    const chunks = splitByThree(imageTags);
    return chunks.map(chunk => (
      <View
        key={Math.random()}
        style={styles.slide}
      >
        {chunk}
      </View>
      )
    );
  };

  render() {
    return (
      <View style={styles.scrollContainer} >
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <ScrollView>
          <HeadersFeed
            title={'TAG OF THE WEEK:'}
            tag={'Alcohol'}
            onPress={
              () => {
                this.props.navigation.getNavigator('master').push('addTag');
              }
            }
          />
          <View style={styles.dealContainer}>
            <DealTileVanilla deal={opportunities} onPress={() => this.openDeal()} />
          </View>
          <HeadersFeed title={'MOST POPULAR'} />
          <View style={styles.dealContainer}>
            <Swiper
              paginationStyle={styles.paggination}
              loop={false}
              height={scale(424)}
              dotStyle={styles.dot}
              activeDotColor={Colors.tintColor}
            >
              {this.renderTags()}
            </Swiper>
          </View>
          <HeadersFeed title={'EXPLORE TAGS'} />
          <View style={styles.dealContainer}>
            {this.renderTags()}
          </View>
        </ScrollView>
      </View>
    );
  }
}
