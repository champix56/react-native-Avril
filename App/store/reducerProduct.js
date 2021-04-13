export const productInitialState={products:[]};
export const PRODUCTS_ACTIONS_TYPE=Object.freeze({
    ADD_PRODUCT:'ADD_PRODUCT',
    ADD_PRODUCTS:'ADD_PRODUCTS'
})
export default function reducer(state=productInitialState,action){
    console.log(action.type);
    console.log(action.value);
    switch(action.type){
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCT:return {...state,products:[...state.products,action.value]};
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCTS:return {...state,products:[...state.products,...action.values]};
        default : return state;
    }
}