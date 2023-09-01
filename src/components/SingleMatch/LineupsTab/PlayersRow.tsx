import React from "react";
import {
    LineupsPlayersStatistics,
    PlayerStatistics
} from "../../../types/types";
import LeftSideItem from "./LeftSideItem";
import RightSideItem from "./RightSideItem";
import {
    defenderType,
    forwardType,
    goalkeeperType,
    midfielderType,
    substituteType
} from "../../../utils/consts";

interface PlayersRow {
    lineups: LineupsPlayersStatistics,
    type: string,
    qualifier: string
}
const PlayersRow: React.FC<PlayersRow>  = ({lineups, type, qualifier}) => {

    const typeToRender = (playersOfOneTeam: PlayerStatistics[] | undefined, type: string) => {
        if (type === goalkeeperType) {
            return playersOfOneTeam?.filter((player) => (player.type === type) && player.starter)
        } else if (type === defenderType) {
            return playersOfOneTeam?.filter((player) => (player.type === defenderType) && player.starter)
        } else if (type === midfielderType) {
            return playersOfOneTeam?.filter((player) => (player.type === midfielderType) && player.starter)
        } else if (type === forwardType) {
            return playersOfOneTeam?.filter((player) => (player.type === forwardType) && player.starter)
        } else if (type === substituteType) {
            return playersOfOneTeam?.filter((player) => !player.starter)
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