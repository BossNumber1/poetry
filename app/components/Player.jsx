import React from "react";
import Image from "next/image";

export default function Player({ onMusic, imgMusic, switchOnSwitchOff }) {
    const [showForm, setShowForm] = React.useState(false);
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

            {showForm && (
                <div className="postAddForm">
                    <form>
                        <fieldset>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    class="form-control"
                                    placeholder="Ваш творческий псевдоним"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    class="form-control"
                                    placeholder="Аватарка"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    class="form-control"
                                    placeholder="Стих"
                                />
                            </div>
                            <div class="mb-3">
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    class="form-control"
                                    placeholder="Иллюстрация"
                                />
                            </div>
                            <button type="submit" class="btn btn-warning">
                                Сделать частью истории
                            </button>
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    );
}
