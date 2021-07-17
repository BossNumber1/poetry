import React from "react";
import Image from "next/image";
import mainFuncsStyles from "../../styles/MainFuncs.module.css";

export default function Player({
    onMusic,
    imgMusic,
    switchOnSwitchOff,
    setShowForm,
    showForm,
}) {
    const [showStatistics, setShowStatistics] = React.useState(false);
    return (
        <>
            <audio id="track">
                <source src="music.mp3" type="audio/mpeg" />
            </audio>
            <div className={mainFuncsStyles.iconBtns}>
                <button
                    onClick={switchOnSwitchOff}
                    className={mainFuncsStyles.player}
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
                    className={mainFuncsStyles.addPost}
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
                <button
                    onClick={() => setShowStatistics(!showStatistics)}
                    className={mainFuncsStyles.statistics}
                    data-title={
                        showStatistics
                            ? "Скрыть статистику сайта"
                            : "Показать статистику сайта"
                    }
                >
                    <Image
                        src={
                            showStatistics
                                ? "/hideStatistics.png"
                                : "/statistics.png"
                        }
                        alt={
                            showStatistics
                                ? "Скрыть статистику сайта"
                                : "Показать статистику сайта"
                        }
                        width={64}
                        height={64}
                    />
                </button>
            </div>
            {showStatistics && (
                <div className={mainFuncsStyles.statisticWindow}>
                    Статистика
                </div>
            )}
        </>
    );
}
