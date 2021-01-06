import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputForm from '../components/InputForm';
import Preferences from '../components/Preferences';
import History from '../components/History';


const MainView = () => {
    return (
        <View style={styles.container}>
            <InputForm />
            <Preferences />
            <History />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default MainView;