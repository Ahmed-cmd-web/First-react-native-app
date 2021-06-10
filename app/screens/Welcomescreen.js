/** @format */

import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import Appbutton from "../components/Appbutton";
import routes from "../Navigation/routes";
const Welcomescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={Platform.OS === "android" ? 4 : 10}
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.logo}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logoimg}
          />
          <Text style={styles.text}>Sell What You Don't Need </Text>
        </View>
        <View style={styles.buttoncon}>
          <Appbutton
            color={colors.primary}
            onPress={() => navigation.navigate(routes.LOGIN_FORM)}
            title="login"
          />
          <Appbutton
            color={colors.secondary}
            onPress={() => navigation.navigate(routes.REGISTERATION_FORM)}
            title="register"
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  buttoncon: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
    paddingHorizontal:20,
  },
  logo: {
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: 90,
    flex: 1,
  },
  text: {
    color: "black",
    flexWrap: "nowrap",
    fontSize: 25,
    fontWeight: "600",
    top: 20,
  },
  logoimg: {
    width: 100,
    height: 100,
  },
});

export default Welcomescreen;
