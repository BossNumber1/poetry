import { ActionTypes, EpilogueAction, ReadVerseAction, ShowFormAction, ShowMenuAction, VerseNumberAction } from "./types";

export function setShowForm(value: boolean): ShowFormAction {
    return {
        type: ActionTypes.SHOW_FORM,
        payload: value,
    };
}

export function setShowMenu(value: boolean): ShowMenuAction {
    return {
        type: ActionTypes.SHOW_MENU,
        payload: value,
    };
}

export function setReadVerse(value: boolean): ReadVerseAction {
    return {
        type: ActionTypes.READ_VERSE,
        payload: value,
    };
}

export function setEpilogue(value: string): EpilogueAction {
    return {
        type: ActionTypes.EPILOGUE,
        payload: value,
    };
}

export function setVerseNumber(value: number): VerseNumberAction {
    return {
        type: ActionTypes.VERSE_NUMBER,
        payload: value,
    };
}