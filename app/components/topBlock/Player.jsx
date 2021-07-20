import React from "react";
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
                <div
                    onClick={switchOnSwitchOff}
                    className={mainFuncsStyles.player}
                    data-title="Фоновая музыка"
                >
                    <img
                        src={imgMusic}
                        alt={onMusic !== "true" ? "icon_play" : "icon_pause"}
                    />
                </div>
                <div
                    onClick={() => setShowForm(!showForm)}
                    className={mainFuncsStyles.addPost}
                    data-title={
                        showForm ? "Скрыть форму" : "Добавить свои стихи"
                    }
                >
                    <img
                        src={showForm ? "/hide.png" : "/add.png"}
                        alt={showForm ? "hide form" : "add post"}
                    />
                </div>
                <div
                    onClick={() => setShowStatistics(!showStatistics)}
                    className={mainFuncsStyles.statistics}
                    data-title={
                        showStatistics
                            ? "Скрыть статистику сайта"
                            : "Показать статистику сайта"
                    }
                >
                    <img
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
                    />
                </div>
            </div>
            {showStatistics && (
                <div className={mainFuncsStyles.statisticWindow}>
                    Статистика
                </div>
            )}
        </>
    );
}
