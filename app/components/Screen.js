/** @format */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";
const Screen = (props) => {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <View style={props.style}>
        <StatusBar barStyle="dark-content" />

        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight - 20,
    flex: 1,
  },
});
