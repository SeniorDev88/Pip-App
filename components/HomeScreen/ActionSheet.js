import React, { Component, PropTypes } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Modal, Dimensions,  Platform } from "react-native";
import Colors from '../../constants/Colors';
import { scale, scaleByVertical } from '../../constants/Layout';
import ActionSheetButton from './ActionSheetButton';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: scaleByVertical((Platform.OS === 'ios') ? 18 : 55),
    backgroundColor: Colors.modalBG
  },
  actionsheetContainer: {
    backgroundColor: Colors.boxBGColor,
    width: scale(710),
    marginBottom: scale(16),
    borderRadius: scale(20),
  },
  titleContainer: {
    height: scale(140),
    width: scale(710),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.boxBGBorderColor,
    borderBottomWidth: scale(2)
  },
  actionsheetTitle: {
    backgroundColor: Colors.transparent,
    color: Colors.grayBlue,
    fontFamily: 'GothamRounded-Book',
    fontSize: scale(36),
  },
  cancelBtn: {
    backgroundColor: Colors.titleColor,
    height: scale(110),
    width: scale(710),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(20),
    marginBottom: scaleByVertical(50)
  },
  cancelBtnTitle: {
    backgroundColor: Colors.transparent,
    color: Colors.quadrary,
    fontFamily: 'GothamRounded-Book',
    fontSize: scale(36),
  },
});

export default class ActionSheet extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        mostViewed: false,
        mostRecent: true,
        closingSoonest: false,
        mostFunding: false
      }
    };
  }
  click(id) {
    // this.setState({
    //   filter: {
    //     ...this.state.filter,
    //     [id]: !this.state.filter[id]
    //   },
    //   modalVisible: true
    // });
    this.setState({
      filter: {
        mostViewed: false,
        mostRecent: false,
        closingSoonest: false,
        mostFunding: false,
        [id]: !this.state.filter[id]
      },
      modalVisible: true
    });
  }


  render() {
    const filter = this.state.filter;
    const { onCancel, show } = this.props;
    return (
      <Modal
        transparent
        visible={show}
        animationType={'fade'}
      >
        <View style={styles.container}>
          <View style={styles.actionsheetContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.actionsheetTitle}>SORT BY</Text>
            </View>
            <ActionSheetButton active={filter.mostViewed} title={'Most Viewed'} onpress={() => this.click('mostViewed')} />
            <ActionSheetButton active={filter.mostRecent} title={'Most Recent'} onpress={() => this.click('mostRecent')} />
            <ActionSheetButton active={filter.closingSoonest} title={'Closing Soonest'} onpress={() => this.click('closingSoonest')} />
            <ActionSheetButton active={filter.mostFunding} title={'Most Funding'} onpress={() => this.click('mostFunding')} lastButton={true} />
          </View>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={onCancel}
            underlayColor={Colors.boxBGColor}
          >
            <Text style={styles.cancelBtnTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
