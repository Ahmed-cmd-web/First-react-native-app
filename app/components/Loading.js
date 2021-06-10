/** @format */

import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import listings from "../api/listings";
import Done from "./Done";
import Screen from "./Screen";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

const Loading = ({ handlesubmit, progress, deter }) => {
  return (
    <Modal>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            width={200}
            indeterminate={deter}
            height={5}
            color={colors.primary}
          />
        ) : (
          <Done handlesubmit={(x) => handlesubmit(x)} />
        )}
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({});
