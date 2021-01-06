import React from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

//
const settings = {
    format: 'mp4',
    quality: 'high'
}

// Map options list
const PreferencesMenu = props => (
    <View style={styles.container}>
        {options.map(option => (
            <props.component key={option.name} option={option} />
        ))}
    </View>
)

const Preferences = () => (
    <PreferencesMenu component={({ option }) => (
        <DropDownPicker
            items={option.items}
            defaultValue={settings[option.name]}
            onChangeItem={() => console.log('selected')}
            containerStyle={{ ...styles.pickerContainer, ...option.style }}
            dropDownStyle={styles.dropdownPicker}
        />)}
    />
)


const options = [
    {
        name: 'quality',
        style: {
            paddingRight: 2
        },
        items: [
            { label: 'High Quality', value: 'high' },
            { label: 'Mid Quality', value: 'low' },
        ]
    },
    {
        name: 'format',
        style: {
            paddingLeft: 2
        },
        items: [
            { label: 'MP4 Video', value: 'mp4' },
            { label: 'MP3 Audio', value: 'mp3' }
        ]
    }
]


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },

    pickerContainer: {
        height: 40,
        width: '50%',
    },

    dropdownPicker: {
        backgroundColor: '#fafafa',
    }
})


export default Preferences;