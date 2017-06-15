import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar
} from 'react-native';
import Carousel from "react-native-snap-carousel";
import Layout, { scale, scaleByVertical } from '../constants/Layout';
import Dots from '../components/Dots';
import NavigatorButton from '../components/NavigatorButton';

import InvestorType from '../components/Onboarding/InvestorType';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scaleByVertical(55),
    marginBottom: scaleByVertical(100)
  }
});

const slides = [
  {
    img: require('../assets/images/InvestorType/invest_everyday.png'),
    title: 'Everyday Investor',
    description: 'is someone who has not and will not invest more than 10% of their net assets in unlisted stocks and debt securities.'
  },
  {
    img: require('../assets/images/InvestorType/invest_self.png'),
    title: 'Self-Certified Investor',
    description: 'is a person who has invested in more than one unlisted company in the last two years.'
  },
  {
    img: require('../assets/images/InvestorType/invest_advise.png'),
    title: 'Advised Investor',
    description: 'is someone who has a regulated advisor, perhaps an Independent Financial Advisor (IFA) and will receieve advice about investing.'
  },
  {
    img: require('../assets/images/InvestorType/invest_highnet.png'),
    title: 'High Net Worth',
    description: 'is someone who has invested in more than one unlisted company in the last 2 years alongside an annual income exceeding £100,000 or equivalent.'
  }
];

class InvestorTypeScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      checkedSlide: null
    };
  }

  showCarousel() {
    return (
      <Carousel
        sliderWidth={Layout.window.width}
        itemWidth={Layout.window.width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        snapOnAndroid
        removeClippedSubviews={false}
        showsHorizontalScrollIndicator={false}
        ref={(carousel) => { this.carousel = carousel; }}
        onSnapToItem={i => this.setState({ activeSlide: i })}
      >
        {this.renderSlides()}
      </Carousel>
    );
  }

  renderLogo = true;

  renderSlides() {
    const { activeSlide, checkedSlide } = this.state;
    // const { isRenderLogo } = this.props;
    return slides.map(({ img, title, description }, i) =>
      <InvestorType
        key={i}
        isRenderLogo={this.renderLogo}
        img={img}
        title={title}
        description={description}
        onPress={() => this.setState({ checkedSlide: (checkedSlide !== i) && i })}
        isChecked={checkedSlide === activeSlide}
      />
    );
  }

  renderContinueButton() {
    return (
      <View style={{ marginHorizontal: scale(40) }}>
        <NavigatorButton
          buttonText="Continue"
          style={{ marginBottom: scaleByVertical(-30) }}
          onPress={() => this.renderLogo ? this.props.navigator.push('interests') : this.props.navigator.pop()}
        />
      </View>
    );
  }

  render() {
    const { activeSlide, checkedSlide } = this.state;
    return (
      <View
        style={[styles.container, {
          height: Layout.window.height
        }]}
      >
        <StatusBar
          translucent={this.renderLogo}
          hidden={this.renderLogo}
        />
        {this.showCarousel()}
        {checkedSlide === activeSlide ?
          this.renderContinueButton() :
          <Dots slides={slides} activeSlide={activeSlide} carousel={this.carousel} />
        }

      </View>
    );
  }
}

export default InvestorTypeScreen;
