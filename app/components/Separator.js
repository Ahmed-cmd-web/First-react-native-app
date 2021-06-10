/** @format */

import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const Separator = (props) => {
  return <View style={[styles.container, { marginVertical: props.margin }]} />;
};

export default Separator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
    marginVertical: 15,
  },
});
