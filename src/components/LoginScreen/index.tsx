import {Button, Text, View} from 'react-native';
import React from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const LoginScreen = (props: any) => {

    // use state hook to refer to input field for getting information of whats typed
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>INVESTIGATAR Login Screen</Text>
      <Button
        title="Login"
        // change TabScreen to LoginScreen
        onPress={() => props.navigation.navigate('TabScreen')}
      />

    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
