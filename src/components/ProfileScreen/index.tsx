import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {
  AsyncStorage,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

const ProfileScreen = (props: any) => {
  const profileData = props.userSession.current;

  const name: string = profileData.user.name;
  const email: string = profileData.user.email;
  const username: string = profileData.user.username;

  console.log(name);

  return (
    <SafeAreaView>
      <Button
        title={'Signout'}
        onPress={() => {
          AsyncStorage.clear().then(() => {
            props.setUserSession(undefined);
            props.navigation.navigate('LoginScreen');
            props.navigation.reset({
              index: 0,
              routes: [{name: 'LoginScreen'}],
            });
            // props.navigation.reset({
            //   index: 0,
            //   routes: [{name: 'LoginScreen'}],
            // });
          });
        }}
      />

      <Image
        style={styles.profile}
        source={require('./profile_picture.png')}
      />

      <Text style={{color: 'black'}}>{'asdf'}</Text>
      <Text>{email}</Text>
      <Text>{username}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  header: {
    alignItems: 'center',
    // backgroundColor: '#ffffff',
    flex: 1,
    height: 400,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
