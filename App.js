import React, { Component } from 'react';
import AppLoading from 'expo-app-loading';

import loader from './load';
import Main from './view/Main';


class App extends Component {
    state = {}

    _onLoad = async () => {
        await loader.loadLibs();
    }

    _onFinish = async () => {
        this.setState({ isReady: true });
    }

    _onError = err => {
        this.setState({ err });
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._onLoad}
                    onFinish={this._onFinish}
                    onError={this._onError}
                />
            );
        }

        return (
            <Main />
        )
    }
}

export default App;