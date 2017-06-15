import React from 'react';
import {
  View,
} from 'react-native';

const NavigationBarTitle = ({ children }) =>
  <View style={{ justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
    {children}
  </View>;

NavigationBarTitle.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default NavigationBarTitle;
