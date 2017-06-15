import {
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const scale = value => Math.round((width / 750) * value);
export const scaleByVertical = value => Math.round((height / 1334) * value);

export default {
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
