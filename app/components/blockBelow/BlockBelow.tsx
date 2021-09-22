import React from "react";
import Tape from "../Tape";
import SignatureBlock from "./SignatureBlock";
import Advantages from "./Advantages";
import VerseСontent from "./VerseСontent";
import { connect } from "react-redux";
import { AppState } from '../../redux/store';

interface DescriptionLocalProps {
  versesArray: [];
  epilogue: string;
  verseNumber: number;
  readVerse?: boolean;
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
                />
            </div>
            <div className="sixthBlock" id="sixthBlockId">
                <Advantages />
            </div>

            {readVerse === false && <Tape />}

            <div className="thirteenthBlock" />
            <div className="fourteenthBlock">
                <SignatureBlock />
            </div>
            <div className="fifteenthBlock" />
        </>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        readVerse: state.profile.readVerse
    };
};

export default connect(mapStateToProps, null)(BlockBelow);