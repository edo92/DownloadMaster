import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Content from './Content';


const History = props => {
    return (
        <FlatList
            data={Object.keys(history)}
            keyExtractor={item => item}
            renderItem={content => (
                <Content content={history[content.item]} />
            )}
        />
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

    }
})

export default History;