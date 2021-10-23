import {AsyncStorage, View} from 'react-native';
import React, {useEffect} from 'react';
import {setUserSession} from '../../redux/actions/UserSessionActions';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

const LaunchScreen = (props: any) => {
  useEffect(() => {
    AsyncStorage.getItem('userSession').then((res: any) => {
      console.log('from async storage', res);

      // parse result from async storage
      if (res) {
        props.setUserSession(JSON.stringify(res));

        // go to tab screen
        props.navigation.navigate('TabScreen');

        // prevent from going back
        // props.navigation.reset({
        //   index: 0,
        //   routes: [{name: 'TabScreen'}],
        // });

        return;
      }
      else {
        // go to login screen if user is not logged in
        if (props.userSession.current) {
          props.navigation.navigate('TabScreen');

          // prevent from going back
          // props.navigation.reset({
          //   index: 0,
          //   routes: [{name: 'TabScreen'}],
          // });
        } else {
          props.navigation.navigate('LoginScreen');

          // prevent from going back
          // props.navigation.reset({
          //   index: 0,
          //   routes: [{name: 'LoginScreen'}],
          // });
        }
      }
    });
  }, [props.userSession, props.navigation]);

  return <View />;
};

export const mapStateToProps = (state: any) => {
  const {userSession} = state;
  return {userSession};
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      setUserSession,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
