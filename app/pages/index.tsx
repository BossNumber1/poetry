import React from "react";
import axios from "axios";
import TopBlock from "../components/topBlock/TopBlock";
import BlockBelow from "../components/blockBelow/BlockBelow";
import VerseAddingForm from "../components/VerseAddingForm";
import { GetServerSideProps } from 'next'
import { connect } from "react-redux";
import { AppState } from '../redux/store';
import {
  setReadVerse, setEpilogue, setVerseNumber
} from '../redux/actions'

interface DescriptionLocalProps {
    data: [];
    showForm: boolean;
    showMenu: boolean;
    readVerse: boolean;
    setReadVerse: (arg: boolean) => void;
    setEpilogue: (arg: string) => void;
    setVerseNumber: (arg: number) => void;
    verseNumber: number;
}

function Home({data, showForm, showMenu, readVerse, setReadVerse, setEpilogue, setVerseNumber, verseNumber}: DescriptionLocalProps) {
    const [versesArray, setVersesArray] = React.useState<[]>([]);

    React.useEffect(() => {
        // if (versesArray.length === 0) {
            // debugger
            setVersesArray(data);

            console.log("1000");

            const SpaceAction = require("../components/startPage/SpaceAction");
                SpaceAction(
                    readVerse, setVerseNumber, setReadVerse, verseNumber, versesArray, setEpilogue
                );
            const SwiperAction = require("../components/startPage/SwiperAction");
                SwiperAction(
                    readVerse, setVerseNumber, setReadVerse, verseNumber, versesArray, setEpilogue
                );
        // }        
    }, [data, verseNumber, versesArray, readVerse, setReadVerse, setEpilogue, setVerseNumber]);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <div className="body_page">
                        <TopBlock />
                        <BlockBelow
                            versesArray={versesArray}
                        />
                        <div className="etc">
                            {showForm && showMenu && (
                                <VerseAddingForm />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        showForm: state.profile.showForm,
        showMenu: state.profile.showMenu,
        readVerse: state.profile.readVerse, 
        verseNumber: state.profile.verseNumber
    };
};

const mapDispatchToProps = {
    setReadVerse, setEpilogue, setVerseNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

export const getServerSideProps: GetServerSideProps = async () => {
    const allVerses = await axios.get(`http://localhost:80/getAllVerses/`)

    return {
        props: {
            data: allVerses.data
        }
    }
}