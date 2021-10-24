import React, {FC} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
            <Text style={styles.text}>{props.title} </Text>
            {/* <ProgressBar  progress={props.sus_score}/> */}
            <Text style={styles.text}> {props.description}</Text>  
            <AnimatedCircularProgress
                size={200}
                width={3}
                fill={props.sus_score * 100}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {
                    (fill) => (
                    <Text>
                        { props.sus_score * 100 }
                    </Text>
                )
            }
</AnimatedCircularProgress>
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