import React, {FC} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';
import Input from '../Shared/input';
import SignupButton from '../Shared/signupbutton';
import {useState} from 'react';
import GenButton from '../Shared/genButton';
import {signup} from '../../service/api';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const SignupScreen = (props: any) => {
  const [name, setName] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // const signup = async () => {
  //     if (username && password && name && email) {
  //         // make api call with username and password
  //     } else {
  //         Alert.alert("Error", "Missing Fields");
  //     }
  // };

  return (
    <View style={styles.container}>
      {/* <Text>Sign Up Screen</Text> */}
      <Text style={{fontSize: 40, fontWeight: 'bold', marginVertical: 20}}>
        {' '}
        Signup Screen
      </Text>
      <Input placeholder="Name" onChangeText={text => setName(text)} />
      <Input placeholder="Username" onChangeText={text => setUsername(text)} />
      <Input placeholder="Email" onChangeText={text => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      {/* <SignupButton title="Sign Up" onPress={() => props.navigation.navigate('TabScreen')} /> */}
      <SignupButton
        title="Signup"
        onPress={() => {
          console.log('username', username);
          console.log('name', name);
          console.log('email', email);
          console.log('password', password);

          if (username && name && email && password) {
            signup(
              props,
              (username as string).trim(),
              (name as string).trim(),
              (email as string).trim(),
              (password as string).trim(),
            )
              .then((res: any) => {
                // prevent from going back
                // props.navigation.reset({
                //   index: 0,
                //   routes: [{name: 'TabScreen'}],
                // });

                console.log('created account', res);

                const userCredentials = res.data;
                props.setUserSession(userCredentials);
                props.navigation.navigate('TabScreen');
                // save user credentials to storage
                AsyncStorage.setItem(
                  'userSession',
                  JSON.stringify(userCredentials),
                );
              })
              .catch((err: any) => {
                console.warn('sign up error', err);
              });
          } else {
            props.navigation.navigate('TabScreen');
            // Alert.alert("Missing Fields", "Please fill out all fields before signing up");
          }
        }}
      />

      <GenButton
        title="Already have an account?"
        onPress={() => props.navigation.navigate('LoginScreen')}
      />
    </View>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
