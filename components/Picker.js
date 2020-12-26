import React from 'react';
import { Picker } from 'native-base';


const DropdownPicker = props => {
    return (
        <Picker
            disabled={props.onProgress}
            enabled={!props.onProgress}
            mode='dropdown'
            placeholderIconColor='#007aff'
            placeholderStyle={{ color: '#bfc6ea' }}
            selectedValue={props.value}
            placeholder={props.name}
            onValueChange={(sel) =>
                props.handleSelect({ [props.name]: sel })}
        >
            { props.items.map((item, index) => (
                <Picker.Item
                    key={index}
                    label={item}
                    value={item.split(' ')[0]}
                />
            ))}
        </Picker>
    )
}

export default DropdownPicker;