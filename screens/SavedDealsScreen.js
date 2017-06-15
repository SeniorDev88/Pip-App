import React from "react";
import {View, Text, StyleSheet, ListView, TouchableOpacity} from "react-native";
import * as firebase from "firebase";
import EmptyScreen from '../components/EmptyScreen';
import Images from '../constants/Images';
import Colors from '../constants/Colors';
import { scale } from '../constants/Layout';
import Bookmarks from '../components/BriefCaseScreen/Bookmarks';
import Overview from '../components/BriefCaseScreen/Overview';
import Glossary from '../components/BriefCaseScreen/Glossary';

const opportunities = [
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  },
  {
    dealName: 'N1CE Cocktails',
    dealCategory: 'REVENUE',
    dealBgUrl: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2016/05/n1ce.png',
    dealTags: ['Alcohol'],
    dealLogo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw6TfuvNtgtVZ3szz_s4n2otE1DB69Fav8f1wKqFhq-yPH89lzsA',
    dealPlatformLogo: 'https://d1dve5icbq0xf0.cloudfront.net/assets/wefunder_logo_v5_small-e3eaa7283757b747d51d881d315a7181.png'
  }
];

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  topContainer: {
    height: scale(271),
    backgroundColor: 'white',
    paddingVertical: scale(60),
    paddingHorizontal: scale(30)
  },
  topBox: {
    flex: 1,
    backgroundColor: Colors.boxBGColor,
    borderRadius: scale(10),
    borderWidth: scale(1),
    paddingHorizontal: scale(20),
    borderColor: Colors.boxBGBorderColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  topBoxNumber: {
    fontFamily: 'GothamRounded-Book',
    color: Colors.tintColor,
    fontSize: scale(48)
  },
  itemBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBoxText: {
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
    fontSize: scale(24)
  }
});

export default class SavedDealsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Saved Deals'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(opportunities),
      loading: true
    };
  }

  getRef() {
    console.log('getting ref');
    return firebase.database().ref();
  }

  componentWillMount() {
    user = firebase.auth().currentUser;
    if (user != null) {
      this.savedDealsRef = this.getRef().child('users').child(`${user.uid}`).child('savedDeals');
    } else {
      console.log("We shouldn't reach this because we should be logged in.");
    }
  }

  componentDidMount() {
    // this.listenForSavedItems(this.savedDealsRef);
  }

  listenForSavedItems(savedDealsRef) {
    savedDealsRef.on('value', (snap) => {
      // Get the saved deal ids and store as an array
      let savedIds = Object.keys(snap.val());

      // Now take each ID and get the corresponding archived dealTile
      // and save each tile object to savedDealTiles
      // since we have the ID we don't have to search through
      // /dealTiles/archive because we already have its ID
      let savedDealTiles = [];
      savedIds.forEach((child) => {
        console.log(child);
        this.getRef()
            .child('dealTiles')
            .child('archive')
            .child(child)
            .once('value')
            .then(snap => {
              savedDealTiles.push({
                dealName: snap.val().dealName,
                dealCategory: snap.val().dealCategory,
                dealBgUrl: snap.val().dealBgUrl,
                dealId: snap.val().dealId,
                dealTags: snap.val().dealTags
              });
              // Apply savedDealTiles to state
              this.setState({
                dataSource: this.state.dataSource.cloneWithRows(savedDealTiles),
                loading: false
              });
            })
            .catch(err => {
              console.log("Error: ");
              console.log(err);
            });
      });
    })
  }

  renderRow = (rowData) => {
    return <TouchableOpacity
        onPress={() => this.props.navigator.push('dealDetails', {dealId: rowData.dealId, dealName: rowData.dealName})}>
      <View>
        <Text>{rowData.dealName}</Text>
        <Text>{rowData.dealCategory}</Text>
      </View>
    </TouchableOpacity>
  };


  render() {
    return (
      <EmptyScreen icon={Images.Pips} />
    );
  }
}



