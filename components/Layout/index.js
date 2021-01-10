import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../Header';
import AlertNotify from '../Alert';


const Layout = props => {
    return (
        <View style={styles.container}>
            <Header title={'Download Master'} />

            <AlertNotify
                alert={props.alertMessage}
                remove={props.remove}
            />

            <View styles={styles.innerContainer}>
                {props.children}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    innerContainer: {
    }
})

export default Layout;
