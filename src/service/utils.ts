import {AsyncStorage} from 'react-native';

export const addProductToStorage = (prod: any) => {
  AsyncStorage.getItem('productList').then((res: any) => {
    let curProdArr: Array<any> = [];

    if (res !== undefined && res !== null) {
      curProdArr = JSON.parse(res);
    }

    for (let i = 0; i < curProdArr.length; i++) {
      if (curProdArr[i].id === prod.id) {
        curProdArr.splice(i, 1);
      }
    }
    //
    // // only add product if it is not already in storage array
    // if (
    //   !curProdArr.some(product => {
    //     return product.id === prod.id;
    //   })
    // ) {
    //   curProdArr.push(prod);
    // }

    curProdArr.push(prod);

    AsyncStorage.setItem('productList', JSON.stringify(curProdArr));
  });
};

export const getProductsFromStorage = () => {
  return AsyncStorage.getItem('productList');
};
