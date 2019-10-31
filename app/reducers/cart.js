import * as types from './../constants/ActionType';

var initialState=[
];
const cart =(state=initialState,action)=>{
  var arrState=[...state];
  var {product,quantity} = action;
  var test=0;
    switch (action.type){
        case types.ADD_TO_CART :
          arrState.push({
            product,
            quantity
          });
        
          return arrState;
          ;
        default : return [...state];
    }
}

export default cart;