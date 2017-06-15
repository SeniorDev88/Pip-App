import React, { PropTypes } from "react";
import { View } from "react-native";
import PersonAvatar from "./PersonAvatar";
import PersonHeading from "./PersonHeading";
import PersonPosition from "./PersonPosition";
import ReadMoreCard from "../../ReadMoreCard";

export default function PersonAll(
  { imageUrl, personName, personPosition, personDescription }
) {
  return (
    <View>
      <PersonAvatar imageUrl={imageUrl} />
      <PersonHeading>{personName}</PersonHeading>
      <PersonPosition>{personPosition}</PersonPosition>
      <ReadMoreCard
        link="https://linkedin.com"
        icon="linkedin"
        iconSize={14}
        cardText={personDescription}
      />
    </View>
  );
}

PersonAll.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  personPosition: PropTypes.string.isRequired,
  personDescription: PropTypes.string.isRequired
};

PersonAll.defaultProps = {};
