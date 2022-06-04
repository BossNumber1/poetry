import { AnyAction, combineReducers } from "redux";
import { profileReducer, InitialState } from "./profileReducer";
import {HYDRATE} from "next-redux-wrapper";

export interface ApplicationState {
    profile: InitialState;
}

export const rootReducer = combineReducers<ApplicationState>({
    profile: profileReducer,
});

export const reducer = (state: ApplicationState, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state, 
            ...action.payload, 
        }
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof reducer>
