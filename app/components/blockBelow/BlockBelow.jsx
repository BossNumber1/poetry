import React from "react";
import PictureForPoetry from "../PictureForPoetry";
import Tape from "../Tape";
import VerseAddingForm from "../VerseAddingForm";

function BlockBelow({ showForm, selectedScriptSection, scriptArray }) {
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
                                className="avatar"
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
                {showForm && <VerseAddingForm />}
            </div>
            <div className="sixthBlock" />
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
