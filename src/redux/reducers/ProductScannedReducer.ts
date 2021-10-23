const PRODUCT_SCAN_INITIAL_STATE = {
  current: undefined,
};

export const productScanReducer = (
  state = PRODUCT_SCAN_INITIAL_STATE,
  action: any,
) => {
  let {current} = state;

  switch (action.type) {
    case 'SET_PRODUCT_SCAN':
      current = action.payload;

      const newProductScan = {current};

      return newProductScan;
    default:
      return state;
  }
};
