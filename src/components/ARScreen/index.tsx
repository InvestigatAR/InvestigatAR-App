import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';

const Index = () => {
  const [arTracking, setArTracking] = useState(false);

  const onInitialized = (state: any, reason: any) => {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      console.log('AR tracking started');
      setArTracking(true);
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
      console.error('AR tracking lost');
    }
  };

  const _onLoadStart = () => {
    console.log('model loading has started');
  };
  const _onLoadEnd = () => {
    console.log('model loading has finished');
  };

  const _onError = (event: any) => {
    console.log('model loading failed with error: ' + event.nativeEvent.error);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={arTracking ? 'TRACKING READY' : 'TRACKING STARTING...'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <Viro3DObject
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/product-ar-76eb9.appspot.com/o/scene.glb?alt=media&token=115633c2-ee2d-4ac1-b844-aa4f9f25126a',
        }}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
        type="GLB"
        onLoadStart={_onLoadStart}
        onLoadEnd={_onLoadEnd}
        onError={_onError}
      />
      <ViroAmbientLight color="#FFFFFF" />
    </ViroARScene>
  );
};

const ARScreen = (props: any) => {
  useEffect(() => {
    const productId = props.productScan.current;
    console.log('product id', productId);
  }, [props.productScan]);

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: Index,
      }}
      style={styles.f1}
    />
  );
};

let styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ARScreen);
