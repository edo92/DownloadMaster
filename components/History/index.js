import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Content from './content';


const History = props => {
    const historyArr = Object.keys(history);
    const lastElem = Number(historyArr[historyArr.length - 1]);

    return (
        <View style={styles.container}>
            <FlatList
                data={Object.keys(history)}
                keyExtractor={item => item}
                renderItem={content => (
                    <Content
                        // if content is last element
                        lastElem={content.index === lastElem}
                        content={history[content.item]}
                        handleRemove={props.handleRemove}
                    />
                )}
            />
        </View>
    )
}

//
const history = [
    {
        "content": "gX3uNk8xVMc",
        "format": "mp4",
        "id": 8,
        "quality": "high",
        "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
        "title": "Cute Malamute Husky Puppy Howls Along",
        "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
    },
    {
        "content": "gX3uNk8xVMc",
        "format": "mp4",
        "id": 8,
        "quality": "high",
        "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
        "title": "Cute Malamute Husky Puppy Howls Along",
        "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
    }
]


const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 80
    }
})

export default History;