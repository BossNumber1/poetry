import React from "react";

function Tape() {
    return (
        <>
            {typeof window !== "undefined" &&
            localStorage.getItem("selectedScriptSection") == "false" ? (
                <>
                    <div className="seventhBlock">
                        <div>
                            <div className="cardImg">
                                <img
                                    src="https://clck.ru/WCBTB"
                                    style={{ textAlign: "center" }}
                                />
                            </div>
                            <p className="cardName">Удобство</p>
                            <div>Интуитивный интерфейс</div>
                        </div>
                    </div>
                    <div className="eighthBlock">
                        <div>
                            <div className="cardImg">
                                <img src="https://clck.ru/WCBpk" />
                            </div>
                            <p className="cardName">Красота</p>
                            <div>Эстетичный дизайн</div>
                        </div>
                    </div>
                    <div className="ninthBlock">
                        <div>
                            <div className="cardImg">
                                <img src="https://clck.ru/WCBxa" />
                            </div>
                            <p className="cardName">Простота</p>
                            <div>Ничего лишнего, всё по делу</div>
                        </div>
                    </div>
                    <div className="tenthBlock">
                        <div>
                            <div className="cardImg">
                                <img src="https://clck.ru/WCBwF" />
                            </div>
                            <p className="cardName">Нет рекламы</p>
                            <div>
                                <div>Чтобы не нарушать идею,</div>
                                <div>убрана с видного места</div>
                            </div>
                        </div>
                    </div>
                    <div className="eleventhBlock">
                        <div>
                            <div className="cardImg">
                                <img src="https://clck.ru/WCC7Y" />
                            </div>
                            <p className="cardName">Новизна</p>
                            <div>Вы такое встречали? Я - нет</div>
                        </div>
                    </div>
                    <div className="twelfthBlock">
                        <div>
                            <div className="cardImg">
                                <img src="https://clck.ru/WCC4j" />
                            </div>
                            <p className="cardName">Перспективность</p>
                            <div>У меня ещё полно идей 😉</div>
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
