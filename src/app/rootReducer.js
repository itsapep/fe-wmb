import { combineReducers } from "redux";
import { menuReducer } from '../features/Menu/state/MenuReducer'
import { orderReducer } from '../features/Order/state/OrderReducer'


export function rootReducer(){
    return combineReducers({
        menuReducer,
        orderReducer,
    })
}
