import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    const [poetry, setPoetry] = React.useState("");

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
        `<div style="float: center"><div>приветствую, о, милый путник</div><div>нажимаешь на пробел и погружаешься в мир стихов</div>
                <p>погнаааали! 🤘</p></div>`
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

    return (
        <div className={styles.container}>
            <Head>
                <title>Пробел Поэзии</title>
                <meta name="description" content="Стихи в новом формате" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />
                {selectedScriptSection == 1 && (
                    <Image
                        src="/one.jpg"
                        alt="Vercel Logo"
                        width={500}
                        height={333}
                    />
                )}
            </main>
        </div>
    );
}
