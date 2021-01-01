import React from 'react';
import { StyleSheet, View } from 'react-native';
import Progress from '@ant-design/react-native/lib/progress';


const progress = percent => {
    if (percent >= 100) return 0;
    return percent;
}

const ProgressBar = props => (
    <View style={styles.container}>
        <Progress
            percent={Math.floor(props.progress)}
            barStyle={styles.progress || 0}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    progress: {
        borderColor: '#ee693fd6',
    }
})

export default ProgressBar;