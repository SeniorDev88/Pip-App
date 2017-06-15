import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../../constants/Colors";

const { width: viewportWidth } = Dimensions.get(
  "window"
);

const itemHorizontalMargin = 15;

export const sliderWidth = viewportWidth;
export const itemWidth = viewportWidth;

const entryBorderRadius = 5;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    paddingHorizontal: itemHorizontalMargin,
    alignItems: 'center'
  },
  // image's border radius is buggy on ios; let's hack it!
  radiusMask: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: "white"
  }
});
