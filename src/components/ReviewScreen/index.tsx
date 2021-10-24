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
import {addProductToStorage} from '../../service/utils';
import {Rating, AirbnbRating} from 'react-native-ratings';

const ReviewScreen = (props: any) => {
  const [reviews, setReviews] = useState<Array<any>>([]);
  const [product, setProduct] = useState<any>(undefined);

  const [rating, setRating] = useState<number>(3);
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

    const reviewList = reviews.map(review => {
      if (review === null) {
        return <View />;
      }

      return (
        <View
          key={review.id}
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 23, fontWeight: 'bold'}}>
            {review.user.name}
          </Text>
          <Text style={{fontSize: 18}}>{review.description}</Text>
          <AirbnbRating
            isDisabled
            count={5}
            reviews={['Terrible', 'Bad', 'Good', 'Wow', 'Amazing', 'Excellent']}
            defaultRating={Math.round(review.rating * 5)}
            size={30}
            onFinishRating={rating => {
              setRating(rating);
            }}
          />
        </View>
      );
    });

    return reviewList;
  };

  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
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
            color="black"
            accessibilityLabel="Go back"
          />
        </View>

        <Text style={{fontSize: 30, margin: 10, fontWeight: 'bold'}}>{product && product.name}</Text>
        <Text style={{fontSize: 20, margin: 10, marginTop: 10}}>{product && product.ncrdata}</Text>

        <ScrollView>
          {reviews.length === 0 ? (
            <Text style={{fontSize: 20, fontWeight: 'bold', width: '100%', textAlign: 'center'}}></Text>
          ) : (
            getReviewList(props)
          )}
        </ScrollView>

        {!reviews.some(
          review =>
            review !== null &&
            review.user.id === props.userSession.current.user.id,
        ) &&
          product !== undefined && (
            <View
              style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
              <AirbnbRating
                count={5}
                reviews={[
                  'Terrible',
                  'Bad',
                  'Good',
                  'Wow',
                  'Amazing',
                  'Excellent',
                ]}
                defaultRating={3}
                size={30}
                onFinishRating={rating => {
                  setRating(rating);
                }}
                showRating={false}
              />

              <Input
                placeholder="Write a review"
                onChangeText={text => setReviewMessage(text)}
              />

              <SignupButton
                title="Submit"
                onPress={() => {
                  const maxRating = 5;
                  const ratingScaled = rating / maxRating;
                  const description = reviewMessage;
                  const productId = product.id;

                  createReview(props, ratingScaled, description, productId)
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
