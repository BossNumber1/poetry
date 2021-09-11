import React from "react";

function Signature({ verseNumber }) {
    return (
        <>
            {verseNumber === false && (
                <>
                    ©
                    <a
                        href="https://vk.com/moyustimov"
                        style={{ margin: "0 5px 0 5px" }}
                    >
                        Устинов
                    </a>
                    и
                    <a
                        href="https://vk.com/dimitron_rock"
                        style={{ margin: "0 5px 0 5px" }}
                    >
                        Рогут,
                    </a>
                    2021-й год
                </>
            )}
        </>
    );
}

export default Signature;
