import React from "react";
import Head from "next/head";
import axios from "axios";
import TopBlock from "../components/topBlock/TopBlock";
import BlockBelow from "../components/blockBelow/BlockBelow";
import VerseAddingForm from "../components/VerseAddingForm";
import Swiper from "swiper";

export default function Home() {
    const [showForm, setShowForm] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const [versesArray, setVersesArray] = React.useState(false);
    const [verseNumber, setVerseNumber] = React.useState("false");
    const [epilogue, setEpilogue] = React.useState(false);

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

        let startMoveEvent;

        swiper.on("touchStart", (e) => {
            startMoveEvent = e.touches.currentX;
        });

        swiper.on("touchEnd", (e) => {
            if (e.touches.currentX != startMoveEvent) {
                verseSwitch();
            }
        });

        let verseSwitch = function () {
            if (verseNumber === "false") {
                setVerseNumber(0);
            } else if (+verseNumber < versesArray.length - 1) {
                setVerseNumber(+verseNumber + 1);
            } else if (+verseNumber === versesArray.length - 1) {
                setEpilogue(
                    `<div style="margin-bottom: 32px; font-size: 26px;">The end</div><div style="color: rgb(83, 83, 83); font-size: 13px; font-style: italic;">Рассказать друзьям :)</div>`
                );
            }

            document.getElementsByClassName("fifthBlock")[0].style =
                "padding-top: 0";
            document.getElementsByClassName("sixthBlock")[0].style =
                "display: none";
        };
    }, [verseNumber, versesArray]);

    return (
        <>
            <Head>
                <title>Пробел Поэзии</title>
                <meta name="description" content="Стихи в новом формате" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="body_page">
                                <TopBlock
                                    setShowForm={setShowForm}
                                    showForm={showForm}
                                    setShowMenu={setShowMenu}
                                    showMenu={showMenu}
                                    verseNumber={verseNumber}
                                />
                                <BlockBelow
                                    versesArray={versesArray}
                                    verseNumber={verseNumber}
                                    epilogue={epilogue}
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
            </main>
        </>
    );
}
