/** @format */

import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Listitem from "../components/Listitem";
import Rightaction from "../components/Rightaction";
import Separator from "../components/Separator";
import Screen from "./../components/Screen";
const Messagescreen = () => {
  const mes = [
    {
      id: 1,
      desc: "t1",
      sub: "d1",
      img: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      desc: "t2",
      sub: "d2",
      img: require("../assets/mosh.jpg"),
    },
    {
      id: 3,
      desc: "t3",
      sub: "d3",
      img: require("../assets/mosh.jpg"),
    },
  ];
  const [message, setmessage] = useState(mes);
  const [refresh, setrefresh] = useState(false);
  const del = (m) => {
    const newmes = message.filter((i) => i.id !== m.id);
    setmessage(newmes);
    console.log(newmes);
  };

  return (
    <Screen style={styles.con}>
      <FlatList
        data={message}
        refreshing={refresh}
        onRefresh={() =>
          setmessage([
            {
              id: 3,
              desc: "t3",
              sub: "d3",
              img: require("../assets/mosh.jpg"),
            },
          ])
        }
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Listitem
            pic={item.img}
            name={item.desc}
            listings={item.sub}
            onpress={() => console.log(item)}
            rightaction={() => <Rightaction onPress={() => del(item)} />}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </Screen>
  );
};

export default Messagescreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
});
