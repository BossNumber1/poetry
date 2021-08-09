import React from "react";
import Advertising from "../Advertising";
import Logo from "../Logo";
import Player from "./Player";
import Share from "./Share";

import menuStyles from "../../styles/Menu.module.css";
import shareStyles from "../../styles/Share.module.css";

function TopBlock({
    onMusic,
    imgMusic,
    switchOnSwitchOff,
    setShowForm,
    showForm,
    setShowMenu,
    showMenu,
    hideLogo = false,
}) {
    let chan = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="firstBlock" />
            {!hideLogo ? (
                <div className="secondBlock">
                    <Logo />
                </div>
            ) : (
                <div className="secondBlock" />
            )}
            <div className="thirdBlock">
                <div
                    className={menuStyles.menuIcon}
                    data-title={
                        !showMenu
                            ? "Показать возможности"
                            : "Скрыть возможности"
                    }
                    onClick={chan}
                >
                    <img
                        src={!showMenu ? "/menu.png" : "/closeMenu.png"}
                        alt="menu"
                    />
                </div>
            </div>

            {showMenu && (
                <div className={menuStyles.menuWindow}>
                    <div className={menuStyles.mainMenuLabel}>
                        Основные функции
                    </div>
                    <div className={menuStyles.mainMenuLabelRight}>
                        Партнёрам
                    </div>
                    <Share />
                    <div className={shareStyles.shareLabel}>Поделиться</div>

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
