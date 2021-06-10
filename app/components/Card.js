/** @format */

import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
const Card = (props) => {
  const { thumbnailUrl } = props.images[0];
  const navigator = useNavigation();
  return (
    <TouchableOpacity style={styles.container2} onPress={props.onPress}>
      <Image
        uri={props.src}
        preview={{ uri: thumbnailUrl }}
        tint="light"
        style={styles.img}
      />
      <Text
        ellipsizeMode="tail"
        numberOfLines={3}
        adjustsFontSizeToFit={true}
        style={[styles.title, { fontSize: 25 }]}
      >
        {props.title}
      </Text>
      <Text
        style={[styles.title, { color: colors.secondary, fontWeight: "bold" }]}
      >
        ${props.subtitle}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container2: {
    height: 300,
    width: "100%",

    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    color: "black",
    fontSize: 20,
    flex: 0.2,
    paddingLeft: 20,
    flexWrap: "wrap",
  },
  img: {
    width: "100%",
    flex: 0.7,
    resizeMode: "stretch",
    marginBottom: 15,
  },
});
