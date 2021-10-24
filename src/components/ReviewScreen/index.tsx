import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {createReview, getProduct} from '../../service/api';
import Input from '../Shared/input';
import SignupButton from '../Shared/signupbutton';
import { addProductToStorage } from "../../service/utils";

const ReviewScreen = (props: any) => {
  const [reviews, setReviews] = useState<Array<any>>([]);
  const [product, setProduct] = useState<any>(undefined);

  const [reviewMessage, setReviewMessage] = useState<string>('');

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

        addProductToStorage(product);

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

      if (review === null) {
        return <View />;
      }

      return (
        <View
          key={review.id}
          style={{margin: 10, padding: 10, backgroundColor: 'grey'}}>
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
      <KeyboardAvoidingView
        style={{display: 'flex', height: '100%', width: '100%'}}
        behavior="padding"
        enabled>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignContent: 'flex-start',
            flexDirection: 'row',
          }}>
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

        <ScrollView>
          {reviews.length === 0 ? (
            <Text>no reviews</Text>
          ) : (
            getReviewList(props)
          )}
        </ScrollView>

        {!reviews.some(
          review =>
            review !== null &&
            review.user.id === props.userSession.current.user.id,
        ) && (
          <View
            style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Input
              placeholder="Write a review"
              onChangeText={text => setReviewMessage(text)}
            />

            <SignupButton
              title="Submit"
              onPress={() => {
                const rating = 0.5;
                const description = reviewMessage;
                const productId = product.id;

                createReview(props, rating, description, productId)
                  .then(res => {
                    console.log('review sent', res);
                    getProductFromServer();
                  })
                  .catch((err: any) => {
                    console.warn('error', err);
                  });
              }}
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
