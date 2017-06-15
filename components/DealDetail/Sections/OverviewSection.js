import React from "react";
import { View } from "react-native";
import Heading from "../../Heading";
import ReadMoreCard from "../../ReadMoreCard";
import PictureBreak from "../../PictureBreak";
import ProductStage from "../ProductStage";
import CarouselCustom from "../../CarouselCustom";

// Temporary facts

const entries = [
  {
    cardText: "Founded by world-renowned DJs: Ingrosso, Axwell and Alesso"
  },
  {
    cardText: "Earlier this morning, NYC"
  },
  {
    cardText: "White Pocket Sunset"
  },
  {
    cardText: "Acrocorinth, Greece"
  },
  {
    cardText: "Middle Earth, Germany"
  }
];

const OverviewSection = () => (
  <View>
    <Heading>SUMMARY</Heading>
    <ReadMoreCard
      linesShown={5}
      cardText={`Cocoon makes home security simple &amp; affordable for everyone. Founded by security experts, its unique Subsound® technology is named “the future of home security”. Backed by Aviva, it's had continual monthly growth &amp; protects homes around the world. Join the home security revolution!`}
    />

    <PictureBreak
      imageUrl="https://images.indiegogo.com/file_attachments/967916/files/20141029022335-Cocoon_Respecting_your_privacy.png"
    />

    <Heading>PRODUCT STAGE</Heading>

    <ProductStage growthStage="growth" />

    <Heading>Company facts</Heading>

    <CarouselCustom entries={entries} />

    <Heading>Investment terms</Heading>
    <ReadMoreCard
      linesShown={5}
      cardText={`N1CE will return $0.15 of every packaged unit of N1CE Frozen Cocktails sold anywhere in the world to investors (pro-rata), until 100% of your principal is returned plus 100% on top. N1CE will return $0.15 of every packaged unit of N1CE Frozen Cocktails sold anywhere in the world.`}
    />
  </View>
);

export default OverviewSection;
