/** @format */

import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Appform = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <View style={styles.con} >{children}</View>}
    </Formik>
  );
};

export default Appform;

const styles = StyleSheet.create({
  con: {
    
  }
});
