import React, { Component } from 'react';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';
import store from './store';

import Main from './view/Main';
import Layout from './layout';
import loader from './load';

import Permissions from './helpers/permissions';
import { initDb } from './helpers/db';


initDb().then(() => {
    console.log('db connected')
})


class App extends Component {
    state = {}

    _onLoad = async () => {
        await Permissions.requestPermissions();
        await loader.loadLibs();
        this._warningOff();
    }

    _onFinish = async () => {
        this.setState({ isReady: true });
    }

    _onError = err => {
        this.setState({ err });
    }

    _warningOff = () => {
        console.warn = () => null;
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._onLoad}
                    onFinish={this._onFinish}
                    onError={this._onError}
                />
            )
        }

        return (
            <Provider store={store()}>
                <Layout>
                    <Main />
                </Layout>
            </Provider>
        )
    }
}

export default App;