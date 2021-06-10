/** @format */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const Category = (props) => {
  return (
    <TouchableOpacity style={styles.con} onPress={props.onPress}>
      <Icon name={props.name} bg={props.bg} size={props.size} />
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  con: {
    padding: 20,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    top: 5,
    flexWrap: "wrap",
    maxWidth: "95%",
    textAlign: "center",
  },
});
