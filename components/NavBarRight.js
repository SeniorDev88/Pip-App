import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Platform,
} from 'react-native';
import { withNavigation } from '@exponent/ex-navigation';
import { internalRouteMap } from "../navigation/Router";
import Icon from './Icon';
import { scale, scaleByVertical } from '../constants/Layout';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  navBarRow: {
    width: scale(196),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionIcon: {
    color: 'white'
  },
  arrowFix: {
    width: scale(98),
  },
  icon: {
    color: Colors.white,
    marginRight: scale(29)
  },
  buttonContainer: {
    height: Platform.OS === 'ios' ? 44 : 54,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const NavBarRight = ({ onActionPress, actionIcon, routeName, navigator }) => {
  const nextRoute = routeName in internalRouteMap ? internalRouteMap[routeName].next : null;
  const onArrowPress = nextRoute ? () => navigator.replace(nextRoute) : null;
  return (
    <View style={styles.navBarRow}>
      {onArrowPress ?
        <TouchableHighlight
          style={styles.buttonContainer}
          underlayColor="transparent"
          onPress={onArrowPress}
        >
          <Icon
            name="chevron-right"
            size={20}
            style={[styles.actionIcon, { color: '#CCF9F1' }]}
          />
        </TouchableHighlight>
        : <View style={styles.arrowFixer} />
      }
      {
        actionIcon ?
          <TouchableHighlight
            onPress={onActionPress}
            underlayColor="transparent"
            style={styles.buttonContainer}
          >
            <Icon
              name={actionIcon}
              size={25}
              style={[styles.actionIcon, styles.icon]}
            />
          </TouchableHighlight>
        : null
        }
    </View>
  );
};

NavBarRight.propTypes = {
  routeName: React.PropTypes.string,
  actionIcon: React.PropTypes.string,
  onActionPress: React.PropTypes.func,
  navigator: React.PropTypes.object.isRequired,
};

NavBarRight.defaultProps = {
  routeName: null,
  actionIcon: null,
  onActionPress: null,
};

export default withNavigation(NavBarRight);
