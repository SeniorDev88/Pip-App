import React from "react";
import { ScrollView, TouchableOpacity, View, Text, StatusBar } from "react-native";
import * as firebase from "firebase";

export default class DealDetailScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return `${params.dealName}`
      }
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      dealId: this.props.route.params.dealId,
      loading: true,
      savedDeal: false
    };
    this.dealDetailRef = this.getRef().child('deals').child('liveOnApp').child(this.props.route.params.dealId);
  }

  getRef() {
    return firebase.database().ref();
  }

  getDealDetail(dealDetailRef) {
    console.log('entering getDealDetail FB data grab');
    dealDetailRef.on('value', (snap) => {
      this.setState({
        dealDetail: snap.val(),
        loading: false
      })
    })
  }

  componentWillMount() {
    user = firebase.auth().currentUser;
    if (user != null) {
      this.savedDealRef = this.getRef().child('users').child(`${user.uid}`).child('savedDeals').child(this.props.route.params.dealId);
      this.savedDealRef.on('value', snap => {
        console.log("What's the value?");
        console.log(snap.val());
        if (snap.val() === null || snap.val() === false) {
          this.setState({
            savedDeal: false,
          });
          console.log("ACTION")
        } else {
          this.setState({
            savedDeal: true,
          });
          console.log("ACTION2")
        }
        console.log("After flowing through getting the value from firebase this.state.savedDeal is: ");
        console.log(this.state.savedDeal);
      });
    } else {
      console.log("We shouldn't reach this because we should be logged in.");
    }
    console.log("this.state.savedDeal is: ");
    console.log(this.state.savedDeal);

  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.updateCurrentRouteParams({
        dealId: this.props.route.params.dealId,
        dealName: this.props.route.params.dealName
      })
    }, 1000);

    //Grab the deal data form firebase
    this.getDealDetail(this.dealDetailRef)
  }

  _saveDeal = (savedDealRef) => {
    savedDealRef.set(true)
      .then(
      this.setState({
        savedDeal: true
      })
      )
      .catch(
      console.log("Error Saving Deal!")
      )
  };

  _unsaveDeal = (savedDealRef) => {
    savedDealRef.set(false)
      .then(
      this.setState({
        savedDeal: false
      })
      )
      .catch(
      console.log("Error unsaving deal")
      )
  };

  render() {
    const dealIsAlreadySaved = this.state.savedDeal;
    let saveDealOrRemoveDealButton = null;
    console.log("this.savedDealRef is: ");
    console.log(this.savedDealRef);
    if (dealIsAlreadySaved) {
      saveDealOrRemoveDealButton = <TouchableOpacity onPress={() => this._unsaveDeal(this.savedDealRef)}><Text>Unsave Deal</Text></TouchableOpacity>
    } else {
      saveDealOrRemoveDealButton = <TouchableOpacity onPress={() => this._saveDeal(this.savedDealRef)}><Text>Save Deal</Text></TouchableOpacity>
    }

    if (this.state.loading) {
      return (
        <Text>Loading...</Text>
      )
    }
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          hidden={false}
        />
        <Text>Detail Detail Screen</Text>
        <Text>{this.state.dealDetail.dealName}</Text>
        {saveDealOrRemoveDealButton}
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
};
