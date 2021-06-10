/** @format */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const Done = ({ handlesubmit }) => {
  return (
    <LottieView
      source={require("../animations/done.json")}
      autoPlay={true}
      loop={false}
      style={{ width: 150 }}
      onAnimationFinish={()=>handlesubmit(false)}
    />
  );
};

export default Done;

const styles = StyleSheet.create({});
