/** @format */

import React, { createRef, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Apptinput = ({
  icon,
  width,
  placeholder = "type something...",
  clear,
  ...other
}) => {
  const text = createRef();
  useEffect(() => {
    text.current?.clear();
  }, [clear]);
  return (
    <View style={[styles.container, { width: width ? width : "100%" }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={30}
          color={colors.medium}
        />
      )}
      <TextInput
        ref={text}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.medium}
        {...other}
      />
    </View>
  );
};

export default Apptinput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 35,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 18,
    width: "100%",
    color: colors.medium,
  },
});
