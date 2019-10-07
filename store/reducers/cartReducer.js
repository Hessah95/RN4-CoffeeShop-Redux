import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let addNewItem = state.items.find(
        item =>
          action.payload.drink === item.drink &&
          action.payload.option === item.option
      );

      if (addNewItem) {
        addNewItem.quantity += action.payload.quantity;
        return {
          ...state,
          items: [...state.items],
          quantity: state.quantity + action.payload.quantity
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload),
          quantity: state.quantity + action.payload.quantity
        };
      }

    case actionTypes.REMOVE_ITEM:
      return {
        // removes an item from the cart.
        ...state,
        items: state.items.filter(item => item !== action.payload),
        quantity: state.quantity - action.payload.quantity
      };

    case actionTypes.CHECKOUT:
      return {
        // empties the cart.
        ...state,
        items: [],
        quantity: 0
      };

    default:
      return state;
  }
};

export default cartReducer;
