import React from "react";
import { StyleSheet, View, Platform, Text } from "react-native";

import options from "./options";
import helpers from "../../helpers/basic";

import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Map options list
const PreferencesMenu = (props) => {
  const contStyle = Platform.OS === "ios" && styles.containerIos;

  return (
    <View style={[styles.container, contStyle]}>
      {options.map((option) => (
        <props.component key={option.name} option={option} />
      ))}
    </View>
  );
};

const Placeholder = (props) => {
  const contStyle = Platform.OS === "ios" && { paddingTop: 7 };
  const pushLeft = { paddingLeft: 7 };

  return (
    <View style={[styles.pickerPlaceholder, contStyle]}>
      <Icon name="source-branch" size={19} color="rgb(238,105,63)" />
      <Text style={[styles.labelStyle, pushLeft]}>
        {`Select ${helpers.capFirstChar(props.name)}`}
      </Text>
    </View>
  );
};

const Preferences = (props) => {
  return (
    <PreferencesMenu
      component={({ option }) => (
        <DropDownPicker
          items={option.items}
          placeholder={<Placeholder name={option.name} />}
          defaultValue={props.settings[option.name]}
          onChangeItem={(selected) => {
            props.handleSelect({
              value: selected.value,
              name: option.name,
            });
          }}
          dropDownStyle={styles.dropdownPicker}
          labelStyle={styles.labelStyle}
          containerStyle={[styles.pickerContainer, option.style]}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
  },

  containerIos: {
    zIndex: 10,
  },

  pickerContainer: {
    height: 40,
    width: "50%",
  },

  dropdownPicker: {
    backgroundColor: "#fafafa",
  },

  pickerPlaceholder: {
    flexDirection: "row",
  },

  labelStyle: {
    fontSize: 15,
    textAlign: "left",
    color: "#000",
  },
});

export default Preferences;
