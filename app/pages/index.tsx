import React from "react";
import axios from "axios";
import TopBlock from "../components/topBlock/TopBlock";
import BlockBelow from "../components/blockBelow/BlockBelow";
import VerseAddingForm from "../components/VerseAddingForm";
import Swiper from "swiper";

export default function Home() {
    const [showForm, setShowForm] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const [versesArray, setVersesArray] = React.useState<[]>([]);
    const [readVerse, setReadVerse] = React.useState(false);
    const [verseNumber, setVerseNumber] = React.useState(0);
    const [epilogue, setEpilogue] = React.useState("");

    React.useEffect(() => {
        axios.get(`http://localhost:80/api/getAllVerses/`).then((response) => {
            setVersesArray(response.data);
        });
    }, []);

    React.useEffect(() => {
        document.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                event.preventDefault();
                verseSwitch();
            }
        });

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
                verseSwitch();
            }
        });

        let verseSwitch = function () {
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
    }, [verseNumber, versesArray, readVerse]);

    return (
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="body_page">
                                <TopBlock
                                    setShowForm={setShowForm}
                                    showForm={showForm}
                                    setShowMenu={setShowMenu}
                                    showMenu={showMenu}
                                    readVerse={readVerse}
                                />
                                <BlockBelow
                                    versesArray={versesArray}
                                    verseNumber={verseNumber}
                                    epilogue={epilogue}
                                    readVerse={readVerse}
                                />
                                <div className="etc">
                                    {showForm && showMenu && (
                                        <VerseAddingForm />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
