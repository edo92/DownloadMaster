import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import InputForm from '../components/InputForm';
import Progress from '../components/Progress';
import Preferences from '../components/Preferences';
import ViewContainer from '../components/ViewContainer';

import { // store actions
    handleInputUrl,
    handleSubmit,
    handleSelect
} from '../store/actions';


const MainView = props => (
    <ViewContainer>
        <Header title='Download Master' />

        <InputForm {...props} />

        <Progress percent={props.progress} />

        <Preferences {...props} />

    </ViewContainer>
)

const mapStateToProps = state => {
    return {
        selected: state.main.selected,
        progress: state.main.progress.downloaded,
        onProgress: state.main.onProgress
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputUrl: input => dispatch(handleInputUrl(input)),
        handleSelect: opts => dispatch(handleSelect(opts)),
        handleSubmit: () => dispatch(handleSubmit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);