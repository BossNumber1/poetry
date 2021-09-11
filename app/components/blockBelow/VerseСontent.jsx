import React from "react";
import PictureForPoetry from "../PictureForPoetry";
import postStyles from "../../styles/Post.module.css";
import Vk from "../topBlock/shareIcon/Vk";
import Fb from "../topBlock/shareIcon/Fb";
import Twt from "../topBlock/shareIcon/Twt";
import Ok from "../topBlock/shareIcon/Ok";

function VerseСontent({ epilogue, verseNumber, versesArray }) {
    return (
        <>
            {epilogue ? (
                <>
                    <div
                        className={postStyles.end}
                        dangerouslySetInnerHTML={{
                            __html: epilogue,
                        }}
                    />
                    <div className="iconsShare">
                        <Vk />
                        <Fb />
                        <Twt />
                        <Ok />
                    </div>
                </>
            ) : verseNumber !== false ? (
                <>
                    <div style={{ display: "flex" }}>
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
                                alt="Аватарка автора"
                            />
                        </div>
                        <div
                            className={postStyles.verse}
                            dangerouslySetInnerHTML={{
                                __html: versesArray[verseNumber].verse,
                            }}
                        />
                    </div>
                    <PictureForPoetry
                        illustration={versesArray[verseNumber].illustration}
                    />
                </>
            ) : (
                <div className={postStyles.greetings}>
                    <div>Приветствую, о, милый путник.</div>
                    <div>Нажимешь на пробел и погружаешься в мир стихов.</div>
                    <div>
                        <p>Погнаааали! 🤘</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default VerseСontent;
