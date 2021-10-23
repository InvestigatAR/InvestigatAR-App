import React, {FC} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const {height, width} = Dimensions.get('screen')
interface Props {
    title: string;
    onPress: () => void
}

const SignupButton : FC <Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default SignupButton

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#000',
        alignItems : 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10
    },
    text : {
        color: '#fff'
    }
})