import React from "react";
import { StyleSheet, View } from "react-native";
import SwipeAction from "@ant-design/react-native/lib/swipe-action";

const Swipeable = (props) => {
  const right = props.right
    ? props.right
    : [
        {
          text: "Delete",
          onPress: () => props.handleRemove(props.contentId),
          style: styles.deleteBttn,
        },
      ];

  const divider = props.divider ? {} : styles.divider;
  const swipable = props.swipable ? props.swipable : styles.swipable;
  const container = props.container ? props.container : styles.container;

  return (
    <View style={[container, divider]}>
      <SwipeAction autoClose style={swipable} right={right}>
        <View style={styles.inner}>{props.children}</View>
      </SwipeAction>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  deleteBttn: {
    backgroundColor: "red",
    color: "#ffff",
    fontSize: 16,
    fontWeight: "700",
  },

  inner: {
    flexDirection: "row",
  },

  divider: {
    borderBottomColor: "#c7c7c757",
    borderBottomWidth: 1,
  },

  swipable: {
    backgroundColor: "transparent",
  },
});

export default Swipeable;
