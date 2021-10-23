import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../LaunchScreen';
import {createSerializableStateInvariantMiddleware} from '@reduxjs/toolkit';
import {ALIAS_KEYS, whileStatement} from '@babel/types';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import {iteratorSymbol} from 'immer/dist/internal';
import PersonalInfo from '../Shared/personal_info';
import History from '../Shared/History';
import {getProductsFromStorage} from '../../service/utils';

// const items = [ {id: 1, name: 'chair'}, {id: 2, name: 'table'}, {id: 3, name: 'banana'}, {id: 1, name: 'apple'}, {id: 1, name: 'tomato'},{id: 1, name: 'chocolate'},
// {id: 1, name: 'chair'}, {id: 1, name: 'chair'}, ];
const HomeScreen = (props: any) => {
  const [items, setItems] = useState<Array<any>>([]);

  useEffect(() => {
    // console.log("Hello", props.userSession.current.user.username);
    getProductsFromStorage().then((res: any) => {
      const productsArr = JSON.parse(res);
      setItems(productsArr);
    });
  }, []);
  const name = props.userSession.current
    ? props.userSession.current.user.name
    : 'none';

  const renderHeader = (props: any) => {
    return (
      <View
        style={{
          width: '100%',
          height: 175,
          // position: 'absolute'
        }}>
        <ImageBackground
          source={require('../Shared/TopBacksplash.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 70,
            }}>
            <Text style={{fontSize: 50, color: '#000', marginTop: 10}}>
              Welcome Home
            </Text>
            {/* <Text style={{
              marginTop: 10,
              fontSize: 35,
              fontStyle: 'italic'
              // fontWeight: 'bold'
            }}> {name} </Text> */}
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {renderHeader(props)}
      <Text
        style={{
          marginTop: 20,
          fontSize: 25,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
        }}>
        History
      </Text>

      <View
        style={{
          marginVertical: 10,
        }}>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <View>
              <History title={item.name} onPress={() => {}} />
            </View>
          )}
        />
      </View>

      {/* <Text>{props.userSession.current ? JSON.stringify(props.userSession.current) : 'no user session'}</Text> */}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
