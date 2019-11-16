import * as types from './../constants/ActionType';


var initialState = [
    {
        username : "admin",
        password : "admin"
    }
];
const user =(state=initialState,action)=>{
    switch (action.type){
        case types.ADD_TO_PERSIST :
            
            return [...state];


        default : return [...state];
    }
}

export default user;
//
// switch (action.type) {
//     case types.ADD_TO_CART:
//       index = findProduct(state, product);
//       if (index != -1) {
//         state[index].quantity += quantity;
//       } else {
//         state.push({
//           product,
//           quantity,
//         });
//       }
//       return [...state];