import React from "react";
import { Text, View, ListView, TouchableOpacity, StatusBar } from "react-native";
import * as firebase from "firebase";
import NewsList from '../components/NewsList';
import EmptyScreen from '../components/EmptyScreen';

const relatedArticles = [
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'Sondor uses new funding equity to raise $500k',
    source: 'Tech Crunch',
    link: 'https://example.com',
    time: '4h',
    tag: 'Eco-projects'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology'
  },
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'Sondor uses new funding equity to raise $500k',
    source: 'Tech Crunch',
    link: 'https://example.com',
    time: '4h',
    tag: 'Eco-projects'
  },
];


export default class NewsScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: "NEWS"
    }
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loading: true
    };
    this.newsRef = this.getRef().child('newsStoriesLiveOnApp');
  }

  getRef() {
    return firebase.database().ref();
  }

  onFullNews = () => {
    this.set;
  };

  renderRow = rowData => <TouchableOpacity onPress={() => this.props.navigator.push('links')}>
    <View>
      <Text>{rowData.newsStoryName}</Text>
    </View>
  </TouchableOpacity>;

  render() {
    if (relatedArticles.length === 0) {
      return (
        <EmptyScreen
          icon={require('../assets/images/NewsFeed/NewsEmptyScreen.png')}
          textTop={'Sorry we’re havign trouble fetching your news.'}
          textBottom={'‘Pull down’ to referesh'}
        />
      );
    }
    return (
      <View
        style={{ flex: 1 }}
      >
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <NewsList
          navigator={this.props.navigator}
          navigation={this.props.navigation}
          list={relatedArticles}
        />
      </View>
    );
  }
}
