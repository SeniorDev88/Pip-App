import React from 'react';
import InvestorTypeScreen from '../../screens/InvestorTypeScreen';
import NavBarLeft from '../NavBarLeft';
import NavBarRight from '../NavBarRight';
import NavigationBarTitle from '../NavigationBarTitle';
import Icon from '../Icon';

class InvestorTypeScreenWithClose extends InvestorTypeScreen {
  static route = {
    navigationBar: {
      visible: true,
      renderTitle: () =>
        <NavigationBarTitle>
          <Icon name="icon-settings" size={25} style={{ color: 'white' }} />
        </NavigationBarTitle>,
      renderLeft: (route) => {
        const buttonPress = () => {
          route.config.eventEmitter.emit('exitPressed');
        };
        return <NavBarLeft routeName={route.routeName} actionIcon={'icon-exit'} onActionPress={buttonPress} />;
      },
      renderRight: () => <NavBarRight />
    }
  };

  renderLogo = false;

  componentWillMount() {
    this._buttonPressSubscription = this.props.route.getEventEmitter().addListener('exitPressed', this.pressedEventCallback);
  }
  pressedEventCallback = () => {
    this.props.navigator.pop();
  };
  componentWillUnmount() {
    this._buttonPressSubscription.remove();
  }
}
export default InvestorTypeScreenWithClose;
