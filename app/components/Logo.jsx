import React from "react";

function Logo() {
    return (
        <>
            {typeof window !== "undefined" &&
                localStorage.getItem("selectedScriptSection") === "false" && (
                    <div
                        className="logo"
                        data-title="Кликнуть, чтобы попасть на сайт"
                    >
                        <a href="https://www.ustinnov.ru">
                            <img src="/mue.png" />
                        </a>
                    </div>
                )}
        </>
    );
}

export default Logo;
