import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Animated
} from "react-native";
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import RiskWarning from '../RiskWarning';
import SectionTabs from './SectionTabs';
import TopBar from "../TopBar";
import ProgressBar from "../ProgressBar";
import FundingStatistics from "./FundingStatistics";
import DealDetailLogo from "./DealDetailLogo";
import DealDetailTitle from "./DealDetailTitle";
import DealDetailLocation from "./DealDetailLocation";
import DealDetailDescription from "./DealDetailDescription";
import PlatformLogo from "../PlatformLogo";

const window = Dimensions.get('window');
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 218;
const STICKY_HEADER_HEIGHT = 60;
const WIDTH = window.width;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00EBC2'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WIDTH,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: WIDTH
  },
  stickySectionText: {
    color: 'white',
    fontFamily: 'Avenir-Black',
    fontSize: 12
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

class DealDetailAll extends Component {
  static route = {
    navigationBar: {
      visible: false,
      title: "DealDetail"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      headerOpacity: new Animated.Value(0),
      contentMarginTop: new Animated.Value(300),
      backgroundColor: 'transparent',
    }
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing( this.state.opacity, {
          toValue: 1,
          duration: 300
        }),
        Animated.timing( this.state.contentMarginTop, {
          toValue: 0,
          duration: 300
        })
      ]),      
      Animated.timing( this.state.headerOpacity, {
        toValue: 1,
        duration: 300,
      })
    ]).start( () => {
      this.setState({
        backgroundColor: "#00EBC2"
      });      
    });
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.showDetail) {
      this.setState({
        backgroundColor: "transparent"
      }, () => {
        Animated.sequence([
          Animated.timing( this.state.headerOpacity, {
            toValue: 0,
            duration: 300,
          }),
          Animated.parallel([
            Animated.timing( this.state.opacity, {
              toValue: 0,
              duration: 300
            }),
            Animated.timing( this.state.contentMarginTop, {
              toValue: 300,
              duration: 300
            })
          ])
        ]).start();
      });
      ( () => {
        this.setState({
          backgroundColor: "#00EBC2"
        });
      });
    }
  }

  render() {
    return (
      <Animated.View style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, opacity: this.state.opacity}}>
        <ParallaxScrollView
          backgroundColor={this.state.backgroundColor}
          headerBackgroundColor="pink"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
          backgroundSpeed={10}
          renderBackground={() => (
            <Animated.View key="background" style={{opacity: this.state.headerOpacity}}>
              <Image
                source={{ uri: 'http://cdn.thegadgetflow.com/wp-content/uploads/2016/02/cocoon-smart-home-security-01.jpg',
                  width: window.width,
                  height: PARALLAX_HEADER_HEIGHT - 40 }}
              />
              <View
                style={{ position: 'absolute',
                  top: 0,
                  width: window.width,
                  height: PARALLAX_HEADER_HEIGHT }}
              />
              <DealDetailLogo />
            </Animated.View>
          )}
          renderForeground={() => (<TopBar from={this.props.from}/>)}
          renderStickyHeader={() => (
            <View key="sticky-header" style={styles.stickySection}>
              <TopBar
                title={<Text style={styles.stickySectionText}>N1CE FROZEN COCKTAILS</Text>}
                from={this.props.from}
              />
            </View>
          )}
        >
          <StatusBar
            translucent={false}
            hidden={false}
          />
          <Animated.View style={{flex:1, marginTop: this.state.contentMarginTop}}>
            <DealDetailTitle />
            <DealDetailLocation />
            <DealDetailDescription />
            <ProgressBar completePercentage={30} />
            <Text
              style={{
                fontFamily: "GothamRounded-Book",
                fontSize: 12,
                lineHeight: 29,
                color: "#388ba7",
                textAlign: "center"
              }}
            >30% funded</Text>
            <FundingStatistics />
            <PlatformLogo
              logoPath="http://3xrowsd5xzn1nczoz32qcdku.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/Crowdcube_logo_exclusion_3a40fc925656b045955d392d7e9f9c80.jpg"
              style={{
                marginBottom: 20
              }}
            />
            <SectionTabs />
            <RiskWarning />
          </Animated.View>
        </ParallaxScrollView>
      </Animated.View>
    );
  }
}

export default DealDetailAll;
