import React from "react";
import postStyles from "../styles/Post.module.css";

export default function PictureForPoetry({ illustration }) {
    return (
        <div className={postStyles.illustration}>
            <img src={illustration} alt="illustration" />
        </div>
    );
}
