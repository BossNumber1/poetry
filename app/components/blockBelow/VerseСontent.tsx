import React from "react";
import PictureForPoetry from "../PictureForPoetry";
import postStyles from "../../styles/Post.module.css";
import Vk from "../topBlock/shareIcon/Vk";
import Fb from "../topBlock/shareIcon/Fb";
import Twt from "../topBlock/shareIcon/Twt";
import Ok from "../topBlock/shareIcon/Ok";
import CustomLoader from '../common/CustomLoader'
import { connect } from "react-redux";
import { AppState } from '../../redux/store';

interface IPost {
    id_post: number;
    nameAuthor: string;
    avatar: string;
    verse: string;
    illustration: string;
    publicLink: string;
}

interface DescriptionLocalProps {
    epilogue?: string;
    verseNumber?: number;
    versesArray: IPost[];
    readVerse?: boolean;
}

function VerseСontent({ epilogue, verseNumber = 0, versesArray, readVerse }: DescriptionLocalProps) {
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        if (readVerse !== false) {
            const avatar = new Image();
            const illustration = new Image();
            avatar.src = versesArray[verseNumber].avatar;
            illustration.src = versesArray[verseNumber].illustration;

            avatar.onload = () => {
                illustration.onload = () => {
                    setLoaded(true)
                }
            }
        }

        return () => {
            setLoaded(false)
        }
    }, [readVerse, versesArray, verseNumber, setLoaded])

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
            ) : readVerse !== false ? loaded === false ? <CustomLoader /> : (
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

const mapStateToProps = (state: AppState) => {
    return {
        readVerse: state.profile.readVerse, 
        epilogue: state.profile.epilogue,
        verseNumber: state.profile.verseNumber
    };
};

export default connect(mapStateToProps, null)(VerseСontent);