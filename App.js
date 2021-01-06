import React, { Component } from 'react';
import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux';
import store from './store';

import Main from './view/Main';
import Layout from './layout';

import loader from './load';
import { initDb, fetchList } from './helpers/db';


initDb().then(async () => {
    let test = await fetchList();
    console.log('test', test)
}).catch(err => {
    console.log('db error', err)
})


class App extends Component {
    state = {}

    async componentDidMount() {
    }

    _onLoad = async () => {
        await loader.loadLibs();
        // await Permissions.requestPermissions();
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