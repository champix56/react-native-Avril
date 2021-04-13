export const initialState={window:null,login:'',password:''};
export const CORE_ACTIONS_TYPE=Object.freeze({
    SET_PASSWORD:'SET_PASSWORD',
    SET_LOGIN:'SET_LOGIN'
})
export default function reducer(state=initialState,action){
    switch(action.type){
        case CORE_ACTIONS_TYPE.SET_PASSWORD:return {...state,password:action.value};
        case CORE_ACTIONS_TYPE.SET_LOGIN:return {...state,login:action.value};
        default : return state;
    }
}