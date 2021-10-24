import React, {FC} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';

const {height, width} = Dimensions.get('screen')
// interface Props {
//     title: string;
//     sus_score: number;
//     description: string;
//     onPress: () => void
// }

const History : FC <any> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress} disabled={true}>
            {/* <Text style={styles.text}>{props.title} </Text> */}
            {/* <Progress.Bar progress={props.sus_score} width={width * 0.8} /> */}
            {/* <Text style={styles.text}> {props.description}</Text>   */}
        </TouchableOpacity>
    )
}
export default History

const styles = StyleSheet.create({
    container: {
        // backgroundColor : '#000',
        alignItems : 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#FB8A86',
        width: width * 0.9,
        height: 100,
        marginVertical: 15,
    },
    text : {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: "500",
    }
})