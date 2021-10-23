import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {AsyncStorage, Button, View, Text, SafeAreaView} from 'react-native';

const ProfileScreen = (props: any) => {
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
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
