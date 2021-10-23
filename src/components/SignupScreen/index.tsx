import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Input from '../Shared/input'
import Button from '../Shared/singupbutton'
import { useState } from 'react';


const SignupScreen = (props: any) => {
    const [name, setName] = useState<string | null> (null);
    const [username, setUsername] = useState<string | null> (null);
    const [email, setEmail] = useState<string | null> (null);
    const [password, setPassword] = useState<string | null> (null);

    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)}/>
            <Input placeholder="Username" onChangeText={(text) => setUsername(text)}/>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)}/>
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)}/>
            <Button title="Sign Up" onPress={() => props.navigation.navigate('TabScreen')} />
        </View>
    );
};
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})