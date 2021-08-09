import React from "react";
import Tape from "../Tape";
import PictureForPoetry from "../PictureForPoetry";
import postStyles from "../../styles/Post.module.css";
// import Swiper from "swiper";

function BlockBelow({ selectedScriptSection, scriptArray, hideLogo = false }) {
    // React.useEffect(() => {
    //     var swiper = new Swiper(".swiper-container", {
    //         pagination: {
    //             el: ".swiper-pagination",
    //         },
    //     });
    // }, []);

    return (
        <>
            <div className="fourthBlock" />
            {!hideLogo ? (
                <div className="fifthBlock">
                    {/* <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"> */}
                    <div style={{ display: "flex" }}>
                        {typeof window !== "undefined" &&
                            localStorage.getItem("selectedScriptSection") &&
                            localStorage.getItem("selectedText") !== "конец" &&
                            Number(
                                localStorage.getItem("selectedScriptSection")
                            ) < scriptArray.length && (
                                <div
                                    className={postStyles.avatar}
                                    data-title={localStorage.getItem(
                                        "nameAuthor"
                                    )}
                                    onClick={() =>
                                        (document.location.href =
                                            localStorage.getItem("publicLink"))
                                    }
                                >
                                    <img
                                        src={localStorage.getItem("avatarka")}
                                        alt="аватарка автора"
                                    />
                                </div>
                            )}

                        {typeof window !== "undefined" &&
                            localStorage.getItem("selectedScriptSection") && (
                                <div
                                    className={
                                        localStorage.getItem(
                                            "selectedScriptSection"
                                        ) === "false"
                                            ? postStyles.greetings
                                            : localStorage.getItem(
                                                  "selectedText"
                                              ) !== "конец"
                                            ? postStyles.verse
                                            : postStyles.end
                                    }
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
                    {/* </div>
                        <div className="swiper-slide">434</div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-white" />
                </div> */}
                </div>
            ) : (
                <div className="fifthBlock">
                    {/* <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"> */}
                    <div style={{ display: "flex" }}>
                        {typeof window !== "undefined" &&
                            localStorage.getItem("selectedScriptSection") &&
                            localStorage.getItem("selectedText") !== "конец" &&
                            Number(
                                localStorage.getItem("selectedScriptSection")
                            ) < scriptArray.length && (
                                <div
                                    className={postStyles.avatar}
                                    data-title={localStorage.getItem(
                                        "nameAuthor"
                                    )}
                                    onClick={() =>
                                        (document.location.href =
                                            localStorage.getItem("publicLink"))
                                    }
                                >
                                    <img
                                        src={localStorage.getItem("avatarka")}
                                        alt="аватарка автора"
                                    />
                                </div>
                            )}

                        {typeof window !== "undefined" &&
                            localStorage.getItem("selectedScriptSection") && (
                                <div
                                    className={
                                        localStorage.getItem(
                                            "selectedScriptSection"
                                        ) === "false"
                                            ? postStyles.greetings
                                            : localStorage.getItem(
                                                  "selectedText"
                                              ) !== "конец"
                                            ? postStyles.verse
                                            : postStyles.end
                                    }
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
                    {/* </div>
                        <div className="swiper-slide">434</div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-white" />
                </div> */}
                </div>
            )}
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

            {!hideLogo && <Tape />}
            <div className="thirteenthBlock" />
            <div className="fourteenthBlock">
                {!hideLogo &&
                    typeof window !== "undefined" &&
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
            <div className="fifteenthBlock" />
        </>
    );
}

export default BlockBelow;
