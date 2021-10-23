import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {getProduct} from '../../service/api';

const ReviewScreen = (props: any) => {
  const [reviews, setReviews] = useState<Array<any>>([]);
  const [product, setProduct] = useState<any>(undefined);

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
        setReviews(product.reviews);
      })
      .catch((error: any) => {
        console.warn('error getting product', error);
      });
  };

  const getReviewList = (props: any) => {
    console.log('reviews', reviews);
    console.log('reviews', reviews);
    console.log('reviews', reviews);

    const reviewList = reviews.map(review => {
      console.log('review', review);
      console.log('review', review);
      console.log('review', review);

      return (
        <View key={review.id} style={{margin: 10, padding: 10, backgroundColor: 'grey'}}>
          <Text>User's Name: {review.user.name}</Text>
          <Text>Rating Given: {review.rating}</Text>
          <Text>Review Message: {review.description}</Text>
        </View>
      );
    });

    return reviewList;
  };

  return (
    <SafeAreaView>
      <View>
        <Button
          onPress={() => {
            props.navigation.navigate('TabScreen');
          }}
          title="Back"
          // color="#841584"
          accessibilityLabel="Go back"
        />
      </View>
      <Text>Product Name: {product && product.name}</Text>
      <Text>Product Description: {product && product.ncrdata}</Text>
      {reviews.length == 0 ? <Text>no reviews</Text> : getReviewList(props)}
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
