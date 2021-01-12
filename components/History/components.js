import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import IconMci from "react-native-vector-icons/MaterialCommunityIcons";
import AntdProgress from "@ant-design/react-native/lib/progress";
import helpers from "../../helpers/basic";

const dimentions = Dimensions.get("window");

/**
 * Simple helpers
 **/

export const Icon = (props) => {
  let iconStyle = props.style ? { ...props.style } : {};
  return (
    <IconMci
      style={(styles.icon, iconStyle)}
      name={props.name}
      size={22}
      color={props.color || "red"}
    />
  );
};

export const Show = (props) => (
  <View style={styles.flexRow}>
    <Text style={styles.label}>{props.label}</Text>
    {props.icon}
  </View>
);

export const Progress = (props) => {
  if (!props.progress) return <></>;

  return (
    <View style={styles.progressContainer}>
      <AntdProgress percent={props.progress} barStyle={styles.progress} />
    </View>
  );
};

export const ImageDynamic = ({ source }) => (
  <Image source={{ uri: source }} style={styles.image} />
);

/**
 * Component helpers
 **/

export const Title = (props) => {
  const longText = (str) => {
    if (str) {
      const { width, scale } = dimentions;
      const max = Math.round((width * 0.55) / 10) - scale;
      if (str.length < max) return str;
      return str.slice(0, max) + "...";
    } else return " asjdflalsdjf";
  };

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{longText(props.title)}</Text>
    </View>
  );
};

export const ContentInfo = (props) => (
  <View style={styles.contentInfo}>
    <Show label={"Source"} icon={<Icon name={"youtube"} />} />
    <Show
      label={helpers.capFirstChar(props.content.format)}
      icon={<Icon name={"video"} color="#EE693F" />}
    />
    <Show
      label={`${helpers.firstChar(props.content.quality)}Q`}
      icon={<Icon name={"quality-high"} color="#EE693F" />}
    />
  </View>
);

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },

  icon: {
    paddingLeft: 5,
  },

  progressContainer: {
    paddingTop: 10,
  },

  progress: {
    borderColor: "#ee693fd6",
  },

  contentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },

  label: {
    fontSize: 14,
    fontFamily: "sans-serif-bold",
    color: "#000",
  },

  title: {
    fontSize: 14,
    fontFamily: "sans-serif-bold",
    color: "#000",
  },

  titleContainer: {
    alignItems: "center",
  },

  image: {
    borderRadius: 2,
    width: Math.round(dimentions.width * 0.42),
    height: Math.round(dimentions.width * 0.25),
    resizeMode: "cover",
  },
});
