const verseSwitch = require("../startPage/verseSwitch");

module.exports = function SpaceAction(
        readVerse: boolean, 
        setVerseNumber: (arg: number) => void, 
        setReadVerse: (arg: boolean) => void, 
        verseNumber: number, 
        versesArray: [], 
        setEpilogue: (arg: string) => void
    ) {
        document.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                event.preventDefault();
                verseSwitch(readVerse, setVerseNumber, setReadVerse, verseNumber, versesArray, setEpilogue);
            }
        }
    );
}