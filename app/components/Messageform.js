/** @format */

import React, { createRef, forwardRef, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import messages from "../api/messages";
import colors from "../config/colors";
import Appbutton from "./Appbutton";
import Apptinput from "./Apptinput";
import * as Notifications from "expo-notifications";
const Messageform = ({ id }) => {
  const [mes, setmes] = useState();
  const [clear, setclear] = useState(false);
  const localnotifications = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Your message was sent",
      },
      trigger: null,
    });
  };
  const handlesubmit = async (message, id) => {
    try {
      const res = await messages.messages(message, id);
      if (!res.ok) return Alert.alert(res.data.error);
      Keyboard.dismiss();
        setclear(true);
        setclear(false)
      return localnotifications();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.con}>
      <Apptinput
        placeholder={"Message..."}
        onChangeText={(v) => {
          setmes(v);
        }}
        clear={clear}
      />
      <Appbutton
        title={"contact seller"}
        color={colors.primary}
        onPress={() => handlesubmit(mes, id)}
      />
    </View>
  );
};

export default Messageform;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 20,
    justifyContent: "space-evenly",
  },
});
