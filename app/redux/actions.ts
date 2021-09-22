import { ActionTypes, ShowFormAction } from "./types";

export function setShowForm(value: boolean): ShowFormAction {
    return {
        type: ActionTypes.SHOW_FORM,
        payload: value,
    };
}


