import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';


const CustomButton = ({ onProgress, onPress }) => {
    // style button based on status
    let status = onProgress ? 'buttonActive' : 'buttonInActive';
    let dynamicStyle = { ...styles.button, ...styles[status] };

    return (
        <Button disabled={onProgress} onPress={onPress} style={dynamicStyle}>
            <Text style={styles.buttonText}>Download</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '25%',
        padding: 13,
        height: 50.5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FCFDFE',
        fontWeight: '700'
    },

    buttonActive: {
        backgroundColor: '#f46d42b3'
    },
    buttonInActive: {
        backgroundColor: '#EE693F'
    }
})

export default CustomButton;