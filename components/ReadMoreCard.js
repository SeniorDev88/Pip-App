import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight, Linking } from "react-native";
import ReadMore from "@exponent/react-native-read-more-text";

import IconButton from './IconButton';

const buttonStyle = {
  position: 'absolute',
  bottom: -45,
  left: -15
};

const ReadMoreCard = ({ cardHeading, cardText, linesShown, link, icon, style }) => {
  const cardHeadingStyled = cardHeading
    ? (<Text
      style={{
        fontFamily: "Avenir-Medium",
        fontSize: 14,
        color: "#607d8b",
        marginTop: 10,
        marginBottom: 15
      }}
    >
      {cardHeading}
    </Text>)
    : false;

  const cardTextStyled = cardText
    ? (<Text
      style={{
        fontFamily: "Avenir-Book",
        fontSize: 14,
        lineHeight: 20,
        color: "#607d8b"
      }}
    >
      {cardText}
    </Text>)
    : false;

  const Footer = ({ handlePress }) => (
    <TouchableHighlight
      onPress={handlePress}
      style={{
        justifyContent: "center",
        alignItems: "center"
      }}
      underlayColor="transparent"
    >
      <View>
        <IconButton
          icon={icon}
          containerStyle={buttonStyle}
        />
      </View>
    </TouchableHighlight>
  );

  Footer.propTypes = {
    handlePress: PropTypes.func.isRequired
  };

  return (
    <View
      style={{
        borderColor: "#eceff3",
        borderWidth: 1,
        backgroundColor: "#f9f9fc",
        borderRadius: 5,
        marginHorizontal: 15,
        marginBottom: 60,
        paddingTop: 15,
        paddingBottom: 30,
        paddingHorizontal: 15,
        ...style
      }}
    >

      {cardHeadingStyled}

      {link ?
        <View>
          {cardTextStyled}
          <Footer
            handlePress={() => Linking.openURL(link)}
          />
        </View>
        :
        <ReadMore
          numberOfLines={linesShown}
          renderTruncatedFooter={handlePress => <Footer handlePress={handlePress} />}
          renderRevealedFooter={handlePress => <Footer handlePress={handlePress} />}
        >
          {cardTextStyled}
        </ReadMore>
      }
    </View>
  );
};

ReadMoreCard.propTypes = {
  cardHeading: PropTypes.string,
  cardText: PropTypes.string.isRequired,
  linesShown: PropTypes.number,
  link: PropTypes.string,
  icon: PropTypes.string,
  style: View.propTypes.style
};

ReadMoreCard.defaultProps = {
  cardHeading: '',
  link: null,
  icon: 'icon-expand',
  linesShown: 5,
  style: {}
};

export default ReadMoreCard;
