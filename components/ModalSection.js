import React, { Component } from "react";
import {
  ScrollView,
  View,
  TouchableHighlight,
  Text,
  Modal
} from "react-native";

export default class ModalSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed.");
          }}
        >
          <ScrollView style={{ marginTop: 22 }}>
            <View>

              <TouchableHighlight
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              {this.props.children}
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}
