import React from "react";
import Image from "next/image";

export default function Player({
    onMusic,
    imgMusic,
    switchOnSwitchOff,
    setShowForm,
    showForm,
    setShowMenu,
    showMenu,
}) {
    // React.useEffect(() => {
    //     showMenu;
    // }, [showMenu]);

    let chan = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <audio id="track">
                <source src="music.mp3" type="audio/mpeg" />
            </audio>
            <div className="iconBtns">
                <button
                    onClick={switchOnSwitchOff}
                    className="player"
                    data-title="Фоновая музыка"
                >
                    <Image
                        src={imgMusic}
                        alt={onMusic !== "true" ? "icon_play" : "icon_pause"}
                        width={64}
                        height={64}
                    />
                </button>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="addPost"
                    data-title={
                        showForm ? "Скрыть форму" : "Добавить свои стихи"
                    }
                >
                    <Image
                        src={showForm ? "/hide.png" : "/add.png"}
                        alt={showForm ? "hide form" : "add post"}
                        width={64}
                        height={64}
                    />
                </button>

                <img
                    src={"/menu.png"}
                    alt="Поделиться c Twitter`ом"
                    style={{ cursor: "pointer" }}
                    onClick={
                        // () =>
                        // // twitter(
                        // //     "https://www.ustinnov.ru/",
                        // //     "Стихи в новом формате"
                        // // )
                        // alert("ggg")
                        // showMenu === false
                        //     ?
                        chan
                        // : setShowMenu(false)
                    }
                />
            </div>
        </>
    );
}
