import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Progress, ContentInfo, ActionPanel, ImageDynamic, ContainerWithDivider } from './components';

const testswitch = false;

const Content = props => {
    return (
        <ContainerWithDivider divider={props.lastElem}>
            <View style={styles.imageContainer}>
                <ImageDynamic source={props.content.thumbnail} />
            </View>

            <View style={styles.infoContainer}>
                <Title title={props.content.title} />

                <ContentInfo
                    extraspace={testswitch}
                    content={props.content}
                />
                {testswitch ?
                    (
                        <Progress progress={50} />
                    )
                    :
                    (
                        <ActionPanel
                            handleRemove={props.handleRemove}
                        />
                    )
                }
            </View>
        </ContainerWithDivider>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 15
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
