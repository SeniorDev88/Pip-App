import React from "react";
import { View } from "react-native";
import { generate } from 'shortid';

import Heading from "../../Heading";
import TeamStatistics from "../TeamStatistics";
import PersonAll from "../PersonAll";
import PictureBreak from "../../PictureBreak";

// Dummy Data
const teamMembers = [
  {
    imageUrl: "https://images.crowdcube.com/unsafe/fit-in/178x178/filters:fill(fff)/https://files-crowdcube-com.s3.amazonaws.com/files/pitch_pics/original/201701/logo-640x640_1c38405ac58aebb5a3989c7b8c331572.png",
    personName: "Jimmy Dymott",
    personPosition: "Founder & Mixologist",
    personDescription: "Jimmy Dymott won Bartender of the Year in 2010. He was previously a consultant for Absolut Vodka and is now a partner in Little Quarter, the best cocktail bar in Sweden.",
    personLinkWeb: "http://linkedin.com",
    id: "123"
  }
];

const TeamSection = () => {
  // const teamMembers = props.teamMembers;
  const renderTeamMembers = teamMembers.map(member => (
      // Member needs to contain
      // imageUrl,
      // personName,
      // personPosition,
      // personDescription,
      // personLinkWeb
      // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.j3vv9scyh
      (
        <PersonAll
          key={generate()}
          imageUrl={member.imageUrl}
          personName={member.personName}
          personPosition={member.personPosition}
          personDescription={member.personDescription}
          personLinkWeb={member.personLinkWeb}
        />
      )
    ));
  return (
    <View>
      <Heading>TEAM DETAILS</Heading>
      <TeamStatistics />
      {renderTeamMembers}
      <PictureBreak
        imageUrl="https://images.indiegogo.com/file_attachments/967916/files/20141029022335-Cocoon_Respecting_your_privacy.png"
      />
    </View>
  );
};

export default TeamSection;
