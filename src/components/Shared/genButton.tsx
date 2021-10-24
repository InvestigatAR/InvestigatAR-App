import React, {FC} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const {height, width} = Dimensions.get('screen')
interface Props {
    title: string;
    onPress: () => void
    color?: any
}

const GenButton : FC <Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={[styles.text, {color: props.color}]}>{props.title} </Text>
        </TouchableOpacity>
    )
}
export default GenButton

const styles = StyleSheet.create({
    container: {
        // backgroundColor : '#000',
        alignItems : 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 8
    },
    text : {
        color: '#007AFF',
        fontSize: 20
    }
})
