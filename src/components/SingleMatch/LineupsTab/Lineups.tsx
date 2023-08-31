import React, {useState} from "react";
import { Container } from "@mui/material";
import {
    LineupsPlayersStatistics,
    SingleMatchSchema
} from "../../../types/types";
import PlayerTypeName from "./PlayerTypeName";
import PlayersRow from "./PlayersRow";
import ToggleTeamNameButtons from "./ToggleTeamNameButton";
import LineupTeamName from "./LineupTeamName";

interface Lineups {
    chosenMatch: SingleMatchSchema
    lineups: LineupsPlayersStatistics
}

const Lineups: React.FC<Lineups> = ({chosenMatch, lineups}) => {
    const [lineupHomeToggle, setLineupHomeToggle] = useState(true)
    const [lineupAwayToggle, setLineupAwayToggle] = useState(false)

    const handleLineupHomeToggle = () => {
        setLineupHomeToggle(true)
        setLineupAwayToggle(false)
    }
    const handleLineupAwayToggle = () => {
        setLineupHomeToggle(false)
        setLineupAwayToggle(true)
    }
    return (
        <>
            <div className="sm:hidden flex justify-around px-3 pt-4 pb-6">
                <ToggleTeamNameButtons onToggle={handleLineupHomeToggle} teamName={chosenMatch.homeCompetitor.abbreviation}/>
                <ToggleTeamNameButtons onToggle={handleLineupAwayToggle} teamName={chosenMatch.awayCompetitor.abbreviation}/>
            </div>
            <Container>
                <div className="sm:hidden col-span-12">
                    { lineupHomeToggle ?
                        <LineupTeamName teamName={chosenMatch.homeCompetitor.name}/> :
                        <LineupTeamName teamName={chosenMatch.awayCompetitor.name}/>
                    }
                </div>
                <div className="hidden sm:flex flex-row justify-around">
                    <LineupTeamName teamName={chosenMatch.homeCompetitor.name}/>
                    <LineupTeamName teamName={chosenMatch.awayCompetitor.name}/>
                </div>
                <div className=" pr-5 overflow-scroll h-50screen">
                    <PlayerTypeName name="Goalkeeper"/>
                    <PlayersRow lineups={lineups} type="goalkeeper" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <PlayerTypeName name="Defenders"/>
                    <PlayersRow lineups={lineups} type="defender" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <PlayerTypeName name="Midfielders"/>
                    <PlayersRow lineups={lineups} type="midfielder" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <PlayerTypeName name="Forwards"/>
                    <PlayersRow lineups={lineups} type="forwards" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <PlayerTypeName name="Substitutes"/>
                    <PlayersRow lineups={lineups} type="substitutes" qualifier={lineupHomeToggle ? "home" : "away"}/>
                </div>
            </Container>
        </>
    )
}
export default Lineups;