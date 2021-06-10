/** @format */

import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 35,
  color = "white",
  bg = "black",
  radii = size ,
  margin,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radii,
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: margin,
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={(size * 60) / 100}
        color={color}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
