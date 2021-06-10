/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Appbutton = (props) => {
  const { title, color } = props;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, { backgroundColor: color, borderColor: color }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Appbutton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 55,
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
