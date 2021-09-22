module.exports = function VerseSwitch(
    readVerse: boolean, 
    setVerseNumber: (arg: number) => void, 
    setReadVerse: (arg: boolean) => void, 
    verseNumber: number, 
    versesArray: [], 
    setEpilogue: (arg: string) => void
) {
    if (readVerse === false) {
        setVerseNumber(0);
        setReadVerse(true);
    } else if (+verseNumber < versesArray.length - 1) {
        setVerseNumber(+verseNumber + 1);
    } else if (+verseNumber === versesArray.length - 1) {
        setEpilogue(
            `<div style="margin-bottom: 32px; font-size: 26px;">The end</div><div style="color: rgb(83, 83, 83); font-size: 13px; font-style: italic;">Рассказать друзьям :)</div>`
        );
    }

    (document.getElementsByClassName("fifthBlock")[0] as HTMLElement).style.paddingTop = "0";
    (document.getElementsByClassName("sixthBlock")[0] as HTMLElement).style.display = "none";
};