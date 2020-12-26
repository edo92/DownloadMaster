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
            percent={progress(props.percent)}
            barStyle={styles.progress}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: 7,
        paddingBottom: 5,
        paddingLeft: 12,
        paddingRight: 12,
    },
    progress: {
        borderColor: '#ee693fd6',
    }
})

export default ProgressBar;