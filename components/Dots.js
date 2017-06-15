import React, { PropTypes } from "react";
import { View, TouchableHighlight, StyleSheet } from "react-native";
import { generate } from 'shortid';

const styles = StyleSheet.create({
  dot: {
    width: 7,
    height: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    marginHorizontal: 5
  }
});

const Dots = ({ slides, activeSlide, carousel }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
    {slides.map((item, i) => (
      <TouchableHighlight
        key={generate()}
        onPress={() => carousel.snapToItem(i)}
        underlayColor="transparent"
      >
        <View
          style={[styles.dot,
            {
              borderColor: i === activeSlide ? '#00EBC2' : '#bfcbd1',
              backgroundColor: i === activeSlide ? '#00EBC2' : 'white'
            }]}
        />
      </TouchableHighlight>
    ))}
  </View>
);

Dots.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object),
  activeSlide: React.PropTypes.number
};

Dots.defaultProps = {
  slides: [],
  activeSlide: 0
};

export default Dots;
