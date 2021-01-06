import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Show, Progress, ContentInfo, ActionPanel } from './components';
import Helpers from '../../helpers/basic';


const testswitch = true;

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
                <Show label={Helpers.longText(props.content.title, 28)} />

                <ContentInfo extraspace={testswitch} content={props.content} />

                {testswitch ? (<Progress progress={50} />) : (<ActionPanel />)}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 10
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
    }
})


export default Content;