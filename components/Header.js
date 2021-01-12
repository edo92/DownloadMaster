import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 110,
    paddingTop: 60,
    backgroundColor: "#EE693F",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FCFDFE",
    fontSize: 18,
    fontFamily: "antfill",
  },
});

export default Header;
