import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer, RootState} from "../redux/reducers/rootReducer";

const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
