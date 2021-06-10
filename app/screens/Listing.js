/** @format */

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { set } from "react-native-reanimated";
import listings from "../api/listings";
import Appbutton from "../components/Appbutton";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useApi from "../hooks/useApi";
import routes from "../Navigation/routes";

const Listing = ({ navigation }) => {
  // listings.add();
  const { listingsdata, err, loading, load } = useApi(listings.listings);
  useEffect(() => {
    load();
    
  }, []);
  
  // console.log(listingsdata);
  return (
    <Screen style={styles.container}>
      {err && (
        <>
          <Text>Connection timed out</Text>
          <Appbutton title="Retry" color={colors.primary} onPress={load} />
        </>
      )}
      {loading && <ActivityIndicator animating={loading} size={"large"} />}
      <FlatList
        data={listingsdata}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <Card
            src={item?.images[0]?.url}
            onPress={() =>
              navigation.navigate(routes.LISTING_DETAILS, { item })
            }
            title={item.title}
            subtitle={item.price}
            {...item}
          />
        )}
      />
    </Screen>
  );
};

export default Listing;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.light,
  },
});
