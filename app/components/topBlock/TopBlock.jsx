import React from "react";
import Advertising from "../Advertising";
import Logo from "../Logo";
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
            <div className="firstBlock" />
            <div className="secondBlock">
                <Logo />
            </div>
            <div className="thirdBlock">
                <div
                    className="menuIcon"
                    data-title={
                        !showMenu
                            ? "Показать возможности"
                            : "Скрыть возможности"
                    }
                >
                    <img
                        src={!showMenu ? "/menu.png" : "/closeMenu.png"}
                        alt="menu"
                        onClick={chan}
                    />
                </div>
            </div>

            {showMenu && (
                <div className="menuWindow">
                    <div className="mainMenuLabel">Основные функции</div>
                    <div className="mainMenuLabelRight">Партнёрам</div>
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
                    <Advertising />
                </div>
            )}
        </>
    );
}

export default TopBlock;
