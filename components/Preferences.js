import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';

import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';


const Preferences = props => {
    return (
        <View style={styles.container}>
            {options.map(option => (
                <View key={option.name} style={styles.dropDown}>
                    <DropDownPicker
                        items={option.items}
                        defaultValue={props.selected[option.name]}
                        onChangeItem={props.handleSelect}
                        containerStyle={styles.pickerContainer}
                        itemStyle={styles.item}
                        dropDownStyle={styles.dropDownStyle}
                    />
                </View>
            ))}
        </View>
    )
}

const options = [
    {
        name: 'quality',
        items: [
            { label: 'High Quality', value: 'high', icon: () => <IconMci name="quality-high" size={19} color="rgb(238,105,63)" /> },
            { label: 'Mid Quality', value: 'low', icon: () => <IconMci name="quality-medium" size={19} color="rgb(238,105,63)" /> },
        ]
    },
    {
        name: 'format',
        items: [
            { label: 'MP4 Video', value: 'mp4', icon: () => <IconMci name="video" size={19} color="rgb(238,105,63)" /> },
            { label: 'MP3 Audio', value: 'mp3', icon: () => <IconMat name="audiotrack" size={19} color="rgb(238,105,63)" /> },
        ]
    }
]

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingTop: 8,
        flexDirection: 'row',
    },
    dropDown: {
        width: '50%'
    },
    dropDownStyle: {
        backgroundColor: '#fafafa'
    },
    pickerContainer: {
        height: 40,
        paddingRight: 2,
        paddingLeft: 2
    },
    item: {
        justifyContent: 'flex-start'
    }
})

export default Preferences;