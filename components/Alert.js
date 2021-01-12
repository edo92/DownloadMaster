import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import NoticeBar from "@ant-design/react-native/lib/notice-bar";

const NotifyContainer = (props) => {
  const style = Platform.OS === "ios" ? { zIndex: 100 } : {};
  return <View style={style}>{props.children}</View>;
};

class AlertNotify extends Component {
  componentDidUpdate() {
    setTimeout(() => {
      // Remove err notification
      this.props.remove();
    }, 12000);
  }

  render() {
    if (!this.props.alert) return <></>;

    return (
      <NotifyContainer>
        <View style={styles.wrapper}>
          <NoticeBar
            style={styles.notifyBar}
            mode="closable"
            onPress={this.props.remove}
          >
            {this.props.alert}
          </NoticeBar>
        </View>
      </NotifyContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  wrapper: {
    position: "absolute",
    width: "100%",
  },
  notifyBar: {
    backgroundColor: "#ee693f4a",
    borderWidth: 0.5,
    borderColor: "red",
    height: 45,
  },
});

export default AlertNotify;
