import React, {FC} from 'react';
import {Button, View, Text, StyleSheet, Alert} from 'react-native'
import Input from '../Shared/input'
import SignupButton from '../Shared/signupbutton'
import { useState } from 'react';
import GenButton from '../Shared/genButton';

const SignupScreen = (props: any) => {
    const [name, setName] = useState<string | null> (null);
    const [username, setUsername] = useState<string | null> (null);
    const [email, setEmail] = useState<string | null> (null);
    const [password, setPassword] = useState<string | null> (null);

    const signup = async () => {
        if (username && password && name && email) {
            // make api call with username and password
        } else {
            Alert.alert("Error", "Missing Fields");
        }
    };

    return (
        <View style={styles.container}>
            <GenButton title="Back"  onPress={() => props.navigation.navigate('LoginScreen')} />
            {/* <Text>Sign Up Screen</Text> */}
            <Text style={{fontSize: 40, fontWeight: 'bold', marginVertical: 20}}> Signup Screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)}/>
            <Input placeholder="Username" onChangeText={(text) => setUsername(text)}/>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)}/>
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)}/>
            <SignupButton title="Sign Up" onPress={() => props.navigation.navigate('TabScreen')} />
        
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