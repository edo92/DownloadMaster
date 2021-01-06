import React from 'react';
import { StyleSheet, View } from 'react-native';


export const Panel = props => (
    <View style={styles.panelContainer}>
        {props.children}
    </View>
)


const styles = StyleSheet.create({
    panelContainer: {
        paddingTop: 10
    }
})