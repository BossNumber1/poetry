import React from "react";
const popup = require("../../common/popup");

function Twt() {
    function twitter(purl: string, ptitle: string) {
        let url = "http://twitter.com/share?";
        url += "text=" + encodeURIComponent(ptitle);
        url += "&url=" + encodeURIComponent(purl);
        url += "&counturl=" + encodeURIComponent(purl);

        popup(url);
    }

    return (
        <img
            src={"/twtShare.png"}
            alt="Поделиться c Twitter`ом"
            onClick={() =>
                twitter("https://www.ustinnov.ru/", "Стихи в новом формате")
            }
        />
    );
}

export default Twt;
