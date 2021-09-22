export enum ActionTypes {
    SHOW_FORM = "SHOW_FORM",
    SHOW_MENU = "SHOW_MENU"
}

export interface ShowFormAction {
    type: ActionTypes.SHOW_FORM, 
    payload: boolean
}

export interface ShowMenuAction {
    type: ActionTypes.SHOW_MENU, 
    payload: boolean
}

export type AllActions = ShowFormAction | ShowMenuAction