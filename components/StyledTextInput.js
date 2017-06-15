import React from "react";
import { TextInput } from "react-native";

export default class StyledTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Search for Deals",
    };
  }
  render() {
    return (
      <TextInput
        {...this.props}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Search for Deals"
        onChangeText={text => this.setState({ text })}
        value={this.state.text}
        autoCorrect={false}
      />
    );
  }
}
