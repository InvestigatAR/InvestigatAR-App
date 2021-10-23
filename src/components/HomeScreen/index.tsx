import {Text, View} from 'react-native';
import React from 'react';
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../LaunchScreen";

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Scree</Text>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
