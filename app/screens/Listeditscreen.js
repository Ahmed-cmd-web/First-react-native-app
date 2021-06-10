/** @format */

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import Appform from "../components/Appform";
import Appformfield from "../components/Appformfield";
import Submitbutton from "../components/Submitbutton";
import colors from "../config/colors";
import Appformpicker from "../components/Appformpicker";
import Formimagepicker from "../components/Formimagepicker";
import * as Location from "expo-location";
import listings from "../api/listings";
import Loading from "../components/Loading";
import { set } from "react-native-reanimated";

const data = [
  {
    label: "furniture",
    id: 1,
    name: "floor-lamp",
    bg: "#fc5c65",
  },
  {
    label: "car",
    id: 2,
    name: "car",
    bg: "#fd9644",
  },
  {
    label: "Cameras",
    id: 3,
    name: "camera",
    bg: "#fed330",
  },
  {
    label: "Games",
    id: 4,
    name: "cards",
    bg: "#26de81",
  },
  {
    label: "Clothing",
    id: 5,
    name: "shoe-heel",
    bg: "#2bcbba",
  },
  {
    label: "Sports",
    id: 6,
    name: "basketball",
    bg: "#45aaf2",
  },
  {
    label: "Movies & music",
    id: 7,
    name: "headphones",
    bg: "#4b7bec",
  },
  {
    label: "books",
    id: 8,
    name: "book-open-variant",
    bg: "#a55eea",
  },
  {
    label: "other",
    id: 9,
    name: "application",
    bg: "#778ca3",
  },
];
const Listeditscreen = () => {
  const schema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().min(1).max(1000).required().label("Price").default(0),
    description: Yup.string().label("Description"),
    category: Yup.string().required().nullable().label("Category"),
    img: Yup.array()
      .min(1, "Please select at least 1 image")
      .max(3, "You can select no more than 3 images")
      .required()
      .nullable(),
  });

  const [loc, setloc] = useState(null);
  const [err, seterr] = useState(null);
  const [submitted, setsubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [deter, setdeter] = useState(true);
  const [mount, setmount] = useState(false);

  const getlocation = async () => {
    setmount(true);
    if (mount) {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          seterr("Permission to access location was denied");
          return;
        }
        var currentlocation = await Location.getCurrentPositionAsync();
        // let currentlocation = await Location.getLastKnownPositionAsync(); //faster than the one above but less accurate
      } catch (error) {
        console.log(error);
      }
      setloc(currentlocation);
      console.log(loc);
    }
    setmount(false);
  };
  useEffect(() => {
    getlocation();
  }, []);

  return (
    <Screen style={styles.container}>
      {!submitted ? (
        <Appform
          onSubmit={async (v) => {
            setsubmitted(true);
            setProgress(0);
            result = await listings.add(v, (x) => {
              if (x && x > 0) {
                setdeter(false);
                return setProgress(x);
              }
            });
            if (!result.ok) {
              setsubmitted(false);
              return alert("an error ocurred");
            } else {
              setsubmitted(true);
            }
          }}
          validationSchema={schema}
          initialValues={{
            title: "",
            description: "",
            price: "",
            category: null,
            img: [],
            location: loc,
            categoryId: null,
          }}
        >
          <Formimagepicker name={"img"} />
          <Appformfield
            placeholder={"Title"}
            autoCapitalize="words"
            autoCorrect={false}
            keyboardType="default"
            name="title"
          />
          <Appformfield
            placeholder={"Price"}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            name="price"
            maxLength={8}
            width={"30%"}
          />
          <Appformpicker
            items={data}
            placeholder={"category"}
            name="category"
          />
          <Appformfield
            placeholder={"Description (optional)"}
            autoCapitalize="sentences"
            autoCorrect={false}
            keyboardType="default"
            name="description"
            multiline={true}
          />
          <Submitbutton title="post" color={colors.primary} />
        </Appform>
      ) : (
        <Loading
          handlesubmit={() => setsubmitted(false)}
          progress={progress}
          deter={deter}
        />
      )}
    </Screen>
  );
};

export default Listeditscreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
