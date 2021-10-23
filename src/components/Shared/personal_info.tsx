import React, {FC} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const {height, width} = Dimensions.get('screen')
interface Props {
    title: string;
    onPress: () => void
}

const PersonalInfo : FC <Props> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} disabled={true}>
            <Text style={styles.text}>{props.title} </Text>
        </TouchableOpacity>
    )
}
export default PersonalInfo

const styles = StyleSheet.create({
    container: {
        // backgroundColor : '#000',
        alignItems : 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#FB8A86',
        width: width * 0.9,
        height: 50,
        marginVertical: 15,
    },
    text : {
        color: '#ffffff',
        fontSize: 20
    }
})