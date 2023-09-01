import React from "react";
import {formatStatisticsLineups} from "../../../utils/formatStatisticsLineups";
import {PlayerStatistics} from "../../../types/types";

interface SideItem {
    player: PlayerStatistics
}
const LeftSideItem: React.FC<SideItem> = ({player}) => {

    return (
        <div className="flex w-full flex-row mb-1">
            <span className="w-4 text-end">{player.jersey_number}</span>
            <div className="flex flex-row ml-3 items-center">
                <span className="mr-2">{player.name}</span>
                {player.statistics.map((el) => (
                    <span className="align-center">{formatStatisticsLineups(el)}</span>))}
            </div>
        </div>
    )
}

export default LeftSideItem