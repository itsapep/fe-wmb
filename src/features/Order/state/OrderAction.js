import {ORDER_ACTION_TYPE} from "../../../app/constant";

export function addOrder(menu, qty) {
    return {
        type: ORDER_ACTION_TYPE.ADD_ORDER,
        payload: {
            menu,
            qty,
        }
    }
}
export function clearOrder() {
    return {
        type: ORDER_ACTION_TYPE.CLEAR_ORDER,
    }
}