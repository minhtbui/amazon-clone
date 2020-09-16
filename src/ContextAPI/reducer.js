export const initialState = {
   cart: [],
   user: null,
   theme: 'light',
   data: [],
};

export const getSubTotalCart = (cart) =>
   cart?.reduce((total, cur) => total + cur.qty * cur.price, 0);

export const getItemsCart = (cart) =>
   cart?.reduce((total, cur) => total + cur.qty, 0);

const reducer = (state, action) => {
   switch (action.type) {
      case 'SET_MODE':
         return {
            ...state,
            theme: action.theme,
         };

      case 'ADD_PRODUCT_DATA':
         return {
            ...state,
            data: action.response,
         };

      case 'ADD_TO_CART':
         let addedItem = action.item;
         let existedItem = state.cart.find(
            (item) => action.item.id === item.id,
         );

         if (!existedItem) {
            return {
               ...state,
               cart: [...state.cart, addedItem],
            };
         } else {
            existedItem.qty += addedItem.qty;
            return {
               ...state,
            };
         }

      case 'REMOVE_FROM_CART':
         const index = state.cart.findIndex((item) => item.id === action.id);
         let newCart = [...state.cart];
         index >= 0
            ? newCart.splice(index, 1)
            : console.warn(
                 `Can't remove product (id: ${action.item.id}) as it's not in the cart!`,
              );
         return {
            ...state,
            cart: newCart,
         };

      case 'EMPTY_CART':
         return {
            ...state,
            cart: [],
         };

      case 'UPDATE_ITEM':
         let updatedItem = state.cart.find((item) => action.id === item.id);

         if (updatedItem) {
            updatedItem.qty = action.qty;
         }
         return {
            ...state,
         };

      case 'SET_USER':
         return {
            ...state,
            user: action.user,
         };
      default:
         return state;
   }
};

export default reducer;
