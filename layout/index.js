import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';


const Layout = props => {
    return (
        <View style={styles.container}>
            <Header title={'Download Master'} />

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
