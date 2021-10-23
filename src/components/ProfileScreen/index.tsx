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
  Dimensions,
} from 'react-native';
import { continueStatement } from '@babel/types';
import GenButton from '../Shared/genButton';
import PersonalInfo from '../Shared/personal_info';
import { getActiveChildNavigationOptions } from 'react-navigation';

const {height, width} = Dimensions.get('screen');
const ProfileScreen = (props: any) => {

  const profileData = props.userSession.current;


  const name: string = profileData ? profileData.user.name : 'none';
  const email: string = profileData ? profileData.user.email : 'none';
  const username: string = profileData ? profileData.user.username : 'none';
  console.log(name);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>


        <Image
          style={styles.profile}
          source={require('./profile_picture.png')}
        />

        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.body}>
        {/* <Text style={styles.title}>Profile Information</Text> */}

        <PersonalInfo title={username} onPress={() => {}}></PersonalInfo>
        <PersonalInfo title={email} onPress={() => {}}></PersonalInfo>

      </View>
      <Button
          title={'Sign Out'}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ADD8E6'
  },
  body: {
    justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 10,
    // marginHorizontal: 10
  },
  profile: {
    width: 225,
    height: 225,
    borderRadius: 150,
    marginVertical: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 5
  },
  name: {
    fontSize: 40,
    marginVertical: 5,
    fontWeight: 'bold'
  },

  title: {
    fontSize: 25,
    marginVertical: 5,
    marginHorizontal: 10
    // underline: 'underline'
  },
  info: {
    borderColor: '#0000FF',
    borderRadius: 10,
    width: 0.9 * width,
    alignSelf: 'center',
    textAlign: 'center'
    // underline: 'underline'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
