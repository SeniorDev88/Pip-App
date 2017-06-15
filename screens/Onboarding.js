import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text
} from 'react-native';
import Carousel from "react-native-snap-carousel";

import Layout, { scale, scaleByVertical } from '../constants/Layout';
import NavigatorButton from '../components/NavigatorButton';
import Intro from '../components/Onboarding/Intro';
import Dots from '../components/Dots';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scaleByVertical(55),
    marginBottom: scaleByVertical(85)
  },
  dot: {
    width: 7,
    height: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    marginHorizontal: 5
  },
  swipeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scaleByVertical(100)
  },
  swipeText: {
    color: Colors.boxTextColor,
    fontSize: scaleByVertical(26),
    fontFamily: "Avenir-Book"
  },
  arrowIco: {
    height: scaleByVertical(24),
    width: scale(14),
    marginLeft: scale(30),
    alignSelf: 'center'
  }
});

const slideInfo = [
  {
    img: require('../assets/images/Onboarding/Pip_logo.png'),
    title: 'Bear Fruit for your Future',
    isLogo: true,
    description: null
  },
  {
    img: require('../assets/images/Onboarding/Discover.png'),
    title: 'Discover',
    isLogo: false,
    description: 'new investment opportunities from around the world of alternative finance.'
  },
  {
    img: require('../assets/images/Onboarding/Build.png'),
    title: 'Build',
    isLogo: false,
    description: 'a selection of your favourite opportunities to stay up to date with.'
  },
  {
    img: require('../assets/images/Onboarding/Grow.png'),
    title: 'Grow',
    isLogo: false,
    description: 'your investor expertise through collated industry specific news and insights'
  },
  {
    img: require('../assets/images/Onboarding/Grow.png'),
    title: 'Grow',
    isLogo: false,
    description: 'your investor expertise through collated industry specific news and insights'
  }
];

class OnboardingIntro extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      translucent: true 
    };
  }

  renderSlides() {
    return slideInfo.map(({ img, title, isLogo, description }, i) =>
      <Intro
        key={i} img={img} title={title} isLogo={isLogo}
        description={description} onLoginPress={() => this.props.navigator.replace('loginChooseOptions')}
      />
    );
  }

  renderCarousel() {
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

  renderBeginButton() {
    return (
      <View style={{ marginHorizontal: scale(40) }}>
        <NavigatorButton
          buttonText="Let's begin"
          style={{ marginBottom: scaleByVertical(-30) }}
          onPress={() => this.props.navigator.replace('loginChooseOptions')}
        />
      </View>
    );
  }

  renderSwipeButton() {
    return (
      <View style={styles.swipeContainer}>
        <Text style={styles.swipeText}>
          Swipe to get started
        </Text>

        <Image
          style={styles.arrowIco}
          source={require('../assets/images/Onboarding/arrow_right.png')}
        />
      </View>
    );
  }

  renderButtonOrDots(slides, activeSlide) {
    if (activeSlide === slides.length - 1) {
      return (this.renderBeginButton());
    } else if (activeSlide === 0) {
      return (this.renderSwipeButton());
    }
    return <Dots slides={slides} activeSlide={activeSlide} carousel={this.carousel} />;
  }

  render() {
    const { activeSlide } = this.state;

    return (
      <View
        style={[styles.container, {
          height: Layout.window.height
        }]}
      >
        <StatusBar
          translucent={true}
          hidden={true}
        />
        {this.renderCarousel()}
        { this.renderButtonOrDots(slideInfo, activeSlide)}
      </View>
    );
  }
}

export default OnboardingIntro;
