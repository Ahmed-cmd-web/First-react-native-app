/** @format */

import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Welcomescreen from "../screens/Welcomescreen";
import Loginscreen from "../screens/Loginscreen";
import Registerscreen from "../screens/Registerscreen";
import { useSelector, useDispatch } from "react-redux";
import Storage from "../auth/Storage";
import jwtDecode from "jwt-decode";
const Stack = createStackNavigator();

const Authnav = ({ isuser }) => {
  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcomescreen"
        component={Welcomescreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Register" component={Registerscreen} />
    </Stack.Navigator>
  );
};

export default Authnav;
