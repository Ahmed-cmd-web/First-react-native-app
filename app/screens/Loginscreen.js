/** @format */

import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import * as Yup from "yup";
import Appformfield from "../components/Appformfield";
import Appform from "../components/Appform";
import Submitbutton from "../components/Submitbutton";
import login from "../api/login";
import JwtDecode from "jwt-decode";
import { date } from "yup/lib/locale";
import Storage from "../auth/Storage";
import jwtDecode from "jwt-decode";
import Auth from "../auth/context";
import useAuth from "../hooks/useAuth";
const Loginscreen = () => {
  const { Authlogin } = useAuth();
  const [vis, setvis] = useState(false);
  const schema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    pass: Yup.string().required().min(4).label("Password"),
  });

  const handlesubmit = async ({ email, pass }) => {
    const res = await login.login(email, pass);
    if (!res.ok) return setvis(true);
    setvis(false);
    Authlogin(res.data);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      {vis && (
        <Text
          style={{
            color: "red",
            fontSize: 20,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          Invalid eamil or password
        </Text>
      )}
      <Appform
        initialValues={{ email: "", pass: "" }}
        onSubmit={(v) => handlesubmit(v)}
        validationSchema={schema}
      >
        <Appformfield
          icon={"email"}
          placeholder={"Email"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          name="email"
        />
        <Appformfield
          icon={"lock"}
          placeholder={"Password"}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry={true}
          name="pass"
        />
        <Submitbutton title="login" color={colors.primary} />
      </Appform>
    </Screen>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
