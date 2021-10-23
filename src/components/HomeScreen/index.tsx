import {Text, View} from 'react-native';
import React from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const HomeScreen = (props: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{props.userSession ? JSON.stringify(props.userSession) : 'no user session'}</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
