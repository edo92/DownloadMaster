import React from 'react';
import { StyleSheet, View } from 'react-native';
import NoticeBar from '@ant-design/react-native/lib/notice-bar';


const AlertNotify = props => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <NoticeBar mode="closable" onPress={props.remove}>
                    {props.alert}
                </NoticeBar>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {},
    wrapper: {
        position: 'absolute',
        width: '100%'
    }
})

export default AlertNotify;