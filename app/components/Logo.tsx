import React from "react";
import logoStyles from "../styles/Logo.module.css";
import Image from 'next/image'
import logotip from '../public/mue.png'

function Logo() {
    return (
        <div
            className={logoStyles.logo}
            data-title="Кликнуть, чтобы попасть на сайт"
        >
            {typeof window !== "undefined" &&
                localStorage.getItem("selectedScriptSection") === "false" && (
                    <a href="https://www.ustinnov.ru">
                        <Image src={logotip} alt="Логотип компании"/>
                    </a>
                )}
        </div>
    );
}

export default Logo;
