import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Form, Item } from 'native-base';
import DropdownPicker from './Picker';


const Preferences = props => {
    let opacity = props.onProgress ? 0.5 : 1;

    return (
        <View style={styles.container, { opacity }}>
            <Form style={styles.form}>

                {preferenceOptions.map(({ items, name }) => (
                    <Item key={name} style={styles.item} picker>
                        <DropdownPicker
                            {...props}
                            name={name} items={items}
                            value={props.selected[name]}
                        />
                    </Item>
                ))}
            </Form>
        </View>
    )
}

const preferenceOptions = [
    {
        name: 'quality',
        items: ['Highest Quality', 'Mid Quality']
    },
    {
        name: 'format',
        items: ['MP3', 'MP4']
    }
]

const styles = StyleSheet.create({
    constainer: {
        padding: 10,
        paddingTop: 20
    },
    form: {
        flexDirection: 'row',
        padding: 10
    },
    item: {
        width: '50%'
    }
})

export default Preferences;