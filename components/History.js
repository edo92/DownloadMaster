import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';

import Helpers from '../helpers';
import Progress from './Progress';


const Show = props => (
    <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: '700' }}>{props.label}</Text>
        {props.icon}
    </View>
)

const ShowImage = props => (
    <View style={styles.imageContainer}>
        <Image
            style={styles.image}
            source={{ uri: props.imageUri }}
        />
    </View>
)

const Icon = props => (
    <IconMci style={styles.icon} name={props.name} size={21} color="red" />
)


class History extends Component {
    render() {
        let historyList = Object.keys(this.props.history);

        return (
            <View style={styles.container}>
                {historyList && historyList.map((item, index) => {
                    const content = this.props.history[item];

                    return (
                        <View key={index} style={styles.listItem} itemDivider>
                            <ShowImage imageUri={content.thumbnail} />

                            <View style={styles.infoContainer}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.title}>{content.title}</Text>
                                </View>
                                <View style={styles.contentInfo}>
                                    <Show label={'Source'} icon={<Icon name={'youtube'} />} />
                                    <Show label={Helpers.capFirstChar(content.format)} />
                                    <Show label={`${Helpers.firstChar(content.quality)}Q`} />
                                </View>
                                <Progress progress={content.progress && content.progress.downloaded} />
                            </View>
                        </View>
                    )
                })}
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 65
    },
    listItem: {
        flexDirection: 'row',
        padding: 10,
    },
    imageContainer: {
        borderColor: '#c7c7c757',
        resizeMode: 'contain',
        borderWidth: 1,
        borderRadius: 3,
        padding: 2
    },
    image: {
        borderRadius: 2,
        width: 155,
        height: 95,
    },
    infoContainer: {
        width: '59%',
        justifyContent: 'center',
        padding: 5
    },
    titleContainer: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: '600'
    },
    contentInfo: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-evenly'
    },
    icon: {
        paddingLeft: 5
    }
})


export default History;