import React from 'react';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';


const options = [
    {
        name: 'quality',
        style: { paddingRight: 2 },
        items: [
            { label: 'High Quality', value: 'high', icon: () => <IconMci name="quality-high" size={19} color="rgb(238,105,63)" /> },
            { label: 'Mid Quality', value: 'low', icon: () => <IconMci name="quality-medium" size={19} color="rgb(238,105,63)" /> },
        ]
    },
    {
        name: 'format',
        style: { paddingLeft: 2 },
        items: [
            { label: 'MP4 Video', value: 'mp4', icon: () => <IconMci name="video" size={19} color="rgb(238,105,63)" /> },
            { label: 'MP3 Audio', value: 'mp3', icon: () => <IconMat name="audiotrack" size={19} color="rgb(238,105,63)" /> },
        ]
    }
]

export default options;