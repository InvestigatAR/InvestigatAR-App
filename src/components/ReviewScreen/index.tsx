import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {SafeAreaView, Text} from 'react-native';

const ReviewScreen = (props: any) => {
  useEffect(() => {
    const productId = props.productScan.current;
    console.log('product id', productId);
  }, [props.productScan]);

  return (
    <SafeAreaView>
      <Text>Product id: {props.productScan.current}</Text>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
