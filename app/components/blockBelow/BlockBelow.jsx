import React from "react";
import PictureForPoetry from "../PictureForPoetry";
import VerseAddingForm from "../VerseAddingForm";

function BlockBelow({ showForm, selectedScriptSection, scriptArray }) {
    return (
        <>
            <div style={{ display: "flex", marginLeft: 20 }}>
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
                                marginLeft: 30,
                                // position: "absolute"
                                overflow: "hidden",
                                zIndex: 50,
                                textAlign: "center",
                                fontSize: 14,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: localStorage.getItem("selectedText"),
                            }}
                        />
                    )}
            </div>
            <PictureForPoetry selectedScriptSection={selectedScriptSection} />
            {showForm && <VerseAddingForm />}
        </>
    );
}

export default BlockBelow;
