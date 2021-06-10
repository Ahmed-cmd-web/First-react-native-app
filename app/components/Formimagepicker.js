/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import Imageinputlist from "./Imageinputlist";
import { useFormikContext } from "formik";

const Formimagepicker = ({ name }) => {
  const {
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
    values,
  } = useFormikContext();
  return (
    <View style={styles.con}>
      <Imageinputlist
        imageUris={values[name]}
        onAddImage={(e) => {
          setFieldValue(name, [...values[name], e]);
        }}
        istouched={() => setFieldTouched(name)}
        onRemoveImage={(e) => {
          // uris.splice(
          //   uris.findIndex((i) => i == e),
          //   1
          // );
          setFieldValue(
            name,
            values[name].filter((i) => i !== e)
          );
        }}
      />
      {errors[name] && touched[name] && (
        <Text style={{ fontSize: 18, color: "red", marginBottom: 10 }}>
          {errors[name]}
        </Text>
      )}
    </View>
  );
};

export default Formimagepicker;

const styles = StyleSheet.create({
  con: {
    width: "100%",
    marginBottom: 10,
  },
});
