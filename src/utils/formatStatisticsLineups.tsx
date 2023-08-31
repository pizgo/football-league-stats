import {
    goalsScoredLineup,
    redCardsLineup,
    substitutedInLineup,
    substitutedOutLineup,
    yellowCardsLineup
} from "./consts";
import {BiFootball} from "react-icons/bi";
import React from "react";

export const formatStatisticsLineups =  (type: string)  => {
    if (type === goalsScoredLineup) {
        return <BiFootball size={18}/>
    }
    if (type === redCardsLineup) {
        return <span className="bg-red-700 w-4 h-5 rounded"/>
    }
    if (type === yellowCardsLineup) {
        return <span className="bg-yellow-500 w-4 h-5 rounded"/>
    }
    if (type === substitutedInLineup) {
        return <span className="text-winner">&#8593;</span>
    }
    if (type === substitutedOutLineup) {
        return <span className="text-lost">&#8595;</span>
    }
}