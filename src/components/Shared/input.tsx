import React, {FC} from "react";
import { TextInput } from "react-native-gesture-handler";

import {Dimensions, View, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

interface Props{
    placeholder: string;
    onChangeText: (text: string) => void
    secureTextEntry?: boolean;

}

const Input :FC<Props> = (props) => {
    return (
        <View style= {styles.container}>
            <TextInput placeholderTextColor='grey' onChangeText={(text) => props.onChangeText(text)} style={styles.input} placeholder = {props.placeholder} secureTextEntry={props.secureTextEntry || false}/>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        marginVertical: 10,
        borderRadius: 5
    },
    input: {
        padding: 15
    }
})
