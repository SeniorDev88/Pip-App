import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Modal,
  Button,
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

class SelectorViewIos extends React.Component {
  static propTypes = {
    visibleKey: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    applyValue: React.PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { showModal: false,  value: props.selectedValue, keyIndex: 0 };
  }
  returnValue = () => {
    this.props.applyValue(this.state.value, this.state.keyIndex);
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const props = this.props;
    return (
      <View style={styles.selectorBorder}>
        <TouchableOpacity
          style={styles.selectorContent}
          onPress={() => {
            this.setState({ showModal: !this.state.showModal });
          }}
        >
          <Text style={styles.textColor}>{props.visibleKey}</Text>
          <Icon
            name="icon-arrowBottom"
            color={Colors.lightBlue}
            size={20}
          />
        </TouchableOpacity>
        <Modal
          animationType={"slide"}
          transparent
          visible={this.state.showModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View style={{flexDirection: 'row-reverse'}}>
                <Button title="Choose" onPress={this.returnValue} />
              </View>
              <Picker
                mode="dialog"
                onValueChange={(value, keyIndex) => this.setState({ value, keyIndex })}
                selectedValue={this.state.value}
              >
                {props.children}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SelectorViewIos;
