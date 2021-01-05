import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'native-base';

import Helpers from '../helpers';
import { Show, Icon, ProgressBar } from './CustomComponents';


const Content = props => {
    return (
        <View style={styles.container}>

            {/*  Content Thumbnail */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: props.content.thumbnail }}
                />
            </View>

            {/* Info container net to thumbnail */}
            <View style={styles.infoContainer}>

                {/* Content title */}
                <View style={styles.alignCenter}>
                    <Show label={Helpers.longText(props.content.title, 28)} />
                </View>

                {/* Show source, format, quality */}
                <View style={styles.contentInfo}>
                    <Show
                        label={'Source'} icon={<Icon name={'youtube'} />}
                    />
                    <Show
                        label={Helpers.capFirstChar(props.content.format)}
                        icon={<Icon name={'video'} color='#EE693F' />}
                    />
                    <Show
                        label={`${Helpers.firstChar(props.content.quality)}Q`}
                        icon={<Icon name={'quality-high'} color='#EE693F' />}
                    />
                </View>

                {props.content.progress ? (
                    <ProgressBar progress={props.content.progress && props.content.progress.downloaded} />
                ) : (
                        < View style={styles.flexRow}>
                            <Button style={styles.button}>
                                <Icon style={styles.icon} name='play' size={21} color="#343434" />
                            </Button>

                            <Button style={styles.button}>
                                <Icon style={styles.icon, { fontSize: 19 }} name='delete' size={21} color="#343434" />
                            </Button>
                        </View>
                    )}
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 15
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

    listItem: {
        flexDirection: 'row',
        padding: 10,
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
    button: {
        height: 25,
        width: 30,
        marginLeft: 10,
        backgroundColor: '#ffff',
        justifyContent: 'center'
    },

    flexRow: {
        flexDirection: 'row',
    },
    alignCenter: {
        alignItems: 'center'
    },
})

export default Content;