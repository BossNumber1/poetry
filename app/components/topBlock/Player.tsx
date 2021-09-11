import React from "react";
import mainFuncsStyles from "../../styles/MainFuncs.module.css";

interface DescriptionLocalProps {
    setShowForm: (arg: boolean) => void;
    showForm: boolean
}

export default function Player({
    setShowForm,
    showForm,
}: DescriptionLocalProps){
    const [showStatistics, setShowStatistics] = React.useState(false);
    const [onMusic, setOnMusic] = React.useState(false);
    const [imgMusic, setImgMusic] = React.useState("/play.png");
    const [track, setTrack] = React.useState(new Audio());

    React.useEffect(() => {
        const songs = ["music.mp3"];
        track.src = songs[0];
        track.volume = 0.1;
    }, [track]);

    let switchOnSwitchOff = () => {
        if (!onMusic) {
            track.play();
            setOnMusic(true); 
            setImgMusic("/pause.png");
        } else {
            track.pause();
            setOnMusic(false); 
            setImgMusic("/play.png");
        }
    };

    return (
        <>            
            <div className={mainFuncsStyles.iconBtns}>
                <div
                    onClick={switchOnSwitchOff}
                    className={mainFuncsStyles.player}
                    data-title="Фоновая музыка"
                >
                    <img
                        src={imgMusic}
                        alt={!onMusic ? "Кнопка проигрывания музыки" : "Кнопка поставить на паузу"}
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
                        src={showForm ? "/close.png" : "/add.png"}
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
                        src={showStatistics ? "/close.png" : "/statistics.png"}
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
