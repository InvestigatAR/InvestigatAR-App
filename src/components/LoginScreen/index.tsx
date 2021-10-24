import {
  Button,
  Text,
  View,
  Alert,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import Input from '../Shared/input';
import SignupButton from '../Shared/signupbutton';
import GenButton from '../Shared/genButton';
import {signin} from '../../service/api';

import logo from './logo.png';

const {height, width} = Dimensions.get('screen');

const LoginScreen = (props: any) => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // use state hook to refer to input field for getting information of whats typed
  return (
    <KeyboardAvoidingView
      style={{display: 'flex', height: '100%', width: '100%'}}
      behavior="padding"
      enabled>
      <View style={styles.container}>
        <ImageBackground
          source={require('./bg.jpg')}
          style={{width: '100%', height: '100%'}}
        />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <Image source={logo} style={{width: 200, height: 200}} />

          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 30,
              marginBottom: 15,
              fontSize: 40,
              color: 'white',
            }}>
            InvestigatAR
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              marginBottom: 15,
              fontSize: 20,
              color: 'white',
            }}>
            Simulate | Innovate | Investigate
          </Text>

          <Input
            placeholder="Username"
            onChangeText={text => {
              console.log(text);
              setUsername(text);
            }}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            onChangeText={text => {
              console.log(text);
              setPassword(text);
            }}
          />
          <SignupButton
            title="Login"
            onPress={() => {
              console.log('username', username);
              console.log('password', password);
              if (username && password) {
                signin(props, username as string, password as string)
                  .then((res: any) => {
                    // prevent from going back
                    // props.navigation.reset({
                    //   index: 0,
                    //   routes: [{name: 'TabScreen'}],
                    // });
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
                    console.warn('login error', err);
                  });
              } else {
                Alert.alert(
                  'Missing Fields',
                  'Please fill out all fields before loggin in',
                );
              }
            }}
          />
          {/* <Button title="Create an Account" onPress={() => props.navigation.navigate('SignupScreen')}/> */}
          <GenButton
            color={'white'}
            title="Create an Account"
            onPress={() => props.navigation.navigate('SignupScreen')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: width / 1.1,
    alignSelf: 'center',
    backgroundColor: '#e3e3e3',
    marginVertical: 10,
    borderRadius: 5,
  },
  input: {
    padding: 15,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
