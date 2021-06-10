/** @format */

import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Listitem from "../components/Listitem";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";
import Messageform from "../components/Messageform";
const Listingdetails = (props) => {
  const {
    images,
    title,
    price,
    name,
    pic,
    listings,
    id,
  } = props.route.params.item;
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={styles.container2}
    >
      <View style={styles.container2}>
        <View style={styles.container3}>
          <Image
            uri={images[0].url}
            tint="light"
            preview={{ uri: images[0].thumbnailUrl }}
            style={styles.img}
          />
          <View
            style={{
              height: 50,
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text style={[styles.title, { fontSize: 25 }]}>{title}</Text>
            <Text
              style={[
                styles.title,
                { color: colors.secondary, fontWeight: "bold" },
              ]}
            >
              ${price}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Listitem
              name={"mosh hamedani"}
              pic={require("../assets/mosh.jpg")}
              listings={"5 listings"}
              chevronright={true}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Messageform id={id} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Listingdetails;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    width: "100%",
  },
  container3: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 20,
    flex: 1,
    paddingLeft: 20,
  },
  img: {
    width: "100%",
    height: 300,
    minHeight: 25,
    resizeMode: "stretch",
    marginBottom: 15,
    overflow: "hidden",
  },
});
