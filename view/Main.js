import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";

import Layout from "../components/Layout";
import InputForm from "../components/InputForm";
import Preferences from "../components/Preferences";
import History from "../components/History";

import {
  // Actions
  handleInputUrl,
  handleDownload,
  handleSelect,
  removeHistoryItem,
  getHistory,
  removeAlert,
} from "../store/actions";

class MainView extends Component {
  componentDidMount() {
    this.props.getHistory();
  }

  render() {
    return (
      <Layout alertMessage={this.props.alert} remove={this.props.removeAlert}>
        <View style={styles.container}>
          <InputForm
            handleInput={this.props.handleInputUrl}
            handleSubmit={this.props.handleDownload}
            value={this.props.inputUrl}
          />
          <Preferences
            handleSelect={this.props.handleSelect}
            settings={this.props.settings}
          />
          <History
            history={this.props.history}
            handleRemove={this.props.removeHistoryItem}
          />
        </View>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputUrl: state.main.inputUrl,
    settings: state.main.settings,
    history: state.main.history,
    alert: state.main.alertMessages[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputUrl: (input) => dispatch(handleInputUrl(input)),
    handleDownload: () => dispatch(handleDownload()),
    getHistory: () => dispatch(getHistory()),

    handleSelect: (opt, name) => dispatch(handleSelect(opt, name)),
    removeHistoryItem: (id) => dispatch(removeHistoryItem(id)),
    removeAlert: () => dispatch(removeAlert()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
