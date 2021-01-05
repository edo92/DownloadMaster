import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'native-base';
import { CustomButton } from './CustomComponents';


const InputForm = props => (
    <View style={styles.container}>
        <View style={styles.wrapper}>

            <Input placeholder='past video url'
                style={styles.input}
                disabled={props.onProgress}
                onChangeText={props.handleInputUrl}
                value={props.inputUrl}
            />

            <CustomButton
                onPress={props.handleSubmit}
                onProgress={props.onProgress}
            />

        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: 65,
        paddingBottom: 13
    },
    wrapper: {
        flexDirection: 'row',
        padding: 10,
        height: 50
    },

    input: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#c7c7c757'
    },

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

export default InputForm;