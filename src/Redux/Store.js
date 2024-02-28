import { createStore } from 'redux'
const reducer = (state = [], action) =>{
    switch(action.type){
        case "Add" : 
        {
            state = [...state , action.data];
            return state;
        }
        case "Clear" : 
        {
            state = [];
            return state;
        }
        default :
        return state
    }
}
export const Store  = createStore(reducer);