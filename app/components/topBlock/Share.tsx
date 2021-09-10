import React from "react";
import shareStyles from "../../styles/Share.module.css";
import Fb from "./shareIcon/Fb";
import Ok from "./shareIcon/Ok";
import Twt from "./shareIcon/Twt";
import Vk from "./shareIcon/Vk";

function Share() {
    return (
        <div className={shareStyles.shareIcons}>
            <div className={shareStyles.vkShare}>
                <Vk />
            </div>
            <div className={shareStyles.fbShare}>
                <Fb />
            </div>
            <div className={shareStyles.twtShare}>
                <Twt />
            </div>
            <div className={shareStyles.okShare}>
                <Ok />
            </div>
        </div>
    );
}

export default Share;
