import React from "react";

function Logo() {
    return (
        <div className="logo" data-title="Кликнуть, чтобы попасть на сайт">
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
