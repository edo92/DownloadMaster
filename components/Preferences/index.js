import React from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import options from './options';


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
            labelStyle={styles.labelStyle}
        />)}
    />
)



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
    },

    labelStyle: {
        fontSize: 15,
        textAlign: 'left',
        color: '#000',
    }
})


export default Preferences;