import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputForm from '../components/InputForm';
import Preferences from '../components/Preferences';
import History from '../components/History';
import { Panel } from '../components/Custom';


const MainView = () => {
    return (
        <View style={styles.container}>
            <Panel><InputForm /></Panel>
            <Panel><Preferences /></Panel>
            <Panel><History /></Panel>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default MainView;