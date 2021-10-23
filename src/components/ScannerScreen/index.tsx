import React, { useState } from "react";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const ScannerScreen = () => {
  const [camera, setCamera] = useState<any>(undefined);

  const barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => {
      console.log('barcode');
      console.log(barcode);
      console.warn(barcode.data);
    });
  };

  return (
    <View style={{display: 'flex', width: '100%', height: '100%'}}>
      <RNCamera
        ref={ref => {
          setCamera(ref);
        }}
        style={{
          flex: 1,
        }}
        onGoogleVisionBarcodesDetected={barcodeRecognized}
      />
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ScannerScreen);
