import React, { PropTypes, Component } from "react";
import { View, TouchableHighlight } from "react-native";
import Carousel from "react-native-snap-carousel";
import { generate } from "shortid";
import { sliderWidth, itemWidth } from "./styles/SliderEntry.style";
import SliderEntry from "./components/SliderEntry";

const getSlides = (entries) => {
  if (!entries) {
    return false;
  }
  return entries.map(entry => (
    <SliderEntry
      key={generate()}
      {...entry}
    />
  ));
};

class CarouselCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
  }

  showCarousel() {
    return (
      <Carousel
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={0.6}
        enableMomentum={false}
        snapOnAndroid
        removeClippedSubviews={false}
        style={{ marginBottom: 15 }}
        showsHorizontalScrollIndicator={false}
        ref={(carousel) => { this.carousel = carousel; }}
        onSnapToItem={i => this.setState({ activeSlide: i })}
      >
        {getSlides(this.props.entries)}
      </Carousel>
    );
  }

  showDots(entries, activeSlide) {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        {entries.map((item, i) => (
          <TouchableHighlight
            key={generate()}
            onPress={() => this.carousel.snapToItem(i)}
            underlayColor="transparent"
          >
            <View
              style={{
                width: 7,
                height: 7,
                borderColor: i === activeSlide ? '#00EBC2' : '#bfcbd1',
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: 7,
                marginHorizontal: 5,
                backgroundColor: i === activeSlide ? '#00EBC2' : 'white'
              }}
            />
          </TouchableHighlight>
        ))}
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          marginBottom: 60
        }}
      >
        {this.showCarousel()}
        {this.showDots(this.props.entries, this.state.activeSlide)}
      </View>
    );
  }
}

CarouselCustom.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object)
};

CarouselCustom.defaultProps = {
  entries: []
};

export default CarouselCustom;
