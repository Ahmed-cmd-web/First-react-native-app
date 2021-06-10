/** @format */

import React, { useRef } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import Icon from "./Icon";
import Screen from "./Screen";
import * as imgpicker from "expo-image-picker";
import Imageinput from "./Imageinput";

const Imageinputlist = ({
  imageUris,
  onAddImage,
  onRemoveImage,
  istouched,
}) => {
  const selectimg = async () => {
    try {
      const result = await imgpicker.launchImageLibraryAsync({
        quality: 0.5,
        mediaTypes: imgpicker.MediaTypeOptions.Images,
      });
      if (!result.cancelled) {
        onAddImage(result.uri);
      }
    } catch (error) {
      alert(error);
    }
    istouched();
  };
  const ref = useRef()
  return (
    <View style={styles.con}>
      <ScrollView ref={ref} horizontal={true}  onContentSizeChange={()=>ref.current.scrollToEnd()} >
        {/* <FlatList</ScrollView>
        contentContainerStyle={{
          flexDirection: "row",
        }}
        data={imageUris}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item }) => (
          <Imageinput imageUri={item} onChangeImage={onRemoveImage} />
        )}
      /> */}
        {imageUris.map((item) => (
          <Imageinput
            imageUri={item}
            key={item}
            onChangeImage={onRemoveImage}
          />
        ))}
        <TouchableOpacity onPress={selectimg} style={{marginLeft:10}}>
          <Icon
            name={"camera"}
            color={colors.medium}
            bg={colors.light}
            size={100}
            radii={15}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Imageinputlist;

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    width: "100%",
  },
});
