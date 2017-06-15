import React from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { withNavigation } from './ex-navigation';
import { internalRouteMap } from "../navigation/Router";
import Icon from './Icon';
import { scale, scaleByVertical } from '../constants/Layout';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  navBarRow: {
    width: scale(196),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actionIcon: {
    color: 'white',
  },
  arrowFixer: {
    width: scale(98),
  },
  icon: {
    color: Colors.white,
    marginLeft: scale(29)
  },
  buttonContainer: {
    height: Platform.OS === 'ios' ? 44 : 54,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const NavBarLeft = ({ onActionPress, actionIcon, routeName, navigator }) => {
  const prevRoute = routeName in internalRouteMap ? internalRouteMap[routeName].prev : null;
  const onArrowPress = prevRoute ? () => navigator.replace(prevRoute) : null;
  return (
    <View style={styles.navBarRow}>
      { actionIcon ?
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.buttonContainer}
          onPress={onActionPress}
        >
          <Icon
            name={actionIcon}
            size={25}
            style={styles.icon}
          />
        </TouchableHighlight>
        : <View style={styles.arrowFixer} />
      }
      {
        onArrowPress ?
          <TouchableHighlight
            underlayColor="transparent"
            style={styles.buttonContainer}
            onPress={onArrowPress}
          >
            <Icon
              name="chevron-left"
              color="white"
              size={20}
              style={[styles.actionIcon, { color: '#CCF9F1' }]}
            />
          </TouchableHighlight>
        : null
      }
    </View>
  );
};

NavBarLeft.propTypes = {
  routeName: React.PropTypes.string,
  actionIcon: React.PropTypes.string,
  onActionPress: React.PropTypes.func,
  navigator: React.PropTypes.object.isRequired,
};

NavBarLeft.defaultProps = {
  routeName: null,
  actionIcon: null,
  onActionPress: null,
};

export default withNavigation(NavBarLeft);
