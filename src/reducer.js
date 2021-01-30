export const initialState = {
    cart: [],
    userInfo: null,
//    isLogin= false
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return{...state, userInfo: action.item};
      case "LOGOUT":
        return{...state, userInfo: action.item};  
      case "UPDATE":
        return { ...state, userInfo: action.item };
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      case "REMOVE_TO_CART":
        return { state };
      default:
        return state;
    }
  };
  
  export default reducer;