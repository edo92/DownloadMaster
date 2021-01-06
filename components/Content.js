import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Show, Icon, Progress } from './Custom';
import Helpers from '../helpers/basic';


const Content = props => {
    return (
        <View style={styles.container}>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.content.thumbnail }}
                    style={styles.image}
                />
            </View>

            <View style={styles.infoContainer}>

                <View style={styles.alignCenter}>
                    <Show label={Helpers.longText(props.content.title, 28)} />
                </View>

                <View style={styles.selectedOpts}>
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

                <View>
                    <Progress progress={50} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
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
        minWidth: 155,
        maxWidth: 230,
        height: 95,
    },

    infoContainer: {
        padding: 10
    },

    selectedOpts: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Content;