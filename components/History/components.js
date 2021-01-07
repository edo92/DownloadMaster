import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import AntdProgress from '@ant-design/react-native/lib/progress';
import helpers from '../../helpers/basic';
import { Button } from 'native-base';

const dimentions = Dimensions.get('window');


export const Icon = props => {
    let iconStyle = props.style ? { ...props.style } : {};
    return (
        <IconMci style={styles.icon, iconStyle}
            name={props.name} size={19} color={props.color || 'red'}
        />
    )
}

export const Show = props => (
    <View style={styles.flexRow}>
        <Text style={styles.fontStyle}>{props.label}</Text>
        {props.icon}
    </View>
)

export const Progress = props => (
    <View style={styles.progressContainer}>
        <AntdProgress
            percent={50}
            barStyle={styles.progress}
        />
    </View>
)

export const Title = props => {
    const longText = str => {
        const { width, scale } = dimentions;
        const max = (Math.round((width * 0.55) / 10) - (scale));
        if (str.length < max) return str;
        return str.slice(0, max) + '...';
    }

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{longText(props.title)}</Text>
        </View>
    )
}

export const ContentInfo = props => (
    <View style={{
        ...styles.selectedOpts,
        ...styles[props.extraspace ? 'extraspace' : 'minspace']
    }}>
        <Show
            label={'Source'} icon={<Icon name={'youtube'} />}
        />
        <Show
            label={helpers.capFirstChar(props.content.format)}
            icon={<Icon name={'video'} color='#EE693F' />}
        />
        <Show
            label={`${helpers.firstChar(props.content.quality)}Q`}
            icon={<Icon name={'quality-high'} color='#EE693F' />}
        />
    </View>
)

export const ActionPanel = () => (
    <View style={styles.actionPanel}>
        <Button style={styles.button}>
            <View style={styles.innerButton}>
                <Text>Play</Text>
                <Icon style={styles.icon} name='play' size={21} color="#343434" />
            </View>
        </Button>

        <Button style={styles.button}>
            <View style={styles.innerButton}>
                <Text>Delete</Text>
                <Icon style={styles.icon, { fontSize: 18 }} name='delete' size={21} color="#343434" />
            </View>
        </Button>
    </View>
)

export const ImageDynamic = ({ source }) => (
    <Image
        source={{ uri: source }}
        style={styles.image}
    />
)

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row'
    },
    actionPanel: {
        flexDirection: 'row',
        paddingTop: 2,
        justifyContent: 'center'
    },

    icon: {
        paddingLeft: 5
    },

    progressContainer: {

    },
    progress: {
        borderColor: '#ee693fd6',
    },

    selectedOpts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },

    fontStyle: {
        fontSize: 12,
        fontFamily: 'sans-serif-bold',
        color: '#000'
    },

    title: {
        fontSize: 14,
        fontFamily: 'sans-serif-bold',
        color: '#000'
    },

    titleContainer: {
        alignItems: 'center'
    },
    button: {
        padding: 3,
        height: 30,
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 10,
        backgroundColor: '#ffff',
        justifyContent: 'center'
    },
    innerButton: {
        flexDirection: 'row',
        padding: 5,
    },
    extraspace: {
        paddingBottom: 17
    },
    minspace: {
        paddingBottom: 8
    },
    image: {
        borderRadius: 2,
        width: (Math.round(dimentions.width * 0.40)),
        height: 97,
        resizeMode: 'cover',

    },
})