import {MENU_ACTION_TYPE} from '../../../app/constant';

export function addFBMenu(food, bev) {
    return {
        type: MENU_ACTION_TYPE.ADD_FB_MENU,
        payload: {
            food, bev
        }
    }
}
