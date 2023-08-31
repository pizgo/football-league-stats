import React from "react";
import { Container } from "@mui/material";
import {
    PlayerStatistics,
    SingleMatchSchema
} from "../../../types/types";
import LineupItem from "./LineupItem";
import PlayerTypeName from "./PlayerTypeName";

interface TeamLineupMobile {
    competitorType: string
    chosenMatch: SingleMatchSchema
    lineups?: PlayerStatistics[]
}

const TeamLineupMobile: React.FC<TeamLineupMobile> = ({ competitorType, chosenMatch, lineups}) => {

    const goalkeeper = lineups?.filter((player) => (player.type === "goalkeeper") && player.starter)
    const defenders = lineups?.filter((player) => (player.type === "defender") && player.starter)
    const midfielders = lineups?.filter((player) => (player.type === "midfielder") && player.starter)
    const forwards = lineups?.filter((player) => (player.type === "forward") && player.starter)
    const substitutes = lineups?.filter((player) => !player.starter)

    return (
        <Container className="sm:hidden grid grid-cols-12 overflow-scroll h-60screen">
            <div className="col-span-12">
                {competitorType === 'home' ?
                    <h1 className="text-base text-center font-bold py-3">{chosenMatch.homeCompetitor.name}</h1> :
                    <h1 className="text-base text-center font-bold py-3">{chosenMatch.awayCompetitor.name}</h1>}
            </div>
            {/*<div className="col-span-12">*/}
            {/*     <PlayerTypeName name="Goalkeeper"/>*/}
            {/*     <LineupItem lineups={goalkeeper}/>*/}
            {/*     <PlayerTypeName name="Defenders"/>*/}
            {/*     <LineupItem lineups={defenders}/>*/}
            {/*     <PlayerTypeName name="Midfielders"/>*/}
            {/*     <LineupItem lineups={midfielders}/>*/}
            {/*     <PlayerTypeName name="Forwards"/>*/}
            {/*     <LineupItem lineups={forwards}/>*/}
            {/*     <PlayerTypeName name="Substitutes"/>*/}
            {/*     <LineupItem lineups={substitutes}/>*/}
            {/*</div>*/}
        </Container>
    )
}
export default TeamLineupMobile;