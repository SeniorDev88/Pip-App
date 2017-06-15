import React from "react";
import {
  Picker,
  Platform,
  View,
} from "react-native";
import SelectorViewIos from './SelectorViewIos';
import SelectorViewAndroid from './SelectorViewAndroid';

const Item = Picker.Item;

class Selector extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      key: React.PropTypes.string,
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
      ]),
    })).isRequired,
    placeholder: React.PropTypes.string.isRequired,
    onValueChange: React.PropTypes.func,
  };
  static defaultProps = {
    onValueChange: () => {},
  };
  constructor(props) {
    super(props);
    const addInitialValue = items => [...[{ key: 'unselected', value: 'unselected' }], ...items];
    this.state = {
      showModal: false,
      visibleKey: props.placeholder,
      value: 'unselected',
      items: addInitialValue(props.items),
    };
  }
  applyValue = (value, keyIndex) => {
    const visibleKey = this.state.items[keyIndex].key;
    this.setState({ value, keyIndex, visibleKey });
    this.props.onValueChange(value);
  };
  render() {
    const SelectorView = Platform.OS === 'ios' ? SelectorViewIos : SelectorViewAndroid;
    const renderItems = this.state.items.map(item =>
      <Item label={item.key} value={item.value} key={item.key} />);
    return (
      <View style={this.props.style}>
        <SelectorView
          applyValue={this.applyValue}
          visibleKey={this.state.visibleKey}
          selectedValue={this.state.value}
        >
          {renderItems}
        </SelectorView>
      </View>
    );
  }
}

export default Selector;
