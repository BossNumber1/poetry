import React from "react";
import Image from "next/image";

export default function Player({
    onMusic,
    imgMusic,
    switchOnSwitchOff,
    setShowForm,
    showForm,
}) {
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
            </div>
        </>
    );
}
