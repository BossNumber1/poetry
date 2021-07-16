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
    return (
        <>
            <Share />
            <Player
                onMusic={onMusic}
                imgMusic={imgMusic}
                switchOnSwitchOff={switchOnSwitchOff}
                setShowForm={setShowForm}
                showForm={showForm}
                setShowMenu={setShowMenu}
                showMenu={showMenu}
            />
        </>
    );
}

export default TopBlock;
