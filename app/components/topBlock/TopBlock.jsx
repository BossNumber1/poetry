import React from "react";
import Player from "./Player";
import Share from "./Share";

function TopBlock({
    onMusic,
    imgMusic,
    switchOnSwitchOff,
    setShowForm,
    showForm,
    setShowMenu,
    showMenu,
}) {
    let chan = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <img
                src={"/menu.png"}
                alt="menu"
                style={{
                    cursor: "pointer",
                    position: "fixed",
                    right: 32,
                    top: 32,
                }}
                onClick={chan}
            />
            {showMenu && (
                <div className="menuWindow">
                    <div className="mainMenuLabel">Основные функции</div>
                    <Share />
                    <div className="shareLabel">Поделиться</div>

                    <Player
                        onMusic={onMusic}
                        imgMusic={imgMusic}
                        switchOnSwitchOff={switchOnSwitchOff}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                    />
                </div>
            )}
        </>
    );
}

export default TopBlock;
