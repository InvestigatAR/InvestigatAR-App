import {Button, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const LoginScreen = (props: any) => {

    const [username, setUserName] = useState<String | null>(null);
    const [password, setPassword] = useState<String | null>(null);

    const signup = async () => {
        if (username && password) {
            
        } else {
            Alert.alert("Error", "Missing Fields");
        }
    };
    // use state hook to refer to input field for getting information of whats typed
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>INVESTIGATAR Login Screen</Text>
        <Button
            title="Login"
            // change TabScreen to LoginScreen
            onPress={() => props.navigation.navigate('TabScreen')}
        />

        </View>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
