import React from "react";
import Advertising from "../Advertising";
import Logo from "../Logo";
import Player from "./Player";
import Share from "./Share";
import menuStyles from "../../styles/Menu.module.css";
import shareStyles from "../../styles/Share.module.css";
import {
  setShowMenu
} from '../../redux/actions'
import { connect } from "react-redux";
import { AppState } from '../../redux/store';

interface DescriptionLocalProps {
    setShowMenu: (arg: boolean) => void;
    showMenu: boolean;
    readVerse: boolean;
}

function TopBlock({
    setShowMenu,
    showMenu,
    readVerse,
}: DescriptionLocalProps) {
    let adjustMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="firstBlock" />
            {readVerse === false ? (
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
                    onClick={adjustMenu}
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
                    <Player />
                    <Advertising />
                </div>
            )}
        </>
    );
}

const mapStateToProps = (state: AppState) => {
    return {
        showMenu: state.profile.showMenu,
        readVerse: state.profile.readVerse
    };
};

const mapDispatchToProps = {
    setShowMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBlock);

