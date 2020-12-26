import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Form, Item } from 'native-base';
import DropdownPicker from './Picker';


const Preferences = props => {
    return (
        <View style={styles.container, { opacity: props.onProgress ? 0.5 : 1 }}>
            <Form style={styles.form}>

                {preferenceOptions.map(({ items, name }) => (
                    <Item key={name} style={styles.item} picker>
                        <DropdownPicker
                            {...props}
                            name={name} items={items}
                            value={props.selected.quality}
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
        items: ['High Quality', 'Mid Quality']
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