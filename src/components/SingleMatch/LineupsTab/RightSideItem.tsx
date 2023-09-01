import React from "react";
import {formatStatisticsLineups} from "../../../utils/formatStatisticsLineups";
import {PlayerStatistics} from "../../../types/types";

interface SideItem {
    player: PlayerStatistics
}

const RightSideItem: React.FC<SideItem> = ({ player }) => {
    return (
        <div className="flex w-full flex-row mb-1 justify-end">
            <div className="flex flex-row mr-3 items-center">
                {player.statistics.map((el) => (
                    <span className="align-center">{formatStatisticsLineups(el)}</span>))}
                <span className="ml-2">{player.name}</span>
            </div>
            <span className="w-4 text-end">{player.jersey_number}</span>
        </div>
    )
}

export default RightSideItem