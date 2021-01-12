import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Progress, ContentInfo, ImageDynamic } from "./components";
import Swipeable from "../Swipeable";

const Content = (props) => {
  return (
    <Swipeable
      divider={props.lastElem}
      container={styles.containerStyle}
      handleRemove={props.handleRemove}
      contentId={props.content.contentId}
    >
      <View style={styles.imageContainer}>
        <ImageDynamic source={props.content.thumbnail} />
      </View>

      <View style={styles.infoContainer}>
        <Title title={props.content.title} />
        <ContentInfo content={props.content} />
        <Progress progress={props.content.progress} />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 11,
    paddingTop: 11,
  },

  imageContainer: {
    borderColor: "#c7c7c757",
    borderWidth: 1,
    borderRadius: 3,
    padding: 2,
  },

  infoContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
});

export default Content;
