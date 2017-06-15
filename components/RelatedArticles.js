import React, { PropTypes } from "react";
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  Linking,
  StyleSheet
} from "react-native";
import { generate } from 'shortid';
import Colors from '../constants/Colors';
import Tag from './Tag';
import { scale, scaleByVertical } from '../constants/Layout';

const styles = StyleSheet.create({
  tagContainer: {
    position: 'absolute',
    bottom: scaleByVertical(20),
    left: scale(20)
  }
});
const RelatedArticles = ({ articles, onPress }) => (
  <View
    style={{
      padding: 18,
      paddingBottom: 3,
      paddingLeft: scale(30),
      backgroundColor: Colors.boxBGColor,
      borderColor: Colors.boxBGBorderColor,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderBottomWidth: 1
    }}
  >
    <View>
      {articles.map(({ imgSrc, title, source, link, time, tag }) => (
        <TouchableHighlight

          onPress={onPress}
          underlayColor="transparent"
          key={generate()}
          style={{
            marginBottom: 15
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                paddingRight: 15
              }}
            >
              <Image
                source={{ uri: imgSrc }}
                style={{
                  width: 120,
                  height: 90,
                  borderRadius: 2.5
                }}
              />
              <Tag
                text={tag}
                style={styles.tagContainer}
              />
            </View>
            <View
              style={{
                flex: 1
              }}
            >
              <Text
                style={{
                  color: Colors.dirtyBlue,
                  fontSize: scale(30),
                  fontFamily: 'GothamRounded-Book'
                }}
              >{title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: Colors.grayBlue,
                    fontSize: scale(24),
                    fontFamily: 'Avenir-Book',
                    marginRight: 25
                  }}
                >{source}</Text>
                <Text
                  style={{
                    color: Colors.dirtyBlue,
                    fontSize: scale(26),
                    fontFamily: 'GothamRounded-Medium'
                  }}
                >{time}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  </View>
);

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
};

RelatedArticles.defaultProps = {
  articles: []
};

export default RelatedArticles;
