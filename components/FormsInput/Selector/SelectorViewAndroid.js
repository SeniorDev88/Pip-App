import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
} from "react-native";
import Colors from '../../../constants/Colors';
import { scale, scaleByVertical } from '../../../constants/Layout';
import Icon from '../../Icon';


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
  },
  modal: {
    paddingVertical: scaleByVertical(30),
    paddingHorizontal: scale(20),
    backgroundColor: Colors.dirtyWhite,
    borderTopColor: Colors.boxBGBorderColor,
    borderTopWidth: 1,
  },
  selectorBorder: {
    borderWidth: 1,
    borderColor: Colors.tintColor,
    borderRadius: scaleByVertical(44),
    overflow: 'hidden',
  },
  selectorContent: {
    paddingHorizontal: scale(62),
    paddingTop: scaleByVertical(21),
    paddingBottom: scaleByVertical(22),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColor: {
    color: Colors.boxTextColor,
    fontFamily: 'Avenir',
    fontSize: scaleByVertical(26),
  }
});

class SelectorViewAndroid extends React.Component {
  static propTypes = {
    selectedValue: React.PropTypes.string.isRequired,
    visibleKey: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    applyValue: React.PropTypes.func.isRequired,
  };
  render() {
    return (
      <View style={styles.selectorBorder}>
        <View
          style={styles.selectorContent}
        >
          <Text style={styles.textColor}>{this.props.visibleKey}</Text>
          <Icon
            name="icon-arrowBottom"
            color={Colors.lightBlue}
            size={20}
          />
        </View>
        <Picker
          mode="dialog"
          onValueChange={(value, keyIndex) => this.props.applyValue( value, keyIndex )}
          selectedValue={this.props.selectedValue}
          style={{ opacity: 0, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        >
          {this.props.children}
        </Picker>
      </View>
    );
  }
}

export default SelectorViewAndroid;
