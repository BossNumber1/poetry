export enum ActionTypes {
    SHOW_FORM = "SHOW_FORM"
}

export interface ShowFormAction {
    type: ActionTypes.SHOW_FORM, 
    payload: boolean
}

export type AllActions = ShowFormAction