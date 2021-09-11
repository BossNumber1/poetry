import React from "react";
import Tape from "../Tape";
import Signature from "./Signature";
import Advantages from "./Advantages";
import VerseСontent from "./VerseСontent";

interface DescriptionLocalProps {
  versesArray: [];
  epilogue: string;
  verseNumber: number;
  readVerse: boolean;
}

function BlockBelow({ versesArray, epilogue, verseNumber, readVerse }: DescriptionLocalProps) {
    return (
        <>
            <div className="fourthBlock" />
            <div className="fifthBlock">
                <VerseСontent
                    epilogue={epilogue}
                    verseNumber={verseNumber}
                    versesArray={versesArray}
                    readVerse={readVerse}
                />
            </div>
            <div className="sixthBlock" id="sixthBlockId">
                <Advantages />
            </div>

            {readVerse === false && <Tape />}

            <div className="thirteenthBlock" />
            <div className="fourteenthBlock">
                <Signature readVerse={readVerse} />
            </div>
            <div className="fifteenthBlock" />
        </>
    );
}

export default BlockBelow;
