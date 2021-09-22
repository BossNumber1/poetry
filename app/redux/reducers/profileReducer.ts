import { ActionTypes, AllActions } from "../types";

interface InitialState {
    showForm: boolean;
    showMenu: boolean;
}

const initialState: InitialState = {
    showForm: false,
    showMenu: false
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
        default:
            return state;
    }
};
