import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const HomeScreen = (props: any) => {
  useEffect(() => {
    console.log(props.userSession);
  });
  function renderHeader() {
    return (
      <View
        style={{
          width: "100%",
          height: 200,
          position: 'absolute'
        }}
      >
        <ImageBackground
        source = {require('../Shared/TopBacksplash.png')}
        resizeMode = "cover"
        style = {{
          flex: 1,
          alignItems: 'center'
        }}
        >
        </ImageBackground>
        

        </View>
    )
  }
  return (
    
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {renderHeader()}
      <Text>Home Screen</Text>
      <Text>{props.userSession.current ? JSON.stringify(props.userSession.current) : 'no user session'}</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
