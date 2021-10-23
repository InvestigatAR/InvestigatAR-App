import {Button, Text, View, Alert, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import Input from '../Shared/input';
import SignupButton from '../Shared/signupbutton';
import GenButton from '../Shared/genButton';
import {signin} from '../../service/api';

const {height, width} = Dimensions.get('screen');

const LoginScreen = (props: any) => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  // use state hook to refer to input field for getting information of whats typed
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginVertical: 20}}>
        {' '}
        Login Screen
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

          signin(props, username as string, password as string)
            .then((res: any) => {
              console.log(res.data);
              props.setUserSession(res.data);
              props.navigation.navigate('TabScreen');
            })
            .catch((err: any) => {
              console.warn('login error', err);
            });
        }}
      />
      {/* <Button title="Create an Account" onPress={() => props.navigation.navigate('SignupScreen')}/> */}
      <GenButton
        title="Create an Account"
        onPress={() => props.navigation.navigate('SignupScreen')}
      />
    </View>
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
