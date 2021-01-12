import React from 'react';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import { Input } from 'native-base';
import { Button } from 'native-base';


const InputForm = props => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Input
                    placeholder='Past video url'
                    onChangeText={props.handleInput}
                    value={props.value}
                    style={styles.input}
                />

                <Button
                    style={styles.button}
                    onPress={() => {
                        Keyboard.dismiss();
                        props.handleSubmit();
                    }}
                >
                    <Text style={styles.buttonText}>Download</Text>
                </Button>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 65
    },
    wrapper: {
        flexDirection: 'row',
        height: 45
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#c7c7c757',
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2
    },
    button: {
        borderRadius: 2,
        padding: 13,
        height: 45,
        backgroundColor: '#EE693F'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FCFDFE',
        fontWeight: '700'
    }
})

export default InputForm;