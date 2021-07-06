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
                    style={{
                        border: 0,
                        borderRadius: 50,
                        cursor: "pointer",
                    }}
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
                    style={{
                        border: 0,
                        borderRadius: 50,
                        cursor: "pointer",
                    }}
                    className="addPost"
                    data-title="Добавить свои стихи"
                >
                    <Image
                        src={"/add.png"}
                        alt={"add post"}
                        width={64}
                        height={64}
                    />
                </button>
            </div>
        </>
    );
}
