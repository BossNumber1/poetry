import React from "react";
const popup = require("../../common/popup");

function Ok() {
    function odnoklassniki(purl, text) {
        let url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
        url += "&st.comments=" + encodeURIComponent(text);
        url += "&st._surl=" + encodeURIComponent(purl);

        popup(url);
    }

    return (
        <img
            src={"/okShare.png"}
            alt="Рассказать одноклассникам"
            onClick={() =>
                odnoklassniki(
                    "https://www.ustinnov.ru/",
                    "Стихи в новом формате"
                )
            }
        />
    );
}

export default Ok;
