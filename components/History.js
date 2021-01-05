import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Content from './Content';


const History = ({ history }) => {

    const showContent = content => {
        return (
            <Content content={history[content.item]} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.listItem} itemDivider>
                <FlatList
                    data={Object.keys(history)}
                    renderItem={showContent}
                    keyExtractor={item => item}
                />
            </View>
        </View>
    )
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