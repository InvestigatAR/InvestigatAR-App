import React, {useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {View, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

const ScannerScreen = (props: any) => {
  const [popupShown, setPopupShown] = useState<any>(false);
  const [camera, setCamera] = useState<any>(undefined);

  const showAlert = (productId) => {
    if (popupShown) {
      return;
    }
    setPopupShown(true);
    Alert.alert(
      'Product Detected!',
      'Please choose one of the following',
      [
        {
          text: 'View Reviews',
          onPress: () => {
            props.setProductScan(productId);
            props.navigation.navigate('ReviewScreen');
            console.log('view reviews pressed');
            setPopupShown(false);
          },
          style: 'default',
        },
        {
          text: 'View in AR',
          onPress: () => {
            props.setProductScan(productId);
            props.navigation.navigate('ARScreen');
            console.log('view in ar pressed');
            setPopupShown(false);
          },
          style: 'default',
        },
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel pressed');
            setPopupShown(false);
          },
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          setPopupShown(false);
        },
      },
    );
  };

  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach(barcode => {
      if (barcode && barcode.data && barcode.data.length > 0) {
        const productId = barcode.data;
        console.log('product id', productId);
        showAlert(productId);
      }
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
