/** @format */

import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Screen from "./Screen";
import * as imgpicker from "expo-image-picker";
import Icon from "./Icon";
import colors from "../config/colors";
const Imageinput = ({ imageUri, onChangeImage }) => {
  const getpermission = async () => {
    const { granted } = await imgpicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("not allowed");
    }
  };
  useEffect(() => {getpermission()}, []);
  return (
    <TouchableOpacity
      style={styles.con}
      onPress={(e) => {
        Alert.alert("Delete", "Are you sure you want to delete this image?", [
          { text: "Yes", onPress: (e) => onChangeImage(imageUri) },
          { text: "No" },
        ]);
      }}
    >
      <Image
        source={{ uri: imageUri }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 15,
          marginHorizontal: 5,
        }}
      />
    </TouchableOpacity>
  );
};

export default Imageinput;

const styles = StyleSheet.create({
  con: {
    
  },
});
