import React from "react";
import Tape from "../Tape";
import Signature from "./Signature";
import Advantages from "./Advantages";
import VerseСontent from "./VerseСontent";

function BlockBelow({ versesArray, epilogue, verseNumber }) {
    return (
        <>
            <div className="fourthBlock" />
            <div className="fifthBlock">
                <VerseСontent
                    epilogue={epilogue}
                    verseNumber={verseNumber}
                    versesArray={versesArray}
                />
            </div>
            <div className="sixthBlock" id="sixthBlockId">
                <Advantages />
            </div>

            {verseNumber === false && <Tape />}

            <div className="thirteenthBlock" />
            <div className="fourteenthBlock">
                <Signature verseNumber={verseNumber} />
            </div>
            <div className="fifteenthBlock" />
        </>
    );
}

export default BlockBelow;
