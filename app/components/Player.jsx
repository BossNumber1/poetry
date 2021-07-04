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
                    {/* <form>
                        <p>
                            <input
                                type="text"
                                placeholder="Ваш творческий псевдоним"
                            />
                        </p>
                        <p>
                            <input type="text" placeholder="Аватарка" />
                        </p>
                        <p>
                            <input type="text" placeholder="Стих" />
                        </p>
                        <p>
                            <input type="text" placeholder="Иллюстрация" />
                        </p>
                        <p>
                            <input
                                type="button"
                                value="Сделать частью истории"
                            />
                        </p>
                    </form> */}
                    <form>
                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label
                                className="form-check-label"
                                for="exampleCheck1"
                            >
                                Check me out
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
