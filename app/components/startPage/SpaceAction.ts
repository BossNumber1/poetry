const verseSwitch = require("../startPage/verseSwitch");

module.exports = function SpaceAction(
        readVerse: boolean, 
        setVerseNumber: (arg: number) => void, 
        setReadVerse: (arg: boolean) => void, 
        verseNumber: number, 
        versesArray: [], 
        setEpilogue: (arg: string) => void
    ) {
        let distributor = function (event: KeyboardEvent) {
            if (event.code === "Space") {
                event.preventDefault();
                verseSwitch(readVerse, setVerseNumber, setReadVerse, verseNumber, versesArray, setEpilogue);
                document.removeEventListener("keydown", distributor);
            }
        }
        
        document.addEventListener("keydown", distributor);
}