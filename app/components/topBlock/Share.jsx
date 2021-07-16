import React from "react";

function Share() {
    function vk(purl, ptitle, pimg, text) {
        let url = "http://vkontakte.ru/share.php?";
        url += "url=" + encodeURIComponent(purl);
        url += "&title=" + encodeURIComponent(ptitle);
        url += "&description=" + encodeURIComponent(text);
        url += "&image=" + encodeURIComponent(pimg);
        url += "&noparse=true";

        popup(url);
    }

    function facebook(purl, ptitle, pimg, text) {
        let url = "http://www.facebook.com/sharer.php?s=100";
        url += "&p[title]=" + encodeURIComponent(ptitle);
        url += "&p[summary]=" + encodeURIComponent(text);
        url += "&p[url]=" + encodeURIComponent(purl);
        url += "&p[images][0]=" + encodeURIComponent(pimg);

        popup(url);
    }

    function twitter(purl, ptitle) {
        let url = "http://twitter.com/share?";
        url += "text=" + encodeURIComponent(ptitle);
        url += "&url=" + encodeURIComponent(purl);
        url += "&counturl=" + encodeURIComponent(purl);

        popup(url);
    }

    function odnoklassniki(purl, text) {
        let url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
        url += "&st.comments=" + encodeURIComponent(text);
        url += "&st._surl=" + encodeURIComponent(purl);

        popup(url);
    }

    function popup(url) {
        if (typeof window !== "undefined") {
            window.open(url, "", "toolbar=0,status=0,width=626,height=436");
        }
    }

    return (
        <div className="shareIcons">
            <div data-title="Поделиться во ВКонтакте" className="vkShare">
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
            </div>
            <div data-title="Поделиться на Facebook" className="fbShare">
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
            </div>
            <div data-title="Поделиться c Twitter`ом" className="twtShare">
                <img
                    src={"/twtShare.png"}
                    alt="Поделиться c Twitter`ом"
                    onClick={() =>
                        twitter(
                            "https://www.ustinnov.ru/",
                            "Стихи в новом формате"
                        )
                    }
                />
            </div>
            <div data-title="Рассказать одноклассникам" className="okShare">
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
            </div>
        </div>
    );
}

export default Share;
