import {Button, View} from 'react-native';
import React, {useEffect} from 'react';
import {setUserSession} from '../../redux/actions/UserSessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const LaunchScreen = (props: any) => {
  useEffect(() => {
    console.log(
      'TODO: read from async storage to get current user and preferences',
    );

    console.log('current user session', props.userSession.current);
  }, [props.userSession]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Get Started"
        onPress={() => props.navigation.navigate('TabScreen')}
      />
    </View>
  );
};

export const mapStateToProps = (state: any) => {
  const {userSession} = state;
  return {userSession};
};

export const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setUserSession,
    },
    () => dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen);
