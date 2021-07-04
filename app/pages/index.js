import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Player from "../components/Player.jsx";
import PictureForPoetry from "../components/PictureForPoetry.jsx";
import Form from "../components/Form.jsx";

export default function Home() {
    const [poetry, setPoetry] = React.useState("");
    const [onMusic, setOnMusic] = React.useState(false);
    const [imgMusic, setImgMusic] = React.useState("/play.png");

    let scriptArray = [
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

        {
            ava: "https://images.unsplash.com/photo-1624530639434-4501dc033afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI1Mg&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff33",
            text: ` <div>3</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1623207138972-d969a1459153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI1Ng&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff44",
            text: ` <div>4</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1625042880626-3705c85a4bbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI1OQ&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff55",
            text: ` <div>5</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1623157470065-926c7eccb394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI2Mw&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff66",
            text: ` <div>6</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1614119391660-0480c9ad4c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI3MA&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff77",
            text: ` <div>7</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1623207043151-9ff0dd2ba8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI3MQ&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff88",
            text: ` <div>8</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1624722960672-049c8b616649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI3Ng&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff99",
            text: ` <div>9</div>
                    <div>стих</div>`,
        },

        {
            ava: "https://images.unsplash.com/photo-1623001312783-01ccef32a7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTMxNDI0Ng&ixlib=rb-1.2.1&q=80&w=1080",
            nameAuthor: "ff10",
            text: ` <div>10</div>
                    <div>стих</div>`,
        },
    ];

    React.useEffect(() => {
        // localStorage.setItem("hram", JSON.stringify(scriptArray));
        localStorage.setItem("selectedScriptSection", "false");
        localStorage.setItem(
            "selectedText",
            `<div>приветствую, о, милый путник</div><div>нажимаешь на пробел и погружаешься в мир стихов</div>
                <p>погнаааали! 🤘</p>`
        );
        // localStorage.setItem("nameAuthor", "mu");
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

                    let lux = localStorage.getItem("selectedScriptSection");
                    // let lex = JSON.parse(localStorage.getItem("hram"));

                    if (lux === "false") {
                        localStorage.setItem("selectedScriptSection", "0");
                    } else if (lux === "0") {
                        localStorage.setItem("selectedScriptSection", "1");
                    } else if (Number(lux) > 1 && Number(lux) < 8) {
                        localStorage.setItem(
                            "selectedScriptSection",
                            String(Number(lux) + 1)
                        );
                    } else if (lux === "9") {
                        localStorage.removeItem("selectedScriptSection");
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
                localStorage.setItem("selectedText", scriptArray[0].text);
                localStorage.setItem("nameAuthor", scriptArray[0].nameAuthor);
                localStorage.setItem("avatarka", scriptArray[0].ava);
                localStorage.setItem("picture", scriptArray[0].picture);
            } else {
                setSelectedScriptSection(Number(selectedScriptSection) + 1);

                let gg = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].text
                    : "конец";

                let gg2 = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].nameAuthor
                    : "";

                let gg3 = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].ava
                    : "";

                let gg4 = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].picture
                    : "";

                localStorage.setItem("selectedText", gg);
                localStorage.setItem("nameAuthor", gg2);
                localStorage.setItem("avatarka", gg3);
                localStorage.setItem("picture", gg4);
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
        <div className={styles.container}>
            <Head>
                <title>Пробел Поэзии</title>
                <meta name="description" content="Стихи в новом формате" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="body_page2">
                    <div className="topBlock2">
                        <Player
                            onMusic={onMusic}
                            imgMusic={imgMusic}
                            switchOnSwitchOff={switchOnSwitchOff}
                        />
                    </div>
                    <div className="blockBelow2">
                        <div style={{ display: "flex", marginLeft: 20 }}>
                            {typeof window !== "undefined" &&
                                localStorage.getItem("selectedScriptSection") &&
                                localStorage.getItem("selectedText") !==
                                    "конец" &&
                                Number(
                                    localStorage.getItem(
                                        "selectedScriptSection"
                                    )
                                ) < scriptArray.length && (
                                    <div
                                        className="avatar"
                                        style={{ borderRadius: 50 }}
                                        data-title={localStorage.getItem(
                                            "nameAuthor"
                                        )}
                                    >
                                        <img
                                            src={localStorage.getItem(
                                                "avatarka"
                                            )}
                                            width={74}
                                            height={74}
                                            alt="аватарка автора"
                                        ></img>
                                    </div>
                                )}

                            {typeof window !== "undefined" &&
                                localStorage.getItem(
                                    "selectedScriptSection"
                                ) && (
                                    <div
                                        style={{
                                            marginLeft: 30,
                                            // position: "absolute"
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: localStorage.getItem(
                                                "selectedText"
                                            ),
                                        }}
                                    />
                                )}
                        </div>

                        <PictureForPoetry
                            selectedScriptSection={selectedScriptSection}
                        />

                        <Form />
                    </div>
                </div>
            </main>
        </div>
    );
}
