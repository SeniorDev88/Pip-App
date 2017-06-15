import React from "react";
import {View, StyleSheet, Image, Platform} from "react-native";

const NavbarTitle = (props) => {

  return (
      <View
          style={ styles.container }
      >
        <Image
            resizeMethod="resize"
            source={ require('../assets/images/DealDetail/icon-overview.png') }
            style={ styles.logo }
            resizeMode="contain"
        />
      </View>
  )
};

const styles = StyleSheet.create({
  logo: {
    height: 32,
    width: 60,
  },
  container: {
    flex: 1,
    justifyContent: Platform.OS === 'android' ? 'flex-start' : 'center',
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavbarTitle;