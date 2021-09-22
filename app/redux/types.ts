export enum ActionTypes {
    SHOW_FORM = "SHOW_FORM",
    SHOW_MENU = "SHOW_MENU",
    READ_VERSE = "READ_VERSE", 
    EPILOGUE = "EPILOGUE"
}

export interface ShowFormAction {
    type: ActionTypes.SHOW_FORM, 
    payload: boolean
}

export interface ShowMenuAction {
    type: ActionTypes.SHOW_MENU, 
    payload: boolean
}

export interface ReadVerseAction {
    type: ActionTypes.READ_VERSE, 
    payload: boolean
}

export interface EpilogueAction {
    type: ActionTypes.EPILOGUE, 
    payload: string
}

export type AllActions = ShowFormAction | ShowMenuAction | ReadVerseAction | EpilogueAction