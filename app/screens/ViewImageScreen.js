/** @format */

import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.placeholderscon}>
        <MaterialCommunityIcons name="close" color="white" size={35} />

        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      {/* <Image source={require("../assets/chair.jpg")} style={styles.img} /> */}
      <StatusBar barStyle={"light-content"} translucent={false} />
    </SafeAreaView>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  placeholders: {
    width: 50,
    height: Platform.OS === "android" ? "100%" : 50,
    color: "white",
  },
  placeholderscon: {
    flex: 0.05,
    width: "85%",
    position: "absolute",
    top: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    resizeMode: "stretch",
    width: "100%",
    maxHeight: "100%",
    flex: 0.7,
  },
});
