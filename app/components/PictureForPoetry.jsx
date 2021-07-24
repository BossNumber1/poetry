import React from "react";
import etcStyles from "../styles/Etc.module.css";

export default function PictureForPoetry({ selectedScriptSection }) {
    return (
        <>
            {(selectedScriptSection === 0 || selectedScriptSection > 0) &&
                localStorage.getItem("selectedText") !== "конец" && (
                    <div className={etcStyles.illustration}>
                        <img
                            src={localStorage.getItem("picture")}
                            alt="illustration"
                        />
                    </div>
                )}
        </>
    );
}
