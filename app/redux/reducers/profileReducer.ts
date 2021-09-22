import { ActionTypes, AllActions } from "../types";

interface InitialState {
    showForm: boolean;
    showMenu: boolean;
    readVerse: boolean;
}

const initialState: InitialState = {
    showForm: false,
    showMenu: false,
    readVerse: false
};

export const profileReducer = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case ActionTypes.SHOW_FORM:
            return {
                ...state,
                showForm: action.payload,
            };
        case ActionTypes.SHOW_MENU:
            return {
                ...state,
                showMenu: action.payload,
            };
        case ActionTypes.READ_VERSE:
            return {
                ...state,
                readVerse: action.payload,
            };
        default:
            return state;
    }
};
