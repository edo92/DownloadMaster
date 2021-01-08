import React from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import options from './options';


// Map options list
const PreferencesMenu = props => (
    <View style={styles.container}>
        {options.map(option => (
            <props.component key={option.name} option={option} />
        ))}
    </View>
)

const Preferences = props => {
    return (
        <PreferencesMenu component={({ option }) => (
            <DropDownPicker
                items={option.items}
                defaultValue={props.settings[option.name]}

                onChangeItem={(selected) => {
                    props.handleSelect({
                        value: selected.value,
                        name: option.name
                    })
                }}

                dropDownStyle={styles.dropdownPicker}
                labelStyle={styles.labelStyle}
                containerStyle={[
                    styles.pickerContainer,
                    option.style
                ]}
            />)}
        />
    )
}



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