import Swiper from "swiper";
const verseSwitch = require("../startPage/verseSwitch");

module.exports = function SwiperAction(
        readVerse: boolean, 
        setVerseNumber: (arg: number) => void, 
        setReadVerse: (arg: boolean) => void, 
        verseNumber: number, 
        versesArray: [], 
        setEpilogue: (arg: string) => void
    ) {
        let swiper = new Swiper(".swiper-container", {
            pagination: {
                el: ".swiper-pagination",
            },
        });

        let startMoveEvent: number;

        swiper.on("touchStart", (e) => {
            startMoveEvent = e.touches.currentX;
        });

        swiper.on("touchEnd", (e) => {
            if (e.touches.currentX != startMoveEvent) {
                verseSwitch(
                    readVerse, 
                    setVerseNumber, 
                    setReadVerse, 
                    verseNumber, 
                    versesArray, 
                    setEpilogue
                );
            }
        }
    );
}