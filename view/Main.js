import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import InputForm from '../components/InputForm';
import Progress from '../components/Progress';
import Preferences from '../components/Preferences';
import ViewContainer from '../components/ViewContainer';

import Permissions from '../helpers/permissions';
import { setPermissionStatus } from '../store/actions';

import { // store actions
    handleInputUrl,
    handleSubmit,
    handleSelect
} from '../store/actions';


class MainView extends Component {

    async componentDidMount() {
        await this.requestPermissions();
    }

    async requestPermissions() {
        const status = await Permissions.requestPermissions(Platform.OS);
        this.props.setPermissionStatus(status);
    }

    render() {
        return (
            <ViewContainer>
                <Header title='Download Master' />

                <InputForm {...this.props} />

                <Progress percent={this.props.progress} />

                <Preferences {...this.props} />

            </ViewContainer>
        )
    }
}
const mapStateToProps = state => {
    return {
        inputUrl: state.main.inputUrl,
        selected: state.main.selected,
        progress: state.main.progress.downloaded,
        onProgress: state.main.onProgress,
        permissions: state.main.permissions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPermissionStatus: st => dispatch(setPermissionStatus(st)),
        handleInputUrl: input => dispatch(handleInputUrl(input)),
        handleSelect: opts => dispatch(handleSelect(opts)),
        handleSubmit: () => dispatch(handleSubmit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);