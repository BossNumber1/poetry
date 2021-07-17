import React from "react";

function Tape() {
    return (
        <>
            {typeof window !== "undefined" &&
                localStorage.getItem("selectedScriptSection") == "false" && (
                    <div className="tape">
                        <div>
                            <div style={{ marginLeft: 83 }}>
                                <img
                                    src="https://clck.ru/WCBTB"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 83 }}>
                                Удобство
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    // color: "red",
                                    left: 35,
                                }}
                            >
                                Интуитивный интерфейс
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 83 }}>
                                <img
                                    src="https://clck.ru/WCBpk"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 83 }}>
                                Красота
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    left: 245,
                                    // color: "red",
                                }}
                            >
                                Эстетичный дизайн
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 83 }}>
                                <img
                                    src="https://clck.ru/WCBxa"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 83 }}>
                                Простота
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    // color: "red",
                                }}
                            >
                                Ничего лишнего, всё по делу
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 83 }}>
                                <img
                                    src="https://clck.ru/WCBwF"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 63 }}>
                                Нет рекламы
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    // color: "red",
                                    left: 640,
                                }}
                            >
                                Чтобы не нарушать идею
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 83 }}>
                                <img
                                    src="https://clck.ru/WCC7Y"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 70 }}>
                                Новизна
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    // color: "red",
                                    left: 830,
                                }}
                            >
                                Вы такое встречали? Я - нет
                            </div>
                        </div>
                        <div>
                            <div style={{ marginLeft: 60 }}>
                                <img
                                    src="https://clck.ru/WCC4j"
                                    height="60px"
                                />
                            </div>
                            <p style={{ fontWeight: "bold", marginLeft: 53 }}>
                                Перспективность
                            </p>
                            <div
                                style={{
                                    position: "fixed",
                                    bottom: 97,
                                    // color: "red",
                                    right: 30,
                                }}
                            >
                                У меня ещё полно идей 😉
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}

export default Tape;
