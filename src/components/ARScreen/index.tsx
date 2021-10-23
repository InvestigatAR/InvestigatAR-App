import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {getProduct} from '../../service/api';

const Index = (props?: any) => {
  const modelUrl = props.sceneNavigator.viroAppProps.modelUrl
    ? props.sceneNavigator.viroAppProps.modelUrl
    : '';
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
        text={arTracking ? '' : 'loading...'}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <Viro3DObject
        source={{
          uri: modelUrl,
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
  const [product, setProduct] = useState<any>(undefined);

  const chairModel =
    'https://firebasestorage.googleapis.com/v0/b/product-ar-76eb9.appspot.com/o/chair-v2.glb?alt=media&token=8ec85f68-c394-4c51-912c-1c96db29c329';

  useEffect(() => {
    const productId = props.productScan.current;
    console.log('product id', productId);

    getProductFromServer();
  }, [props]);

  const getProductFromServer = () => {
    getProduct(props, `?id=${props.productScan.current}`)
      .then(res => {
        console.log('product data', res.data);

        const product: any = res.data;

        setProduct(product);
      })
      .catch((error: any) => {
        console.warn('error getting product', error);
      });
  };

  return (
    <>
      {product && (
        <ViroARSceneNavigator
          viroAppProps={{modelUrl: product.modelUrl}}
          autofocus={true}
          initialScene={{
            scene: Index,
          }}
          style={styles.f1}
        />
      )}
    </>
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
