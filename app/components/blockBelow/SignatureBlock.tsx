import React from "react";
import Signature from "./Signature";
import { connect } from "react-redux";
import { AppState } from '../../redux/store';

interface DescriptionLocalProps {
  readVerse?: boolean
}

function SignatureBlock({ readVerse }: DescriptionLocalProps) {
    return (
        <>
            {readVerse === false && (
                <>
                  ©
                    <a
                        href="https://vk.com/moyustimov"
                        style={{ margin: "0 5px 0 5px" }}
                    >
                        <Signature name="Устинов" role="Программист"/>
                    </a>
                    и
                    <a
                        href="https://vk.com/dimitron_rock"
                        style={{ margin: "0 5px 0 5px" }}
                    >
                         <Signature name="Рогут" role="художник"/>
                    </a>
                    2021-й год
                </>
            )}
        </>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        readVerse: state.profile.readVerse
    };
};

export default connect(mapStateToProps, null)(SignatureBlock);