/** @format */
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stacknav from "./Feednav";
import Listeditscreen from "../screens/Listeditscreen";
import Stacknav2 from "./Accountnav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Icon from "../components/Icon";
import { useSelector, useDispatch } from "react-redux";
import Storage from "../auth/Storage";
import jwtDecode from "jwt-decode";
import * as MediaLibrary from "expo-media-library";
import * as Notifications from "expo-notifications";
import registernotifications from "../api/expopushnotifications";
import expopushnotifications from "../api/expopushnotifications";

const Bottomtab = createBottomTabNavigator();
const Bottomtabs = ({ isuser }) => {
  // useEffect(() => {
  //   registerfornotifications();
  // }, []);

  // const registerfornotifications = async () => {
  //   try {
  //     const res = await Notifications.requestPermissionsAsync();
  //     if (!res.granted) return;
  //     const token = await Notifications.getExpoPushTokenAsync();
  //     expopushnotifications.registernotifications(token.data);
  //     console.log(token.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Bottomtab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
      }}
    >
      <Bottomtab.Screen
        name="Feed"
        component={Stacknav}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Bottomtab.Screen
        name="edit"
        component={Listeditscreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props}>
              <Icon name="plus-circle" bg="tomato" size={60} />
            </TouchableOpacity>
          ),
        }}
      />

      <Bottomtab.Screen
        name="Account"
        component={Stacknav2}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Bottomtab.Navigator>
  );
};

export default Bottomtabs;
