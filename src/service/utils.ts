import {AsyncStorage} from 'react-native';

export const addProductToStorage = (prod: any) => {
  AsyncStorage.getItem('productList').then((res: any) => {
    let curProdArr: Array<any> = [];

    if (res !== undefined && res !== null) {
      curProdArr = res;
    }

    // only add product if it is not already in storage array
    if (
      !curProdArr.some(product => {
        return product.id === prod.id;
      })
    ) {
      curProdArr.push(prod);
    }

    AsyncStorage.setItem('productList', JSON.stringify(curProdArr));
  });
};

export const getProductsFromStorage = () => {
  return AsyncStorage.getItem('productList');
};
