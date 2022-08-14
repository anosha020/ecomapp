import {
    addToCartActionConstant,
    deleteCartItemCont
} from '../Actions/ProductActionConstants'

export const addToCartAction =(item,quantity)=>{
    return async dispatch=>{
        dispatch({
            type:addToCartActionConstant.ADD_TO_CART_SUCC,
            cartItem: item,
        }
        );
        
    };
};

export const deleteCartItem =(id)=>{
    return async dispatch=>{
        dispatch({
            type:deleteCartItemCont.DELETE_CART_ITEM,
            itemId: id,
        }
        );
        
    };
};