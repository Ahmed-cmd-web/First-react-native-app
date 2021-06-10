/** @format */

import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import Screen from "./Screen";
import Constants from "expo-constants";
const Offline = () => {
  const net = useNetInfo();

  
  if (net.type !== "unknown" && net.isInternetReachable === false)
    return (
      <Screen style={styles.con}>
        <Text style={{ color: "white", fontSize: 18 }}>
          No Internet Connection
        </Text>
      </Screen>
    );

  return null;
};

export default Offline;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 99,
    marginTop:Constants.statusBarHeight
  },
});
