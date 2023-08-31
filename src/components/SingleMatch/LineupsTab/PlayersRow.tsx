import LineupItem from "./LineupItem";
import React from "react";
import {LineupsPlayersStatistics} from "../../../types/types";

interface PlayersRow {
    lineups: LineupsPlayersStatistics,
    type: string,
    qualifier: string
}
const PlayersRow: React.FC<PlayersRow>  = ({lineups, type, qualifier}) => {

    return (
        <>
            <div className="sm:hidden">
                <LineupItem lineups={qualifier === "home" ? lineups.home : lineups.away} type={type} competitorType={qualifier}/>
            </div>
            <div className="hidden sm:flex flex-row justify-between">
                <div className="col-span-6">
                    <LineupItem lineups={lineups.home} type={type} competitorType="home"/>
                </div>
                <div className="col-span-6">
                    <LineupItem lineups={lineups.away} type={type} competitorType="away"/>
                </div>
            </div>
        </>
    )
}

export default PlayersRow;