import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [poetry, setPoetry] = React.useState("");
    const [onMusic, setOnMusic] = React.useState(false);
    const [imgMusic, setImgMusic] = React.useState("/play.png");

    let scriptArray = [
        {
            text: ` <div>и мы, счастливые, спали в стогу...</div>
                    <div> я без тебя прожить </div>
                    <div>не смогу.</div>`,
        },

        {
            text: ` <div>если вдруг станет на сердце пусто,</div>
                    <div>вспоминай наше светлое чувство.</div>`,
        },
    ];

    React.useEffect(() => {
        localStorage.setItem("hram", JSON.stringify(scriptArray));
        localStorage.setItem("selectedScriptSection", "false");
        localStorage.setItem(
            "selectedText",
            `<div>приветствую, о, милый путник</div><div>нажимаешь на пробел и погружаешься в мир стихов</div>
                <p>погнаааали! 🤘</p>`
        );
    }, []);

    const [selectedScriptSection, setSelectedScriptSection] =
        React.useState(false);

    // const [content, setContent] = React.useState(
    //     `<div>приветствую, о, милый путник</div><div>нажимаешь на пробел и погружаешься в мир стихов</div>
    //             <p>погнаааали! 🤘</p>`
    // );

    React.useEffect(() => {
        let randomn = [];

        function runOnKeys(func) {
            let listener = function (event) {
                if (
                    event.code == "Space" &&
                    localStorage.getItem("selectedScriptSection")
                    // <
                    //     scriptArray.length
                    // selectedScriptSection < scriptArray.length
                ) {
                    randomn = [];

                    let lux = localStorage.getItem("selectedScriptSection");
                    // let lex = JSON.parse(localStorage.getItem("hram"));

                    if (lux === "false") {
                        // if (selectedScriptSection === false) {
                        // alert("lux=false");
                        // randomn.push(scriptArray[0].text); ????
                        localStorage.setItem("selectedScriptSection", "0");
                    }

                    // if

                    // (lux < scriptArray.length) {
                    // alert("aeeee");
                    //  } else if (selectedScriptSection < scriptArray.length) {
                    // randomn.push(scriptArray[selectedScriptSection].text);
                    else if (lux === "0") {
                        localStorage.setItem("selectedScriptSection", "1");
                        // randomn.push("hhhh");
                        // randomn.push(scriptArray[0].text);
                    } else if (lux === "1") {
                        //   } else if (selectedScriptSection === 1) {
                        // alert(lex[1].text);
                        // randomn.push(scriptArray[1].text);
                        localStorage.removeItem("selectedScriptSection");
                    }
                    // }
                    // else {?????
                    //     randomn.push("конец");
                    // }

                    func();
                    document.removeEventListener("keydown", listener);
                }
            };
            document.addEventListener("keydown", listener);
        }

        runOnKeys(() => setPoetry(randomn));

        if (poetry !== "") {
            // setContent(poetry);

            if (selectedScriptSection !== false) {
                setSelectedScriptSection(Number(selectedScriptSection) + 1);
                localStorage.setItem("selectedText", scriptArray[1].text);
            } else {
                setSelectedScriptSection(0);
                localStorage.setItem("selectedText", scriptArray[0].text);
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
                        <audio id="track">
                            <source src="music.mp3" type="audio/mpeg" />
                        </audio>
                        <div
                            style={{
                                top: 32,
                                right: 32,
                                position: "fixed",
                            }}
                        >
                            <button
                                onClick={switchOnSwitchOff}
                                style={{
                                    border: 0,
                                    borderRadius: 50,
                                    cursor: "pointer",
                                }}
                            >
                                <Image
                                    src={imgMusic}
                                    alt={
                                        onMusic !== "true"
                                            ? "icon_play"
                                            : "icon_pause"
                                    }
                                    width={64}
                                    height={64}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="blockBelow2">
                        <div style={{ display: "flex", marginLeft: 20 }}>
                            <div style={{ borderRadius: 50 }}>
                                {typeof window !== "undefined" &&
                                    localStorage.getItem(
                                        "selectedScriptSection"
                                    ) &&
                                    Number(
                                        localStorage.getItem(
                                            "selectedScriptSection"
                                        )
                                    ) < scriptArray.length && (
                                        <Image
                                            src="/ava.jpg"
                                            alt="ava"
                                            width={74}
                                            height={74}
                                            style={{ borderRadius: 50 }}
                                        />
                                    )}
                            </div>
                            {typeof window !== "undefined" &&
                            localStorage.getItem("selectedScriptSection") ? (
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
                            ) : (
                                "конец"
                            )}
                        </div>
                        {selectedScriptSection === 0 && (
                            <div style={{ marginTop: "34px" }}>
                                <Image
                                    src="/one.jpg"
                                    alt="first_picture"
                                    width={500}
                                    height={333}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
