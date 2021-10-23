import {Button, Text, View, Alert, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import Input from '../Shared/input'
import SignupButton from '../Shared/singupbutton'

const LoginScreen = (props: any) => {

    const [username, setUsername] = useState<String | null>(null);
    const [password, setPassword] = useState<String | null>(null);

    const signup = async () => {
        if (username && password) {
            
        } else {
            Alert.alert("Error", "Missing Fields");
        }
    };
    // use state hook to refer to input field for getting information of whats typed
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder="Username" onChangeText={(text) => setUsername(text)}/>
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)}/>
            <SignupButton title="Login" onPress={() => props.navigation.navigate('TabScreen')} />
            <Button title="Create an Account" onPress={() => props.navigation.navigate('SignupScreen')}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
