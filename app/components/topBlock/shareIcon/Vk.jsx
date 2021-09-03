import React from "react";
const popup = require("../../common/popup");

function Vk() {
    function vk(purl, ptitle, pimg, text) {
        let url = "http://vkontakte.ru/share.php?";
        url += "url=" + encodeURIComponent(purl);
        url += "&title=" + encodeURIComponent(ptitle);
        url += "&description=" + encodeURIComponent(text);
        url += "&image=" + encodeURIComponent(pimg);
        url += "&noparse=true";

        popup(url);
    }

    return (
        <img
            src={"/vkShare.png"}
            alt="Поделиться во ВКонтакте"
            onClick={() =>
                vk(
                    "https://www.ustinnov.ru/",
                    "Пробел Поэзии",
                    "https://res.cloudinary.com/dxhbjabsy/image/upload/v1626377484/pp/%D0%9F%D0%9F_njdont.png",
                    "Стихи в новом формате"
                )
            }
        />
    );
}

export default Vk;
