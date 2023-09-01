import React from "react";
import {LineupsPlayersStatistics, PlayerStatistics} from "../../../types/types";
import LeftSideItem from "./LeftSideItem";
import RightSideItem from "./RightSideItem";

interface PlayersRow {
    lineups: LineupsPlayersStatistics,
    type: string,
    qualifier: string
}
const PlayersRow: React.FC<PlayersRow>  = ({lineups, type, qualifier}) => {

    const typeToRender = (lineups: PlayerStatistics[] | undefined, type: string) => {
        if (type === "goalkeeper") {
            return lineups?.filter((player) => (player.type === type) && player.starter)
        } else if (type === "defender") {
            return lineups?.filter((player) => (player.type === "defender") && player.starter)
        } else if (type === "midfielder") {
            return lineups?.filter((player) => (player.type === "midfielder") && player.starter)
        } else if (type === "forwards") {
            return lineups?.filter((player) => (player.type === "forward") && player.starter)
        } else if (type === "substitutes") {
            return lineups?.filter((player) => !player.starter)
        }
    }
    const playersHome = typeToRender(lineups.home, type)
    const playersAway = typeToRender(lineups.away, type)

    return (
        <>
            <div className="sm:hidden">
                <ul>
                    {qualifier === 'home' ?
                        playersHome?.map((player) => (
                            <li key={player.name}>
                                <LeftSideItem player={player}/>
                            </li>
                        ))
                    :
                        playersAway?.map((player) => (
                            <li key={player.name}>
                                <LeftSideItem player={player}/>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="hidden sm:flex flex-row justify-between">
                <div className="col-span-6">
                    <ul>
                        {playersHome?.map((player) => (
                            <li key={player.name}>
                                <LeftSideItem player={player}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-6">
                    <ul>
                        {playersAway?.map((player) => (
                            <li key={player.name}>
                                <RightSideItem player={player}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PlayersRow;