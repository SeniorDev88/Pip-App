import React from "react";
import { View } from "react-native";
import Heading from "../../Heading";
import MediaLinks from "../../MediaLinks";
import RelatedArticles from "../../RelatedArticles";
import Video from "../../Video";

const mediaLinks = [
  {
    icon: 'facebook-square',
    link: 'https://facebook.com'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com'
  },
  {
    icon: 'google-plus',
    link: 'https://plus.google.com'
  },
  {
    icon: 'youtube-play',
    link: 'https://youtube.com'
  },
  {
    icon: 'instagram',
    link: 'https://instagram.com'
  },
  {
    icon: 'vimeo',
    link: 'https://vimeo.com'
  }
];

const relatedArticles = [
  {
    imgSrc: 'http://www.edudemic.com/wp-content/uploads/2015/04/21067187_36c1b9a1f7_z.jpg',
    title: 'How to put crowdfunding investments into your ISA',
    source: 'Financial Times',
    link: 'https://example.com',
    time: '3h',
    tag: 'Technology'
  },
  {
    imgSrc: 'http://idata.over-blog.com/5/50/92/71/sanghvi-ecocity.jpg',
    title: 'Sondor uses new funding equity to raise $500k',
    source: 'Tech Crunch',
    link: 'https://example.com',
    time: '4h',
    tag: 'Eco-Projects'
  }
];

export default function TeamSection() {
  return (
    <View>
      <Heading>Company video</Heading>
      <Video
        source="vimeo"
        id="203130947"
      />

      <Heading>Media links</Heading>
      <MediaLinks
        links={mediaLinks}
      />

      <Heading>Related articles</Heading>
      <RelatedArticles
        articles={relatedArticles}
      />
    </View>
  );
}

TeamSection.propTypes = {};

TeamSection.defaultProps = {};
