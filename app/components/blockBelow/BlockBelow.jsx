import React from "react";
import Tape from "../Tape";
import PictureForPoetry from "../PictureForPoetry";
import postStyles from "../../styles/Post.module.css";

function BlockBelow({ versesArray, epilogue, verseNumber }) {
    return (
        <>
            <div className="fourthBlock" />

            <div className="fifthBlock">
                <div style={{ display: "flex" }}>
                    {epilogue ? (
                        epilogue
                    ) : verseNumber !== "false" ? (
                        <div>
                            <div
                                className={postStyles.avatar}
                                data-title={versesArray[verseNumber].nameAuthor}
                                onClick={() =>
                                    (document.location.href =
                                        versesArray[verseNumber].publicLink)
                                }
                            >
                                <img
                                    src={versesArray[verseNumber].avatar}
                                    alt="аватарка автора"
                                />
                            </div>
                            <div
                                className={
                                    epilogue
                                        ? postStyles.end
                                        : verseNumber !== "false"
                                        ? postStyles.verse
                                        : postStyles.end
                                }
                                dangerouslySetInnerHTML={{
                                    __html: versesArray[verseNumber].verse,
                                }}
                            ></div>
                            <PictureForPoetry
                                illustration={
                                    versesArray[verseNumber].illustration
                                }
                            />
                        </div>
                    ) : (
                        <div style={{ lineHeight: 2 }}>
                            <div>Приветствую, о, милый путник.</div>
                            <div>
                                Нажимешь на пробел и погружаешься в мир стихов.
                            </div>
                            <div>
                                <p>Погнаааали! 🤘</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="sixthBlock" id="sixthBlockId">
                <p>Наши преимущества</p>
                <p>
                    <img
                        src={"/down32.png"}
                        width={32}
                        height={32}
                        alt="Листать вниз"
                        style={{
                            // position: "absolute",
                            marginTop: 62,
                            marginLeft: -80,
                            // top: "50%",
                            // marginTop: -50,
                        }}
                    />
                </p>
            </div>

            {verseNumber === "false" && <Tape />}

            <div className="thirteenthBlock" />
            <div className="fourteenthBlock">
                {verseNumber === "false" && (
                    <>
                        ©{"    "}
                        <a href="https://vk.com/moyustimov">Устинов Дмитрий</a>,
                        2021-й год
                    </>
                )}
            </div>
            <div className="fifteenthBlock" />
        </>
    );
}

export default BlockBelow;
