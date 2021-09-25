module.exports = function verseSwitch(
    readVerse: boolean, 
    setVerseNumber: (arg: number) => void, 
    setReadVerse: (arg: boolean) => void, 
    verseNumber: number, 
    versesArray: [], 
    setEpilogue: (arg: string) => void
) {
    if (+verseNumber === versesArray.length - 1) {
        debugger
        setEpilogue(
            `<div style="margin-bottom: 32px; font-size: 26px;">The end</div><div style="color: rgb(83, 83, 83); font-size: 13px; font-style: italic;">Рассказать друзьям :)</div>`
        );
    } else if (verseNumber === null) {
        debugger
        setVerseNumber(0);
        setReadVerse(true); 
    } else {
        debugger
        setVerseNumber(+verseNumber + 1);
    }

    (document.getElementsByClassName("fifthBlock")[0] as HTMLElement).style.paddingTop = "0";
    (document.getElementsByClassName("sixthBlock")[0] as HTMLElement).style.display = "none";
};