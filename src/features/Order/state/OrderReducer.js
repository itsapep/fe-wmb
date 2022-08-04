import {ORDER_ACTION_TYPE} from "../../../app/constant";

const orderInitialState = {
    orderItems: [],
    total: 0
}

export function orderReducer(state = orderInitialState, action) {
    switch (action.type) {
        case ORDER_ACTION_TYPE.ADD_ORDER:
            const orderItem = action.payload;
            const newOrderItems = [...state.orderItems, orderItem]
            let total = 0;
            for (let order of newOrderItems) {
                total = total + (order.qty * order.menu.menuPrice);
            }
            return {...orderInitialState, orderItems: newOrderItems, total: total};
        case ORDER_ACTION_TYPE.CLEAR_ORDER:
            return {...orderInitialState, orderItems: [], total: 0};
        default:
            return state
    }
}