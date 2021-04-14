import { REST_SRV } from "../config/config";
import store from "./store";

export const productInitialState={products:[]};
export const PRODUCTS_ACTIONS_TYPE=Object.freeze({
    ADD_PRODUCT:'ADD_PRODUCT',
    ADD_PRODUCTS:'ADD_PRODUCTS',
    REPLACE_PRODUCTS:'REPLACE_PRODUCTS'
})
export default function reducer(state=productInitialState,action){
    console.log(action.type);
    console.log(action.value);
    if(action.type.includes('@@redux/INIT')&& state.products.length===0){
        action.type='@@redux/INIT';
    }
    switch(action.type){
        case '@@redux/INIT':
            fetch(`${REST_SRV}/products`)
                .then((ret)=>ret.json(),()=>{console.log('Fetch error');})
                .then((arr)=>{
                    console.log('--prrecievd')
                   store.dispatch({type:PRODUCTS_ACTIONS_TYPE.REPLACE_PRODUCTS,values:arr}) 
                   console.log('END then produit init')
                   return arr;
                })
        return state;
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCT:return {...state,products:[...state.products,action.value]};
        case PRODUCTS_ACTIONS_TYPE.ADD_PRODUCTS:return {...state,products:[...state.products,...action.values]};
        case PRODUCTS_ACTIONS_TYPE.REPLACE_PRODUCTS:return {...state,products:[...action.values]};
        default : return state;
    }
}