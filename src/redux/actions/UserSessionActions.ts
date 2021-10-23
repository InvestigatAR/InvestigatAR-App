export const setUserSession = (userSession: any) => ({
  type: 'SET_USER_SESSION',
  payload: userSession,
});

export const setProductScan = (productScan: any) => ({
  type: 'SET_PRODUCT_SCAN',
  payload: productScan,
});
