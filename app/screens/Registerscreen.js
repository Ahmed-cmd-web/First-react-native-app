/** @format */

import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Appform from "../components/Appform";
import Appformfield from "../components/Appformfield";
import * as Yup from "yup";
import LottieView from "lottie-react-native";
import Screen from "../components/Screen";
import Appbutton from "../components/Appbutton";
import colors from "../config/colors";
import Submitbutton from "../components/Submitbutton";
import register from "../api/register";
import useAuth from "../hooks/useAuth";
import login from "../api/login";
import Spinner from "react-native-loading-spinner-overlay";
import useApi from "../hooks/useApi";

const Registerscreen = () => {
  const [vis, setvis] = useState(false);
  const regapi = useApi(register.register);
  const loginapi = useApi(login.login);
  const { Authlogin } = useAuth();
  const [err, seterr] = useState();
  const schema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    pass: Yup.string().required().min(5).label("Password"),
  });
  const handlesubmit = async ({ name, email, pass }) => {
    try {
      const res = await regapi.load(email, pass, name);
      if (!res.ok) {
        setvis(true);

        if (res.data) {
          return seterr(res.data.error);
        } else {
          return seterr("an error ocurred");
        }
      }
      setvis(false);
      const data = await loginapi.load(email, pass);
      Authlogin(data.data);
    } catch (error) {
      console.log(error);
    }
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
          {err}
        </Text>
      )}

      <View>
        {(regapi.loading || loginapi.loading) && (
          <Spinner
            visible={true}
            customIndicator={
              <LottieView
                source={require("../animations/finalloader.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 500 }}
              />
            }
            color={"white"}
          />
        )}
      </View>

      <Appform
        initialValues={{ name: "", email: "", pass: "" }}
        onSubmit={(v) => handlesubmit(v)}
        validationSchema={schema}
      >
        <Appformfield
          icon={"account"}
          placeholder={"Name"}
          autoCapitalize={"words"}
          autoCorrect={false}
          keyboardType="default"
          textContentType="name"
          name="name"
        />
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
        <Submitbutton title={"Register"} color={colors.primary} />
      </Appform>
    </Screen>
  );
};

export default Registerscreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 40,
  },
});
