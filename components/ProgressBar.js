import React, { PropTypes } from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    height: 15,
    borderRadius: 100,
    borderWidth: 1,
    marginHorizontal: 25,
    borderColor: "#eceff3",
    backgroundColor: "#f9f9fc"
  },
  incomplete: {
    backgroundColor: "transparent"
  },
  complete: {
    borderRadius: 100,
    backgroundColor: "#00ebc2"
  }
});

export default function ProgressBar({ completePercentage }) {
  const incompletePerc = Math.abs(completePercentage - 100);

  return (
    <View style={styles.container}>
      <View style={[styles.incomplete, { flex: completePercentage }]} />
      <View style={[styles.complete, { flex: incompletePerc }]} />
    </View>
  );
}

ProgressBar.propTypes = {
  completePercentage: PropTypes.number.isRequired
};
