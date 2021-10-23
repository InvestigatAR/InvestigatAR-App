import {Text, View} from 'react-native';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const HomeScreen = (props: any) => {
  useEffect(() => {
    console.log(props.userSession);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>{props.userSession.current ? JSON.stringify(props.userSession.current) : 'no user session'}</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
