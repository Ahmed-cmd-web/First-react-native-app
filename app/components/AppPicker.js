/** @format */

import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Screen from "./Screen";
import Category from "./Category";
import Separator from "./Separator";

const AppPicker = ({
  icon,
  items,
  placeholder = "type something...",
  selected,
  onselect,
  onShow,
  onDismiss,
  color,
  ...other
}) => {
  const [isvisible, setisvisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setisvisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={25}
              color={colors.medium}
            />
          )}
          <Text
            style={[styles.input, { color: color ? color : colors.medium }]}
          >
            {selected ? selected : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isvisible} onShow={onShow} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setisvisible(false)} />
          <FlatList
            
            data={items}
            keyExtractor={(i) => i.id.toString()}
            renderItem={({ item }) => (
              <Category
                label={item.label}
                name={item.name}
                bg={item.bg}
                size={80}
                onPress={() => {
                  setisvisible(false);
                  onselect([item.label,item.id]);
                }}
              />
            )}
            {...other}
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "50%",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 35,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    textTransform: "capitalize",
    fontSize: 18,
    flex: 1,
  },
});
