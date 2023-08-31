import React, {useState} from "react";
import { Container } from "@mui/material";
import {
    LineupsPlayersStatistics,
    SingleMatchSchema
} from "../../../types/types";
import PlayerTypeName from "./PlayerTypeName";
import PlayersRow from "./PlayersRow";

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
            {/*BUTTONS FOR MOBILE*/}
            <div className="sm:hidden flex justify-around px-3 pt-4 pb-6">
                <button role="button"
                        className="py-3 px-4 font-bold text-center shadow-md hover:bg-neutral-200 active:bg-neutral-200 rounded border"
                        onClick={handleLineupHomeToggle}>
                    {chosenMatch.homeCompetitor.abbreviation}
                </button>
                <button role="button"
                        className="py-3 px-4 font-bold text-center shadow-md hover:bg-neutral-200 active:bg-neutral-200 rounded border"
                        onClick={handleLineupAwayToggle}>
                    {chosenMatch.awayCompetitor.abbreviation}
                </button>
            </div>
            {/*MAIN CONTAINER*/}
            <Container className="overflow-scroll h-50screen">
                <div className="sm:hidden col-span-12">
                    {lineupHomeToggle ?
                        <h1 className="text-base text-center font-bold py-3">{chosenMatch.homeCompetitor.name}</h1> :
                        <h1 className="text-base text-center font-bold py-3">{chosenMatch.awayCompetitor.name}</h1>}
                </div>
                <div className="hidden sm:flex flex-row justify-around m">
                    <h1 className="text-base text-center font-bold py-3">{chosenMatch.homeCompetitor.name}</h1>
                    <h1 className="text-base text-center font-bold py-3">{chosenMatch.awayCompetitor.name}</h1>
                </div>
                <div>
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