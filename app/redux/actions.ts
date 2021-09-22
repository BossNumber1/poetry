import { ActionTypes, ReadVerseAction, ShowFormAction, ShowMenuAction } from "./types";

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

export function setReadVerse(value: boolean): ReadVerseAction {
    return {
        type: ActionTypes.READ_VERSE,
        payload: value,
    };
}