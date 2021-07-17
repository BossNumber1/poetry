import React from "react";

function Tape() {
    return (
        <>
            {typeof window !== "undefined" &&
            localStorage.getItem("selectedScriptSection") == "false" ? (
                <>
                    {/* // className="tape"> */}
                    <div className="seventhBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCBTB"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Удобство
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                Интуитивный интерфейс
                            </div>
                        </div>
                    </div>
                    <div className="eighthBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCBpk"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Красота
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                Эстетичный дизайн
                            </div>
                        </div>
                    </div>
                    <div className="ninthBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCBxa"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Простота
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                Ничего лишнего, всё по делу
                            </div>
                        </div>
                    </div>
                    <div className="tenthBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCBwF"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Нет рекламы
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                Чтобы не нарушать идею
                            </div>
                        </div>
                    </div>
                    <div className="eleventhBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCC7Y"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Новизна
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                Вы такое встречали? Я - нет
                            </div>
                        </div>
                    </div>
                    <div className="twelfthBlock">
                        <div>
                            <div>
                                <img
                                    src="https://clck.ru/WCC4j"
                                    height="60px"
                                />
                            </div>
                            <p
                                style={{
                                    fontWeight: "bold",
                                }}
                            >
                                Перспективность
                            </p>
                            <div
                                style={{
                                    bottom: 97,
                                }}
                            >
                                У меня ещё полно идей 😉
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="seventhBlock"></div>
                    <div className="eighthBlock"></div>
                    <div className="ninthBlock"></div>
                    <div className="tenthBlock"></div>
                    <div className="eleventhBlock"></div>
                    <div className="twelfthBlock"></div>
                </>
            )}
        </>
    );
}

export default Tape;
