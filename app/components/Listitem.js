/** @format */
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
const Listitem = (props) => {
  return (
    <Swipeable
      renderRightActions={props.rightaction ? props.rightaction : false}
    >
      <TouchableHighlight
        style={styles.con}
        onPress={props.onpress}
        underlayColor={colors.light}
      >
        <View style={styles.container}>
          {props.pic ? (
            <Image source={props.pic} style={styles.pic} />
          ) : (
            props.Component
          )}
          <View style={styles.info}>
            <Text numberOfLines={1} style={styles.title}>
              {props.name}
            </Text>
            {props?.listings && (
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{ color: "gray", fontSize: 18 }}
              >
                {props?.listings}
              </Text>
            )}
          </View>
          {props.chevronright && (
            <MaterialCommunityIcons name="chevron-right" size={25} />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default Listitem;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    height: 90,
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    padding: "5%",
    alignItems: "center",
  },
  pic: {
    width: 70,
    height: 70,
    borderRadius: 999,
    resizeMode: "contain",
  },
  info: {
    paddingLeft: 10,
    alignSelf: "center",
    flex: 1,
  },
  title: {
    textTransform: "capitalize",
    fontSize: 20,
    fontWeight: "400",
    bottom: 5,
    maxWidth: 200,
  },
});
