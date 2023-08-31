import React, {useState} from "react";
import { Container } from "@mui/material";
import {
    LineupsPlayersStatistics,
    SingleMatchSchema
} from "../../../types/types";
import TeamLineupMobile from "./TeamLineupMobile";
import PlayerTypeName from "./PlayerTypeName";
import LineupItem from "./LineupItem";
import PlayersRow from "./PlayersRow";

interface LineupsDesktop {
    chosenMatch: SingleMatchSchema
    lineups: LineupsPlayersStatistics
}

const LineupsDesktop: React.FC<LineupsDesktop> = ({chosenMatch, lineups}) => {



    return (
        <Container className="hidden sm:block grid grid-cols-12 overflow-scroll h-60screen">
            <div className="flex flex-row justify-around">
                    <h1 className="col-span-6 text-base text-center font-bold py-3">{chosenMatch.homeCompetitor.name}</h1>
                    <h1 className="col-span-6 text-base text-center font-bold py-3">{chosenMatch.awayCompetitor.name}</h1>
            </div>
            <div className="">
                <PlayerTypeName name="Goalkeeper"/>
                <PlayersRow lineups={lineups} type="goalkeeper"/>
                <PlayerTypeName name="Defenders"/>
                <PlayersRow lineups={lineups} type="defender"/>
                <PlayerTypeName name="Midfielders"/>
                <PlayersRow lineups={lineups} type="midfielder"/>
                <PlayerTypeName name="Forwards"/>
                <PlayersRow lineups={lineups} type="forwards"/>
                <PlayerTypeName name="Substitutes"/>
                <PlayersRow lineups={lineups} type="substitutes"/>
            </div>
        </Container>
    )
}
export default LineupsDesktop;