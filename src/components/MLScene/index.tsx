import {Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {useState, useEffect} from 'react';
import Tflite from 'tflite-react-native';

const MLScene = () => {
  useEffect(() => {
    var tflite = new Tflite();
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MLScene);
