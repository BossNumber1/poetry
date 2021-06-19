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

        { text: "2" },
    ];
    const [selectedScriptSection, setSelectedScriptSection] = React.useState(0);

    const [content, setContent] = React.useState(
        `<div>приветствую, о, милый путник</div><div>нажимаешь на пробел и погружаешься в мир стихов</div>
                <p>погнаааали! 🤘</p>`
    );

    React.useEffect(() => {
        let randomn = [];

        function runOnKeys(func) {
            let listener = function (event) {
                if (
                    event.code == "Space" &&
                    selectedScriptSection != scriptArray.length + 1
                ) {
                    randomn = [];
                    randomn.push(
                        scriptArray[selectedScriptSection]
                            ? scriptArray[selectedScriptSection].text
                            : "конец"
                    );

                    func();
                    document.removeEventListener("keydown", listener);
                }
            };
            document.addEventListener("keydown", listener);
        }

        runOnKeys(() => setPoetry(randomn));

        if (poetry !== "") {
            setContent(poetry);
            setSelectedScriptSection(+selectedScriptSection + 1);
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
                                <Image
                                    src="/ava.jpg"
                                    alt="ava"
                                    width={74}
                                    height={74}
                                    style={{ borderRadius: 50 }}
                                />
                            </div>
                            <div
                                style={{
                                    marginLeft: 30,
                                    // position: "absolute"
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                        </div>
                        {selectedScriptSection == 1 && (
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
