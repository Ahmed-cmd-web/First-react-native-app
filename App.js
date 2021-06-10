/** @format */
import React, { useState } from "react";
import { Button, Image, TouchableOpacity, View } from "react-native";
import Welcomescreen from "./app/screens/Welcomescreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import Listingdetails from "./app/screens/Listingdetails";
import Messagescreen from "./app/screens/Messagescreen";
import Accountscreen from "./app/screens/Accountscreen";
import colors from "./app/config/colors";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import Listitem from "./app/components/Listitem";
import Listing from "./app/screens/Listing";
import Apptinput from "./app/components/Apptinput";
import AppPicker from "./app/components/AppPicker";
import Registerscreen from "./app/screens/Registerscreen";
import Listeditscreen from "./app/screens/Listeditscreen";
import * as imgpicker from "expo-image-picker";
import Imageinput from "./app/components/Imageinput";
import Imageinputlist from "./app/components/Imageinputlist";
import Formimagepicker from "./app/components/Formimagepicker";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Authnav from "./app/Navigation/Authnav";
import Bottomtabs from "./app/Navigation/Appnav";
import Netinfo, { useNetInfo } from "@react-native-community/netinfo";
import Navtheme from "./app/Navigation/Navtheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Offline from "./app/components/Offline";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import Storage from "./app/auth/Storage";
import jwtDecode from "jwt-decode";
import Auth from "./app/auth/context";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setuser] = useState();
  const [ready, setready] = useState(false);
  const restore = async () => {
    try {
      const token = await Storage.getUser();
      if (token) return setuser(token);
    } catch (error) {
      console.log(error);
    }
  };
  if (!ready)
    return (
      <AppLoading
        startAsync={restore}
        onError={(err) => console.log(err)}
        onFinish={() => setready(true)}
      />
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Auth.Provider value={{ user, setuser }}>
        <Offline />
        <NavigationContainer theme={Navtheme}>
          {user ? (
            <Bottomtabs isuser={(v) => setuser(v)} />
          ) : (
            <Authnav isuser={(v) => setuser(v)} />
          )}
        </NavigationContainer>

        {/* <Listeditscreen /> */}
        {/* <Imageinputlist
        imageUris={uris}
        onAddImage={(e) => seturis([...uris, e])}
        onRemoveImage={(e) => {
          // uris.splice(
            //   uris.findIndex((i) => i == e),
            //   1
            // );
            
            seturis(uris.filter((i) => i !== e));
          }}
        /> */}
        {/* <Formimagepicker /> */}
        {/* <Imageinput
        imageUri={img}
        onChangeImage={(uri) => setimg(uri)}
      /> */}

        {/* <Registerscreen /> */}
        {/* <Loginscreen /> */}
        {/* <Apptinput
        icon='email'
        placeholder='example@gmail.com'
        
      /> */}
        {/* <Listing /> */}
        {/* <Listitem
        Component={<Icon name="email" size={50} bg="red" color="white" />}
        name={"my listing"}
        chevronright={true}
      /> */}
        {/* <Card
        title="Red jacket for sale!"
        subtitle="150"
        src={require("./app/assets/jacket.jpg")}
        />
        <Card
        title="Red jacket for sale! "
        subtitle="150"
        src={require("./app/assets/jacket.jpg")}
      /> */}

        {/* <Listingdetails
        title="Red jacket for sale! "
        subtitle="150"
        src={require("./app/assets/jacket.jpg")}
        name="mosh hamedani"
        pic={require("./app/assets/mosh.jpg")}
        listings={5}
      /> */}
        {/* <Welcomescreen /> */}
        {/* <Messagescreen /> */}
      </Auth.Provider>
    </View>
  );
}
