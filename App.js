import React, { Component } from 'react';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';
import store from './store';

import loader from './load';
import Main from './view/Main';


class App extends Component {
    state = {}

    async componentDidMount() {
        await loader.loadLibs();
    }

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
            <Provider store={store()}>
                <Main />
            </Provider>
        )
    }
}

export default App;