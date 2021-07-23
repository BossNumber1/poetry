import React from "react";

export default function PictureForPoetry({ selectedScriptSection }) {
    return (
        <>
            {(selectedScriptSection === 0 || selectedScriptSection > 0) &&
                localStorage.getItem("selectedText") !== "конец" && (
                    <div style={{ marginTop: "34px" }}>
                        <img
                            src={localStorage.getItem("picture")}
                            alt="first_picture"
                            width={500}
                            height={333}
                        />
                    </div>
                )}
        </>
    );
}
