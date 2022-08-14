import { CATEGORIES, ALLPRODUCTS } from '../../Data/DummyData'
import { addToCartActionConstant,
    deleteCartItemCont } from '../Actions/ProductActionConstants'

const initialState = {
    allCategories: CATEGORIES,
    allProduct: ALLPRODUCTS,
    myCart: [],
    itemquantity: ALLPRODUCTS.quantity
};

export default (state = initialState, action) => {
    switch (action.type) {
        case addToCartActionConstant.ADD_TO_CART_SUCC:
            const itemData = state.myCart.find( i => i.id == action.cartItem.id);
            if (itemData) {
                alert('already exist')
                
            } else{
                state = {
                    ...state,
                    myCart: [...state.myCart, action.cartItem]
                };
            }

            case deleteCartItemCont.DELETE_CART_ITEM:
                state= {
                    ...state,
                    myCart:state.myCart.filter((i)=>i.id !== action.itemId),
                };
                break;
    
}
return state
};