import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Progress, ContentInfo, ActionPanel, ImageDynamic } from './components';
import Swipeable from '../Swipeable';


const Content = props => {
    return (
        <Swipeable
            divider={props.lastElem}
            container={styles.containerStyle}
            handleRemove={props.handleRemove}
            contentId={props.content.contentId}
        >

            <View style={styles.imageContainer}>
                <ImageDynamic
                    source={props.content.thumbnail}
                />
            </View>

            <View style={styles.infoContainer}>
                <Title
                    title={props.content.title}
                />

                <ContentInfo
                    extraspace={!!props.content.progress}
                    content={props.content}
                />
                {console.log('testing....', props.content.progress)}

                {props.content.progress ?
                    (
                        <Progress progress={props.content.progress} />
                    ) : (
                        <ActionPanel />
                    )
                }
            </View>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    containerStyle: {
        paddingBottom: 11,
        paddingTop: 11
    },

    imageContainer: {
        borderColor: '#c7c7c757',
        borderWidth: 1,
        borderRadius: 3,
        padding: 2
    },

    infoContainer: {
        flex: 1,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10
    }
})


export default Content;
