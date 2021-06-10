/** @format */

import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./AppPicker";
import Separator from "./Separator";

const Appformpicker = ({ name, items, placeholder }) => {
  const {
    errors,
    setFieldValue,
    setFieldTouched,
    touched,
    values,
  } = useFormikContext();
  return (
    <View style={{ marginBottom: 10 }}>
      <AppPicker
        items={items}
        placeholder={placeholder}
        onShow={() => setFieldTouched(name)}
        onselect={(item) => {
          setFieldValue(`${name}Id`, item[1]);
          return setFieldValue(name, item[0]);
        }}
        selected={values[name]}
        numColumns={3}
        horizontal={false}
        //ItemSeparatorComponent={Separator}
      />
      {errors[name] && touched[name] && (
        <Text style={{ fontSize: 18, color: "red", marginBottom: 10 }}>
          {errors[name]}
        </Text>
      )}
    </View>
  );
};

export default Appformpicker;

const styles = StyleSheet.create({});
