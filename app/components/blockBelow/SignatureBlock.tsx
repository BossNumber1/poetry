import React from "react";
import Signature from "./Signature";

interface DescriptionLocalProps {
  readVerse: boolean
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

export default SignatureBlock;
