import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

export default class ProfileScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Profile'
    }
  };

  render() {
    return (
        <View style={styles.container}>
          <Text>Profile</Text>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});a