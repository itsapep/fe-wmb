import {MENU_ACTION_TYPE} from "../../../app/constant";

const menuInitialState = {
    foods: [],
    beverages: []
}

export function menuReducer(state = menuInitialState, action) {
    switch (action.type) {
        case MENU_ACTION_TYPE.ADD_FB_MENU:
            return {...menuInitialState, foods: [...action.payload.food], beverages: [...action.payload.bev]};
        default:
            return state
    }
}