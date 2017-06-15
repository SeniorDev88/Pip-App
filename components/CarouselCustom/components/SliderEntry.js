import React, { PropTypes } from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "../styles/SliderEntry.style";
import HeadingData from "../../HeadingData";
import HeadingTagline from "../../HeadingTagline";
import ReadMoreCard from "../../ReadMoreCard";

const SliderEntry = ({ imageUrl, title, tagline, cardText, linkWebUrl, icon }) => {
  const imageStyled = imageUrl
    ? (<Image
      source={{
        uri: imageUrl
      }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#fff",
        marginBottom: 15
      }}
    />)
    : false;

  const titleStyled = title ? <HeadingData>{title}</HeadingData> : false;

  const taglineStyled = tagline
    ? <HeadingTagline>{tagline}</HeadingTagline>
    : false;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.slideInnerContainer}
    >
      {imageStyled}
      {titleStyled}
      {taglineStyled}
      <ReadMoreCard
        cardText={cardText}
        link={linkWebUrl}
        icon={icon}
        style={{
          marginBottom: 15,
          alignSelf: 'stretch'
        }}
        textStyle={{
          textAlign: 'center'
        }}
      />
    </TouchableOpacity>
  );
};

SliderEntry.propTypes = {
  cardText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  linkWebUrl: PropTypes.string,
  icon: PropTypes.string,
};

SliderEntry.defaultProps = {
  imageUrl: null,
  title: null,
  tagline: null,
  linkWebUrl: null,
  icon: 'icon-www'
};

export default SliderEntry;
