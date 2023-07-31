import {SingleMatchTimelineSchema} from "../../../types/types";
import React from "react";
import {BiFootball} from "react-icons/bi";
import {changeMatchTimeFormat} from "../../../utils/changeMatchTimeFormat";
import {changePlayerNameFormat} from "../../../utils/changePlayerNameFormat";

export interface ScoresProps {
    timeline: SingleMatchTimelineSchema[]
    stylesContainer: string,
    stylesIcon: string,
}
const Scores: React.FC<ScoresProps> = ({timeline, stylesContainer, stylesIcon}) => {

    return (
        <div className="col-span-6">{timeline.map((el) => (
            (el.type === "score_change") && (el.competitor === "home") ?
            <div className={`flex flex-col ${stylesContainer} mb-2`}>
                <div className="flex items-center font-bold">
                    <BiFootball className={stylesIcon}/>
                    <p className="m-0"> {changeMatchTimeFormat(el.matchTime)}</p>
                </div>
                <p className="m-0"> {el.players ? changePlayerNameFormat(el.players[0].name) : ""}</p>
            </div>
            : null
        ))}
        </div>
    )
}

export default Scores;