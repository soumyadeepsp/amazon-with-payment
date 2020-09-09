export const initialState = {
    basket: [],
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
        default:
            return state;
    }
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price+amount, 0);

export default reducer;