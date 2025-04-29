// redux/cartReducer.js
const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const exists = state.find(item => item.id === action.payload.id);
      if (exists) {
        return state.map(item =>
          item.id === action.payload.id
            ? {...item, quantity: item.quantity + 1}
            : item,
        );
      }
      return [...state, {...action.payload, quantity: 1}];

    case 'CHANGE_QUANTITY':
      return state
        .map(item => {
          if (item.id === action.payload.id) {
            const updatedQuantity =
              action.payload.type === 'increase'
                ? item.quantity + 1
                : item.quantity - 1;
            return {...item, quantity: Math.max(updatedQuantity, 0)};
          }
          return item;
        })
        .filter(item => item.quantity > 0);

    default:
      return state;
  }
};

export default cartReducer;
