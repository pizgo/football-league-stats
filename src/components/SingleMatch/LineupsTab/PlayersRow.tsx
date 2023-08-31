import LineupItem from "./LineupItem";
import React from "react";
import {LineupsPlayersStatistics, PlayerStatistics} from "../../../types/types";
import LineupsDesktop from "./LineupsDesktop";

interface PlayersRow {
    lineups: LineupsPlayersStatistics,
    type: string
}
const PlayersRow: React.FC<PlayersRow>  = ({lineups, type}) => {

    return (
        <div className="flex flex-row justify-between">
            <div className="col-span-6">
                <LineupItem lineups={lineups.home} type={type} qualifier="home"/>
            </div>
            <div className="col-span-6">
                <LineupItem lineups={lineups.away} type={type} qualifier="away"/>
            </div>
        </div>
    )
}

export default PlayersRow;