import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";
import { createSerializableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { whileStatement } from '@babel/types';

const HomeScreen = (props: any) => {
  useEffect(() => {
    console.log("Hello", props.userSession.current.user.username);
  }, []);
  const renderHeader = (props: any) => {
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

          <View
          style = {{
            width :"100%",
            alignItems: "center",
            justifyContent : 'center',
            marginTop: 70
          }}
          >
            <Text style={{fontSize: 50, color: '#FFF'}}>Welcome Home</Text>
            <Text style={{
              marginTop: 10,
              fontSize: 20
            }}> {props.userSession.current ? props.userSession.current.user.name : 'none'} </Text>
          </View>
        </ImageBackground>


        </View>
    )
  }
  return (

    <View style={{flex: 1, alignItems: 'center'}}>
      {renderHeader(props)}


      {/* <Text>{props.userSession.current ? JSON.stringify(props.userSession.current) : 'no user session'}</Text> */}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
