import * as types from './../constants/ActionType';


export const actAddToCart=(product,quantity)=>{
    return {
        type: types.ADD_TO_CART,
        product,//product: product
        quantity
    }
};
export const actSubToCart=(product,quantity)=>{
    return {
        type : types.SUB_TO_CART,
        product,
        quantity
    }
};
