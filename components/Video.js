import React, { PropTypes } from "react";
import { View, WebView, Dimensions } from "react-native";

const VIDEO_HEIGHT = (Dimensions.get('window').width * 9) / 16; // 16x9 aspect ratio
const styles = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
};

const render = (source, id) => {
  switch (source) {
    case 'youtube':
      return (
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${id}?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0` }}
          style={styles}
        />
      );
    case 'vimeo':
      return (
        <WebView
          source={{ uri: `https://player.vimeo.com/video/${id}` }}
          style={styles}
        />
      );
    default:
      return null;
  }
};

const Video = ({ source, id, style }) => (
  <View
    style={{
      height: VIDEO_HEIGHT,
      marginBottom: 30,
      ...style
    }}
  >
    { render(source, id) }
  </View>
);

Video.propTypes = {
  source: PropTypes.oneOf(['youtube', 'vimeo']).isRequired,
  id: PropTypes.string.isRequired,
  style: View.propTypes.style
};

Video.defaultProps = {
  style: {}
};

export default Video;
