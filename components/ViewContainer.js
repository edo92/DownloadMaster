import React from 'react';
import { View } from 'react-native';

const ViewContainer = props => (
    <View style={{ flex: 1 }}>{props.children}</View>
)

export default ViewContainer;