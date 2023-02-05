const SET_PRODUCTS = 'SET_PRODUCT';
const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
const UNSELECTED_PRODUCT = 'UNSELECTED_PRODUCT';

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  }
}

const initialState = {
  products: {
    id: 1,
    title: 'book',
    category: 'second',
  },
};


export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return state;

      default:
      return state;
  }
};  