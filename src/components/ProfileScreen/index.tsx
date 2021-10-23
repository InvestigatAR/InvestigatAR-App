import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {AsyncStorage, Button, View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

const ProfileScreen = (props: any) => {

  const name:string = props.userSession.current.user.name
  const email:string = props.userSession.current.user.email 
  const username:string = props.userSession.current.user.username

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button
          title={'Signout'}
          onPress={() => {
            AsyncStorage.clear().then(() => {
              props.setUserSession(undefined);
              props.navigation.getParent().navigate('LoginScreen');
              // props.navigation.getParent().reset({
              //   index: 0,
              //   routes: [{name: 'LoginScreen'}],
              // });
              // props.navigation.reset({
              //   index: 0,
              //   routes: [{name: 'LoginScreen'}],
              // });
            });
          }}
        />
        {/* for profile picture */}
        <Image style={styles.profile }source={require('./profile_picture.png')}/>
        <Text>{name}</Text>
        <Text>{email}</Text>
        <Text>{username}</Text>
      </View>

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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
