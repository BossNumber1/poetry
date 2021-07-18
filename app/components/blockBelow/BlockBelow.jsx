import React from "react";
import PictureForPoetry from "../PictureForPoetry";
import Tape from "../Tape";

import etcStyles from "../../styles/Etc.module.css";

function BlockBelow({ selectedScriptSection, scriptArray }) {
    return (
        <>
            <div className="fourthBlock" />
            <div className="fifthBlock">
                <div>
                    {typeof window !== "undefined" &&
                        localStorage.getItem("selectedScriptSection") &&
                        localStorage.getItem("selectedText") !== "конец" &&
                        Number(localStorage.getItem("selectedScriptSection")) <
                            scriptArray.length && (
                            <div
                                className={etcStyles.avatar}
                                style={{ borderRadius: 50 }}
                                data-title={localStorage.getItem("nameAuthor")}
                            >
                                <img
                                    src={localStorage.getItem("avatarka")}
                                    width={74}
                                    height={74}
                                    alt="аватарка автора"
                                />
                            </div>
                        )}

                    {typeof window !== "undefined" &&
                        localStorage.getItem("selectedScriptSection") && (
                            <div
                                style={{
                                    // marginLeft: 440,
                                    // position: "absolute"
                                    overflow: "hidden",
                                    zIndex: 50,
                                    textAlign: "center",
                                    // left: 13,
                                    fontSize: 14,
                                }}
                                dangerouslySetInnerHTML={{
                                    __html: localStorage.getItem(
                                        "selectedText"
                                    ),
                                }}
                            />
                        )}
                </div>
                <PictureForPoetry
                    selectedScriptSection={selectedScriptSection}
                />
            </div>
            <div className="sixthBlock">
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

            <Tape />
            <div className="thirteenth" />
            <div className="fourteenth">
                {typeof window !== "undefined" &&
                    localStorage.getItem("selectedScriptSection") ==
                        "false" && (
                        <>
                            ©{"    "}
                            <a href="https://vk.com/moyustimov">
                                Устинов Дмитрий
                            </a>
                            , 2021-й год
                        </>
                    )}
            </div>
            <div className="fifteenth" />
        </>
    );
}

export default BlockBelow;
