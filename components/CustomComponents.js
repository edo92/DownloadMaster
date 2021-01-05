import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button } from 'native-base';

import Progress from '@ant-design/react-native/lib/progress';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import Helpers from '../helpers';


export const Show = props => (
    <View style={styles.flexRow}>
        <Text style={styles.font700}>{props.label}</Text>
        {props.icon}
    </View>
)

export const Icon = props => {
    let iconStyle = props.style ? { ...props.style } : {};
    return (
        <IconMci style={styles.icon, iconStyle}
            name={props.name} size={21} color={props.color || 'red'}
        />
    )
}

export const CustomButton = ({ onPress }) => {
    return (
        <Button onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>Download</Text>
        </Button>
    )
}

export const ProgressBar = props => (
    <View style={styles.progressContainer}>
        <Progress
            percent={Math.floor(props.progress)}
            barStyle={styles.progress || 0}
        />
    </View>
)


const styles = StyleSheet.create({
    icon: {
        paddingLeft: 5
    },

    flexRow: {
        flexDirection: 'row'
    },
    font700: {
        fontWeight: '700'
    },

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

    progressContainer: {
        padding: 10
    },
    progress: {
        borderColor: '#ee693fd6',
    }
})