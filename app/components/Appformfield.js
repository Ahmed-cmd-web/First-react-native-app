/** @format */

import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Apptinput from "../components/Apptinput";

const Appformfield = ({ name, width, ...other }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <View style={styles.con}>
      <Apptinput
        width={width}
        {...other}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      {errors[name] && touched[name] && (
        <Text style={{ fontSize: 18, color: "red", marginBottom: 10 }}>
          {errors[name]}
        </Text>
      )}
    </View>
  );
};

export default Appformfield;

const styles = StyleSheet.create({
  con: {
    marginBottom: 10,
    position: "relative",
  },
});
