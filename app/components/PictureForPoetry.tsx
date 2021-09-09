import React from "react";
import postStyles from "../styles/Post.module.css";

interface DescriptionLocalProps {
  illustration: string
}

export default function PictureForPoetry({ illustration }: DescriptionLocalProps) {
    return (
        <div className={postStyles.illustration}>
              <img src={illustration} alt="Иллюстрация"/>
        </div>
    );
}
