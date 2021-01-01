import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'native-base';


const CustomButton = ({ onPress }) => {
    return (
        <Button onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Download</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '25%',
        padding: 13,
        height: 50.5,
        backgroundColor: '#EE693F'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FCFDFE',
        fontWeight: '700'
    },
})

export default CustomButton;