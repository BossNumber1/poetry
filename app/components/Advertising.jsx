import React from "react";
import etcStyles from "../styles/Etc.module.css";

function Advertising() {
    return (
        <>
            <div className={etcStyles.advertising}>Рекламный блок 1</div>
            <div className={etcStyles.twoAdvertBlock}>Рекламный блок 2</div>
            <div className={etcStyles.threeAdvertBlock}>Рекламный блок 3</div>
        </>
    );
}

export default Advertising;
