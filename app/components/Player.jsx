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
                            <div className="mb-3">
                                <label for="nik" className="form-label">
                                    Ваш творческий псевдоним
                                </label>
                                <input
                                    type="text"
                                    id="disabledTextInput"
                                    className="form-control"
                                />
                            </div>

                            <label for="avatar" className="form-label">
                                Ваш аватар
                            </label>
                            <div className="mb-3">
                                <input
                                    className="form-control form-control-sm"
                                    id="avatar"
                                    type="file"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="verse" className="form-label">
                                    Стих
                                </label>
                                <textarea
                                    className="form-control"
                                    id="verse"
                                    rows="1"
                                ></textarea>
                            </div>

                            <label for="illustration" className="form-label">
                                Иллюстрация
                            </label>
                            <div className="mb-3">
                                <input
                                    className="form-control form-control-sm"
                                    id="illustration"
                                    type="file"
                                />
                            </div>

                            <button type="submit" className="btn btn-warning">
                                Сделать частью истории
                            </button>
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    );
}
