import { ActionTypes, ShowFormAction, ShowMenuAction } from "./types";

export function setShowForm(value: boolean): ShowFormAction {
    return {
        type: ActionTypes.SHOW_FORM,
        payload: value,
    };
}

export function setShowMenu(value: boolean): ShowMenuAction {
    return {
        type: ActionTypes.SHOW_MENU,
        payload: value,
    };
}