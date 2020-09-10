export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    //console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //whatever we return that is how the new data layer looks like
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id})as it's not in the basket!`);
            }
            return {
                ...state,
                basket: newBasket
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price+amount, 0);

export default reducer;