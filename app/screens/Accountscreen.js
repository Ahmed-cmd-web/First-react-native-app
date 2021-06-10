/** @format */

import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Listitem from "../components/Listitem";
import Screen from "../components/Screen";
import Separator from "../components/Separator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { useNavigation } from "@react-navigation/native";
import routes from "../Navigation/routes";
import { useSelector, useDispatch } from "react-redux";
import Auth from "../auth/context";
import Storage from "../auth/Storage";
import useAuth from "../hooks/useAuth";

const Accountscreen = () => {
  const navigater = useNavigation();
  const data = [
    {
      title: "my listings",
      img: "format-list-bulleted",
      bg: colors.primary,
      size: 40,
    },
    {
      title: "my messages",
      img: "email",
      bg: colors.secondary,
      size: 40,
      onClick: () => navigater.navigate(routes.MESSAGES),
    },
  ];
  const { user, logout } = useAuth()
  const { name, email, iat, userId } = user;
  return (
    <Screen style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Listitem
          pic={require("../assets/mosh.jpg")}
          name={name}
          listings={email}
          chevronright={true}
        />
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(i) => i.title.toString()}
          renderItem={({ item }) => (
            <Listitem
              chevronright={true}
              Component={
                <Icon
                  name={item.img}
                  size={item.size}
                  bg={item.bg}
                  color="white"
                />
              }
              name={item.title}
              onpress={item.onClick}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
      </View>
      <View style={{ marginVertical: 30 }}>
        <Listitem
          Component={
            <Icon name={"logout"} size={40} bg={colors.third} color="white" />
          }
          onpress={()=>logout()}
          chevronright={true}
          name="log out"
        />
      </View>
    </Screen>
  );
};

export default Accountscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});
