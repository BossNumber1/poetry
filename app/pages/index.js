import React from "react";
import Head from "next/head";
import axios from "axios";
import TopBlock from "../components/topBlock/TopBlock";
import BlockBelow from "../components/blockBelow/BlockBelow";
import VerseAddingForm from "../components/VerseAddingForm";

export default function Home() {
    const [poetry, setPoetry] = React.useState("");
    const [onMusic, setOnMusic] = React.useState(false);
    const [imgMusic, setImgMusic] = React.useState("/play.png");
    const [showForm, setShowForm] = React.useState(false);
    const [scriptArray, setScriptArray] = React.useState(false);

    const [showMenu, setShowMenu] = React.useState(false);

    let scriptArray2 = [
        {
            ava: "https://images.unsplash.com/photo-1623084938405-0390c1d86ce8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            nameAuthor: "Мой Устимов",
            text: ` <div>и мы, счастливые, спали в стогу...</div>
                    <div> я без тебя прожить </div>
                    <div>не смогу.</div>`,
            picture: "one.jpg",
        },

        {
            ava: "https://images.unsplash.com/photo-1624788998878-c25950fecdc1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            nameAuthor: "Ах Астахова",
            text: ` <div>если вдруг станет на сердце пусто,</div>
                    <div>вспоминай наше светлое чувство.</div>`,
            picture: "two.jpg",
        },
    ];

    React.useEffect(() => {
        axios.get(`http://localhost:80/api/getAllVerses/`).then((response) => {
            setScriptArray(response.data);
            // console.log(response.data);
        });
    }, []);

    React.useEffect(() => {
        localStorage.setItem("selectedScriptSection", "false");
        localStorage.setItem(
            "selectedText",
            `<div style="line-height: 30px"><div>Приветствую, о, милый путник.</div><div>Нажимаешь на пробел и погружаешься в мир стихов.</div>
                <p>Погнаааали! 🤘</p></div>`
        );
    }, []);

    const [selectedScriptSection, setSelectedScriptSection] =
        React.useState(false);

    React.useEffect(() => {
        let randomn = [];

        function runOnKeys(func) {
            let listener = function (event) {
                if (
                    event.code == "Space" &&
                    localStorage.getItem("selectedScriptSection")
                ) {
                    randomn = [];

                    let LSSelectedScriptSection = localStorage.getItem(
                        "selectedScriptSection"
                    );

                    if (LSSelectedScriptSection === "false") {
                        localStorage.setItem("selectedScriptSection", "0");
                        document.getElementsByClassName("sixthBlock") &&
                            document.getElementById("sixthBlockId") &&
                            document.getElementById("sixthBlockId").remove();
                    } else if (LSSelectedScriptSection === "0") {
                        localStorage.setItem("selectedScriptSection", "1");
                        document.getElementsByClassName("sixthBlock") &&
                            document.getElementById("sixthBlockId") &&
                            document.getElementById("sixthBlockId").remove();
                    } else if (
                        Number(LSSelectedScriptSection) > 1 &&
                        Number(LSSelectedScriptSection) < 8
                    ) {
                        localStorage.setItem(
                            "selectedScriptSection",
                            String(Number(LSSelectedScriptSection) + 1)
                        );
                        document.getElementById("sixthBlockId") &&
                            document.getElementById("sixthBlockId").remove();
                    } else if (LSSelectedScriptSection === "9") {
                        localStorage.removeItem("selectedScriptSection");
                        document.getElementById("sixthBlockId") &&
                            document.getElementById("sixthBlockId").remove();
                    }

                    func();
                    document.removeEventListener("keydown", listener);
                }
            };

            document.addEventListener("keydown", listener);
        }

        runOnKeys(() => setPoetry(randomn));

        if (poetry !== "") {
            if (selectedScriptSection === false) {
                setSelectedScriptSection(0);
                localStorage.setItem("selectedText", scriptArray[0].verse);
                localStorage.setItem("nameAuthor", scriptArray[0].nameAuthor);
                localStorage.setItem("avatarka", scriptArray[0].avatar);
                localStorage.setItem("picture", scriptArray[0].illustration);
                localStorage.setItem("publicLink", scriptArray[0].publicLink);
            } else {
                setSelectedScriptSection(Number(selectedScriptSection) + 1);

                let counterSelectedText = scriptArray[
                    Number(selectedScriptSection) + 1
                ]
                    ? scriptArray[Number(selectedScriptSection) + 1].verse
                    : "конец";

                let counterNameAuthor = scriptArray[
                    Number(selectedScriptSection) + 1
                ]
                    ? scriptArray[Number(selectedScriptSection) + 1].nameAuthor
                    : "";

                let counterAvatarka = scriptArray[
                    Number(selectedScriptSection) + 1
                ]
                    ? scriptArray[Number(selectedScriptSection) + 1].avatar
                    : "";

                let counterPicture = scriptArray[
                    Number(selectedScriptSection) + 1
                ]
                    ? scriptArray[Number(selectedScriptSection) + 1]
                          .illustration
                    : "";

                let counterPublicLink = scriptArray[
                    Number(selectedScriptSection) + 1
                ]
                    ? scriptArray[Number(selectedScriptSection) + 1].publicLink
                    : "";

                localStorage.setItem("selectedText", counterSelectedText);
                localStorage.setItem("nameAuthor", counterNameAuthor);
                localStorage.setItem("avatarka", counterAvatarka);
                localStorage.setItem("picture", counterPicture);
                localStorage.setItem("publicLink", counterPublicLink);
            }
        }
    }, [poetry]);

    let switchOnSwitchOff = () => {
        document.getElementById("track").volume = 0.1;

        if (onMusic === false) {
            document.getElementById("track").play();
            setOnMusic(!onMusic);
            setImgMusic("/pause.png");
        } else {
            document.getElementById("track").pause();
            setImgMusic("/play.png");
            setOnMusic(!onMusic);
        }
    };

    return (
        <>
            <Head>
                <title>Пробел Поэзии</title>
                <meta name="description" content="Стихи в новом формате" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="body_page">
                    <TopBlock
                        onMusic={onMusic}
                        imgMusic={imgMusic}
                        switchOnSwitchOff={switchOnSwitchOff}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                    />
                    <BlockBelow
                        selectedScriptSection={selectedScriptSection}
                        scriptArray={scriptArray}
                    />

                    <div className="etc">
                        {showForm && showMenu && <VerseAddingForm />}
                    </div>
                </div>
            </main>
        </>
    );
}
