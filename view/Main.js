import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import InputForm from '../components/InputForm';
import Preferences from '../components/Preferences';
import History from '../components/History';

import { // Actions
    handleInputUrl,
    handleDownload,
    handleSelect,
    handleRemoveItem,
    getHistoryList
} from '../store/actions';


class MainView extends Component {

    // async componentDidMount() {
    //     await this.props.getHistoryList();
    // }

    render() {
        return (
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
                    handleRemove={this.props.handleRemoveItem}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputUrl: state.main.inputUrl,
        settings: state.main.settings,
        history: state.main.history
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputUrl: input => dispatch(handleInputUrl(input)),
        handleDownload: () => dispatch(handleDownload()),

        handleSelect: (opt, name) => dispatch(handleSelect(opt, name)),
        handleRemoveItem: (id) => dispatch(handleRemoveItem(id)),

        getHistoryList: () => dispatch(getHistoryList())
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MainView);