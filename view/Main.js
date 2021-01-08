import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import InputForm from '../components/InputForm';
import Preferences from '../components/Preferences';
import History from '../components/History';
import { Panel } from '../components/Custom';

import { // Actions
    handleInputUrl,
    handleDownload,
    handleSelect,
    handleRemoveItem,
    getHistoryList
} from '../store/actions';


class MainView extends Component {

    async componentDidMount() {
        await this.props.getHistoryList();
    }

    render() {
        return (
            <View style={styles.container}>
                <Panel>
                    <InputForm
                        handleInput={this.props.handleInputUrl}
                        handleSubmit={this.props.handleDownload}
                        value={this.props.inputUrl}
                    />
                </Panel>
                <Panel>
                    <Preferences
                        handleSelect={this.props.handleSelect}
                        settings={this.props.settings}
                    />
                </Panel>
                <Panel>
                    <History
                        handleRemove={this.props.handleRemoveItem}
                    />
                </Panel>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputUrl: state.main.inputUrl,
        settings: state.main.settings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputUrl: input => dispatch(handleInputUrl(input)),
        handleDownload: () => dispatch(handleDownload()),

        handleSelect: (opt, name) => dispatch(handleSelect(opt, name)),
        handleRemoveItem: () => dispatch(handleRemoveItem()),

        getHistoryList: () => dispatch(getHistoryList())
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(MainView);