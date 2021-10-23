import React from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {SafeAreaView, Text} from 'react-native';

const ReviewScreen = (props: any) => {
  return (
    <SafeAreaView>
      <Text>test</Text>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
