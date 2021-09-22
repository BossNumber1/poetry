import { ActionTypes, AllActions } from "../types";

interface InitialState {
    showForm: boolean;
    showMenu: boolean;
    readVerse: boolean;
    epilogue: string;
    verseNumber: number;
}

const initialState: InitialState = {
    showForm: false,
    showMenu: false,
    readVerse: false,
    epilogue: "",
    verseNumber: 0
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
        case ActionTypes.EPILOGUE:
            return {
                ...state,
                epilogue: action.payload,
            };  
        case ActionTypes.VERSE_NUMBER:
            return {
                ...state,
                verseNumber: action.payload,
            };  
        default:
            return state;
    }
};
