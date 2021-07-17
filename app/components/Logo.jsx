import React from "react";
import logoStyles from "../styles/Logo.module.css";

function Logo() {
    return (
        <div
            className={logoStyles.logo}
            data-title="Кликнуть, чтобы попасть на сайт"
        >
            {typeof window !== "undefined" &&
                localStorage.getItem("selectedScriptSection") === "false" && (
                    <a href="https://www.ustinnov.ru">
                        <img src="/mue.png" />
                    </a>
                )}
        </div>
    );
}

export default Logo;
