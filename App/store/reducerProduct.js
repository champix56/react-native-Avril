export const productInitialState={products:[]};
export const PRODUCTS_ACTIONS_TYPE=Object.freeze({
    ADD_PRODUCT:'ADD_PRODUCT',
    ADD_PRODUCTS:'ADD_PRODUCTS'
})
export default function reducer(state=productInitialState,action){
    switch(action.type){
        case CORE_ACTIONS_TYPE.ADD_PRODUCT:return {...state,products:[...state.products,action.value]};
        case CORE_ACTIONS_TYPE.ADD_PRODUCTS:return {...state,products:[...state.products,...action.values]};
        default : return state;
    }
}