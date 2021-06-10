/** @format */

import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Appbutton from "./Appbutton";

const Submitbutton = ({ title, color }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={styles.con}>
      <Appbutton title={title} color={color} onPress={handleSubmit} />
    </View>
  );
};

export default Submitbutton;

const styles = StyleSheet.create({
  con: {
    
  },
});
