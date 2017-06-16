import React from 'react';

import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Text,
  View,
  Animated,
} from 'react-native';

import { unsupportedNativeView } from '../ExUnsupportedNativeView';
import PipEventEmitter from '../../../services/PipEventEmitter';

let Components;
if (global.__exponent) {
  Components = global.__exponent.Components;
} else {
  Components = {
    BlurView: unsupportedNativeView('BlurView'),
  };
}

import TabBadge from '../ExNavigationBadge';

const DEFAULT_TAB_BAR_HEIGHT = 56;

export default class ExNavigationTabBar extends React.Component {
  static defaultHeight = DEFAULT_TAB_BAR_HEIGHT;

  constructor(props) {
    super(props);
    this.state = {
      posBottom: new Animated.Value(0),
    }
    PipEventEmitter.addListener('hideTabBar', ()=>{
      Animated.timing( this.state.posBottom, {
        toValue: - props.height || DEFAULT_TAB_BAR_HEIGHT,
        duration: 300
      }).start();
    });
    PipEventEmitter.addListener('showTabBar', ()=>{
      Animated.timing( this.state.posBottom, {
        toValue: 0,
        duration: 300
      }).start();
    });
  }

  render() {
    const height = this.props.height || DEFAULT_TAB_BAR_HEIGHT;
    let isTranslucent = this.props.translucent;
    let backgroundColor = isTranslucent ? 'rgba(255,255,255,0.5)' : '#fefefe';

    return (
      <Animated.View style={[styles.container, {height: height, bottom: this.state.posBottom}]}>
        {isTranslucent &&
          <Components.BlurView style={[styles.translucentUnderlay, {height}]} />}

        <View style={[styles.innerContainer, {backgroundColor}, this.props.style]}>
          <View style={styles.itemContainer}>
            {this.renderTabItems()}
          </View>
        </View>
      </Animated.View>
    );
  }

  renderTabItems() {
    if (!this.props.items) {
      return null;
    }

    return this.props.items.map((item, index) => {
      let { renderIcon, renderTitle } = item;
      let isSelected = this.props.selectedTab === item.id;

      let title = null;
      if (item.title) {
        if (renderTitle) {
          title = renderTitle(isSelected, item.title, index);
        } else {
          title = <Text>{item.title}</Text>;
        }
      }

      const icon = renderIcon && renderIcon(isSelected, item.title, index);

      let badge = null;

      const { renderBadge, badgeText } = item;

      if (renderBadge) {
        badge = renderBadge(isSelected, item.title, index);
      } else if (badgeText) {
        badge = (
          <TabBadge style={styles.badge}>{badgeText}</TabBadge>
        );
      }

      if (item.showsTouches) {
        return (
          <TouchableNativeFeedback
            key={index}
            onPress={item.onPress}
            onLongPress={item.onLongPress}
            delayPressIn={0}
            style={[styles.tabItem, isSelected ? item.selectedStyle : item.style]}
            background={item.nativeFeedbackBackground}>
            {title}
            {icon}
            {badge}
          </TouchableNativeFeedback>
        );
      } else {
        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={item.onPress}
            delayPressIn={0}
            onLongPress={item.onLongPress}>
            <View style={[styles.tabItem, isSelected ? item.selectedStyle : item.style]}>
              {icon}
              {badge}
              {title}
            </View>
          </TouchableWithoutFeedback>
        );
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  translucentUnderlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  innerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopColor: '#b2b2b2',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  badge: {
    position: 'absolute',
    top: 3,
    right: 18,
    backgroundColor: 'black',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
