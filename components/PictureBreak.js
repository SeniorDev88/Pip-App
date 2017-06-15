import React, { PropTypes } from "react";
import FitImage from 'react-native-fit-image';
import { Image } from 'react-native';

export default function PictureBreak({ imageUrl, style }) {
  return (
    <FitImage
      style={{
        marginBottom: 60,
        ...style
      }}
      source={{ uri: imageUrl }}
    />
  );
}

PictureBreak.propTypes = {
  imageUrl: PropTypes.string,
  style: Image.propTypes.style
};

PictureBreak.defaultProps = {
  imageUrl: "https://images.indiegogo.com/file_attachments/967916/files/20141029022335-Cocoon_Respecting_your_privacy.png",
  style: {}
};
