import { ActionTypes, AllActions } from "../types";

interface InitialState {
    showForm: boolean;
}

const initialState: InitialState = {
    showForm: false
};

export const profileReducer = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case ActionTypes.SHOW_FORM:
            return {
                ...state,
                showForm: action.payload,
            };
        default:
            return state;
    }
};
