/** @format */

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Accountscreen from "../screens/Accountscreen";
import Messagescreen from "../screens/Messagescreen";

const Stack = createStackNavigator();

const Stacknav2 = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Accountscreen} />
    <Stack.Screen name="messages" component={Messagescreen} />
  </Stack.Navigator>
);

export default Stacknav2;
