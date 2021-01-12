import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Content from "./content";

const History = (props) => {
  const historyArr = Object.keys(props.history);
  const lastElem = Number(historyArr[historyArr.length - 1]);

  return (
    <View style={styles.container}>
      <FlatList
        data={historyArr}
        keyExtractor={(item) => item}
        renderItem={(content) => (
          <Content
            // if content is last element
            lastElem={content.index === lastElem}
            content={props.history[content.item]}
            handleRemove={props.handleRemove}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "65%",
    paddingTop: 75,
    paddingBottom: 50,
  },
});

export default History;
