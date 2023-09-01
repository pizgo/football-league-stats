import React, {useState} from "react";
import { Container } from "@mui/material";
import {
    LineupsPlayersStatistics,
    SingleMatchSchema
} from "../../../types/types";
import PlayersRow from "./PlayersRow";
import ToggleTeamNameButtons from "./ToggleTeamNameButton";
import {defendersName, forwardsName, goalkeeperName, midfieldersName, substitutesName} from "../../../utils/consts";

interface Lineups {
    chosenMatch: SingleMatchSchema
    lineups: LineupsPlayersStatistics
}

const teamNameStyles = "text-base text-center font-bold py-3"
const playerTypeStyles = "row-auto font-bold text-sm sm:text-base text-primary-200 border-b my-3 sm:mt-5 sm:mb-4"

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
                        <h1 className={teamNameStyles}>{chosenMatch.homeCompetitor.name}</h1> :
                        <h1 className={teamNameStyles}>{chosenMatch.awayCompetitor.name}</h1>
                    }
                </div>
                <div className="hidden sm:flex flex-row justify-around">
                    <h1 className={teamNameStyles}>{chosenMatch.homeCompetitor.name}</h1>
                    <h1 className={teamNameStyles}>{chosenMatch.awayCompetitor.name}</h1>
                </div>
                <div className=" pr-5 overflow-scroll h-50screen">
                    <h1 className={playerTypeStyles}>{goalkeeperName}</h1>
                    <PlayersRow lineups={lineups} type="goalkeeper" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <h1 className={playerTypeStyles}>{defendersName}</h1>
                    <PlayersRow lineups={lineups} type="defender" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <h1 className={playerTypeStyles}>{midfieldersName}</h1>
                    <PlayersRow lineups={lineups} type="midfielder" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <h1 className={playerTypeStyles}>{forwardsName}</h1>
                    <PlayersRow lineups={lineups} type="forwards" qualifier={lineupHomeToggle ? "home" : "away"}/>
                    <h1 className={playerTypeStyles}>{substitutesName}</h1>
                    <PlayersRow lineups={lineups} type="substitutes" qualifier={lineupHomeToggle ? "home" : "away"}/>
                </div>
            </Container>
        </>
    )
}
export default Lineups;