import React from "react";
interface LineupTeamName {
    teamName: string
}
const LineupTeamName: React.FC<LineupTeamName> = ({ teamName}) => {

    return (
        <h1 className="text-base text-center font-bold py-3">{teamName}</h1>
    )
}
export default LineupTeamName