import React from "react";
import Image from "next/image";

export default function Player({ onMusic, imgMusic, switchOnSwitchOff }) {
    return (
        <>
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
                        alt={onMusic !== "true" ? "icon_play" : "icon_pause"}
                        width={64}
                        height={64}
                    />
                </button>
            </div>
        </>
    );
}
