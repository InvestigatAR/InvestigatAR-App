import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import Input from './input'
import Button from './button'
import { useState } from 'react';


const SignupScreen = () => {
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
            <Button title="Sign Up" onPress={() => console.log('Pressed')} />
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