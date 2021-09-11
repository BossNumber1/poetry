import React from "react";
const popup = require("../../common/popup");

function Fb() {

    function facebook(purl: string, ptitle: string, pimg: string, text: string) {
        let url = "http://www.facebook.com/sharer.php?s=100";
        url += "&p[title]=" + encodeURIComponent(ptitle);
        url += "&p[summary]=" + encodeURIComponent(text);
        url += "&p[url]=" + encodeURIComponent(purl);
        url += "&p[images][0]=" + encodeURIComponent(pimg);

        popup(url);
    }

    return (
        <img
            src={"/fbShare.png"}
            alt="Поделиться на Facebook"
            onClick={() =>
                facebook(
                    "https://www.ustinnov.ru/",
                    "Пробел Поэзии",
                    "https://res.cloudinary.com/dxhbjabsy/image/upload/v1626377484/pp/%D0%9F%D0%9F_njdont.png",
                    "Стихи в новом формате"
                )
            }
        />
    );
}

export default Fb;
