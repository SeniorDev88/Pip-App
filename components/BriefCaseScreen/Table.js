import React, { Component, PropTypes } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../../constants/Colors';
import { scale, scaleByVertical } from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: scaleByVertical(40),
    paddingHorizontal: scale(30),
    borderBottomWidth: scale(2),
    borderColor: Colors.boxBGBorderColor
  },
  box: {
    backgroundColor: Colors.boxBGColor,
    borderRadius: scale(10),
    borderWidth: scale(1),
    paddingHorizontal: scale(20),
    paddingVertical: scaleByVertical(30),
    borderColor: Colors.boxBGBorderColor,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  number: {
    fontFamily: 'GothamRounded-Book',
    color: Colors.tintColor,
    fontSize: scale(48)
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Avenir-Book',
    color: Colors.grayBlue,
    fontSize: scale(24)
  }
});
export default class Table extends Component {
  static propTypes = {
    titles: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    const { titles, items } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.item}>
            <Text style={styles.number}>{items[0]}</Text>
            <Text style={styles.text}>{titles[0]}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.number}>{items[0]}</Text>
            <Text style={styles.text}>{titles[1]}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.number}>{items[0]}</Text>
            <Text style={styles.text}>{titles[2]}</Text>
          </View>
        </View>
      </View>
    );
  }
}
