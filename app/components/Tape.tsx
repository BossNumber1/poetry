import React from "react";
import Image from 'next/image'
import Convenience from '../public/Convenience.jpg'
import Beauty from '../public/Beauty.png'
import Simplicity from '../public/Simplicity.jpg'
import NoAds from '../public/NoAds.webp'
import Novelty from '../public/Novelty.jpg'
import Perspective from '../public/Perspective.jpg'

function Tape() {
    return (
        <>
            {typeof window !== "undefined" &&
            localStorage.getItem("selectedScriptSection") == "false" ? (
                <>
                    <div className="seventhBlock">
                        <div className="cardImg">
                            <Image src={Convenience} alt="Удобство"/>
                        </div>
                        <p className="cardName">Удобство</p>
                        <div>Интуитивный интерфейс</div>
                    </div>
                    <div className="eighthBlock">
                        <div className="cardImg">
                            <Image src={Beauty} alt="Красота"/>
                        </div>
                        <p className="cardName">Красота</p>
                        <div>Эстетичный дизайн</div>
                    </div>
                    <div className="ninthBlock">
                        <div className="cardImg">
                            <Image src={Simplicity} alt="Простота"/>
                        </div>
                        <p className="cardName">Простота</p>
                        <div>Ничего лишнего, всё по делу</div>
                    </div>
                    <div className="tenthBlock">
                        <div className="cardImg">
                            <Image src={NoAds} alt="Нет рекламы"/>
                        </div>
                        <p className="cardName">Нет рекламы</p>
                        <div>
                            <div>Чтобы не нарушать идею,</div>
                            <div>убрана с видного места</div>
                        </div>
                    </div>
                    <div className="eleventhBlock">
                        <div className="cardImg">
                            <Image src={Novelty} alt="Новизна"/>
                        </div>
                        <p className="cardName">Новизна</p>
                        <div>Вы такое встречали? Я - нет</div>
                    </div>
                    <div className="twelfthBlock">
                        <div className="cardImg">
                            <Image src={Perspective} alt="Перспективность"/>
                        </div>
                        <p className="cardName">Перспективность</p>
                        <div>У меня ещё полно идей 😉</div>
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
