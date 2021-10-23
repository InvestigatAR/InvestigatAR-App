import {Button, View} from 'react-native';
import React, {useEffect} from 'react';
import {setUserSession} from '../../redux/actions/UserSessionActions';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';

const LaunchScreen = (props: any) => {
  useEffect(() => {
    // go to login screen if user is not logged in
    if (props.userSession.current) {
      props.navigation.navigate('TabScreen');
    } else {
      props.navigation.navigate('LoginScreen');
    }
  }, [props.userSession]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} />
  );
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
