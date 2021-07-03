import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Player from "../components/Player.jsx";
import PictureForPoetry from "../components/PictureForPoetry.jsx";

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
        },

        {
            ava: "https://images.unsplash.com/photo-1624788998878-c25950fecdc1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            nameAuthor: "Ах Астахова",
            text: ` <div>если вдруг станет на сердце пусто,</div>
                    <div>вспоминай наше светлое чувство.</div>`,
        },

        {
            ava: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Phase_Portrait_Unstable_Focus.svg/800px-Phase_Portrait_Unstable_Focus.svg.png",
            nameAuthor: "ff33",
            text: ` <div>3</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff44",
            text: ` <div>4</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff55",
            text: ` <div>5</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff66",
            text: ` <div>6</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff77",
            text: ` <div>7</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff88",
            text: ` <div>8</div>
                    <div>стих</div>`,
        },

        {
            nameAuthor: "ff99",
            text: ` <div>9</div>
                    <div>стих</div>`,
        },

        {
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
            } else {
                setSelectedScriptSection(Number(selectedScriptSection) + 1);

                let gg = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].text
                    : "конец";

                let gg2 = scriptArray[Number(selectedScriptSection) + 1]
                    ? scriptArray[Number(selectedScriptSection) + 1].nameAuthor
                    : "";

                localStorage.setItem("selectedText", gg);
                localStorage.setItem("nameAuthor", gg2);
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
                                            src={scriptArray[2].ava}
                                            width={74}
                                            height={74}
                                            // style={{
                                            //     // display: "table-cell",
                                            //     // textAlign: "center",
                                            //     // verticalAlign: "middle",
                                            //     marginLeft: "auto",
                                            //     marginRight: "auto",
                                            // }}
                                        ></img>
                                        {/* <Image
                                            src="/ava.jpg"
                                            // src={scriptArray[0].ava}
                                            // src={
                                            //     "https://images.unsplash.com/photo-1623084938405-0390c1d86ce8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                                            // }
                                            alt="ava"
                                            width={74}
                                            height={74}
                                            style={{ borderRadius: 50 }}
                                        /> */}
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
                    </div>
                </div>
            </main>
        </div>
    );
}
