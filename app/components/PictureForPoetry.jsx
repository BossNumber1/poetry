import React from "react";
import postStyles from "../styles/Post.module.css";

export default function PictureForPoetry({ selectedScriptSection }) {
    return (
        <>
            {(selectedScriptSection === 0 || selectedScriptSection > 0) &&
                localStorage.getItem("selectedText") !== "конец" && (
                    <div className={postStyles.illustration}>
                        <img
                            src={localStorage.getItem("picture")}
                            alt="illustration"
                        />
                    </div>
                )}
        </>
    );
}
