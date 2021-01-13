import React from "react";
import IconMci from "react-native-vector-icons/MaterialCommunityIcons";
import IconMat from "react-native-vector-icons/MaterialIcons";

const options = [
    {
        name: "source",
        style: { paddingRight: 2 },
        items: [
            {
                label: "YouTube",
                value: "youtube",
                icon: () => (
                    <IconMci name="youtube" size={19} color="rgb(238,105,63)" />
                ),
            }
        ],
    },
    {
        name: "format",
        items: [
            {
                label: "Mp4 Video",
                value: "mp4",
                icon: () => <IconMci name="video" size={19} color="rgb(238,105,63)" />,
            },
            {
                label: "Webm Video",
                value: "webm",
                icon: () => (
                    <IconMat name="video" size={19} color="rgb(238,105,63)" />
                ),
            },
        ],
    },
];

export default options;
